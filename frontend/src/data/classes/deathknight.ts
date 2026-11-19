import type { WowClass } from '../../types/wow'

export const deathknight: WowClass = {
  slug: 'caballero-de-la-muerte',
  icon: 'death-knight',
  name: 'Caballero de la muerte',
  color: '#c41e3a',
  description:
    'Combatiente de élite que combina runas, enfermedades y poder profano para resistir como tanque o desatar la muerte sobre sus enemigos.',
  specs: [
    {
      slug: 'sangre',
      icon: 'death-knight-blood',
      name: 'Sangre',
      role: 'Tanque',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 1,
    },
    {
      slug: 'escarcha',
      icon: 'death-knight-frost',
      name: 'Escarcha',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 1,
    },
    {
      slug: 'profano',
      icon: 'death-knight-unholy',
      name: 'Profano',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 2,
    },
  ],
}
