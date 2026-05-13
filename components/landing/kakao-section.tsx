"use client"

import { MessageCircle } from "lucide-react"
import { useReveal } from "@/lib/hooks/use-reveal"

export function KakaoSection() {
  const cardRef = useReveal<HTMLDivElement>()

  return (
    <section className="bg-[#F8FAFC] !px-5 !py-14">
      <div
        ref={cardRef}
        className="reveal rounded-2xl border border-gray-100 bg-[#fffef8] p-5 text-center shadow-sm"
      >
        <h2 className="text-2xl font-bold leading-snug text-[#1a1a2e] break-keep">
          카카오톡으로 문의하기
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B] break-keep">
          실손 청구일, 보험사 조사 여부를
          <br />
          함께 남겨주시면 빠르게 확인해드립니다
        </p>

        <div className="mx-auto my-6 h-40 w-40 overflow-hidden rounded-2xl bg-[#f5f5f5]">
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
          className="mt-6 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#FEE500] py-4 text-base font-bold text-[#1E293B] no-underline"
        >
          <MessageCircle className="h-[22px] w-[22px] shrink-0" aria-hidden />
          카카오톡 문의하기
        </a>
      </div>
    </section>
  )
}
