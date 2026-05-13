"use client"

import { MessageCircle } from "lucide-react"
import { useReveal } from "@/lib/hooks/use-reveal"

export function KakaoSection() {
  const cardRef = useReveal<HTMLDivElement>()

  return (
    <section className="bg-white py-14">
      <div
        ref={cardRef}
        className="reveal rounded-[22px] border border-black/[0.06] bg-[#fffef8] px-5.5 py-9 text-center shadow-[0_2px_20px_rgba(0,0,0,0.05)]"
      >
        <h2 className="mb-2 text-[22px] font-bold tracking-[-0.02em] text-[#1a1a2e] break-keep">
          카카오톡으로 문의하기
        </h2>
        <p className="mb-7 text-sm leading-[1.65] text-[#4a4a5a] break-keep">
          실손 청구일, 보험사 조사 여부를
          <br />
          함께 남겨주시면 빠르게 확인해드립니다
        </p>

        <div className="mx-auto mb-6 h-40 w-40 overflow-hidden rounded-2xl bg-[#f5f5f5]">
          <img
            src="/kakao-qr.png"
            alt="카카오톡 문의 QR 코드"
            width={160}
            height={160}
            className="h-full w-full object-cover"
          />
</div>

        <a
          href="https://open.kakao.com/o/sKMhvtoi"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2.5 rounded-[14px] bg-[#FEE500] px-6 py-4 text-[15px] font-bold tracking-[-0.01em] text-[#391b1b] no-underline transition-[background,transform] duration-200 hover:-translate-y-0.5 hover:bg-[#fada00]"
        >
          <MessageCircle className="h-[22px] w-[22px] shrink-0" aria-hidden />
          카카오톡 문의하기
        </a>
      </div>
    </section>
  )
}
