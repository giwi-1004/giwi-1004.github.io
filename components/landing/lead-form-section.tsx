"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2 } from "lucide-react"
import { getSupabaseClient } from "@/lib/supabase/client"
import { submitLeadInquiry } from "@/lib/supabase/submit-lead"
import { useReveal } from "@/lib/hooks/use-reveal"

const inputFieldStyle = {
  borderRadius: "12px",
  border: "1px solid #E2E8F0",
  backgroundColor: "#F8FAFC",
  padding: "12px 16px",
} as const

const consentAreaStyle = {
  borderRadius: "12px",
  border: "1px solid #E2E8F0",
  backgroundColor: "#F8FAFC",
  padding: "14px 16px",
  display: "flex",
  flexDirection: "column",
  gap: "6px",
} as const

const inputFieldClass =
  "h-auto min-h-0 w-full rounded-none shadow-none text-[#1a1a1e] placeholder:text-[#8a8a9a] focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus-visible:border-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"

const textareaFieldClass =
  "min-h-[100px] w-full resize-y rounded-none leading-[1.6] text-[#1a1a1e] shadow-none placeholder:text-[#8a8a9a] focus:outline-none focus:ring-2 focus:ring-[#EA580C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EA580C]"

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

  const headerRef = useReveal<HTMLDivElement>()
  const formRef = useReveal<HTMLDivElement>()

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
      const supabase = await getSupabaseClient()
      const { error } = await submitLeadInquiry(supabase, {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        situation: formData.situation.trim() || null,
      })

      if (error) {
        console.error("Supabase insert error:", error)
        if (error.code === "42P01") {
          setSubmitError(
            "데이터베이스 테이블이 없습니다. Supabase에서 setup.sql을 실행해 주세요."
          )
          return
        }
        if (
          error.code === "42501" ||
          error.message.includes("row-level security")
        ) {
          setSubmitError(
            "저장 권한이 없습니다. Supabase RLS 정책(anon INSERT)을 확인해 주세요."
          )
          return
        }
        if (
          error.code === "PGRST204" ||
          error.code === "PGRST202" ||
          error.message.includes("column") ||
          error.message.includes("submit_lead_inquiry")
        ) {
          setSubmitError(
            "데이터베이스 설정이 필요합니다. Supabase SQL Editor에서 supabase/install.sql을 실행해 주세요."
          )
          return
        }
        throw error
      }

      setIsSubmitted(true)
    } catch (err) {
      console.error("Lead form submit error:", err)
      const message = err instanceof Error ? err.message : ""
      if (message === "NOT_CONFIGURED") {
        setSubmitError(
          "서버 연결 설정이 없습니다. Supabase URL·키를 배포 설정에 추가해 주세요."
        )
      } else {
        setSubmitError("접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="lead-form" className="overflow-x-hidden bg-[#faf7f2] !px-5 !py-14">
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm text-center">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#c8742a]/10">
            <CheckCircle2 className="h-10 w-10 text-[#c8742a]" />
          </div>
          <h2 className="text-2xl font-bold leading-snug break-keep">
            상담 신청이 완료됐습니다
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#64748B] break-keep">
            입력하신 번호로 담당 손해사정사가
            <br />
            직접 연락드립니다
          </p>

          <div
            className="mt-5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 text-left text-sm leading-relaxed text-[#64748B] break-keep"
            style={{ wordBreak: "keep-all" }}
          >
            <p className="font-semibold text-[#1E293B]">🕐 상담 가능 시간</p>
            <p className="mt-2">평일 오전 9시 ~ 오후 6시</p>
            <p className="mt-1">
              신청 시간에 따라 다음 영업일에
              <br />
              연락드릴 수 있습니다
            </p>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-[#64748B] break-keep">
            빠른 확인은 카카오톡으로 먼저
            <br />
            문의하실 수 있습니다
          </p>

          <button
            type="button"
            onClick={() => setIsSubmitted(false)}
            className="mt-6 w-full cursor-pointer py-4 text-base font-bold text-white transition-colors hover:bg-[#C2410C]"
            style={{
              backgroundColor: "#EA580C",
              borderRadius: "12px",
            }}
          >
            확인
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="lead-form" className="overflow-x-hidden bg-[#faf7f2] !px-5 !py-14">
      <div ref={headerRef} className="reveal">
        <span
          className="inline-flex items-center px-3 py-1 rounded-full text-[#EA580C] text-sm font-semibold mb-3"
          style={{ backgroundColor: "#FED7AA" }}
        >
          무료 상담 신청
        </span>
        <h2 className="text-2xl font-bold leading-snug text-balance break-keep">
          소비자선임권 상담 신청
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B] break-keep">
          신청 접수 후 순차적으로 연락드립니다
        </p>
      </div>

      <div
        ref={formRef}
        className="reveal mt-6 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
      >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-semibold text-[#1E293B] mb-2"
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
            style={inputFieldStyle}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-[#1E293B] mb-2"
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
            style={inputFieldStyle}
          />
        </div>

        <div>
          <label
            htmlFor="situation"
            className="text-sm font-semibold text-[#1E293B] mb-2"
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
            style={inputFieldStyle}
          />
        </div>

        <div style={consentAreaStyle}>
          <label className="flex w-full cursor-pointer items-start gap-2.5">
            <Checkbox
              checked={isConsentChecked}
              onCheckedChange={(checked) =>
                setIsConsentChecked(checked === true)
              }
              className="mt-0.5 data-[state=checked]:border-[#c8742a] data-[state=checked]:bg-[#c8742a]"
            />
            <span
              className="text-[13px] leading-[1.5] text-[#4a4a5a]"
              style={{ wordBreak: "keep-all" }}
            >
              (필수) 개인정보 수집·이용에 동의합니다
            </span>
          </label>

          <button
            type="button"
            onMouseDown={(e) => e.stopPropagation()}
            onClick={() => setIsTermsOpen((prev) => !prev)}
            className="mt-2 text-xs text-[#c8742a] underline underline-offset-2"
          >
            전체 동의 내용 보기
          </button>

          {isTermsOpen && (
            <div
              className="ds-caption mt-3 rounded-2xl border border-[#E2E8F0] bg-white p-5 leading-relaxed whitespace-pre-line text-[#334155]"
              style={{ wordBreak: "keep-all" }}
            >
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
          className={cn(
            "w-full py-4 text-base font-bold text-white",
            isSubmitting ||
              !formData.name ||
              !formData.phone ||
              !isConsentChecked
              ? "cursor-not-allowed"
              : "cursor-pointer hover:bg-[#C2410C]"
          )}
          style={{
            backgroundColor: "#EA580C",
            opacity:
              isSubmitting ||
              !formData.name ||
              !formData.phone ||
              !isConsentChecked
                ? 0.4
                : 1,
            borderRadius: "12px",
          }}
        >
          {isSubmitting ? "요청 중..." : "소비자선임권 상담 신청하기"}
        </button>

        {submitError ? (
          <p className="mt-3 text-sm font-medium text-[#DC2626]">{submitError}</p>
        ) : null}
      </form>

      <p
        className="text-center text-sm"
        style={{ color: "#64748B", marginTop: "8px" }}
      >
        상담 가능 시간: 오전 9시 ~ 오후 6시
      </p>

      <p className="mt-3 text-center text-xs text-[#8a8a9a]">
        입력하신 정보는 상담 목적으로만 사용됩니다
      </p>
      </div>
    </section>
  )
}
