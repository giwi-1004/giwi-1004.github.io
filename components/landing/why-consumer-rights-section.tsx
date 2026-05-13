"use client"

import type { LucideIcon } from "lucide-react"
import { Scale, BadgeCheck, ClipboardList } from "lucide-react"
import { cn } from "@/lib/utils"
import { useReveal } from "@/lib/hooks/use-reveal"

const CARDS_TOP: { Icon: LucideIcon; title: string; description: string }[] = [
  {
    Icon: Scale,
    title: "객관적 조사",
    description: "독립 전문가가 조사합니다",
  },
  {
    Icon: BadgeCheck,
    title: "수수료 0원",
    description: "선임 비용은 보험사 부담",
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

const cardClass =
  "rounded-[18px] border border-black/[0.06] bg-white p-[22px_18px] shadow-[0_2px_16px_rgba(0,0,0,0.04)] transition-[transform,box-shadow] duration-250 hover:-translate-y-[3px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)]"

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
    <div className={cn(cardClass, className)}>
      <div className="mb-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[rgba(200,116,42,0.12)] to-[rgba(212,164,76,0.08)]">
        <Icon className="h-5 w-5 text-[#c8742a]" aria-hidden />
      </div>
      <h3 className="mb-1.5 text-[15px] font-bold tracking-[-0.01em] text-[#1a1a2e] break-keep">
        {title}
      </h3>
      <p className="text-[13px] leading-[1.6] text-[#4a4a5a] break-keep">{description}</p>
    </div>
  )
}

export function WhyConsumerRightsSection() {
  const headerRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section className="bg-[#faf7f2]">
      <div ref={headerRef} className="reveal">
        <p className="ds-section-label">소비자선임권 혜택</p>
        <h2 className="ds-section-title break-keep">
          소비자선임권, 이런점이 좋습니다
        </h2>
        <p className="ds-section-desc break-keep">
          보험금 청구 전후 누구나 신청할 수 있습니다
        </p>
      </div>

      <div ref={gridRef} className="reveal mt-8 grid grid-cols-2 gap-3">
        {CARDS_TOP.map(({ Icon, title, description }) => (
          <BenefitCard key={title} Icon={Icon} title={title} description={description} />
        ))}
        <BenefitCard
          Icon={CARD_BOTTOM.Icon}
          title={CARD_BOTTOM.title}
          description={CARD_BOTTOM.description}
          className="col-span-2"
        />
      </div>
    </section>
  )
}
