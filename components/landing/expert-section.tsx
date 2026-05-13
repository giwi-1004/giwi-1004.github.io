import { CheckCircle2 } from "lucide-react"

const CREDENTIAL_LINES = [
  "국가공인 신체손해사정사",
  "손해사정법인 태산 소속",
  "보험사와 무관한 독립 손해사정사",
] as const

const highlightBoxClass =
  "w-full rounded-2xl border-l-4 border-l-[#EA580C] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)]"

export function ExpertSection() {
  return (
    <section className="overflow-x-hidden bg-[#F8FAFC] px-5 py-12">
      <div className="flex flex-col items-center">
        <span className="mb-4 inline-flex rounded-full bg-[#FFF7ED] px-3 py-1 text-sm font-semibold text-[#EA580C]">
          담당 손해사정사
        </span>

        <div className="mb-4 shrink-0">
          <img
            src="/ohayeon-profile.png"
            alt="오하연 손해사정사 프로필"
            width={180}
            height={180}
            className="h-[180px] w-[180px] rounded-full border-4 border-solid border-[#EA580C] object-cover object-top bg-[#E2E8F0]"
          />
        </div>

        <h2 className="mb-4 w-full text-center text-2xl font-bold text-[#1E293B] break-keep">
          오하연 손해사정사
        </h2>

        <ul className="mb-4 flex w-full flex-col gap-5">
          {CREDENTIAL_LINES.map((line) => (
            <li key={line} className="flex items-start gap-2">
              <CheckCircle2
                className="mt-0.5 h-[22px] w-[22px] shrink-0 text-[#EA580C]"
                aria-hidden
              />
              <span className="text-sm leading-relaxed text-[#1E293B] break-keep">
                {line}
              </span>
            </li>
          ))}
        </ul>

        <div className={highlightBoxClass}>
          <p className="text-sm leading-relaxed text-[#1E293B] break-keep">
            보험사도 가입자도 아닌,
            <br />
            오직 사실에 근거해 객관적으로 사정서를 작성합니다
          </p>
        </div>
      </div>
    </section>
  )
}
