export function TimelineSection() {
  return (
    <section className="px-5 py-10 bg-[#0F172A]">
      <div className="rounded-3xl border border-[#60A5FA]/20 bg-gradient-to-b from-[#0F172A] to-[#111E35] px-4 py-5">
        <h2 className="text-[1.12rem] font-extrabold text-white leading-tight text-balance">
          소비자선임권
          <br />
          중요 포인트 2가지
        </h2>

        <div className="grid grid-cols-1 gap-2 mt-4">
          <div className="rounded-xl border border-[#60A5FA]/25 bg-gradient-to-r from-[#172554] to-[#1E293B] px-3 py-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0F172A]/80 border border-[#60A5FA]/35 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#93C5FD]" />
              </div>
              <div>
                <p className="text-[13px] font-extrabold text-[#BFDBFE] mb-1">신청 가능 기간</p>
                <p className="text-[12px] leading-snug text-[#E2E8F0]">
                  보험금 청구일로부터
                  <br />
                  <span className="text-[15px] font-black text-[#93C5FD]">3영업일 이내</span> 신청하셔야 합니다
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-[#60A5FA]/25 bg-gradient-to-r from-[#172554] to-[#1E293B] px-3 py-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0F172A]/80 border border-[#60A5FA]/35 flex items-center justify-center flex-shrink-0">
                <div className="w-2 h-2 rounded-full bg-[#93C5FD]" />
              </div>
              <div>
                <p className="text-[13px] font-extrabold text-[#BFDBFE] mb-1">손해사정 비용</p>
                <p className="text-[12px] leading-snug text-[#E2E8F0]">
                  손해사정 비용은
                  <br />
                  <span className="text-[14px] font-black text-white">보험사 부담</span>이 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
