import type { WowClass } from '../../types/wow'

export const deathknight: WowClass = {
  slug: 'caballero-de-la-muerte',
  icon: 'deathknight',
  name: 'Caballero de la muerte',
  color: '#c41e3a',
  description:
    'Combatiente de élite que combina runas, enfermedades y poder profano para resistir como tanque o desatar la muerte sobre sus enemigos.',
  specs: [
    {
      slug: 'sangre',
      icon: 'deathknight-sangre',
      name: 'Sangre',
      role: 'Tanque',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 3,
    },
    {
      slug: 'escarcha',
      icon: 'deathknight-escarcha',
      name: 'Escarcha',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 2,
    },
    {
      slug: 'profano',
      icon: 'deathknight-profano',
      name: 'Profano',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 2,
    },
  ],
}
