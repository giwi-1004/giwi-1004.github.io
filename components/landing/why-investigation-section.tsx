export function WhyInvestigationSection() {
  return (
    <section className="px-6 py-14 bg-white overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-[34px] font-extrabold text-[#0F172A] mb-8 text-balance leading-[1.24]">
        보험사에서는<br />
        이런 내용들을 확인할 수 있습니다
      </h2>

      {/* Cards */}
      <div className="space-y-4">
        {/* Card 1 */}
        <div className="bg-white border border-[#0F172A]/15 rounded-3xl p-6 h-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-[#0F172A] text-[22px] leading-[1.3] mb-2 break-keep">입원 적정성 확인</h3>
              <p className="text-[17px] text-[#334155] leading-[1.55] break-keep">
                입원 여부에 따라<br />
                실손보험 지급 기준이 달라질 수 있습니다.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <div className="rounded-3xl border border-[#0F172A]/10 bg-[#F8FAFC] p-6 h-auto">
                  <p className="text-[22px] leading-[1.3] font-extrabold text-[#0F172A] mb-2 break-keep">입원 인정 시</p>
                  <p className="text-[17px] leading-[1.55] text-[#334155] break-keep">
                    실손보험 지급 범위<br />
                    확대 가능
                  </p>
                  <p className="text-[17px] font-semibold text-[#475569] mt-2 break-keep">예시 최대 5,000만원</p>
                </div>

                <div className="rounded-3xl border border-[#0F172A]/10 bg-[#F8FAFC] p-6 h-auto">
                  <p className="text-[22px] leading-[1.3] font-extrabold text-[#0F172A] mb-2 break-keep">통원 기준 적용 시</p>
                  <p className="text-[17px] leading-[1.55] text-[#334155] break-keep">
                    통원 한도 기준<br />
                    적용 가능
                  </p>
                  <p className="text-[17px] font-semibold text-[#475569] mt-2 break-keep">예시 30만원</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-[#0F172A]/15 rounded-3xl p-6 h-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-[#0F172A] text-[22px] leading-[1.3] mb-2 break-keep">치료 내용 확인</h3>
              <p className="text-[17px] text-[#334155] leading-[1.55] break-keep">
                치료 기간과 치료 내용 등을<br />
                확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border border-[#0F172A]/15 rounded-3xl p-6 h-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-[#0F172A] text-[22px] leading-[1.3] mb-2 break-keep">추가 의견 확인</h3>
              <p className="text-[17px] text-[#334155] leading-[1.55] break-keep">
                치료 내용에 대한 분쟁이 발생할 경우<br />
                전문의사의 의견을 들을 수 있습니다
              </p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white border border-[#0F172A]/15 rounded-3xl p-6 h-auto">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F172A] flex items-center justify-center flex-shrink-0 mt-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <div className="min-w-0">
              <h3 className="font-extrabold text-[#0F172A] text-[22px] leading-[1.3] mb-2 break-keep">진료기록 및 서류 확인</h3>
              <p className="text-[17px] text-[#334155] leading-[1.55] break-keep">
                진료기록과 관련 서류 등을<br />
                확인할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
