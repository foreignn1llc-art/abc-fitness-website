-- Clinics (tenants)
create table clinics (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  created_at timestamptz default now()
);

-- One user to one clinic
create table clinic_users (
  user_id uuid not null,
  clinic_id uuid not null,
  primary key (user_id),
  constraint clinic_users_user_id_fkey
    foreign key (user_id)
    references auth.users(id)
    on delete cascade,
  constraint clinic_users_clinic_id_fkey
    foreign key (clinic_id)
    references clinics(id)
    on delete cascade
);
