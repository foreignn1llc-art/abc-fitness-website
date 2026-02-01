-- Enable RLS
alter table patient_vitals enable row level security;
alter table chat_sessions enable row level security;
-- Enable RLS on clinic_users
alter table clinic_users enable row level security;

-- Resolve clinic_id from auth.uid()
create or replace function current_user_clinic_id()
returns uuid
language sql
stable
as $$
  select clinic_id
  from clinic_users
  where user_id = auth.uid()
$$;

-- patient_vitals 
create policy "clinic can read its vitals"
on patient_vitals
for select
using (clinic_id = current_user_clinic_id());

create policy "clinic can insert its vitals"
on patient_vitals
for insert
with check (clinic_id = current_user_clinic_id());

create policy "clinic can update its vitals"
on patient_vitals
for update
using (clinic_id = current_user_clinic_id());

-- chat_sessions 
create policy "user can access own chat sessions"
on chat_sessions
for all
using (
  clinic_id = current_user_clinic_id()
  and user_id = auth.uid()
)
with check (
  clinic_id = current_user_clinic_id()
  and user_id = auth.uid()
);

-- Allow user to read only their own clinic mapping
create policy "user can read own clinic mapping"
on clinic_users
for select
using (user_id = auth.uid());
