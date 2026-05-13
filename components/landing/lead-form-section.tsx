"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"
import { getSupabaseClient, isSupabaseConfigured } from "@/lib/supabase/client"

const inputFieldClass =
  "h-[52px] min-h-[52px] w-full rounded-xl border border-solid border-[#E2E8F0] bg-[#FFFFFF] px-3 text-sm text-[#1E293B] shadow-none placeholder:text-[#94A3B8] focus-visible:border-[#EA580C] focus-visible:shadow-[0_0_0_3px_rgba(234,88,12,0.1)] focus-visible:outline-none focus-visible:ring-0 md:text-sm"

const textareaFieldClass =
  "h-[120px] min-h-[120px] max-h-[120px] w-full resize-none rounded-xl border border-solid border-[#E2E8F0] bg-[#FFFFFF] px-3 py-2 text-sm text-[#1E293B] shadow-none placeholder:text-[#94A3B8] focus-visible:border-[#EA580C] focus-visible:shadow-[0_0_0_3px_rgba(234,88,12,0.1)] focus-visible:outline-none focus-visible:ring-0"

export function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    situation: "",
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
      if (!isSupabaseConfigured()) {
        throw new Error("Supabase is not configured")
      }

      const supabase = getSupabaseClient()
      const { error } = await supabase.from("lead_inquiries").insert({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        situation: formData.situation.trim() || null,
      })

      if (error) {
        throw error
      }

      setIsSubmitted(true)
    } catch {
      setSubmitError("접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="lead-form" className="overflow-x-hidden bg-[#FFF7ED] px-5 py-12">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#EA580C]/10">
            <CheckCircle2 className="h-10 w-10 text-[#EA580C]" />
          </div>
          <h2 className="ds-h2 mb-3 break-keep">
            확인 요청이 완료되었습니다
          </h2>
          <p className="ds-caption break-keep">
            입력하신 연락처로
            <br />
            빠른 시간 내에 연락드리겠습니다.
          </p>
          <p className="mt-3 text-sm font-semibold text-[#EA580C]">
            상담 신청이 정상 접수되었습니다.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="overflow-x-hidden bg-[#FFF7ED] px-5 py-12">
      <h2 className="ds-h2 mb-2 text-balance break-keep">
        소비자선임권 상담 신청
      </h2>
      <p className="ds-caption mb-6 break-keep">
        신청 접수 후 순차적으로 연락드립니다
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-[#1E293B]"
          >
            이름
          </label>
          <Input
            id="name"
            type="text"
            placeholder="홍길동"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className={inputFieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-2 block text-sm font-medium text-[#1E293B]"
          >
            연락처
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="010-0000-0000"
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: formatPhoneNumber(e.target.value),
              })
            }
            required
            className={inputFieldClass}
          />
        </div>

        <div>
          <label
            htmlFor="situation"
            className="mb-2 block text-sm font-medium text-[#1E293B]"
          >
            현재 상황
          </label>
          <textarea
            id="situation"
            placeholder="보험금 청구 준비 중, 보험사 조사 연락을 받은 상황 등"
            value={formData.situation}
            onChange={(e) =>
              setFormData({ ...formData, situation: e.target.value })
            }
            className={textareaFieldClass}
          />
        </div>

        <div
          className={cn(
            "ds-card transition-colors",
            isConsentChecked ? "border-[#EA580C]/40" : ""
          )}
        >
          <label className="flex w-full cursor-pointer items-start gap-2.5">
            <Checkbox
              checked={isConsentChecked}
              onCheckedChange={(checked) =>
                setIsConsentChecked(checked === true)
              }
              className="mt-0.5 data-[state=checked]:border-[#EA580C] data-[state=checked]:bg-[#EA580C]"
            />
            <span className="text-sm font-medium text-[#1E293B]">
              (필수) 개인정보 수집·이용에 동의합니다
            </span>
          </label>

          <button
            type="button"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setIsTermsOpen((prev) => !prev)}
            className="mt-2 text-xs text-[#EA580C] underline underline-offset-2"
          >
            전체 동의 내용 보기
          </button>

          {isTermsOpen && (
            <div className="ds-caption mt-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 leading-relaxed whitespace-pre-line text-[#334155]">
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

        <button
          type="submit"
          disabled={
            isSubmitting ||
            !formData.name ||
            !formData.phone ||
            !isConsentChecked
          }
          className="ds-btn-cta ds-btn-cta-orange mt-6 disabled:pointer-events-none disabled:opacity-80"
        >
          {isSubmitting ? "요청 중..." : "소비자선임권 상담 신청하기"}
        </button>

        {submitError ? (
          <p className="mt-3 text-sm font-medium text-[#DC2626]">{submitError}</p>
        ) : null}
      </form>

      <p className="ds-caption mt-6 text-center">
        입력하신 정보는 상담 목적으로만 사용됩니다
      </p>
    </section>
  )
}
