"use client"

import { Building2, Landmark, Scale } from "lucide-react"
import { useReveal } from "@/lib/hooks/use-reveal"

const CREDENTIALS = [
  { Icon: Landmark, text: "국가공인 신체손해사정사" },
  { Icon: Building2, text: "손해사정법인 태산 소속" },
  { Icon: Scale, text: "보험사와 무관한 독립 손해사정사" },
] as const

export function ExpertSection() {
  const headerRef = useReveal<HTMLDivElement>()
  const profileRef = useReveal<HTMLDivElement>()
  const contentRef = useReveal<HTMLDivElement>()

  return (
    <section className="bg-[#1E293B] !px-5 !py-14 text-white">
      <div ref={headerRef} className="reveal">
        <p className="ds-section-label text-[#d4a44c]">담당 손해사정사</p>
        <h2 className="text-2xl font-bold leading-snug text-white break-keep">오하연 손해사정사</h2>
      </div>

      <div ref={profileRef} className="reveal mt-6 flex items-center gap-4">
        <img
          src="/ohayeon-profile.png"
          alt="오하연 손해사정사 프로필"
          width={96}
          height={128}
          className="h-32 w-24 shrink-0 rounded-2xl object-cover object-top"
        />
        <div>
          <p className="text-xl font-bold text-white">오하연</p>
          <p className="text-sm text-white/50">손해사정법인 태산 소속</p>
        </div>
      </div>

      <div ref={contentRef} className="reveal mt-6">
        <div className="space-y-4">
          {CREDENTIALS.map(({ Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-3 text-sm text-white/80"
            >
              <Icon className="h-5 w-5 shrink-0 text-[#EA580C]" aria-hidden />
              <span className="break-keep">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 border-l-4 border-[#EA580C] pl-4 text-sm leading-relaxed text-white/60 italic break-keep">
          보험사도 가입자도 아닌,
          <br />
          오직 사실에 근거해 객관적으로 사정서를 작성합니다
        </div>
      </div>
    </section>
  )
}
