-- Supabase SQL Editor에서 이 파일 전체를 한 번에 실행하세요.
-- (테이블 생성 + anon INSERT 권한 + 폼용 RPC 함수)

create table if not exists public.lead_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  situation text,
  created_at timestamptz not null default now()
);

alter table public.lead_inquiries enable row level security;

grant usage on schema public to anon;
grant insert on table public.lead_inquiries to anon;

drop policy if exists "anon can insert lead inquiries" on public.lead_inquiries;
create policy "anon can insert lead inquiries"
  on public.lead_inquiries
  for insert
  to anon
  with check (true);

-- 폼에서 한 번에 저장 (RLS 우회, anon 실행 허용)
create or replace function public.submit_lead_inquiry(
  p_name text,
  p_phone text,
  p_situation text default null
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_id uuid;
begin
  insert into public.lead_inquiries (name, phone, situation)
  values (trim(p_name), trim(p_phone), nullif(trim(p_situation), ''))
  returning id into new_id;

  return new_id;
end;
$$;

revoke all on function public.submit_lead_inquiry(text, text, text) from public;
grant execute on function public.submit_lead_inquiry(text, text, text) to anon;
