import { writeFileSync, readFileSync, mkdirSync } from 'fs'
import { resolve } from 'path'
import type { Plugin } from 'vite'

async function fetchContent(): Promise<Record<string, Record<string, string>> | null> {
  const url = process.env.VITE_SUPABASE_URL
  const key = process.env.VITE_SUPABASE_ANON_KEY

  if (!url || !key) {
    console.log('[content] No Supabase credentials — using defaults')
    return null
  }

  const res = await fetch(`${url}/rest/v1/site_content?select=section,key,value`, {
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
    },
  })

  if (!res.ok) {
    console.error(`[content] Supabase fetch failed: ${res.status} ${res.statusText}`)
    return null
  }

  const rows = (await res.json()) as { section: string; key: string; value: string }[]
  const grouped: Record<string, Record<string, string>> = {}

  for (const row of rows) {
    if (!grouped[row.section]) grouped[row.section] = {}
    grouped[row.section][row.key] = row.value
  }

  return grouped
}

export function contentPlugin(): Plugin {
  const outDir = resolve(process.cwd(), 'src/generated')
  const outFile = resolve(outDir, 'content.json')

  return {
    name: 'fetch-supabase-content',
    async buildStart() {
      const content = await fetchContent()
      if (!content) return

      const json = JSON.stringify(content, null, 2)

      let existing = ''
      try {
        existing = readFileSync(outFile, 'utf-8')
      } catch {
        // File doesn't exist yet
      }

      if (json !== existing) {
        mkdirSync(outDir, { recursive: true })
        writeFileSync(outFile, json, 'utf-8')
        console.log('[content] Wrote src/generated/content.json')
      }
    },
  }
}
