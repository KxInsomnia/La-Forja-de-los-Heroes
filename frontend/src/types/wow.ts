export type WowRole = 'Tanque' | 'Healer' | 'DPS'

export type WowSpecBadgeTone = 'yes' | 'situational' | 'strong-no' | 'complex'

export interface WowSpecBadge {
  label: string
  tone: WowSpecBadgeTone
}

export interface WowSpec {
  slug: string
  icon: string
  name: string
  role: WowRole
  description?: string
  recommended?: boolean
  badges?: WowSpecBadge[]
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

export interface WowGlyphOption {
  name: string
  icon: string
  description: string
  reason?: string
}

export interface WowGlyphSlot {
  type: WowGlyphType
  name?: string
  icon: string
  description?: string
  badge?: string
  featured?: boolean
  options?: WowGlyphOption[]
}

export interface WowStatRow {
  label: string
  value?: string
  note?: string
}

export interface WowRotationStep {
  label: string
  note?: string
  icons?: string[]
}

export interface WowRotationGroup {
  title: string
  steps: WowRotationStep[]
}

export interface WowRotation {
  groups: WowRotationGroup[]
}

export interface WowRotationNoticeLink {
  label: string
  to: string
}

export interface WowRotationNoticeItem {
  text: string
  icons?: string[]
}

export interface WowRotationNotice {
  tone?: 'blue' | 'gold'
  text?: string
  items?: WowRotationNoticeItem[]
  link?: WowRotationNoticeLink
}

export interface WowBuildTip {
  text: string
  icons?: string[]
  link?: WowRotationNoticeLink
}

export interface WowStatPriorityGroup {
  title: string
  stats: string[]
  notes?: string[]
}

export interface WowPetBuild {
  name: string
  icon: string
  description?: string
  tree: WowTalentTree
}

export interface WowSpecBuild {
  label: string
  allocations?: Record<string, Record<string, number>>
  glyphs: WowGlyphSlot[]
  stats: WowStatRow[]
  priority?: string[]
  priorityGroups?: WowStatPriorityGroup[]
  notice?: string
  rotation?: WowRotation
  rotationNotice?: string | WowRotationNotice
  tips?: (string | WowBuildTip)[]
  pet?: WowPetBuild
}

export interface WowClass {
  slug: string
  icon: string
  name: string
  color: string
  description: string
  specs: WowSpec[]
}
