import type { WowClass } from '../../types/wow'

export const warrior: WowClass = {
  slug: 'guerrero',
  name: 'Guerrero',
  color: '#c79c6e',
  description:
    'Combatiente de primera línea que domina las armas y la furia para destrozar enemigos o resistir como tanque.',
  specs: [
    {
      slug: 'armas',
      name: 'Armas',
      role: 'DPS',
      buildCount: 0,
    },
    {
      slug: 'furia',
      name: 'Furia',
      role: 'DPS',
      buildCount: 0,
    },
    {
      slug: 'proteccion',
      name: 'Protección',
      role: 'Tanque',
      buildCount: 0,
    },
  ],
}
