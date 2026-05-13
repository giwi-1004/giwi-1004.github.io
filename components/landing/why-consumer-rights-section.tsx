import type { LucideIcon } from "lucide-react"
import { Scale, BadgeCheck, ClipboardList } from "lucide-react"
import { cn } from "@/lib/utils"

const CARDS_TOP: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Scale,
    title: "객관적 조사",
    description: "보험사와 무관한 독립 전문가가 조사합니다",
  },
  {
    Icon: BadgeCheck,
    title: "수수료 0원",
    description: "선임 비용은 보험사가 부담합니다",
  },
]

const CARD_BOTTOM: {
  Icon: LucideIcon
  title: string
  description: string
} = {
  Icon: ClipboardList,
  title: "절차 대행",
  description:
    "복잡한 서류와 보험사 대응을 손해사정사가 직접 처리합니다",
}

function BenefitCard({
  Icon,
  title,
  description,
  className,
}: {
  Icon: LucideIcon
  title: string
  description: string
  className?: string
}) {
  return (
    <div
      className={cn(
        "ds-card ds-card-interactive flex flex-col items-center text-center",
        className
      )}
    >
      <div className="ds-icon-surface mb-2">
        <Icon className="h-7 w-7 text-[#EA580C]" aria-hidden />
      </div>
      <h3 className="ds-card-title break-keep">{title}</h3>
      <p className="ds-card-desc mt-1 line-clamp-2 break-keep">{description}</p>
    </div>
  )
}

export function WhyConsumerRightsSection() {
  return (
    <section className="overflow-x-hidden bg-white">
      <h2 className="ds-h2 mb-2 text-balance break-keep">
        소비자선임권, 이런점이 좋습니다
      </h2>
      <p className="ds-caption mb-6 break-keep">
        보험금 청구 전후 누구나 신청할 수 있습니다
      </p>

      <div className="flex flex-col ds-gap">
        <div className="grid grid-cols-2 ds-gap">
          {CARDS_TOP.map(({ Icon, title, description }) => (
            <BenefitCard
              key={title}
              Icon={Icon}
              title={title}
              description={description}
            />
          ))}
        </div>
        <BenefitCard
          Icon={CARD_BOTTOM.Icon}
          title={CARD_BOTTOM.title}
          description={CARD_BOTTOM.description}
          className="w-full"
        />
      </div>
    </section>
  )
}
