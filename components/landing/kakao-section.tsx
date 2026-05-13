import { MessageCircle } from "lucide-react"

export function KakaoSection() {
  return (
    <section className="overflow-x-hidden bg-[#F8FAFC] px-4 py-8">
      <h2 className="mb-2 text-center text-xl font-bold text-[#1E293B] break-keep">
        카카오톡으로 문의하기
      </h2>
      <p className="mb-6 text-center text-sm leading-relaxed text-[#64748B] break-keep">
        실손 청구일, 보험사 조사 여부를
        <br />
        함께 남겨주시면 빠르게 확인해드립니다
      </p>

      <div className="mb-6 flex justify-center">
        <div className="rounded-xl border border-solid border-[#E2E8F0] bg-[#FFFFFF] p-3">
          <img
            src="/kakao-qr.png"
            alt="카카오톡 문의 QR 코드"
            width={160}
            height={160}
            className="h-40 w-40 rounded-lg object-cover"
          />
        </div>
      </div>

      <a
        href="https://open.kakao.com/o/sKMhvtoi"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#FEE500] text-base font-bold text-[#1E293B] transition-colors hover:bg-[#F8E44B]"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
        카카오톡 문의하기
      </a>
    </section>
  )
}
