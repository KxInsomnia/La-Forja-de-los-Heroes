import type { WowTalentTree } from '../../types/wow'
import {
  deathknightEscarchaTalents,
  deathknightProfanoTalents,
  deathknightSangreTalents,
} from './deathknight'
import {
  druidEquilibrioTalents,
  druidFeralTalents,
  druidRestauracionTalents,
} from './druid'
import {
  hunterBestiasTalents,
  hunterPunteriaTalents,
  hunterSupervivenciaTalents,
} from './hunter'
import { mageArcanoTalents, mageEscarchaTalents, mageFuegoTalents } from './mage'
import {
  paladinProteccionTalents,
  paladinReprensionTalents,
  paladinSagradoTalents,
} from './paladin'
import {
  priestDisciplinaTalents,
  priestSagradoTalents,
  priestSombraTalents,
} from './priest'
import {
  rogueAsesinatoTalents,
  rogueCombateTalents,
  rogueSutilezaTalents,
} from './rogue'
import {
  shamanElementalTalents,
  shamanMejoraTalents,
  shamanRestauracionTalents,
} from './shaman'
import {
  warlockAfliccionTalents,
  warlockDemonologiaTalents,
  warlockDestruccionTalents,
} from './warlock'
import { getDefaultAllocations, specAllocations } from './allocations'
import {
  warriorArmsTalents,
  warriorFuryTalents,
  warriorProtectionTalents,
} from './warrior'

const classTrees: Record<string, WowTalentTree[]> = {
  'caballero-de-la-muerte': [
    { slug: 'sangre', name: 'Sangre', talents: deathknightSangreTalents },
    { slug: 'escarcha', name: 'Escarcha', talents: deathknightEscarchaTalents },
    { slug: 'profano', name: 'Profano', talents: deathknightProfanoTalents },
  ],
  druida: [
    { slug: 'equilibrio', name: 'Equilibrio', talents: druidEquilibrioTalents },
    { slug: 'feral', name: 'Feral', talents: druidFeralTalents },
    {
      slug: 'restauracion',
      name: 'Restauración',
      talents: druidRestauracionTalents,
    },
  ],
  cazador: [
    { slug: 'bestias', name: 'Bestias', talents: hunterBestiasTalents },
    { slug: 'punteria', name: 'Puntería', talents: hunterPunteriaTalents },
    {
      slug: 'supervivencia',
      name: 'Supervivencia',
      talents: hunterSupervivenciaTalents,
    },
  ],
  mago: [
    { slug: 'arcano', name: 'Arcano', talents: mageArcanoTalents },
    { slug: 'fuego', name: 'Fuego', talents: mageFuegoTalents },
    { slug: 'escarcha', name: 'Escarcha', talents: mageEscarchaTalents },
  ],
  paladin: [
    { slug: 'sagrado', name: 'Sagrado', talents: paladinSagradoTalents },
    {
      slug: 'proteccion',
      name: 'Protección',
      talents: paladinProteccionTalents,
    },
    {
      slug: 'reprension',
      name: 'Reprensión',
      talents: paladinReprensionTalents,
    },
  ],
  sacerdote: [
    {
      slug: 'disciplina',
      name: 'Disciplina',
      talents: priestDisciplinaTalents,
    },
    { slug: 'sagrado', name: 'Sagrado', talents: priestSagradoTalents },
    { slug: 'sombra', name: 'Sombra', talents: priestSombraTalents },
  ],
  picaro: [
    { slug: 'asesinato', name: 'Asesinato', talents: rogueAsesinatoTalents },
    { slug: 'combate', name: 'Combate', talents: rogueCombateTalents },
    { slug: 'sutileza', name: 'Sutileza', talents: rogueSutilezaTalents },
  ],
  chaman: [
    { slug: 'elemental', name: 'Elemental', talents: shamanElementalTalents },
    { slug: 'mejora', name: 'Mejora', talents: shamanMejoraTalents },
    {
      slug: 'restauracion',
      name: 'Restauración',
      talents: shamanRestauracionTalents,
    },
  ],
  brujo: [
    { slug: 'afliccion', name: 'Aflicción', talents: warlockAfliccionTalents },
    {
      slug: 'demonologia',
      name: 'Demonología',
      talents: warlockDemonologiaTalents,
    },
    {
      slug: 'destruccion',
      name: 'Destrucción',
      talents: warlockDestruccionTalents,
    },
  ],
  guerrero: [
    { slug: 'armas', name: 'Armas', talents: warriorArmsTalents },
    { slug: 'furia', name: 'Furia', talents: warriorFuryTalents },
    {
      slug: 'proteccion',
      name: 'Protección',
      talents: warriorProtectionTalents,
    },
  ],
}

function withPoints(
  trees: WowTalentTree[],
  pointsByTree: Record<string, Record<string, number>>,
): WowTalentTree[] {
  return trees.map((tree) => {
    const points = pointsByTree[tree.slug]
    return {
      ...tree,
      talents: tree.talents.map((talent) => ({
        ...talent,
        points: points?.[talent.name] ?? 0,
      })),
    }
  })
}

const talentTrees: Record<string, Record<string, WowTalentTree[]>> = {}

for (const [classSlug, trees] of Object.entries(classTrees)) {
  talentTrees[classSlug] = Object.fromEntries(
    trees.map((tree) => [tree.slug, trees]),
  )

  for (const specSlug of Object.keys(specAllocations[classSlug] ?? {})) {
    const pointsByTree = getDefaultAllocations(classSlug, specSlug)
    talentTrees[classSlug][specSlug] = pointsByTree
      ? withPoints(trees, pointsByTree)
      : trees
  }
}

export function getTalentTrees(
  classSlug: string,
  specSlug: string,
  allocations?: Record<string, Record<string, number>>,
): WowTalentTree[] | undefined {
  if (!allocations) return talentTrees[classSlug]?.[specSlug]

  const baseTrees = talentTrees[classSlug]?.[specSlug]
  return baseTrees ? withPoints(baseTrees, allocations) : undefined
}

export function getTalentAllocations(
  classSlug: string,
  specSlug: string,
): Record<string, Record<string, number>> | undefined {
  return getDefaultAllocations(classSlug, specSlug)
}
