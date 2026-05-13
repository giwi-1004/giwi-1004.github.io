import { MessageCircle } from "lucide-react"

const qrBoxClass =
  "rounded-2xl bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"

export function KakaoSection() {
  return (
    <section className="overflow-x-hidden bg-[#F8FAFC] px-5 py-12">
      <h2 className="ds-h2 mb-2 text-center break-keep">
        카카오톡으로 문의하기
      </h2>
      <p className="ds-caption mb-6 text-center break-keep">
        실손 청구일, 보험사 조사 여부를
        <br />
        함께 남겨주시면 빠르게 확인해드립니다
      </p>

      <div className="mb-6 flex justify-center">
        <div className={qrBoxClass}>
          <img
            src="/kakao-qr.png"
            alt="카카오톡 문의 QR 코드"
            width={180}
            height={180}
            className="h-[180px] w-[180px] rounded-xl object-cover"
          />
        </div>
      </div>

      <a
        href="https://open.kakao.com/o/sKMhvtoi"
        target="_blank"
        rel="noopener noreferrer"
        className="ds-btn-cta ds-btn-cta-kakao gap-2 no-underline shadow-[0_4px_12px_rgba(254,229,0,0.4)]"
      >
        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
        카카오톡 문의하기
      </a>
    </section>
  )
}
