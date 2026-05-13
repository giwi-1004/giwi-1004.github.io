"use client"

import { Shield, CheckCircle, ArrowRight, BadgeCheck, Clock } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white !pb-6">
      <div className="flex flex-col gap-5">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#EA580C]">
          <Shield className="h-4 w-4 shrink-0 text-[#EA580C]" aria-hidden />
          실손보험 소비자선임권
        </span>

        <h1 className="ds-h1 text-balance break-keep">
          <span className="text-[#1E293B]">보험금 청구 전후,</span>{" "}
          <span className="text-[#EA580C]">당신에게 권리가 있습니다</span>
        </h1>

        <div className="flex gap-5 rounded-2xl border border-solid border-[#E2E8F0] border-l-4 border-l-[#EA580C] bg-[#F8FAFC] p-5">
          <CheckCircle
            className="mt-0.5 h-5 w-5 shrink-0 text-[#EA580C]"
            aria-hidden
          />
          <p className="ds-body break-keep">
            내가 지정한 손해사정사가 보험사와 무관하게 독립적으로 조사하고 사정서를
            작성합니다
          </p>
        </div>

        <div className="ds-gap grid grid-cols-3">
          <div className="ds-hero-stat flex flex-col items-center px-2 py-4 text-center">
            <BadgeCheck
              className="mb-1 h-5 w-5 shrink-0 text-[#EA580C]"
              aria-hidden
            />
            <p className="text-2xl font-bold text-[#EA580C]">0원</p>
            <p className="ds-caption mt-1">수수료</p>
          </div>
          <div className="ds-hero-stat flex flex-col items-center px-2 py-4 text-center">
            <Clock
              className="mb-1 h-5 w-5 shrink-0 text-[#EA580C]"
              aria-hidden
            />
            <p className="text-2xl font-bold text-[#EA580C]">3일</p>
            <p className="ds-caption mt-1">신청 기한</p>
          </div>
          <div className="ds-hero-stat flex flex-col items-center px-2 py-4 text-center">
            <Shield
              className="mb-1 h-5 w-5 shrink-0 text-[#EA580C]"
              aria-hidden
            />
            <p className="text-2xl font-bold text-[#EA580C]">독립</p>
            <p className="ds-caption mt-1">전문가</p>
          </div>
        </div>

        <a
          href="#lead-form"
          className="ds-btn-cta ds-btn-cta-navy gap-2 no-underline"
        >
          소비자선임권 가능 여부 확인하기
          <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
        </a>
      </div>
    </section>
  )
}
