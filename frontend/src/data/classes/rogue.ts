import type { WowClass } from '../../types/wow'

export const rogue: WowClass = {
  slug: 'picaro',
  icon: 'rogue',
  name: 'Pícaro',
  color: '#fff468',
  description:
    'Asesino sigiloso que golpea desde las sombras con venenos, puñaladas y ataques precisos.',
  specs: [
    {
      slug: 'asesinato',
      icon: 'rogue-assassination',
      name: 'Asesinato',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 2,
    },
    {
      slug: 'combate',
      icon: 'rogue-combat',
      name: 'Combate',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 2,
    },
    {
      slug: 'sutileza',
      icon: 'rogue-subtlety',
      name: 'Sutileza',
      role: 'DPS',
      badges: [{ label: 'PARA NADA RECOMENDADO', tone: 'strong-no' }],
      buildCount: 1,
    },
  ],
}
