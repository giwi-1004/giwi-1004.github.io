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
  const cardRef = useReveal<HTMLDivElement>()

  return (
    <section className="bg-[#1a1a2e] text-white">
      <div ref={headerRef} className="reveal">
        <p className="ds-section-label text-[#d4a44c]">담당 손해사정사</p>
        <h2 className="ds-section-title text-white break-keep">오하연 손해사정사</h2>
      </div>

      <div
        ref={cardRef}
        className="reveal mt-7 rounded-[22px] border border-white/10 bg-white/5 p-7 backdrop-blur-[10px]"
      >
        <div className="mb-5.5 flex items-center gap-4.5">
          <img
            src="/ohayeon-profile.png"
            alt="오하연 손해사정사 프로필"
            width={72}
            height={72}
            className="h-[72px] w-[72px] shrink-0 rounded-full border-2 border-[rgba(212,164,76,0.4)] object-cover object-top"
          />
          <div>
            <p className="text-xl font-bold tracking-[-0.01em] text-white">
              오하연
            </p>
            <p className="mt-1 text-xs tracking-[0.03em] text-white/45">
              손해사정법인 태산 소속
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          {CREDENTIALS.map(({ Icon, text }) => (
            <div key={text} className="flex items-center gap-3 text-sm text-white/80">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[rgba(200,116,42,0.25)]">
                <Icon className="h-3.5 w-3.5 text-[#e8913a]" aria-hidden />
              </span>
              <span className="break-keep">{text}</span>
            </div>
          ))}
        </div>

        <div className="mt-5.5 rounded-r-xl border-l-[3px] border-[#c8742a] bg-[rgba(200,116,42,0.1)] px-5 py-4.5 text-sm leading-[1.7] text-white/75 italic break-keep">
          보험사도 가입자도 아닌,
          <br />
          오직 사실에 근거해 객관적으로 사정서를 작성합니다
        </div>
      </div>
    </section>
  )
}
