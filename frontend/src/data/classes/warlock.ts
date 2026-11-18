import type { WowClass } from '../../types/wow'

export const warlock: WowClass = {
  slug: 'brujo',
  icon: 'warlock',
  name: 'Brujo',
  color: '#8788ee',
  description:
    'Invocador de demonios que castiga a sus enemigos con maldiciones, fuego vil y magia oscura.',
  specs: [
    {
      slug: 'afliccion',
      icon: 'warlock-affliction',
      name: 'Aflicción',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 1,
    },
    {
      slug: 'demonologia',
      icon: 'warlock-demonology',
      name: 'Demonología',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 1,
    },
    {
      slug: 'destruccion',
      icon: 'warlock-destruction',
      name: 'Destrucción',
      role: 'DPS',
      badges: [{ label: 'No recomendado pero viable', tone: 'situational' }],
      buildCount: 1,
    },
  ],
}
