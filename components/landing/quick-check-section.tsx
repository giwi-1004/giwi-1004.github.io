import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const CHECKLIST_ITEMS = [
  "보험금 청구를 준비 중입니다",
  "보험금을 청구했고 결과를 기다리는 중입니다",
  "보험사로부터 조사 연락을 받았습니다",
  "입원 치료 중입니다",
] as const

export function QuickCheckSection() {
  return (
    <section className="bg-[#F8FAFC] px-4 pt-8 pb-4">
      <h2 className="mb-2 text-xl font-bold text-[#1E293B] text-balance break-keep">
        지금 어떤 상황이신가요?
      </h2>
      <p className="mb-6 text-sm text-[#64748B] break-keep">
        아래 중 하나라도 해당되신다면
        <br />
        소비자선임권 사용이 가능합니다
      </p>

      <div className="flex flex-col gap-3">
        {CHECKLIST_ITEMS.map((text) => (
          <div
            key={text}
            className="flex items-start gap-3 rounded-xl border border-solid border-[#E2E8F0] bg-[#FFFFFF] p-4"
          >
            <CheckCircle2
              className="mt-0.5 h-5 w-5 shrink-0 text-[#EA580C]"
              aria-hidden
            />
            <span className="text-sm leading-relaxed text-[#1E293B] break-keep">
              {text}
            </span>
          </div>
        ))}
      </div>

      <Button
        asChild
        className="mt-6 h-12 min-h-12 w-full rounded-xl bg-[#1E293B] px-4 text-base font-bold text-white hover:bg-[#0F172A] [&_svg]:text-white"
      >
        <a
          href="#lead-form"
          className="inline-flex w-full items-center justify-center gap-2"
        >
          소비자선임권 상담 신청하기
          <ArrowRight className="h-5 w-5 shrink-0 text-white" />
        </a>
      </Button>
    </section>
  )
}
