"use client"

import { ArrowRight } from "lucide-react"

const statCardClass =
  "rounded-2xl border border-white/20 bg-[rgba(255,255,255,0.12)] px-3 py-4 text-center"

export function HeroSection() {
  return (
    <section className="relative flex min-h-svh flex-col justify-center overflow-hidden bg-[#1a1a2e] !px-5 !pt-10 !pb-10">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 110% 20%, rgba(200,116,42,0.18) 0%, transparent 60%), radial-gradient(ellipse 50% 70% at -10% 80%, rgba(212,164,76,0.10) 0%, transparent 55%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex flex-col">
        <span className="hero-animate mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(200,116,42,0.3)] bg-[rgba(200,116,42,0.15)] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.12em] text-[#e8913a] uppercase">
          <span className="hero-badge-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8913a]" />
          실손보험 소비자선임권
        </span>

        <h1 className="hero-animate hero-animate-delay-1 mb-3 text-3xl leading-tight font-bold tracking-[-0.02em] text-white text-balance break-keep">
          보험금 청구 전후,{" "}
          <span className="text-[#d4a44c]">당신에게 권리가 있습니다</span>
        </h1>

        <p
          className="hero-animate hero-animate-delay-2 mb-6 text-sm leading-relaxed text-white/60 break-keep"
          style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
        >
          내가 지정한 손해사정사가 보험사와 무관하게 독립적으로 조사하고 사정서를
          작성합니다
        </p>

        <div className="hero-animate hero-animate-delay-3 mb-6 grid grid-cols-3 gap-2">
          <div className={statCardClass}>
            <p className="text-2xl font-bold text-[#D4A44C]">0원</p>
            <p className="text-xs text-white/50 mt-1">수수료</p>
          </div>
          <div className={statCardClass}>
            <p className="text-2xl font-bold text-[#D4A44C]">3일</p>
            <p className="text-xs text-white/50 mt-1">신청 기한</p>
          </div>
          <div className={statCardClass}>
            <p className="text-2xl font-bold text-[#D4A44C]">독립</p>
            <p className="text-xs text-white/50 mt-1">전문가</p>
          </div>
        </div>

        <a
          href="#lead-form"
          className="hero-animate hero-animate-delay-4 mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#EA580C] py-4 text-base font-bold text-white no-underline transition-colors hover:bg-[#C2410C]"
        >
          소비자선임권 가능 여부 확인하기
          <ArrowRight className="h-[18px] w-[18px] shrink-0 text-white" aria-hidden />
        </a>
      </div>
    </section>
  )
}
