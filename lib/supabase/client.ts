import { createClient, type SupabaseClient } from "@supabase/supabase-js"
import { resolveSupabaseConfig } from "@/lib/supabase/config"

export type LeadInquiry = {
  id: string
  name: string
  phone: string
  situation: string | null
  created_at: string
}

let client: SupabaseClient | null = null
let clientKey: string | null = null

export async function getSupabaseClient(): Promise<SupabaseClient> {
  const { url, anonKey } = await resolveSupabaseConfig()

  if (!client || clientKey !== `${url}:${anonKey}`) {
    client = createClient(url, anonKey)
    clientKey = `${url}:${anonKey}`
  }

  return client
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}
