import type { WowClass } from '../../types/wow'

export const shaman: WowClass = {
  slug: 'chaman',
  icon: 'shaman',
  name: 'Chamán',
  color: '#0070dd',
  description:
    'Canalizador de los elementos que sana a sus aliados, potencia sus armas o desata tormentas de destrucción.',
  specs: [
    {
      slug: 'elemental',
      icon: 'shaman-elemental',
      name: 'Elemental',
      role: 'DPS',
      badges: [{ label: 'No recomendado pero viable', tone: 'situational' }],
      buildCount: 1,
    },
    {
      slug: 'mejora',
      icon: 'shaman-enhancement',
      name: 'Mejora',
      role: 'DPS',
      badges: [
        { label: 'Recomendado', tone: 'yes' },
        { label: 'Complejo', tone: 'complex' },
      ],
      buildCount: 2,
    },
    {
      slug: 'restauracion',
      icon: 'shaman-restoration',
      name: 'Restauración',
      role: 'Healer',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 1,
    },
  ],
}
