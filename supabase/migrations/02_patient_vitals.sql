create table patient_vitals (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id),
  patient_id uuid not null,
  heart_rate int,
  systolic_bp int,
  diastolic_bp int,
  recorded_at timestamptz not null,
  created_at timestamptz default now()
);