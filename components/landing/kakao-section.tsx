"use client"

import { MessageCircle } from "lucide-react"

export function KakaoSection() {
  return (
    <section className="px-6 py-14 bg-[#FFFDF2] overflow-x-hidden">
      <div className="bg-[#FFF9E8] border border-[#E5E7EB] rounded-3xl p-5">
        <div className="h-1.5 w-16 mx-auto mb-4 rounded-full bg-[#FEE500]/55" />
        <h2 className="text-[34px] font-extrabold text-[#0F172A] text-center leading-[1.2] mb-4">
          카카오톡으로<br />
          빠른 문의 가능
        </h2>

        <div className="w-full flex justify-center mb-5">
          <div className="w-[189px] h-[189px] rounded-2xl border border-[#0F172A]/12 overflow-hidden bg-white">
            <img
              src="/kakao-qr.png"
              alt="카카오톡 문의 QR 코드"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-[18px] text-[#334155] text-center leading-[1.5] mb-8">
          실손보험 청구일과<br />
          보험사 조사 여부를 남겨주세요.
        </p>

        <a
          href="https://open.kakao.com/o/sKMhvtoi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full h-16 bg-[#FEE500] hover:bg-[#F8E44B] rounded-[22px] font-bold text-[#111827] transition-colors"
        >
          <MessageCircle className="w-5.5 h-5.5" />
          카카오톡 문의하기
        </a>
      </div>
    </section>
  )
}
