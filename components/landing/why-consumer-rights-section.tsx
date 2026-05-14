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

function BenefitCard({
  Icon,
  title,
  description,
  className,
  fullHeight = false,
}: {
  Icon: LucideIcon
  title: string
  description: string
  className?: string
  fullHeight?: boolean
}) {
  return (
    <div
      className={cn("rounded-2xl p-5 space-y-2", className)}
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        ...(fullHeight ? { height: "100%" } : {}),
      }}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF7ED] p-3">
        <Icon className="h-5 w-5 text-[#EA580C]" aria-hidden />
      </div>
      <h3 className="text-[15px] font-bold tracking-[-0.01em] text-[#1a1a2e] break-keep">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-[#64748B] break-keep">{description}</p>
    </div>
  )
}

export function WhyConsumerRightsSection() {
  const headerRef = useReveal<HTMLDivElement>()
  const gridRef = useReveal<HTMLDivElement>()

  return (
    <section className="bg-[#F8FAFC] !px-5 !py-14">
      <div ref={headerRef} className="reveal">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[#EA580C] text-sm font-semibold mb-3"
          style={{ backgroundColor: "#FED7AA" }}
        >
          소비자선임권 혜택
        </span>
        <h2 className="text-2xl font-bold leading-snug break-keep">
          소비자선임권, 이런점이 좋습니다
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B] break-keep">
          보험금 청구 전후 누구나 신청할 수 있습니다
        </p>
      </div>

      <div ref={gridRef} className="reveal mt-6 grid grid-cols-2 items-stretch gap-3">
        {CARDS_TOP.map(({ Icon, title, description }) => (
          <BenefitCard
            key={title}
            Icon={Icon}
            title={title}
            description={description}
            fullHeight
          />
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
