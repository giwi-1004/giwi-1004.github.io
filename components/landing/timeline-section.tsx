import type { LucideIcon } from "lucide-react"
import {
  FileText,
  Clock,
  UserCheck,
  ClipboardCheck,
  AlertCircle,
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

export function TimelineSection() {
  return (
    <section className="bg-[#F8FAFC] px-4 pt-4 pb-8">
      <h2 className="mb-2 text-xl font-bold text-[#1E293B] text-balance break-keep">
        소비자선임권, 지금 바로 신청하세요
      </h2>
      <p className="mb-6 text-sm text-[#64748B] break-keep">
        보험금 청구일로부터 3영업일 이내에만 신청 가능합니다
      </p>

      <div className="mb-6">
        {STEPS.map((step, i) => {
          const { Icon, title, description, highlight } = step
          const isLast = i === STEPS.length - 1
          return (
            <div key={title} className="flex gap-4">
              <div className="flex w-11 shrink-0 flex-col items-center">
                <div
                  className={cn(
                    "relative z-10 rounded-full p-2",
                    highlight ? "bg-[#FFF7ED]" : "bg-[#F8FAFC]"
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
                    <div className="min-h-12 w-px border-l border-dashed border-[#E2E8F0]" />
                  </div>
                ) : null}
              </div>
              <div className={cn("min-w-0 pb-8", isLast && "pb-0")}>
                <h3
                  className={cn(
                    "mb-1 break-keep",
                    highlight
                      ? "font-bold text-[#EA580C]"
                      : "font-medium text-[#1E293B]"
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
        })}
      </div>

      <div className="flex gap-3 rounded-lg border border-solid border-[#EA580C] bg-[#FFF7ED] p-4">
        <AlertCircle
          className="mt-0.5 h-5 w-5 shrink-0 text-[#EA580C]"
          aria-hidden
        />
        <div className="min-w-0">
          <p className="mb-2 font-bold text-[#EA580C] break-keep">
            보험사 지급 결정 전까지만 신청 가능합니다
          </p>
          <p className="text-sm leading-relaxed text-[#64748B] break-keep">
            청구 후 3영업일이 지나면 신청할 수 없습니다
          </p>
        </div>
      </div>
    </section>
  )
}
