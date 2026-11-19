import type { WowClass } from '../../types/wow'

export const druid: WowClass = {
  slug: 'druida',
  icon: 'druid',
  name: 'Druida',
  color: '#ff7c0a',
  description:
    'Cambiaformas versátil que canaliza la magia de la naturaleza para sanar, proteger o despedazar a sus enemigos.',
  specs: [
    {
      slug: 'equilibrio',
      icon: 'druid-balance',
      name: 'Equilibrio',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 2,
    },
    {
      slug: 'feral',
      icon: 'druid-feral',
      name: 'Feral',
      role: 'DPS',
      badges: [{ label: 'Recomendado', tone: 'yes' }, { label: 'Complejo', tone: 'complex' }],
      buildCount: 2,
    },
    {
      slug: 'guardian',
      icon: 'druid-guardian',
      name: 'Guardián',
      role: 'Tanque',
      badges: [{ label: 'No recomendado pero viable', tone: 'situational' }],
      buildCount: 2,
    },
    {
      slug: 'restauracion',
      icon: 'druid-restoration',
      name: 'Restauración',
      role: 'Healer',
      badges: [{ label: 'Recomendado', tone: 'yes' }],
      buildCount: 2,
    },
  ],
}
