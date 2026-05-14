"use client"

import { MessageCircle } from "lucide-react"
import { useReveal } from "@/lib/hooks/use-reveal"

export function KakaoSection() {
  const cardRef = useReveal<HTMLDivElement>()

  return (
    <section className="bg-[#F8FAFC] !px-5 !py-14">
      <div
        ref={cardRef}
        className="reveal text-center"
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E2E8F0",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h2 className="text-2xl font-bold leading-snug text-[#1a1a2e] break-keep">
          카카오톡으로 문의하기
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B] break-keep">
          실손 청구일, 보험사 조사 여부를
          <br />
          함께 남겨주시면 빠르게 확인해드립니다
        </p>

        <div className="overflow-hidden rounded-2xl bg-[#f5f5f5]">
          <img
            src="/kakao-qr.png"
            alt="카카오톡 문의 QR 코드"
            width={140}
            height={140}
            className="object-cover"
            style={{
              width: "140px",
              height: "140px",
              margin: "16px auto",
              display: "block",
            }}
          />
        </div>

        <a
          href="https://open.kakao.com/o/sKMhvtoi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2.5 text-base text-[#1E293B] no-underline"
          style={{
            backgroundColor: "#FEE500",
            borderRadius: "12px",
            width: "100%",
            padding: "14px",
            fontWeight: "bold",
          }}
        >
          <MessageCircle className="h-[22px] w-[22px] shrink-0" aria-hidden />
          카카오톡 문의하기
        </a>
      </div>
    </section>
  )
}
