import { createClient, type SupabaseClient } from "@supabase/supabase-js"

export type LeadInquiry = {
  id: string
  name: string
  phone: string
  situation: string | null
  created_at: string
}

let client: SupabaseClient | null = null

export function getSupabaseClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !anonKey) {
    throw new Error("Supabase environment variables are not configured")
  }

  if (!client) {
    client = createClient(url, anonKey)
  }

  return client
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  )
}
