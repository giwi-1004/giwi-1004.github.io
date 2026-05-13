import type { SupabaseClient } from "@supabase/supabase-js"

export type LeadFormPayload = {
  name: string
  phone: string
  situation: string | null
}

export async function submitLeadInquiry(
  supabase: SupabaseClient,
  payload: LeadFormPayload
) {
  const { error } = await supabase.from("lead_inquiries").insert({
    name: payload.name,
    phone: payload.phone,
    situation: payload.situation,
  })

  return { error }
}
