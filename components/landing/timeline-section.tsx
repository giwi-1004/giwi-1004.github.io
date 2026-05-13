"use client"

import { cn } from "@/lib/utils"
import { useReveal } from "@/lib/hooks/use-reveal"

const STEPS = [
  {
    step: 1,
    tag: "STEP 1",
    tagHighlight: false,
    title: "보험금 청구",
    description: "실손보험 보험금 청구",
  },
  {
    step: 2,
    tag: "지금 신청 가능!",
    tagHighlight: true,
    title: "3영업일 이내 신청",
    description: "소비자선임권 신청 가능 기간",
  },
  {
    step: 3,
    tag: "STEP 3",
    tagHighlight: false,
    title: "손해사정사 선임",
    description: "독립 전문가가 조사 시작",
  },
  {
    step: 4,
    tag: "STEP 4",
    tagHighlight: false,
    title: "사정서 작성 완료",
    description: "객관적 사정서 제출",
  },
] as const

export function TimelineSection() {
  const headerRef = useReveal<HTMLDivElement>()
  const stepsRef = useReveal<HTMLDivElement>()

  return (
    <section className="bg-[#faf7f2]">
      <div ref={headerRef} className="reveal">
        <p className="ds-section-label">신청 절차</p>
        <h2 className="ds-section-title break-keep">
          소비자선임권, 지금 바로 신청하세요
        </h2>
        <p className="ds-section-desc break-keep">
          보험금 청구일로부터 3영업일 이내에만 신청 가능합니다
        </p>
      </div>

      <div ref={stepsRef} className="reveal mt-8 flex flex-col">
        {STEPS.map((step, index) => {
          const isLast = index === STEPS.length - 1
          return (
            <div key={step.title} className="flex gap-5 pb-7 last:pb-0">
              <div className="flex shrink-0 flex-col items-center">
                <div className="ds-serif flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#c8742a] bg-white text-sm font-bold text-[#c8742a] shadow-[0_4px_16px_rgba(200,116,42,0.15)]">
                  {step.step}
                </div>
                {!isLast ? (
                  <div
                    className="mt-1.5 w-px flex-1 bg-gradient-to-b from-[rgba(200,116,42,0.3)] to-[rgba(200,116,42,0.05)]"
                    aria-hidden
                  />
                ) : null}
              </div>
              <div className="pt-2">
                <span
                  className={cn(
                    "mb-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-[0.06em]",
                    step.tagHighlight
                      ? "bg-[rgba(255,100,0,0.1)] text-[#e05a00]"
                      : "bg-[rgba(200,116,42,0.1)] text-[#c8742a]"
                  )}
                >
                  {step.tag}
                </span>
                <h3 className="text-base font-bold tracking-[-0.01em] text-[#1a1a2e] break-keep">
                  {step.title}
                </h3>
                <p className="mt-1 text-[13px] leading-[1.6] text-[#4a4a5a] break-keep">
                  {step.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
