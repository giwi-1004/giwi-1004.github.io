-- Supabase SQL Editor에서 실행하세요.
-- 상담 신청 폼(lead-form-section) 저장용 테이블

create table if not exists public.lead_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  situation text,
  created_at timestamptz not null default now()
);

alter table public.lead_inquiries enable row level security;

-- 익명(랜딩 방문자) INSERT만 허용
drop policy if exists "anon can insert lead inquiries" on public.lead_inquiries;
create policy "anon can insert lead inquiries"
  on public.lead_inquiries
  for insert
  to anon
  with check (true);

-- 관리자(service_role / authenticated)는 대시보드·SQL로 조회
-- anon에게 SELECT는 열지 않습니다 (개인정보 보호).
