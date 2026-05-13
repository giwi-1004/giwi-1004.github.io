"use client"

import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden bg-[#1a1a2e]">
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
        <span className="hero-animate mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(200,116,42,0.3)] bg-[rgba(200,116,42,0.15)] px-3.5 py-1.5 text-[11px] font-medium tracking-[0.12em] text-[#e8913a] uppercase">
          <span className="hero-badge-dot h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8913a]" />
          실손보험 소비자선임권
        </span>

        <h1 className="hero-animate hero-animate-delay-1 text-[clamp(1.875rem,8vw,2.75rem)] leading-[1.25] font-bold tracking-[-0.02em] text-white text-balance break-keep">
          보험금 청구 전후,{" "}
          <span className="text-[#d4a44c]">당신에게 권리가 있습니다</span>
        </h1>

        <p className="hero-animate hero-animate-delay-2 mt-4.5 text-[15px] leading-[1.7] font-light text-white/55 break-keep">
          내가 지정한 손해사정사가 보험사와 무관하게 독립적으로 조사하고 사정서를
          작성합니다
        </p>

        <div className="hero-animate hero-animate-delay-3 my-9 flex">
          <div className="flex-1 rounded-l-[14px] border border-white/[0.07] py-5 text-center">
            <p className="text-[28px] leading-none font-bold text-[#d4a44c]">0원</p>
            <p className="mt-1.5 text-[11px] tracking-[0.05em] text-white/40">수수료</p>
          </div>
          <div className="flex-1 border border-l-0 border-white/[0.07] py-5 text-center">
            <p className="text-[28px] leading-none font-bold text-[#d4a44c]">3일</p>
            <p className="mt-1.5 text-[11px] tracking-[0.05em] text-white/40">신청 기한</p>
          </div>
          <div className="flex-1 rounded-r-[14px] border border-l-0 border-white/[0.07] py-5 text-center">
            <p className="text-[28px] leading-none font-bold text-[#d4a44c]">독립</p>
            <p className="mt-1.5 text-[11px] tracking-[0.05em] text-white/40">전문가</p>
          </div>
        </div>

        <a
          href="#lead-form"
          className="hero-animate hero-animate-delay-4 flex w-full items-center justify-center gap-2.5 rounded-[14px] bg-[#1E293B] py-4.5 text-base font-bold text-white no-underline transition-opacity hover:opacity-90"
        >
          소비자선임권 가능 여부 확인하기
          <ArrowRight className="h-[18px] w-[18px] shrink-0" aria-hidden />
        </a>
      </div>
    </section>
  )
}
