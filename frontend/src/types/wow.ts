export type WowRole = 'Tanque' | 'Healer' | 'DPS'

export interface WowSpec {
  slug: string
  name: string
  role: WowRole
  description?: string
  recommended?: boolean
  buildCount: number
}

export interface WowClass {
  slug: string
  name: string
  color: string
  description: string
  specs: WowSpec[]
}
