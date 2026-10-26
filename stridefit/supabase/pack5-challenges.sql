-- ----------------------------------------------------------------------------
-- Pack 5: Challenges & leagues.
-- Public challenges anyone can join; leaderboards are computed by a
-- SECURITY DEFINER function that returns only display names + aggregate
-- totals for members — raw logs stay behind their own-rows RLS.
-- ----------------------------------------------------------------------------

create table if not exists public.challenges (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text,
  metric text not null check (metric in ('workouts', 'cardio_km', 'active_days')),
  starts_on date not null,
  ends_on date not null,
  created_by uuid references auth.users (id) on delete set null,
  is_official boolean not null default false,
  created_at timestamptz not null default now(),
  check (ends_on >= starts_on)
);

create table if not exists public.challenge_members (
  challenge_id uuid not null references public.challenges (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  joined_at timestamptz not null default now(),
  primary key (challenge_id, user_id)
);

create index if not exists challenge_members_user_idx
  on public.challenge_members (user_id);

alter table public.challenges enable row level security;
alter table public.challenge_members enable row level security;

-- Challenges are browsable by any signed-in user; only creators edit their own.
-- Official challenges are seeded from the dashboard (owner bypasses RLS).
drop policy if exists "Challenges are readable by signed-in users" on public.challenges;
create policy "Challenges are readable by signed-in users"
  on public.challenges for select
  to authenticated
  using (true);

drop policy if exists "Users can create challenges" on public.challenges;
create policy "Users can create challenges"
  on public.challenges for insert
  to authenticated
  with check (auth.uid() = created_by and is_official = false);

drop policy if exists "Creators can update their challenges" on public.challenges;
create policy "Creators can update their challenges"
  on public.challenges for update
  to authenticated
  using (auth.uid() = created_by)
  with check (auth.uid() = created_by and is_official = false);

drop policy if exists "Creators can delete their challenges" on public.challenges;
create policy "Creators can delete their challenges"
  on public.challenges for delete
  to authenticated
  using (auth.uid() = created_by);

-- Membership: join/leave as yourself. Rows are visible to the member
-- themself, the challenge creator, and fellow members of that challenge.
drop policy if exists "Members manage their own membership" on public.challenge_members;
create policy "Members manage their own membership"
  on public.challenge_members for all
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Membership visible within the challenge" on public.challenge_members;
create policy "Membership visible within the challenge"
  on public.challenge_members for select
  to authenticated
  using (
    exists (
      select 1 from public.challenge_members me
      where me.challenge_id = challenge_members.challenge_id
        and me.user_id = auth.uid()
    )
    or exists (
      select 1 from public.challenges c
      where c.id = challenge_members.challenge_id
        and c.created_by = auth.uid()
    )
  );

-- Leaderboard: members only. Returns aggregates per member for the
-- challenge window; never exposes individual log rows.
create or replace function public.challenge_leaderboard(p_challenge_id uuid)
returns table (
  user_id uuid,
  display_name text,
  workouts bigint,
  cardio_km numeric,
  active_days bigint
)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_start date;
  v_end date;
begin
  select starts_on, ends_on into v_start, v_end
  from public.challenges where id = p_challenge_id;

  if v_start is null then
    return;
  end if;

  if not exists (
    select 1 from public.challenge_members m
    where m.challenge_id = p_challenge_id and m.user_id = auth.uid()
  ) then
    return;
  end if;

  return query
  select
    m.user_id,
    coalesce(p.display_name, 'Stride member') as display_name,
    (select count(*) from public.workout_logs w
       where w.user_id = m.user_id
         and w.performed_at::date between v_start and v_end) as workouts,
    (select coalesce(sum(c.distance_km), 0) from public.cardio_logs c
       where c.user_id = m.user_id
         and c.performed_at::date between v_start and v_end) as cardio_km,
    (select count(distinct d) from (
       select w.performed_at::date as d from public.workout_logs w
         where w.user_id = m.user_id and w.performed_at::date between v_start and v_end
       union
       select c.performed_at::date as d from public.cardio_logs c
         where c.user_id = m.user_id and c.performed_at::date between v_start and v_end
     ) days) as active_days
  from public.challenge_members m
  left join public.profiles p on p.id = m.user_id
  where m.challenge_id = p_challenge_id;
end;
$$;

-- Official Stride challenges for the season.
insert into public.challenges (name, description, metric, starts_on, ends_on, is_official)
values
  ('Move-ember Miles', 'Most cardio miles in November wins. Runs, walks, rides — if it moves, it counts.', 'cardio_km', '2026-11-01', '2026-11-30', true),
  ('12-Workout November', 'A race to the most workouts in November. Every session counts, short or long.', 'workouts', '2026-11-01', '2026-11-30', true),
  ('Sleigh the Scale', 'Tournament weeks, Dec 7–20: most active days wins. Stay moving through the holidays.', 'active_days', '2026-12-07', '2026-12-20', true)
on conflict do nothing;
