import type { WowClass } from '../../types/wow'
import { deathknight } from './deathknight'
import { druid } from './druid'
import { hunter } from './hunter'
import { mage } from './mage'
import { paladin } from './paladin'
import { priest } from './priest'
import { rogue } from './rogue'
import { shaman } from './shaman'
import { warlock } from './warlock'
import { warrior } from './warrior'

export const classes: WowClass[] = [
  warrior,
  paladin,
  hunter,
  rogue,
  priest,
  deathknight,
  shaman,
  mage,
  warlock,
  druid,
]

export function getClassBySlug(slug: string): WowClass | undefined {
  return classes.find((wowClass) => wowClass.slug === slug)
}
