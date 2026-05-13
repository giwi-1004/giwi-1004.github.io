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
  const { error: rpcError } = await supabase.rpc("submit_lead_inquiry", {
    p_name: payload.name,
    p_phone: payload.phone,
    p_situation: payload.situation,
  })

  if (!rpcError) {
    return { error: null }
  }

  if (
    rpcError.code !== "PGRST202" &&
    !rpcError.message.includes("submit_lead_inquiry")
  ) {
    return { error: rpcError }
  }

  const { error: insertError } = await supabase.from("lead_inquiries").insert({
    name: payload.name,
    phone: payload.phone,
    situation: payload.situation,
  })

  return { error: insertError }
}
