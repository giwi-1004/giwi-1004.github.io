export function ExpertSection() {
  return (
    <section className="px-6 py-14 bg-white overflow-x-hidden">
      <h2 className="text-[34px] font-extrabold text-[#0F172A] mb-2 text-balance leading-[1.2]">
        오하연 손해사정사
      </h2>

      <p className="text-[18px] text-[#334155] leading-[1.5] mb-3">
        실손보험 조사 절차와
        <br />
        소비자선임 가능 여부를
        <br />
        함께 확인해드립니다.
      </p>

      <div className="rounded-2xl border border-[#0F172A]/12 p-3.5">
        <div className="rounded-xl overflow-hidden mb-1 h-[300px]">
          <img
            src="/ohayeon-profile.png"
            alt="전문가가 보험 관련 자료를 검토하는 장면"
            className="w-full h-full object-cover object-top bg-[#E2E8F0]"
          />
        </div>

      </div>
    </section>
  )
}
