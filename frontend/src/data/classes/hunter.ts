import type { WowClass } from '../../types/wow'

export const hunter: WowClass = {
  slug: 'cazador',
  icon: 'hunter',
  name: 'Cazador',
  color: '#aad372',
  description:
    'Tirador experto que domina el campo de batalla a distancia y lucha junto a su mascota.',
  specs: [
    {
      slug: 'bestias',
      icon: 'hunter-beasts',
      name: 'Bestias',
      role: 'DPS',
      badges: [{ label: 'PARA NADA RECOMENDADO', tone: 'strong-no' }],
      buildCount: 1,
    },
    {
      slug: 'punteria',
      icon: 'hunter-marksmanship',
      name: 'Puntería',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 3,
    },
    {
      slug: 'supervivencia',
      icon: 'hunter-survival',
      name: 'Supervivencia',
      role: 'DPS',
      badges: [
        { label: 'Recomendado', tone: 'yes' },
        { label: 'Complejo', tone: 'complex' },
      ],
      buildCount: 1,
    },
  ],
}
