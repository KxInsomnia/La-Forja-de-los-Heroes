import type { WowClass } from '../../types/wow'

export const paladin: WowClass = {
  slug: 'paladin',
  name: 'Paladín',
  color: '#f58cba',
  description:
    'Guerrero sagrado que combina la luz para sanar y proteger con la fuerza del acero para castigar a sus enemigos.',
  specs: [
    {
      slug: 'sagrado',
      name: 'Sagrado',
      role: 'Healer',
      buildCount: 0,
    },
    {
      slug: 'proteccion',
      name: 'Protección',
      role: 'Tanque',
      buildCount: 0,
    },
    {
      slug: 'reprension',
      name: 'Reprensión',
      role: 'DPS',
      buildCount: 0,
    },
  ],
}
