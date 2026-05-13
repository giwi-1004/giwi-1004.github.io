-- 기존 lead_inquiries 테이블 컬럼 정리 (이름·연락처가 비어 보일 때 실행)
-- Supabase SQL Editor에서 setup.sql 실행 후에도 문제가 있으면 이 파일도 실행하세요.

alter table public.lead_inquiries add column if not exists name text;
alter table public.lead_inquiries add column if not exists phone text;
alter table public.lead_inquiries add column if not exists situation text;
alter table public.lead_inquiries add column if not exists created_at timestamptz default now();

-- 예전에 다른 컬럼명으로 만든 경우 데이터 이전
do $$
begin
  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'lead_inquiries' and column_name = 'full_name'
  ) then
    update public.lead_inquiries
    set name = full_name
    where name is null and full_name is not null;
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'lead_inquiries' and column_name = 'customer_name'
  ) then
    update public.lead_inquiries
    set name = customer_name
    where name is null and customer_name is not null;
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'lead_inquiries' and column_name = 'contact'
  ) then
    update public.lead_inquiries
    set phone = contact
    where phone is null and contact is not null;
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'lead_inquiries' and column_name = 'phone_number'
  ) then
    update public.lead_inquiries
    set phone = phone_number
    where phone is null and phone_number is not null;
  end if;

  if exists (
    select 1 from information_schema.columns
    where table_schema = 'public' and table_name = 'lead_inquiries' and column_name = 'tel'
  ) then
    update public.lead_inquiries
    set phone = tel
    where phone is null and tel is not null;
  end if;
end $$;

alter table public.lead_inquiries enable row level security;

drop policy if exists "anon can insert lead inquiries" on public.lead_inquiries;
create policy "anon can insert lead inquiries"
  on public.lead_inquiries
  for insert
  to anon
  with check (true);
