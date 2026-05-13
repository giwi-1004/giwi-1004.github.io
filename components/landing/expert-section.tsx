import { CheckCircle2 } from "lucide-react"

const CREDENTIAL_LINES = [
  "국가공인 신체손해사정사",
  "손해사정법인 태산 소속",
  "보험사와 무관한 독립 손해사정사",
] as const

export function ExpertSection() {
  return (
    <section className="overflow-x-hidden bg-[#F8FAFC] px-4 py-8">
      <div className="flex flex-col items-center">
        <span className="mb-4 inline-flex rounded-full bg-[#FFF7ED] px-3 py-1 text-sm font-semibold text-[#EA580C]">
          담당 손해사정사
        </span>

        <div className="mb-4 shrink-0">
          <img
            src="/ohayeon-profile.png"
            alt="오하연 손해사정사 프로필"
            width={160}
            height={160}
            className="h-40 w-40 rounded-full border-[3px] border-solid border-[#EA580C] object-cover object-top bg-[#E2E8F0]"
          />
        </div>

        <h2 className="mb-4 w-full text-center text-xl font-bold text-[#1E293B] break-keep">
          오하연 손해사정사
        </h2>

        <ul className="mb-4 flex w-full flex-col gap-2">
          {CREDENTIAL_LINES.map((line) => (
            <li key={line} className="flex items-start gap-2">
              <CheckCircle2
                className="mt-0.5 h-4 w-4 shrink-0 text-[#EA580C]"
                aria-hidden
              />
              <span className="text-sm text-[#64748B] break-keep">{line}</span>
            </li>
          ))}
        </ul>

        <div className="w-full rounded-lg border border-solid border-[#E2E8F0] border-l-4 border-l-[#EA580C] bg-[#FFFFFF] p-4">
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
