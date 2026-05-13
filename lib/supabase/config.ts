export type SupabasePublicConfig = {
  url: string
  anonKey: string
}

let cachedConfig: SupabasePublicConfig | null = null

export async function resolveSupabaseConfig(): Promise<SupabasePublicConfig> {
  if (cachedConfig) {
    return cachedConfig
  }

  const envUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const envKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (envUrl && envKey) {
    cachedConfig = { url: envUrl, anonKey: envKey }
    return cachedConfig
  }

  const response = await fetch("/supabase-config.json", { cache: "no-store" })

  if (!response.ok) {
    throw new Error("NOT_CONFIGURED")
  }

  const data = (await response.json()) as Partial<SupabasePublicConfig>

  if (!data.url || !data.anonKey) {
    throw new Error("NOT_CONFIGURED")
  }

  cachedConfig = { url: data.url, anonKey: data.anonKey }
  return cachedConfig
}
