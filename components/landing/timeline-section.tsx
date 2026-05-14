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
    <section className="!px-5 !py-14" style={{ backgroundColor: "#F8FAFC" }}>
      <div ref={headerRef} className="reveal">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[#EA580C] text-sm font-semibold mb-3"
          style={{ backgroundColor: "#FED7AA" }}
        >
          신청 절차
        </span>
        <h2 className="text-2xl font-bold leading-snug break-keep">
          소비자선임권, 지금 바로 신청하세요
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B] break-keep">
          보험금 청구일로부터 3영업일 이내에만 신청 가능합니다
        </p>
      </div>

      <div ref={stepsRef} className="reveal mt-6 space-y-6">
        {STEPS.map((step, index) => {
          const isLast = index === STEPS.length - 1
          return (
            <div key={step.title} className="flex items-start gap-3">
              <div className="flex shrink-0 flex-col items-center self-stretch">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EA580C] text-sm font-bold text-white">
                  {step.step}
                </div>
                {!isLast ? (
                  <div
                    className="w-0 flex-1"
                    style={{
                      borderLeft: "2px dashed #E2E8F0",
                      minHeight: "40px",
                    }}
                    aria-hidden
                  />
                ) : null}
              </div>
              <div>
                {step.tagHighlight ? (
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-white text-sm font-bold mb-2"
                    style={{ backgroundColor: "#EA580C" }}
                  >
                    {step.tag}
                  </span>
                ) : (
                  <span
                    className={cn(
                      "mb-2 inline-block rounded-full px-2.5 py-0.5 text-[11px] font-bold tracking-[0.06em]",
                      "bg-[rgba(200,116,42,0.1)] text-[#c8742a]"
                    )}
                  >
                    {step.tag}
                  </span>
                )}
                <h3 className="text-base font-bold tracking-[-0.01em] text-[#1a1a2e] break-keep">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#64748B] break-keep">
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
