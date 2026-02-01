create table chat_sessions (
  id uuid primary key default gen_random_uuid(),
  clinic_id uuid not null references clinics(id),
  user_id uuid not null references auth.users(id),
  title text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);