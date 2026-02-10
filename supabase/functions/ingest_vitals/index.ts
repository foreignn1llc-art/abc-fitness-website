import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "@supabase/supabase-js";

serve(async (req) => {
  // 1. Require JWT
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return new Response("Missing Authorization header", { status: 401 });
  }

  // 2. Supabase client using anon key + forwarded JWT
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

  // 4. Basic validation (scaffold-level)
  if (
    !body.patient_id ||
    typeof body.heart_rate !== "number" ||
    !body.recorded_at
  ) {
    return new Response("Invalid payload", { status: 400 });
  }

  // 5. Insert — clinic_id resolved via RLS
  const { data: clinicId, error: clinicError } = await supabase
  .rpc("current_user_clinic_id");

  if (clinicError || !clinicId) {
    return new Response("Unable to resolve clinic", { status: 403 });
  }

  
  const { error } = await supabase.from("patient_vitals").insert({
    clinic_id: clinicId,
  
    patient_id: body.patient_id,
    heart_rate: body.heart_rate,
    systolic_bp: body.systolic_bp ?? null,
    diastolic_bp: body.diastolic_bp ?? null,
    recorded_at: body.recorded_at,
  });  
  

  if (error) {
    return new Response(error.message, { status: 403 });
  }

  return new Response(
    JSON.stringify({ status: "ok" }),
    { status: 200 }
  );
});
