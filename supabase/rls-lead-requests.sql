-- Supabase → SQL Editor에서 한 번 실행하세요.
-- 브라우저(공개 키)로 lead_requests에 INSERT 하려면 anon 역할 정책이 필요합니다.

alter table public.lead_requests enable row level security;

drop policy if exists "lead_requests_anon_insert" on public.lead_requests;
create policy "lead_requests_anon_insert"
  on public.lead_requests
  for insert
  to anon
  with check (true);

drop policy if exists "lead_requests_anon_select_deny" on public.lead_requests;
create policy "lead_requests_anon_select_deny"
  on public.lead_requests
  for select
  to anon
  using (false);
