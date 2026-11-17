export type WowRole = 'Tanque' | 'Healer' | 'DPS'

export interface WowSpec {
  slug: string
  name: string
  role: WowRole
  description?: string
  recommended?: boolean
  buildCount: number
}

export interface WowTalentPosition {
  row: number
  col: number
}

export interface WowTalent {
  name: string
  icon: string
  maxRank: number
  description: string
  row: number
  col: number
  points?: number
  requires?: WowTalentPosition[]
}

export interface WowTalentTree {
  slug: string
  name: string
  talents: WowTalent[]
}

export type WowGlyphType = 'major' | 'minor'

export interface WowGlyphSlot {
  type: WowGlyphType
  name?: string
  icon: string
  description?: string
}

export interface WowStatRow {
  label: string
  value?: string
  note?: string
}

export interface WowSpecBuild {
  glyphs: WowGlyphSlot[]
  stats: WowStatRow[]
  priority?: string[]
}

export interface WowClass {
  slug: string
  name: string
  color: string
  description: string
  specs: WowSpec[]
}
