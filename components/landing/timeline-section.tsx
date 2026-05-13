import type { LucideIcon } from "lucide-react"
import {
  FileText,
  Clock,
  UserCheck,
  ClipboardCheck,
} from "lucide-react"
import { cn } from "@/lib/utils"

const STEPS: {
  title: string
  description: string
  Icon: LucideIcon
  highlight: boolean
}[] = [
  {
    title: "보험금 청구",
    description: "실손보험 보험금 청구",
    Icon: FileText,
    highlight: false,
  },
  {
    title: "3영업일 이내 신청",
    description: "소비자선임권 신청 가능 기간",
    Icon: Clock,
    highlight: true,
  },
  {
    title: "손해사정사 선임",
    description: "독립 전문가가 조사 시작",
    Icon: UserCheck,
    highlight: false,
  },
  {
    title: "사정서 작성 완료",
    description: "객관적 사정서 제출",
    Icon: ClipboardCheck,
    highlight: false,
  },
]

const stepIconShellClass =
  "relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"

export function TimelineSection() {
  return (
    <section className="bg-[#F8FAFC] px-5 py-12">
      <h2 className="ds-h2 mb-2 text-balance break-keep">
        소비자선임권, 지금 바로 신청하세요
      </h2>
      <p className="ds-caption mb-6 break-keep">
        보험금 청구일로부터 3영업일 이내에만 신청 가능합니다
      </p>

      <div className="flex flex-col gap-5">
        {STEPS.map((step, i) => {
          const { Icon, title, description, highlight } = step
          const isLast = i === STEPS.length - 1
          const connectorAccent = i === 0 || i === 1

          const row = (
            <div className="flex gap-5">
              <div className="flex w-11 shrink-0 flex-col items-center">
                <div
                  className={cn(
                    stepIconShellClass,
                    highlight ? "bg-[#FFF7ED]" : "bg-[#F1F5F9]"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      highlight ? "text-[#EA580C]" : "text-[#64748B]"
                    )}
                    aria-hidden
                  />
                </div>
                {!isLast ? (
                  <div
                    className="flex min-h-12 w-full flex-col items-center py-0.5"
                    aria-hidden
                  >
                    <div
                      className={cn(
                        "min-h-12 w-px border-l border-dashed",
                        connectorAccent
                          ? "border-[#EA580C]"
                          : "border-[#E2E8F0]"
                      )}
                    />
                  </div>
                ) : null}
              </div>
              <div className="min-w-0">
                {highlight ? (
                  <p className="mb-1 text-xs font-bold text-[#EA580C] break-keep">
                    ← 지금 신청 가능!
                  </p>
                ) : null}
                <h3
                  className={cn(
                    "mb-1 text-base font-bold break-keep",
                    highlight ? "text-[#EA580C]" : "text-[#1E293B]"
                  )}
                >
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#64748B] break-keep">
                  {description}
                </p>
              </div>
            </div>
          )

          return (
            <div key={title}>
              {highlight ? (
                <div className="rounded-2xl border-[1.5px] border-solid border-[#EA580C] bg-[#FFF7ED] p-5 shadow-[0_2px_8px_rgba(234,88,12,0.12)]">
                  {row}
                </div>
              ) : (
                row
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
