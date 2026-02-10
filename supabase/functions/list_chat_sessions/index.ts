import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "@supabase/supabase-js";

serve(async (req) => {
  // 1. Require JWT
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return new Response("Missing Authorization header", { status: 401 });
  }

  // 2. Supabase client with forwarded JWT (RLS enforcement)
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

  // 3. Get authenticated user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return new Response("Unauthenticated", { status: 401 });
  }

  // 4. Fetch chat sessions
  // RLS ensures:
  // - only same clinic
  // - only same user
  const { data, error } = await supabase
    .from("chat_sessions")
    .select("id, title, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return new Response(error.message, { status: 403 });
  }

  return new Response(
    JSON.stringify({
      status: "ok",
      sessions: data,
    }),
    { status: 200 }
  );
});