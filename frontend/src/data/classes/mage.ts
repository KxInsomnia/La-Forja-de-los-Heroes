import type { WowClass } from '../../types/wow'

export const mage: WowClass = {
  slug: 'mago',
  icon: 'mage',
  name: 'Mago',
  color: '#3fc7eb',
  description:
    'Lanzador de hechizos frágil pero letal que controla el campo de batalla con arcanos, fuego o escarcha.',
  specs: [
    {
      slug: 'arcano',
      icon: 'mage-arcane',
      name: 'Arcano',
      role: 'DPS',
      badges: [{ label: 'No recomendado pero viable', tone: 'situational' }],
      buildCount: 3,
    },
    {
      slug: 'fuego',
      icon: 'mage-fire',
      name: 'Fuego',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 3,
    },
    {
      slug: 'escarcha',
      icon: 'mage-frost',
      name: 'Escarcha',
      role: 'DPS',
      badges: [{ label: 'PARA NADA RECOMENDADO', tone: 'strong-no' }],
      buildCount: 1,
    },
  ],
}
