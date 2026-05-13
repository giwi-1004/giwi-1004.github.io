"use client"

import { Shield, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#FFFFFF] px-6 py-12">
      <div>
        {/* 1. 뱃지 */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#EA580C]">
            <Shield className="h-4 w-4 shrink-0 text-[#EA580C]" aria-hidden />
            실손보험 소비자선임권
          </span>
        </div>

        {/* 2. H1 */}
        <h1 className="mb-4 text-3xl leading-tight text-balance break-keep">
          <span className="text-[#1E293B]">보험금 청구 전후,</span>{" "}
          <span className="font-bold text-[#EA580C]">당신에게 권리가 있습니다</span>
        </h1>

        {/* 3. 강조 박스 — 독립적 조사 */}
        <div className="mb-4 flex gap-3 rounded-lg border-l-4 border-solid border-l-[#EA580C] bg-[#FFFFFF] p-4">
          <CheckCircle
            className="mt-0.5 h-5 w-5 shrink-0 text-[#EA580C]"
            aria-hidden
          />
          <p className="text-sm leading-relaxed text-[#1E293B] break-keep">
            내가 지정한 손해사정사가 보험사와 무관하게 독립적으로 조사하고 사정서를
            작성합니다
          </p>
        </div>

        {/* 4. 수수료 (텍스트만) */}
        <p className="mb-6 leading-snug">
          <span className="font-bold text-[#EA580C]">수수료는 보험사 부담</span>
          <span className="font-normal text-[#64748B]"> — 소비자선임권</span>
        </p>

        {/* 5. CTA */}
        <Button
          asChild
          className="h-12 min-h-12 w-full rounded-xl bg-[#1E293B] px-4 text-base font-bold text-white hover:bg-[#0F172A] [&_svg]:text-white"
        >
          <a href="#lead-form" className="inline-flex w-full items-center justify-center gap-2">
            소비자선임권 가능 여부 확인하기
            <ArrowRight className="h-5 w-5 shrink-0 text-white" />
          </a>
        </Button>
      </div>
    </section>
  )
}
