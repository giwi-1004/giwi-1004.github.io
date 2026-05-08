"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, RotateCcw } from "lucide-react"

const situationOptions = [
  "보험사 조사 연락을 받았습니다",
  "입원 치료비를 청구했습니다",
  "입원 치료 중입니다",
  "아직 잘 모르겠습니다",
]

export function QuickCheckSection() {
  const [selectedSituation, setSelectedSituation] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleSelect = (option: string) => {
    setSelectedSituation(option)
    setShowResult(true)
  }

  const resetCheck = () => {
    setSelectedSituation(null)
    setShowResult(false)
  }

  const scrollToForm = () => {
    document.getElementById('lead-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (showResult) {
    return (
      <section className="px-5 py-14 bg-[#F8FAFC]">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-6 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-[#2563EB]" />
          </div>
          <h2 className="text-xl font-bold text-[#0F172A] mb-3">
            확인이 완료되었습니다
          </h2>
          <p className="text-[#64748B] text-sm leading-relaxed">
            선택하신 상황을 기준으로<br />
            소비자선임권 가능 여부를 안내해드립니다.
          </p>
        </div>

        <Button 
          onClick={scrollToForm}
          className="w-full h-14 text-base font-bold bg-[#2563EB] hover:bg-[#1D4ED8] text-white rounded-2xl mb-4"
        >
          상담 신청하기
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <button 
          onClick={resetCheck}
          className="w-full flex items-center justify-center gap-2 text-sm text-[#64748B] py-3"
        >
          <RotateCcw className="w-4 h-4" />
          다시 확인하기
        </button>
      </section>
    )
  }

  return (
      <section className="px-5 py-14 bg-[#F8FAFC]">
      {/* Section Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#0F172A] mb-2 text-balance">
          내 상황도<br />
          확인이 필요할까요?
        </h2>
        <p className="text-sm text-[#64748B]">1분 안에 확인 가능합니다</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-7">
        <div className="h-1.5 bg-white rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-[#2563EB] rounded-full" />
        </div>
        <p className="text-xs text-[#64748B] mt-2">
          상황 선택
        </p>
      </div>

      {/* Question */}
      <div className="mb-6">
        <p className="text-lg font-bold text-[#0F172A] mb-6">
          현재 어떤 상황이신가요?
        </p>

        {/* Options */}
        <div className="space-y-3">
          {situationOptions.map((option, index) => (
            <button
              key={index}
              onClick={() => handleSelect(option)}
              className={`w-full p-4 text-left bg-white rounded-2xl border transition-all text-[#0F172A] ${
                selectedSituation === option
                  ? "border-[#2563EB] bg-[#2563EB]/5"
                  : "border-[#E2E8F0] hover:border-[#2563EB] hover:bg-[#2563EB]/5"
              }`}
            >
              <span className="font-semibold leading-snug">{option}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
