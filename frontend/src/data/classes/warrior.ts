import type { WowClass } from '../../types/wow'

export const warrior: WowClass = {
  slug: 'guerrero',
  icon: 'warrior',
  name: 'Guerrero',
  color: '#c79c6e',
  description:
    'Combatiente de primera línea que domina las armas y la furia para destrozar enemigos o resistir como tanque.',
  specs: [
    {
      slug: 'armas',
      icon: 'warrior-arms',
      name: 'Armas',
      role: 'DPS',
      recommended: false,
      buildCount: 2,
    },
    {
      slug: 'furia',
      icon: 'warrior-fury',
      name: 'Furia',
      role: 'DPS',
      recommended: true,
      buildCount: 2,
    },
    {
      slug: 'proteccion',
      icon: 'warrior-protection',
      name: 'Protección',
      role: 'Tanque',
      recommended: false,
      buildCount: 2,
    },
  ],
}
