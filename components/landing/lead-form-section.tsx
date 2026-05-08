"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"

export function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    situation: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isConsentChecked, setIsConsentChecked] = useState(false)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11)
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 7) return `${numbers.slice(0, 3)}-${numbers.slice(3)}`
    return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitError("")
    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setIsSubmitted(true)
    } catch (error) {
      setSubmitError("접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="lead-form" className="px-6 py-14 bg-white overflow-x-hidden">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#2563EB]/10 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-[#2563EB]" />
          </div>
          <h2 className="text-[34px] font-extrabold text-[#0F172A] mb-3 leading-[1.24]">
            확인 요청이 완료되었습니다
          </h2>
          <p className="text-[#64748B] text-[18px] leading-[1.55]">
            입력하신 연락처로<br />
            빠른 시간 내에 연락드리겠습니다.
          </p>
          <p className="text-[#2563EB] text-sm font-semibold mt-3">
            상담 신청이 정상 접수되었습니다.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="px-6 py-14 bg-white overflow-x-hidden">
      {/* Section Title */}
      <h2 className="text-[34px] font-extrabold text-[#0F172A] mb-2 text-balance leading-[1.24]">
        지금 확인 요청하기
      </h2>
      <p className="text-[18px] text-[#64748B] leading-[1.55] mb-8">
        상담 신청접수 후 순차적으로 연락드립니다
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-[#0F172A] mb-2">
            이름
          </label>
          <Input
            id="name"
            type="text"
            placeholder="홍길동"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="h-16 rounded-[24px] border-[#E2E8F0] bg-[#F8FAFC] text-base placeholder:text-[#64748B] focus:border-[#2563EB] focus:ring-[#2563EB]"
          />
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-[#0F172A] mb-2">
            연락처
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="010-0000-0000"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: formatPhoneNumber(e.target.value) })}
            required
            className="h-16 rounded-[24px] border-[#E2E8F0] bg-[#F8FAFC] text-base placeholder:text-[#64748B] focus:border-[#2563EB] focus:ring-[#2563EB]"
          />
        </div>

        {/* Situation Field */}
        <div>
          <label htmlFor="situation" className="block text-sm font-medium text-[#0F172A] mb-2">
            현재 상황 <span className="text-[#64748B] font-normal">(선택)</span>
          </label>
          <textarea
            id="situation"
            placeholder="보험사 조사 연락을 받은 상황 등"
            value={formData.situation}
            onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
            rows={5}
            className="w-full min-h-[140px] rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-base placeholder:text-[#64748B] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] focus:outline-none resize-none"
          />
        </div>

        {/* Consent */}
        <div
          className={`rounded-xl border bg-[#F8FAFC] px-4 py-3.5 transition-colors ${
            isConsentChecked ? "border-[#2563EB]/40" : "border-[#E2E8F0]"
          }`}
        >
          <label className="flex items-start gap-2.5 cursor-pointer w-full">
            <Checkbox
              checked={isConsentChecked}
              onCheckedChange={(checked) => setIsConsentChecked(checked === true)}
              className="mt-0.5 data-[state=checked]:bg-[#2563EB] data-[state=checked]:border-[#2563EB]"
            />
            <span className="text-sm font-medium text-[#0F172A]">
              (필수) 개인정보 수집·이용에 동의합니다
            </span>
          </label>

          <button
            type="button"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setIsTermsOpen((prev) => !prev)}
            className="mt-2 text-xs text-[#2563EB] underline underline-offset-2"
          >
            전체 동의 내용 보기
          </button>

          {isTermsOpen && (
            <div className="mt-3 rounded-lg border border-[#E2E8F0] bg-white p-3 text-xs leading-relaxed text-[#334155] whitespace-pre-line">
              개인정보 수집·이용·제공 조회 동의서

              오하연 손해사정사는
              귀하의 위임에 의거한 보험업법 제188조의 손해사정 업무로서
              작성한 손해사정서를 보험회사 또는 보상의무자에게 제출할 목적으로
              귀하의 개인(신용)정보를 수집·이용·제공·조회하고자 합니다.

              이에 관련 법률에 따라 아래 사항에 대한 동의를 구합니다.

              ────────────────────

              1. 개인(신용)정보 수집·이용 동의

              본인은 보험사고 조사 및 손해사정업무 수행과 관련하여 취득한
              개인(신용)정보를 손해사정업무 수행, 서류 작성·제출,
              보험회사 의견 전달, 고객관리, 민원처리 및 소비자보호 등의 목적으로
              수집·이용하는 것에 동의합니다.

              귀하는 상기 동의를 거부할 수 있으며,
              동의하지 않을 경우 정상적인 손해사정 서비스 제공이 제한될 수 있습니다.

              □ 동의함
              □ 동의하지 않음

              ────────────────────

              2. 개인(신용)정보 제공 동의

              본인은 보험사고 조사 및 손해사정업무 수행을 위하여
              필요한 범위 내에서 보험회사, 손해사정업체,
              보험사고조사업체 등 관련 기관에
              개인(신용)정보를 제공하는 것에 동의합니다.

              □ 동의함
              □ 동의하지 않음

              ────────────────────

              3. 개인(신용)정보 조회 동의

              본인은 보험사고 조사 및 손해사정업무 수행을 위하여
              보험계약정보 및 보험금 지급정보 등을
              관련 기관으로부터 조회하는 것에 동의합니다.

              □ 동의함
              □ 동의하지 않음

              ────────────────────

              4. 민감정보 및 고유식별정보 처리 동의

              본인은 진료기록, 진단서 등 민감정보 및 고유식별정보를
              손해사정업무 수행 목적 범위 내에서 처리하는 것에 동의합니다.

              □ 동의함
              □ 동의하지 않음

              ────────────────────
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button 
          type="submit"
          disabled={isSubmitting || !formData.name || !formData.phone || !isConsentChecked}
          className="w-full h-16 px-6 text-[20px] font-bold bg-[#2563EB] hover:bg-[#1D4ED8] disabled:bg-[#CBD5E1] disabled:text-white/80 text-white rounded-[22px] shadow-sm shadow-[#2563EB]/20 mt-8"
        >
          {isSubmitting ? "요청 중..." : "소비자선임 가능 여부 확인하기"}
        </Button>

        {submitError && (
          <p className="text-sm text-[#DC2626] font-medium mt-3">
            {submitError}
          </p>
        )}
      </form>

      {/* Privacy Note */}
      <p className="text-xs text-[#94A3B8] text-center mt-8">
        입력하신 정보는 상담 목적으로만 사용됩니다.
      </p>
    </section>
  )
}
