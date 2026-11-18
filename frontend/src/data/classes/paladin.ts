import type { WowClass } from '../../types/wow'

export const paladin: WowClass = {
  slug: 'paladin',
  icon: 'paladin',
  name: 'Paladín',
  color: '#f58cba',
  description:
    'Guerrero sagrado que combina la luz para sanar y proteger con la fuerza del acero para castigar a sus enemigos.',
  specs: [
    {
      slug: 'sagrado',
      icon: 'paladin-holy',
      name: 'Sagrado',
      role: 'Healer',
      recommended: true,
      buildCount: 1,
    },
    {
      slug: 'proteccion',
      icon: 'paladin-protection',
      name: 'Protección',
      role: 'Tanque',
      recommended: true,
      buildCount: 1,
    },
    {
      slug: 'reprension',
      icon: 'paladin-retribution',
      name: 'Reprensión',
      role: 'DPS',
      recommended: true,
      buildCount: 2,
    },
  ],
}
