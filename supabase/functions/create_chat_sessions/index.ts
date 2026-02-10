import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "@supabase/supabase-js";

serve(async (req) => {
  // 1. Require JWT
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return new Response("Missing Authorization header", { status: 401 });
  }

  // 2. Supabase client with forwarded JWT (CRITICAL for RLS)
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    {
      global: {
        headers: {
          Authorization: authHeader,
        },
      },
    }
  );

  // 3. Parse JSON body
  let body;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  // 4. Basic validation
  if (!body.title || typeof body.title !== "string") {
    return new Response("Invalid payload", { status: 400 });
  }

  // 5. Get authenticated user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return new Response("Unauthenticated", { status: 401 });
  }

  // 6. Resolve clinic via RLS-safe function
  const { data: clinicId, error: clinicError } = await supabase
    .rpc("current_user_clinic_id");

  if (clinicError || !clinicId) {
    return new Response("Unable to resolve clinic", { status: 403 });
  }

  // 7. Insert chat session (NO client-controlled IDs)
  const { data, error } = await supabase
    .from("chat_sessions")
    .insert({
      clinic_id: clinicId,
      user_id: user.id,
      title: body.title,
    })
    .select("id")
    .single();

  if (error) {
    return new Response(error.message, { status: 403 });
  }

  // 8. Success
  return new Response(
    JSON.stringify({
      status: "ok",
      session_id: data.id,
    }),
    { status: 200 }
  );
});
