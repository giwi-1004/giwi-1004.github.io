import type { LucideIcon } from "lucide-react"
import { Scale, BadgeCheck, ClipboardList } from "lucide-react"

const CARDS: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Scale,
    title: "객관적 조사",
    description:
      "보험사와 무관한 독립 전문가가 사실 그대로 조사하고 사정서를 작성합니다",
  },
  {
    Icon: BadgeCheck,
    title: "수수료 0원",
    description:
      "손해사정사 선임 비용은 보험사가 부담합니다. 나는 한 푼도 내지 않습니다",
  },
  {
    Icon: ClipboardList,
    title: "절차 대행",
    description:
      "복잡한 서류와 보험사 대응을 손해사정사가 직접 처리합니다",
  },
]

export function WhyConsumerRightsSection() {
  return (
    <section className="overflow-x-hidden border-t border-gray-100 bg-[#FFFFFF] px-4 pb-8 pt-8">
      <h2 className="mb-2 text-xl font-bold text-[#1E293B] text-balance break-keep">
        소비자선임권, 이런점이 좋습니다
      </h2>
      <p className="mb-6 text-sm text-[#64748B] break-keep">
        보험금 청구 전후 누구나 신청할 수 있습니다
      </p>

      <div className="flex flex-col gap-3">
        {CARDS.map(({ Icon, title, description }) => (
          <div
            key={title}
            className="flex gap-4 rounded-xl border border-solid border-[#E2E8F0] bg-[#F8FAFC] p-4"
          >
            <div className="shrink-0 rounded-full bg-[#FFF7ED] p-3">
              <Icon className="h-5 w-5 text-[#EA580C]" aria-hidden />
            </div>
            <div className="min-w-0">
              <h3 className="mb-1.5 font-bold text-[#1E293B] break-keep">{title}</h3>
              <p className="text-sm leading-relaxed text-[#64748B] break-keep">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
