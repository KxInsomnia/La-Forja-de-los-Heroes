import type { WowClass } from '../../types/wow'

export const priest: WowClass = {
  slug: 'sacerdote',
  icon: 'priest',
  name: 'Sacerdote',
  color: '#f0ebe0',
  description:
    'Sanador devoto o azote de las sombras que canaliza la Luz para proteger a sus aliados o desatar la oscuridad.',
  specs: [
    {
      slug: 'disciplina',
      icon: 'priest-discipline',
      name: 'Disciplina',
      role: 'Healer',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 1,
    },
    {
      slug: 'sagrado',
      icon: 'priest-holy',
      name: 'Sagrado',
      role: 'Healer',
      badges: [{ label: 'No recomendado pero viable', tone: 'situational' }],
      buildCount: 2,
    },
    {
      slug: 'sombra',
      icon: 'priest-shadow',
      name: 'Sombra',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 2,
    },
  ],
}
