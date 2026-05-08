# 소비자선임권 랜딩페이지 코드 전체 요약

## 1) 프로젝트 개요
- 목적: 실손보험 청구자에게 `소비자선임권` 제도를 설명하고 상담 리드를 수집하는 단일 랜딩페이지
- 프레임워크: Next.js(App Router) + React + TypeScript + Tailwind CSS
- 진입점: `app/page.tsx`
- 레이아웃/메타: `app/layout.tsx`

## 2) 페이지 구조(섹션 순서)
`app/page.tsx`에서 아래 섹션 컴포넌트를 순서대로 렌더링:
1. `HeroSection`
2. `WhyInvestigationSection`
3. `WhyConsumerRightsSection`
4. `TimelineSection`
5. `ExpertSection`
6. `QuickCheckSection`
7. `LeadFormSection`
8. `KakaoSection`
9. `Footer`

즉, 정보 제공 -> 문제 인식 -> 긴급성 강조(3영업일) -> 자가 체크 -> 리드 제출 흐름으로 설계됨.

## 3) 기술 스택/설정 요약
- 핵심 라이브러리
  - `next`, `react`, `typescript`
  - `tailwindcss` (스타일링)
  - `lucide-react` (아이콘)
  - shadcn/ui 계열 컴포넌트 다수(`components/ui/*`)
- 폰트
  - `@fontsource/noto-sans-kr`를 `layout.tsx`에서 import
- 분석 스크립트
  - `@vercel/analytics`를 production 환경에서만 렌더링
- Next 설정(`next.config.mjs`)
  - `typescript.ignoreBuildErrors: true` (빌드 시 TS 에러 무시)
  - `images.unoptimized: true` (이미지 최적화 비활성)

## 4) 섹션별 코드 역할
### `HeroSection`
- 랜딩의 핵심 메시지와 CTA 버튼 제공
- CTA 클릭 시 `lead-form` 앵커로 스크롤

### `WhyInvestigationSection`
- 보험사가 확인 가능한 조사 항목(입원 적정성, 추가자료/의료자문) 안내

### `WhyConsumerRightsSection`
- 소비자선임권 사용 이유/효과를 카드 형태로 전달
- "일정 요건 시 비용 보험사 부담 가능" 강조

### `TimelineSection`
- 1~4단계 타임라인에서 `3영업일` 중요성을 강조
- CTA 클릭 시 폼으로 이동

### `ExpertSection`
- 담당 손해사정사 정보/역할 소개 (신뢰 요소)

### `QuickCheckSection` (클라이언트 인터랙션)
- 3문항 미니 진단 UI
- 로컬 상태로 진행도/문항/결과를 관리
- 결과 화면에서 상담 신청 CTA 제공

### `LeadFormSection` (클라이언트 인터랙션)
- 이름/연락처/상황 입력 폼
- 현재는 실제 API 연동 없이 `1초 지연` 후 제출 완료 처리(모의 처리)
- 제출 완료 시 감사 메시지로 전환

### `KakaoSection`
- 카카오 문의 링크 버튼 제공
- 현재 링크는 placeholder(`https://pf.kakao.com/_placeholder`)

### `Footer`
- 고지 문구 및 저작권 표시

## 5) 데이터 흐름/상태 관리
- 전역 상태관리 라이브러리 없음 (Redux, Zustand 미사용)
- 상태는 각 섹션 컴포넌트 내부 `useState`로 독립 관리
- 서버 데이터 패칭 없음
- 폼 제출/퀵체크 결과는 세션 내 메모리 상태만 사용(새로고침 시 초기화)

## 6) 현재 구현의 강점
- 단순 명확한 퍼널 구조(메시지 -> 체크 -> 문의)
- 모바일 중심 UI(`max-w-lg`, 큰 버튼, 짧은 문장)
- 섹션별 컴포넌트 분리로 가독성/수정 용이성 확보
- CTA가 핵심 폼으로 자연스럽게 유도됨

## 7) 리스크/개선 포인트
1. 실제 리드 수집 미연동
- `LeadFormSection`은 모의 제출만 수행
- 백엔드/API/스프레드시트/CRM 연동 필요

2. 입력 검증 및 정책 미흡
- 연락처 형식 검증, 동의 체크박스(개인정보 수집/이용) 없음
- 실무 운영 시 법적/운영 리스크 가능

3. 외부 문의 채널 미완성
- 카카오 링크가 placeholder 상태

4. 타입 안정성 완화
- `ignoreBuildErrors: true`로 빌드 통과 가능하나 잠재 버그 은닉 가능

5. 분석/전환 추적 부족
- 섹션별 CTA 클릭, 이탈, 폼 전송 이벤트 추적(예: GA4, Meta Pixel) 없음

## 8) 우선순위 액션 제안(실무 기준)
- P0
  - 리드 폼 실제 전송 API 연동(성공/실패 처리 포함)
  - 개인정보 동의/고지 문구 및 필수 체크 추가
  - 카카오 채널 실링크 교체
- P1
  - 폼 유효성 강화(zod + react-hook-form)
  - 클릭/전환 이벤트 트래킹 추가
  - 메타/OG 이미지/구조화 데이터로 SEO 보완
- P2
  - A/B 테스트(헤드라인/CTA 카피)
  - 신뢰요소(실제 사례, FAQ, 자격 증빙) 강화

## 9) ChatGPT 분석 요청 시 함께 보내면 좋은 질문
- "현재 구조에서 전환율 개선을 위한 UI/카피 우선순위 5개 제안해줘"
- "법률/컴플라이언스 관점에서 랜딩폼 필수 항목과 고지 문구를 제안해줘"
- "리드 수집 API를 Next.js App Router 기준으로 안전하게 설계해줘"
- "퀵체크 결과를 개인화 문구로 연결하는 규칙 기반 로직을 제안해줘"

## 10) 핵심 파일 목록
- `app/page.tsx`
- `app/layout.tsx`
- `components/landing/hero-section.tsx`
- `components/landing/why-investigation-section.tsx`
- `components/landing/why-consumer-rights-section.tsx`
- `components/landing/timeline-section.tsx`
- `components/landing/expert-section.tsx`
- `components/landing/quick-check-section.tsx`
- `components/landing/lead-form-section.tsx`
- `components/landing/kakao-section.tsx`
- `components/landing/footer.tsx`
- `next.config.mjs`
