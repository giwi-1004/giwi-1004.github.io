import { ShieldCheck, ClipboardCheck, MessageSquareText, FileText } from "lucide-react"

export function WhyConsumerRightsSection() {
  return (
    <section className="px-6 py-14 bg-[#F8FAFC] overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-[34px] font-extrabold text-[#0F172A] mb-8 text-balance leading-[1.24]">
        소비자선임권을 이용하면<br />
        이런 부분을 보다 명확하게 확인할 수 있습니다
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-2">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-6 border border-[#0F172A]/10 shadow-none h-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
            <h3 className="font-extrabold text-[#0F172A] text-[22px] leading-[1.3] mb-2 break-keep">입원치료 기준 확인</h3>
            <p className="text-[17px] text-[#334155] leading-[1.55] break-keep">
              입원치료 기준과 현재 상태가<br />
              해당되는지 확인할 수 있습니다.
            </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-6 border border-[#0F172A]/10 shadow-none h-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
              <ClipboardCheck className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
            <h3 className="font-extrabold text-[#0F172A] text-[22px] leading-[1.3] mb-2 break-keep">치료내용 검토</h3>
            <p className="text-[17px] text-[#334155] leading-[1.55] break-keep">
              받은 치료가 보험금 지급 판단에<br />
              어떻게 반영되는지 설명받을 수 있습니다.
            </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-6 border border-[#0F172A]/10 shadow-none h-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
              <MessageSquareText className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
            <h3 className="font-extrabold text-[#0F172A] text-[22px] leading-[1.3] mb-2 break-keep">추가 의견 절차 안내</h3>
            <p className="text-[17px] text-[#334155] leading-[1.55] break-keep">
              추가 확인이 필요한 이유와 절차를<br />
              자세히 안내받을 수 있습니다.
            </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-3xl p-6 border border-[#0F172A]/10 shadow-none h-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div className="min-w-0">
            <h3 className="font-extrabold text-[#0F172A] text-[22px] leading-[1.3] mb-2 break-keep">진료기록·서류 검토</h3>
            <p className="text-[17px] text-[#334155] leading-[1.55] break-keep">
              진료기록과 관련 서류의<br />
              검토 내용을 확인할 수 있습니다.
            </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
