"use client"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0F172A] to-[#1E293B] px-6 py-14 overflow-hidden">
      <div className="mb-3">
        <span className="inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white/90 bg-white/10 rounded-full border border-white/10">
          실손보험 소비자선임권
        </span>
      </div>

      <h1 className="text-[2.25rem] leading-[1.2] font-extrabold tracking-[-0.02em] text-white mb-4 text-balance break-keep">
        내 보험금인데,<br />
        보험사 지정 손해사정 절차만<br />
        기다려야 할까요?
      </h1>

      <p className="text-[#CBD5E1] text-[18px] leading-[1.5] font-medium break-keep">
        보험금 청구 후{" "}
        <span className="text-[#93C5FD] font-extrabold">3영업일 이내</span>
        <br />
        소비자가 직접 손해사정사를
        <br />
        <span className="text-white font-bold">선임할 수 있습니다.</span>
      </p>
    </section>
  )
}
