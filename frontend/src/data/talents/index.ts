import type { WowTalentTree } from '../../types/wow'
import { warriorAllocations } from './allocations'
import {
  warriorArmsTalents,
  warriorFuryTalents,
  warriorProtectionTalents,
} from './warrior'

const warriorTrees: WowTalentTree[] = [
  { slug: 'armas', name: 'Armas', talents: warriorArmsTalents },
  { slug: 'furia', name: 'Furia', talents: warriorFuryTalents },
  { slug: 'proteccion', name: 'Protección', talents: warriorProtectionTalents },
]

function withPoints(
  trees: WowTalentTree[],
  points: Record<string, number>,
): WowTalentTree[] {
  return trees.map((tree) => ({
    ...tree,
    talents: tree.talents.map((talent) => ({
      ...talent,
      points: points[talent.name] ?? 0,
    })),
  }))
}

const talentTrees: Record<string, Record<string, WowTalentTree[]>> = {
  guerrero: {
    armas: withPoints(warriorTrees, warriorAllocations.armas ?? {}),
    furia: withPoints(warriorTrees, warriorAllocations.furia ?? {}),
    proteccion: withPoints(warriorTrees, warriorAllocations.proteccion ?? {}),
  },
}

export function getTalentTrees(
  classSlug: string,
  specSlug: string,
): WowTalentTree[] | undefined {
  return talentTrees[classSlug]?.[specSlug]
}
