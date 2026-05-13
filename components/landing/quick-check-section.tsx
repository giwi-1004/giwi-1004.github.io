import { CheckCircle2, ArrowRight } from "lucide-react"

const CHECKLIST_ITEMS = [
  "보험금 청구를 준비 중입니다",
  "보험금을 청구했고 결과를 기다리는 중입니다",
  "보험사로부터 조사 연락을 받았습니다",
  "입원 치료 중입니다",
] as const

const checklistItemClass =
  "flex items-start gap-4 rounded-2xl border border-solid border-[#F1F5F9] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"

export function QuickCheckSection() {
  return (
    <section className="bg-[#F8FAFC] px-5 py-12">
      <h2 className="ds-h2 mb-2 text-balance break-keep">
        지금 어떤 상황이신가요?
      </h2>
      <p className="ds-caption mb-6 break-keep">
        아래 중 하나라도 해당되신다면
        <br />
        소비자선임권 사용이 가능합니다
      </p>

      <div className="flex flex-col ds-gap">
        {CHECKLIST_ITEMS.map((text) => (
          <div key={text} className={checklistItemClass}>
            <CheckCircle2
              className="mt-0.5 h-[22px] w-[22px] shrink-0 text-[#EA580C]"
              aria-hidden
            />
            <span className="text-sm leading-relaxed text-[#1E293B] break-keep">
              {text}
            </span>
          </div>
        ))}

        <a
          href="#lead-form"
          className="ds-btn-cta ds-btn-cta-navy gap-2 no-underline"
        >
          소비자선임권 상담 신청하기
          <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
        </a>
      </div>
    </section>
  )
}
