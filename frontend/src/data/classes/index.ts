import type { WowClass } from '../../types/wow'
import { paladin } from './paladin'

export const classes: WowClass[] = [paladin]

export function getClassBySlug(slug: string): WowClass | undefined {
  return classes.find((wowClass) => wowClass.slug === slug)
}
