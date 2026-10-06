-- ============================================================================
-- StrideFit database schema
-- Run this in the Supabase SQL editor (Dashboard -> SQL Editor -> New query).
-- It is idempotent where practical: re-running will not duplicate policies.
-- ============================================================================

-- ----------------------------------------------------------------------------
-- Helpers
-- ----------------------------------------------------------------------------

-- Auto-update `updated_at` on row changes.
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- Auto-create a profile row when a new auth user signs up.
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id)
  values (new.id)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ----------------------------------------------------------------------------
-- profiles
-- One row per user. id matches auth.users.id.
-- ----------------------------------------------------------------------------
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text,
  calorie_target integer,
  protein_target_g integer,
  carbs_target_g integer,
  fat_target_g integer,
  health_data_consent boolean not null default false,
  health_data_consented_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

drop trigger if exists set_profiles_updated_at on public.profiles;
create trigger set_profiles_updated_at
  before update on public.profiles
  for each row execute function public.handle_updated_at();

alter table public.profiles enable row level security;

drop policy if exists "Users can view their own profile" on public.profiles;
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

drop policy if exists "Users can insert their own profile" on public.profiles;
create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

drop policy if exists "Users can update their own profile" on public.profiles;
create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id)
  with check (auth.uid() = id);

-- ----------------------------------------------------------------------------
-- food_logs
-- ----------------------------------------------------------------------------
create table if not exists public.food_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  logged_at timestamptz not null default now(),
  meal_type text not null check (meal_type in ('breakfast', 'lunch', 'dinner', 'snack')),
  food_name text not null,
  calories integer not null check (calories >= 0),
  protein_g numeric not null default 0 check (protein_g >= 0),
  carbs_g numeric not null default 0 check (carbs_g >= 0),
  fat_g numeric not null default 0 check (fat_g >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists food_logs_user_logged_at_idx
  on public.food_logs (user_id, logged_at desc);

drop trigger if exists set_food_logs_updated_at on public.food_logs;
create trigger set_food_logs_updated_at
  before update on public.food_logs
  for each row execute function public.handle_updated_at();

alter table public.food_logs enable row level security;

drop policy if exists "Users can manage their own food logs" on public.food_logs;
create policy "Users can manage their own food logs"
  on public.food_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- workout_templates
-- ----------------------------------------------------------------------------
create table if not exists public.workout_templates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  description text,
  difficulty text not null default 'beginner'
    check (difficulty in ('beginner', 'intermediate', 'advanced')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists workout_templates_user_idx
  on public.workout_templates (user_id);

drop trigger if exists set_workout_templates_updated_at on public.workout_templates;
create trigger set_workout_templates_updated_at
  before update on public.workout_templates
  for each row execute function public.handle_updated_at();

alter table public.workout_templates enable row level security;

drop policy if exists "Users can manage their own workout templates" on public.workout_templates;
create policy "Users can manage their own workout templates"
  on public.workout_templates for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- workout_logs
-- exercises is a JSONB array, e.g.
--   [{ "name": "Squat", "sets": [{ "reps": 8, "weight_kg": 60 }] }]
-- ----------------------------------------------------------------------------
create table if not exists public.workout_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  template_id uuid references public.workout_templates (id) on delete set null,
  performed_at timestamptz not null default now(),
  exercises jsonb not null default '[]'::jsonb,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists workout_logs_user_performed_at_idx
  on public.workout_logs (user_id, performed_at desc);

drop trigger if exists set_workout_logs_updated_at on public.workout_logs;
create trigger set_workout_logs_updated_at
  before update on public.workout_logs
  for each row execute function public.handle_updated_at();

alter table public.workout_logs enable row level security;

drop policy if exists "Users can manage their own workout logs" on public.workout_logs;
create policy "Users can manage their own workout logs"
  on public.workout_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- cardio_logs
-- ----------------------------------------------------------------------------
create table if not exists public.cardio_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  activity_type text not null
    check (activity_type in ('run', 'walk', 'cycle', 'swim', 'row', 'elliptical', 'other')),
  performed_at timestamptz not null default now(),
  distance_km numeric check (distance_km is null or distance_km >= 0),
  duration_min numeric check (duration_min is null or duration_min >= 0),
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists cardio_logs_user_performed_at_idx
  on public.cardio_logs (user_id, performed_at desc);

drop trigger if exists set_cardio_logs_updated_at on public.cardio_logs;
create trigger set_cardio_logs_updated_at
  before update on public.cardio_logs
  for each row execute function public.handle_updated_at();

alter table public.cardio_logs enable row level security;

drop policy if exists "Users can manage their own cardio logs" on public.cardio_logs;
create policy "Users can manage their own cardio logs"
  on public.cardio_logs for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- ----------------------------------------------------------------------------
-- events (races, challenges, cardio events)
-- ----------------------------------------------------------------------------
create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users (id) on delete cascade,
  name text not null,
  event_date date not null,
  event_type text not null default 'race'
    check (event_type in ('race', 'challenge', 'group_run', 'other')),
  goal text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists events_user_date_idx
  on public.events (user_id, event_date);

drop trigger if exists set_events_updated_at on public.events;
create trigger set_events_updated_at
  before update on public.events
  for each row execute function public.handle_updated_at();

alter table public.events enable row level security;

drop policy if exists "Users can manage their own events" on public.events;
create policy "Users can manage their own events"
  on public.events for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
