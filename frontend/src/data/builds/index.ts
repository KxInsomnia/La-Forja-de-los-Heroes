import type { WowGlyphSlot, WowSpecBuild, WowStatRow } from '../../types/wow'

const armsStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '8%' },
  {
    label: 'Pericia',
    value: '22',
    note: '26 (−4 por 1 punto en Maestría con armas)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Soft cap',
    value: '538 (38.4%)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Hard cap',
    value: '1260 (90%)',
  },
]

const armsPriority = [
  'Pericia',
  'Golpe',
  'Hard Cap ArPen',
  'Fuerza = Crítico',
  'Soft Cap ArPen',
  'Celeridad',
]

const armsGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de desgarrar',
    icon: 'ability_gouge',
    description: 'Aumenta 6 s la duración de tu Desgarrar.',
  },
  {
    type: 'major',
    name: 'Glifo de golpe mortal',
    icon: 'ability_warrior_savageblow',
    description: 'Aumenta un 10% el daño de tu Golpe mortal.',
  },
  {
    type: 'major',
    name: 'Glifo de ejecutar',
    icon: 'inv_sword_48',
    description:
      'Tu facultad Ejecutar inflige daño como si tuvieras 10 p. de ira extra.',
  },
  {
    type: 'minor',
    name: 'Glifo de orden',
    icon: 'ability_warrior_rallyingcry',
    description: 'Aumenta 2 min la duración de tu Grito de mando.',
  },
  {
    type: 'minor',
    name: 'Glifo de atronar',
    icon: 'ability_thunderclap',
    description: 'Aumenta 2 m el radio de tu Atronar.',
  },
  {
    type: 'minor',
    name: 'Glifo de cargar',
    icon: 'ability_warrior_charge',
    description: 'Aumenta 5 m el alcance de tu Cargar.',
  },
]

const dpsStats: WowStatRow[] = [
  'Poder de ataque',
  'Índice de golpe',
  'Pericia',
  'Índice de golpe crítico',
  'Índice de celeridad',
  'Puntería',
].map((label) => ({ label }))

const tankStats: WowStatRow[] = [
  'Aguante',
  'Armadura',
  'Índice de defensa',
  'Esquiva',
  'Parada',
  'Índice de bloqueo',
  'Índice de golpe',
  'Pericia',
].map((label) => ({ label }))

function createPlaceholderGlyphs(): WowGlyphSlot[] {
  const glyph = (type: WowGlyphSlot['type'], icon: string): WowGlyphSlot => ({
    type,
    icon,
  })

  return [
    glyph('major', 'inv_glyph_majorwarrior'),
    glyph('major', 'inv_glyph_majorwarrior'),
    glyph('major', 'inv_glyph_majorwarrior'),
    glyph('minor', 'inv_glyph_minorwarrior'),
    glyph('minor', 'inv_glyph_minorwarrior'),
    glyph('minor', 'inv_glyph_minorwarrior'),
  ]
}

function createBuild(
  stats: WowStatRow[],
  options: { priority?: string[]; glyphs?: WowGlyphSlot[] } = {},
): WowSpecBuild {
  return {
    glyphs: (options.glyphs ?? createPlaceholderGlyphs()).map((glyph) => ({
      ...glyph,
    })),
    stats: stats.map((row) => ({ ...row })),
    priority: options.priority,
  }
}

const builds: Record<string, Record<string, WowSpecBuild>> = {
  guerrero: {
    armas: createBuild(armsStats, {
      priority: armsPriority,
      glyphs: armsGlyphs,
    }),
    furia: createBuild(dpsStats),
    proteccion: createBuild(tankStats),
  },
}

export function getSpecBuild(
  classSlug: string,
  specSlug: string,
): WowSpecBuild | undefined {
  return builds[classSlug]?.[specSlug]
}
