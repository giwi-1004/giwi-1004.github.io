"use client"

import { Check } from "lucide-react"
import { useReveal } from "@/lib/hooks/use-reveal"

const CHECKLIST_ITEMS = [
  "보험금 청구를 준비 중입니다",
  "보험금을 청구했고 결과를 기다리는 중입니다",
  "보험사로부터 조사 연락을 받았습니다",
  "입원 치료 중입니다",
] as const

export function QuickCheckSection() {
  const headerRef = useReveal<HTMLDivElement>()
  const listRef = useReveal<HTMLDivElement>()

  return (
    <section className="bg-white">
      <div ref={headerRef} className="reveal">
        <p className="ds-section-label">신청 대상</p>
        <h2 className="ds-section-title break-keep">지금 어떤 상황이신가요?</h2>
        <p className="ds-section-desc break-keep">
          아래 중 하나라도 해당되신다면
          <br />
          소비자선임권 사용이 가능합니다
        </p>
      </div>

      <div ref={listRef} className="reveal mt-7 flex flex-col gap-2.5">
        {CHECKLIST_ITEMS.map((text) => (
          <div
            key={text}
            className="flex items-center gap-3.5 rounded-xl border border-gray-200 bg-[#F8FAFC] px-4.5 py-4 text-sm font-medium text-[#1a1a1e] break-keep"
          >
            <span className="flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#c8742a]">
              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} aria-hidden />
            </span>
            {text}
          </div>
        ))}

        <a href="#lead-form" className="ds-btn-secondary mt-6">
          소비자선임권 상담 신청하기
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  )
}
