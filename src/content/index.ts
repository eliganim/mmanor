import type { SiteContent } from './types'
import defaults from './defaults.json'
import generated from '../generated/content.json'

const overrides = generated as Record<string, Record<string, string>>

const content: SiteContent = {
  hero: { ...defaults.hero, ...overrides['hero'] },
  services: { ...defaults.services, ...overrides['services'] },
  resources: { ...defaults.resources, ...overrides['resources'] },
} as SiteContent

export default content
