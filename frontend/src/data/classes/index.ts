import type { WowClass } from '../../types/wow'
import { paladin } from './paladin'
import { warrior } from './warrior'

export const classes: WowClass[] = [paladin, warrior]

export function getClassBySlug(slug: string): WowClass | undefined {
  return classes.find((wowClass) => wowClass.slug === slug)
}
