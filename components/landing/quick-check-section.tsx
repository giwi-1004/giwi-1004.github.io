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
    <section className="bg-[#F8FAFC] !px-5 !py-14">
      <div ref={headerRef} className="reveal">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[#EA580C] text-sm font-semibold mb-3"
          style={{ backgroundColor: "#FED7AA" }}
        >
          신청 대상
        </span>
        <h2 className="text-2xl font-bold leading-snug break-keep">지금 어떤 상황이신가요?</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B] break-keep">
          아래 중 하나라도 해당되신다면
          <br />
          소비자선임권 사용이 가능합니다
        </p>
      </div>

      <div ref={listRef} className="reveal mt-6">
        <div className="space-y-3">
          {CHECKLIST_ITEMS.map((text) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-xl py-3 px-4 text-sm font-medium text-[#1a1a1e] break-keep"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 6px rgba(0,0,0,0.06)",
              }}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#c8742a]">
                <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} aria-hidden />
              </span>
              {text}
            </div>
          ))}
        </div>

        <a
          href="#lead-form"
          className="mt-6 flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#EA580C] py-4 text-base font-bold text-white no-underline hover:bg-[#C2410C]"
          style={{ borderRadius: "12px" }}
        >
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
