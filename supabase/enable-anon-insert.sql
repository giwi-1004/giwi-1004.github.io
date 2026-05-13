-- RLS 오류(42501) 발생 시 SQL Editor에서 이 파일만 실행하세요.

alter table public.lead_inquiries enable row level security;

grant usage on schema public to anon;
grant insert on table public.lead_inquiries to anon;

drop policy if exists "anon can insert lead inquiries" on public.lead_inquiries;
create policy "anon can insert lead inquiries"
  on public.lead_inquiries
  for insert
  to anon
  with check (true);
