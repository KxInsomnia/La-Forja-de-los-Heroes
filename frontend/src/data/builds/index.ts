import type {
  WowBuildTip,
  WowGlyphSlot,
  WowPetBuild,
  WowRotation,
  WowRotationNotice,
  WowSpecBuild,
  WowStatPriorityGroup,
  WowStatRow,
  WowTalentTree,
} from '../../types/wow'
import type { SpecAllocationBuild } from '../talents/allocations'
import { specAllocations } from '../talents/allocations'

const armsStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '8%' },
  {
    label: 'Pericia',
    value: '22',
    note: '26 (−4 por cada punto en Maestría con armas)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Soft cap',
    value: '538 (38.4%)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Hard cap',
    value: '1260 (90%)',
  },
]

const armsPriority = [
  'Cap Pericia',
  'Cap Golpe',
  'Hard Cap ArPen',
  'Fuerza = Crítico',
  'Soft Cap ArPen',
  'Celeridad',
]

const armsGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Desgarrar',
    icon: 'ability-gouge',
    description: 'Aumenta 6 s la duración de tu Desgarrar.',
  },
  {
    type: 'major',
    name: 'Glifo de Golpe Mortal',
    icon: 'ability-warrior-savage-blow',
    description: 'Aumenta un 10% el daño de tu Golpe mortal.',
  },
  {
    type: 'major',
    name: 'Glifo de Ejecutar',
    icon: 'inv-sword-48',
    description:
      'Tu facultad Ejecutar inflige daño como si tuvieras 10 p. de ira extra.',
  },
  {
    type: 'minor',
    name: 'Glifo de Orden',
    icon: 'ability-warrior-rallying-cry',
    description: 'Aumenta 2 min la duración de tu Grito de orden.',
  },
  {
    type: 'minor',
    name: 'Glifo de Atronar',
    icon: 'ability-thunder-clap',
    description: 'Aumenta 2 m el radio de tu Atronar.',
  },
  {
    type: 'minor',
    name: 'Glifo de Cargar',
    icon: 'ability-warrior-charge',
    description: 'Aumenta 5 m el alcance de tu Cargar.',
  },
]

const furyStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '5%' },
  { label: 'Pericia', value: '26/26' },
  {
    label: 'Penetración de armadura (ArPen) · Soft cap',
    value: '722 (51.57%)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Hard cap',
    value: '1400 (100%)',
  },
]

const furyGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Torbellino',
    icon: 'ability-whirlwind',
    description: 'Reduce el tiempo de reutilización de tu facultad Torbellino 2 s.',
  },
  {
    type: 'major',
    name: 'Glifo de Golpe Heroico',
    icon: 'ability-rogue-ambush',
    description:
      'Ganas 10 de ira cuando infliges golpe crítico con tu facultad Golpe heroico.',
  },
  {
    type: 'major',
    name: 'Glifo de Ejecutar',
    icon: 'inv-sword-48',
    description:
      'Tu facultad Ejecutar inflige daño como si tuvieras 10 p. de ira extra. Úsalo en single target con ArPen capeado.',
    badge: '3 opciones',
    featured: true,
    options: [
      {
        name: 'Glifo de Ejecutar',
        icon: 'inv-sword-48',
        description:
          'Tu facultad Ejecutar inflige daño como si tuvieras 10 p. de ira extra. Úsalo en single target con ArPen capeado.',
      },
      {
        name: 'Glifo de Desgarrar',
        icon: 'ability-gouge',
        description:
          'Aumenta 6 s la duración de tu Desgarrar. Úsalo en single target sin ArPen capeado.',
      },
      {
        name: 'Glifo de Rajar',
        icon: 'ability-warrior-cleave',
        description:
          'Aumenta en 1 el número de objetivos que golpeas con Rajar.',
      },
    ],
  },
  {
    type: 'minor',
    name: 'Glifo de Batalla',
    icon: 'ability-warrior-battle-shout',
    description: 'Aumenta 2 min la duración de tu Grito de batalla.',
  },
  {
    type: 'minor',
    name: 'Glifo de Orden',
    icon: 'ability-warrior-rallying-cry',
    description: 'Aumenta 2 min la duración de tu Grito de orden.',
  },
  {
    type: 'minor',
    name: 'Glifo de Ira Sangrienta',
    icon: 'ability-racial-blood-rage',
    description: 'Reduce un 100% el coste de salud de tu habilidad Ira sangrienta.',
  },
]

const furyRotation: WowRotation = {
  groups: [
    {
      title: 'Prioridad',
      steps: [
        {
          label: 'Torbellino',
          icons: ['ability-whirlwind'],
        },
        {
          label: 'Sed de Sangre',
          icons: ['spell-nature-blood-lust'],
        },
        {
          label: 'Embate',
          note: 'Solo si tienes el proc de Oleada de sangre.',
          icons: ['ability-warrior-decisive-strike'],
        },
        {
          label: 'Hender Armadura',
          note: 'Hasta 5 acumulaciones y mantenlo activo.',
          icons: ['ability-warrior-sunder'],
        },
        {
          label: 'Ejecutar',
          icons: ['inv-sword-48'],
        },
        {
          label: 'Golpe heroico',
          note: 'Spammealo siempre que tengas más de 50 de ira.',
          icons: ['ability-rogue-ambush'],
        },
      ],
    },
  ],
}

const furyRotationNotice =
  'Si estás usando la build Overpower Weaving, Desgarrar y Abrumar van después de Hender Armadura en el orden de prioridades.'

const furyTips = [
  'No recomiendo utilizar macros que añadan Golpe heroico y/o Rajar a tus otras habilidades, sobre todo cuando estás aprendiendo y estás por debajo de 5.300 de GS (no te sobra la ira).',
  'Sí recomiendo hacer macros con /startattack en tus habilidades para asegurarte de que siempre estás golpeando.',
  'En realidad Hender Armadura va antes que nada en el orden de prioridades: de esa manera el daño del grupo sube bastante, sobre todo mientras más DPS de daño físico tengas. Pero para evitar que pierdas mucho daño en el proceso, muchos lo tiran en tiempos muertos (cuando tus habilidades principales están en CD).',
]

const protectionGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Bloqueo',
    icon: 'inv-shield-05',
    description:
      'Aumenta un 10% tu valor de bloqueo durante 10 s después de usar Golpe con escudo.',
  },
  {
    type: 'major',
    name: 'Glifo de Vigilancia',
    icon: 'ability-warrior-vigilance',
    description:
      'Tu habilidad Vigilancia transfiere un 5% adicional de la amenaza de tu objetivo.',
  },
  {
    type: 'major',
    name: 'Glifo de Devastar',
    icon: 'inv-sword-11',
    description:
      'Tu habilidad Devastar aplica ahora 2 acumulaciones de Desgarrar armadura.',
  },
  {
    type: 'minor',
    name: 'Glifo de Atronar',
    icon: 'ability-thunder-clap',
    description: 'Aumenta 2 m el radio de tu habilidad Atronar.',
  },
  {
    type: 'minor',
    name: 'Glifo de Batalla',
    icon: 'ability-warrior-battle-shout',
    description: 'Aumenta 2 min la duración de tu Grito de batalla.',
  },
  {
    type: 'minor',
    name: 'Glifo de Orden',
    icon: 'ability-warrior-rallying-cry',
    description: 'Aumenta 2 min la duración de tu Grito de orden.',
  },
]

const paladinProtectionGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Sello de venganza',
    icon: 'spell-holy-seal-of-vengeance',
    description:
      'Tu Sello de venganza o Sello de corrupción otorga 10 de pericia mientras está activo.',
  },
  {
    type: 'major',
    name: 'Glifo de Súplica divina',
    icon: 'spell-holy-aspiration',
    description:
      'Mientras Súplica divina está activa, recibes un 3% menos de daño de todas las fuentes.',
  },
  {
    type: 'major',
    name: 'Glifo de Sentencia',
    icon: 'spell-holy-righteous-fury',
    badge: '3 opciones',
    description:
      'Tus Sentencias infligen un 10% más de daño; úsalo para daño y amenaza extra.',
    options: [
      {
        name: 'Glifo de Sentencia',
        icon: 'spell-holy-righteous-fury',
        description:
          'Tus Sentencias infligen un 10% más de daño; úsalo para daño y amenaza extra.',
      },
      {
        name: 'Glifo de Defensa recta',
        icon: 'inv-shoulder-37',
        description:
          'Aumenta un 8% la probabilidad de que tu Defensa recta funcione en cada objetivo; recomendado si no tienes el golpe capeado.',
      },
      {
        name: 'Glifo de Salvación',
        icon: 'spell-holy-seal-of-salvation',
        description:
          'Cuando lanzas Mano de salvación sobre ti, reduces un 20% el daño recibido; da defensa extra, pero puede ser peligroso si no tienes buen agro.',
      },
    ],
  },
  {
    type: 'minor',
    name: 'Glifo de Imposición de manos',
    icon: 'spell-holy-lay-on-hands',
    description:
      'Reduce 5 min el tiempo de reutilización de tu Imposición de manos.',
  },
  {
    type: 'minor',
    name: 'Glifo de Captar no-muertos',
    icon: 'spell-holy-sense-undead',
    description:
      'Mientras Captar no-muertos está activo, infliges un 1% más de daño a los no-muertos.',
  },
  {
    type: 'minor',
    name: 'Glifo de Bendición de Reyes',
    icon: 'spell-magic-mage-armor',
    description:
      'Reduce un 50% el coste de maná de tu Bendición de Reyes y de tu Bendición superior de Reyes.',
  },
]

const retributionGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Sello de venganza',
    icon: 'spell-holy-seal-of-vengeance',
    description:
      'Tu Sello de venganza o Sello de corrupción otorga 10 de pericia mientras está activo.',
  },
  {
    type: 'major',
    name: 'Glifo de Sentencia',
    icon: 'spell-holy-righteous-fury',
    description: 'Tus Sentencias infligen un 10% más de daño.',
  },
  {
    type: 'major',
    name: 'Glifo de Consagración',
    icon: 'spell-holy-inner-fire',
    badge: '2 opciones',
    featured: true,
    description:
      'Aumenta 2 s la duración y el tiempo de reutilización de tu Consagración.',
    options: [
      {
        name: 'Glifo de Consagración',
        icon: 'spell-holy-inner-fire',
        description:
          'Aumenta 2 s la duración y el tiempo de reutilización de tu Consagración.',
      },
      {
        name: 'Glifo de Exorcismo',
        icon: 'spell-holy-excorcism-02',
        description: 'Aumenta un 20% el daño de tu Exorcismo.',
      },
    ],
  },
  {
    type: 'minor',
    name: 'Glifo de Captar no-muertos',
    icon: 'spell-holy-sense-undead',
    description:
      'Mientras Captar no-muertos está activo, infliges un 1% más de daño a los no-muertos.',
  },
  {
    type: 'minor',
    name: 'Glifo de Imposición de manos',
    icon: 'spell-holy-lay-on-hands',
    description:
      'Reduce 5 min el tiempo de reutilización de tu Imposición de manos.',
  },
  {
    type: 'minor',
    name: 'Glifo de Bendición de poderío',
    icon: 'spell-holy-fist-of-justice',
    description:
      'Aumenta 20 min la duración de tu Bendición de poderío cuando la lanzas sobre ti.',
  },
]

const retributionRotation: WowRotation = {
  groups: [
    {
      title: 'Prioridad',
      steps: [
        {
          label: 'Sentencia',
          icons: ['spell-holy-righteous-fury'],
        },
        {
          label: 'Tormenta divina',
          icons: ['ability-paladin-divine-storm'],
        },
        {
          label: 'Martillo de cólera',
          note: 'Si está disponible.',
          icons: ['ability-thunder-clap'],
        },
        {
          label: 'Golpe de cruzado',
          icons: ['spell-holy-crusader-strike'],
        },
        {
          label: 'Consagración',
          note: 'El orden cambia dependiendo del glifo que llevas.',
          icons: ['spell-holy-inner-fire'],
        },
        {
          label: 'Exorcismo',
          note: 'El orden cambia dependiendo del glifo que llevas.',
          icons: ['spell-holy-excorcism-02'],
        },
        {
          label: 'Cólera sagrada',
          icons: ['spell-holy-excorcism'],
        },
      ],
    },
  ],
}

const retributionPriorityGroups: WowStatPriorityGroup[] = [
  {
    title: 'General',
    stats: [
      'Cap Golpe',
      'Cap Pericia',
      'Fuerza',
      'Crítico = Agilidad',
      'Cap Celeridad',
      'ArPen',
    ],
  },
  {
    title: 'La celeridad',
    stats: [],
    notes: [
      'La celeridad depende de la velocidad de tu arma.',
      'Velocidad de arma 3.7 → 520 índice de celeridad.',
      'Velocidad de arma 3.6 → 450 índice de celeridad.',
      'Velocidad de arma 3.5 → 365 índice de celeridad.',
      'Velocidad de arma 3.4 → 280 índice de celeridad.',
    ],
  },
]

const retributionTips: WowBuildTip[] = [
  {
    text: 'No temas usar piezas de cuero o malla que lleven agilidad, ya que pueden ser mejores que las piezas de placas.',
  },
]

const protectionPriorityGroups: WowStatPriorityGroup[] = [
  {
    title: 'General',
    stats: [
      'Cap Defensa',
      'Cap Golpe',
      'Aguante',
      'Soft Cap Pericia',
      'Hard Cap Pericia',
      'Fuerza',
    ],
  },
  {
    title: 'Aguante y Resistencia',
    stats: [
      'Cap Defensa',
      'Aguante',
      'Armadura',
      'Cap Golpe',
      'Soft Cap Pericia',
    ],
  },
  {
    title: 'Daño/Aggro',
    stats: [
      'Soft Cap Pericia',
      'Cap Golpe',
      'Hard Cap Pericia',
      'Fuerza',
      'Arpen = Crit',
    ],
  },
]

const paladinProtectionPriorityGroups: WowStatPriorityGroup[] = [
  {
    title: 'General',
    stats: [
      'Cap Defensa',
      'Cap Golpe',
      'Aguante',
      'Soft Cap Pericia',
      'Hard Cap Pericia',
      'Fuerza',
    ],
  },
  {
    title: 'Aguante y Resistencia',
    stats: [
      'Cap Defensa',
      'Aguante',
      'Armadura',
      'Cap Golpe',
      'Soft Cap Pericia',
    ],
  },
  {
    title: 'Daño/Aggro',
    stats: [
      'Soft Cap Pericia',
      'Cap Golpe',
      'Hard Cap Pericia',
      'Fuerza',
      'Celeridad',
      'Crítico',
    ],
  },
]

const deathKnightBloodPriorityGroups: WowStatPriorityGroup[] =
  paladinProtectionPriorityGroups.map((group) =>
    group.title === 'Daño/Aggro'
      ? {
          ...group,
          stats: [...group.stats.slice(0, -2), 'Crítico', 'Celeridad'],
        }
      : group,
  )

const protectionRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Revancha',
          icons: ['ability-warrior-revenge'],
        },
        {
          label: 'Embate con Escudo',
          icons: ['inv-shield-05'],
        },
        {
          label: 'Devastar',
          icons: ['inv-sword-11'],
        },
        {
          label: 'Golpe heroico',
          note: 'Spammealo siempre que tengas más de 50 de ira.',
          icons: ['ability-rogue-ambush'],
        },
      ],
    },
  ],
}

const paladinProtectionRotation: WowRotation = {
  groups: [
    {
      title: 'Single Target',
      steps: [
        {
          label: 'Escudo sacro',
          note: 'Siempre activo, preferiblemente antes de iniciar el combate.',
          icons: ['ability-paladin-blessedmending'],
        },
        {
          label: 'Escudo sagrado',
          note: 'Siempre activo, preferiblemente antes del combate y mantenerlo.',
          icons: ['spell-holy-blessing-of-protection'],
        },
        {
          label: 'Súplica divina',
          note: 'Siempre activa, preferiblemente antes del combate y a partir de ahí se irá renovando con cada golpe.',
          icons: ['spell-holy-aspiration'],
        },
        {
          label: 'Martillo del honrado',
          icons: ['ability-paladin-hammer-of-the-righteous'],
        },
        {
          label: 'Escudo de rectitud',
          icons: ['ability-paladin-shield-of-vengeance'],
        },
        {
          label: 'Martillo de cólera',
          note: 'Si está disponible.',
          icons: ['ability-thunder-clap'],
        },
        {
          label: 'Escudo de vengador',
          icons: ['spell-holy-avengers-shield'],
        },
        {
          label: 'Sentencia',
          icons: ['spell-holy-righteous-fury'],
        },
        {
          label: 'Consagración',
          icons: ['spell-holy-inner-fire'],
        },
        {
          label: 'Cólera sagrada',
          icons: ['spell-holy-excorcism'],
        },
      ],
    },
    {
      title: 'Multitarget',
      steps: [
        {
          label: 'Martillo del honrado',
          icons: ['ability-paladin-hammer-of-the-righteous'],
        },
        {
          label: 'Consagración',
          icons: ['spell-holy-inner-fire'],
        },
        {
          label: 'Escudo de vengador',
          icons: ['spell-holy-avengers-shield'],
        },
        {
          label: 'Cólera sagrada',
          icons: ['spell-holy-excorcism'],
        },
      ],
    },
  ],
}

const protectionTips: WowBuildTip[] = [
  {
    text: 'Si nadie tiene un reductor de AP añade y manten Grito desmoralizador a tu rotacion',
    icons: ['ability-warrior-war-cry'],
    link: {
      label: 'Mas info sobre debuffs aqui',
      to: '/general/debuffs',
    },
  },
  {
    text: 'Si nadie tiene un reductor de velocidad de ataque añade y manten atronar a tu rotacion',
    icons: ['ability-thunder-clap'],
    link: {
      label: 'Mas info sobre debuffs aqui',
      to: '/general/debuffs',
    },
  },
]

const tankTips: WowBuildTip[] = [
  {
    text: 'Nunca le des la espalda a los enemigos',
    icons: ['icons/roles/tank.png'],
  },
]

const protectionNotice =
  'Protección es una gran opción para subir de nivel y para mazmorras. Pero en el contenido endgame de bandas de 3.3.5 es más débil que los otros tanks, especialmente contra jefes con daño mágico si no cuentas con el abalorio del Colmillo de Sindragosa. Sin embargo, para raids es una opción decente de off-tank, con algunas utilidades y ventajas.'

const holyGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Luz Sagrada',
    icon: 'spell-holy-holy-bolt',
    description:
      'Tu Luz Sagrada concede el 10% de su curación hasta 5 objetivos amistosos en 8 m del objetivo inicial.',
  },
  {
    type: 'major',
    name: 'Glifo de Señal de Luz',
    icon: 'ability-paladin-beacon-of-light',
    description: 'Aumenta 30 s la duración de tu Señal de Luz.',
  },
  {
    type: 'major',
    name: 'Glifo de Sello de sabiduría',
    icon: 'spell-holy-righteousness-aura',
    description:
      'Cuando Sello de sabiduría está activo, el coste de tus hechizos de sanación se reduce un 5%.',
  },
  {
    type: 'minor',
    name: 'Glifo de Imposición de manos',
    icon: 'spell-holy-lay-on-hands',
    description:
      'Reduce 5 min el tiempo de reutilización de tu Imposición de manos.',
  },
  {
    type: 'minor',
    name: 'Glifo de Bendición de Sabiduría',
    icon: 'spell-holy-seal-of-wisdom',
    description:
      'Aumenta 20 min la duración de tu Bendición de Sabiduría cuando la lanzas sobre ti.',
  },
  {
    type: 'minor',
    name: 'Glifo de Bendición de Reyes',
    icon: 'spell-magic-mage-armor',
    description:
      'Reduce un 50% el coste de maná de tu Bendición de Reyes y de tu Bendición superior de Reyes.',
  },
]

const holyPriority = [
  'Intelecto',
  'Celeridad',
  'Crítico',
  'MP5 (Mana cada 5 segundos)',
]

const holyRotation: WowRotation = {
  groups: [
    {
      title: 'Prioridad',
      steps: [
        {
          label: 'Señal de Luz',
          note: 'Mantener en el tanque principal.',
          icons: ['ability-paladin-beacon-of-light'],
        },
        {
          label: 'Luz Sagrada',
          note: 'Hechizo principal.',
          icons: ['spell-holy-holy-bolt'],
        },
        {
          label: 'Escudo sacro',
          note: 'Mantener en el tanque que no sea paladín.',
          icons: ['ability-paladin-blessedmending'],
        },
        {
          label: 'Choque sagrado',
          note: 'Cura de emergencia.',
          icons: ['spell-holy-searinglight'],
        },
        {
          label: 'Destello de Luz',
          note: 'No recomendado en bandas.',
          icons: ['spell-holy-flashheal'],
        },
      ],
    },
  ],
}

const holyTips: WowBuildTip[] = [
  {
    text: 'Acostúmbrate a usar Súplica divina en tiempos muertos donde no se requiera mucha curación, o combínala con un amplificador de heal o un abalorio para mitigar la reducción de curación.',
    icons: ['spell-holy-aspiration'],
  },
  {
    text: 'En tiempos muertos también golpea siempre que puedas con ataques básicos: con el Sello de sabiduría y la Sentencia del sabio regenerarás maná decentemente.',
    icons: ['spell-holy-righteousness-aura'],
  },
  {
    text: 'No dependas de la Sentencia de Luz para curar. Si hay otro paladín que la lanza, usa otra sentencia solo para activar tu buff de Sentencias del puro.',
    icons: ['spell-holy-righteous-fury'],
  },
  {
    text: 'Aprender a predecir el daño te hará un mejor heal.',
    icons: ['icons/roles/healer.png'],
  },
]

const druidRestorationGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Crecimiento salvaje',
    icon: 'ability-druid-flourish',
    description: 'Crecimiento salvaje puede afectar hasta a 1 objetivo extra.',
  },
  {
    type: 'major',
    name: 'Glifo de Alivio Presto',
    icon: 'inv-relics-idol-of-rejuvenation',
    description:
      'Tu facultad Alivio presto ya no consume un efecto de Rejuvenecimiento ni de Recrecimiento del objetivo.',
  },
  {
    type: 'major',
    name: 'Glifo de Nutrir',
    icon: 'ability-druid-nourish',
    badge: '3 opciones',
    description:
      'Las sanaciones de tu Nutrir sanan un 6% extra por cada uno de tus efectos de sanación en el tiempo presentes en el objetivo.',
    featured: true,
    options: [
      {
        name: 'Glifo de Nutrir',
        icon: 'ability-druid-nourish',
        description:
          'Las sanaciones de tu Nutrir sanan un 6% extra por cada uno de tus efectos de sanación en el tiempo presentes en el objetivo.',
      },
      {
        name: 'Glifo de Estimular',
        icon: 'spell-nature-lightning',
        description:
          'Estimular ahora otorga al taumaturgo un 45% de su reserva de maná de base durante 10 sec además de los efectos normales de Estimular.',
      },
      {
        name: 'Glifo de Rejuvenecimiento',
        icon: 'spell-nature-rejuvenation',
        description:
          'Mientras tus objetivos de Rejuvenecimiento se encuentren por debajo del 50% de salud, les sanarás un 50% adicional de salud.',
      },
    ],
  },
  {
    type: 'minor',
    name: 'Glifo de Renacer desahogado',
    icon: 'spell-nature-reincarnation',
    description: 'Tu hechizo Renacer ya no necesita un componente.',
  },
  {
    type: 'minor',
    name: 'Glifo de lo Salvaje',
    icon: 'spell-nature-gift-of-the-wild',
    description:
      'Coste de maná de tus hechizos Marca de lo Salvaje y Don de lo Salvaje reducido un 50%.',
  },
  {
    type: 'minor',
    name: 'Glifo de Carrerilla',
    icon: 'ability-druid-dash',
    description: 'Reduce un 20% el tiempo de reutilización de tu facultad Carrerilla.',
  },
]

const druidRestorationPriorityGroups: WowStatPriorityGroup[] = [
  {
    title: 'ORDEN DE PRIORIDAD DE ESTADÍSTICAS',
    stats: [
      'Cap Celeridad',
      'Poder con Hechizos (SP)',
      'Espíritu',
      'Crítico',
      'Intelecto',
      'Mana por 5 segundos (MP5)',
    ],
  },
]

const druidRestorationStats: WowStatRow[] = [
  {
    label: 'Índice de celeridad',
    value: '856',
    note: '26.40% de celeridad',
  },
]

const druidRestorationRotation: WowRotation = {
  groups: [
    {
      title: 'Prioridad',
      steps: [
        {
          label: 'Rejuvenecimiento',
          note: 'Mantener activo en la banda.',
          icons: ['spell-nature-rejuvenation'],
        },
        {
          label: 'Crecimiento salvaje',
          note: 'Usarlo a CD en la banda.',
          icons: ['ability-druid-flourish'],
        },
        {
          label: 'Recrecimiento',
          note: 'Mantener solamente en los tanques o alguno que se esté llevando mucho daño',
          icons: ['spell-nature-resistnature'],
        },
        {
          label: 'Nutrir',
          note: 'Cura principal para levantar a cualquiera.',
          icons: ['ability-druid-nourish'],
        },
        {
          label: 'Alivio presto',
          note: 'Cura grande de emergencia.',
          icons: ['inv-relics-idol-of-rejuvenation'],
        },
      ],
    },
  ],
}

const druidRestorationTips: WowBuildTip[] = [
  {
    text: 'Siempre mantente spameando Rejuvenecimiento en la banda, es tu hechizo principal de curación.',
    icons: ['spell-nature-rejuvenation'],
  },
  {
    text: 'Usa tu Crecimiento salvaje a CD en la banda, es tu hechizo de curación en área más fuerte que tienes.',
    icons: ['ability-druid-flourish'],
  },
  {
    text: 'Usa tu Flor de Vida en conjunto de procs de Lanzamiento Libre para regenerar mana.',
    icons: ['inv-misc-herb-felblossom'],
  },
  {
    text: 'Mantén Recrecimiento activo en los tanques, usa tu Nutrir cuando sea posible.',
    icons: ['spell-nature-resistnature', 'ability-druid-nourish'],
  },
]

const druidferalDpsGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Triturar (o Flebotomia)',
    icon: 'spell_shadow_vampiricaura',
    description: 'Cada vez que usas Triturar, la duración de Destripar se extiende 2 segundos en el objetivo, hasta un máximo de 6 segundos.',
  },
  {
    type: 'major',
    name: 'Glifo de Destripar',
    icon: 'ability_ghoulfrenzy',
    description:
      'Aumenta la duración de tu facultad Destripar en 4 segundos.',
  },
  {
    type: 'major',
    name: 'Glifo de Rugido Salvaje',
    icon: 'ability_druid_skinteeth',
    description:
      'Tu facultad Rugido salvaje otorga una bonificación adicional del 3% al daño infligido. ',
  },
  {
    type: 'minor',
    name: 'Glifo de Renacer desahogado',
    icon: 'spell-nature-reincarnation',
    description: 'Tu hechizo Renacer ya no necesita un componente.',
  },
  {
    type: 'minor',
    name: 'Glifo de lo Salvaje',
    icon: 'spell-nature-gift-of-the-wild',
    description:
      'Coste de maná de tus hechizos Marca de lo Salvaje y Don de lo Salvaje reducido un 50%.',
  },
  {
    type: 'minor',
    name: 'Glifo de Carrerilla',
    icon: 'ability-druid-dash',
    description: 'Reduce un 20% el tiempo de reutilización de tu facultad Carrerilla.',
  },
]

const druidferalDpsPriorityGroups: WowStatPriorityGroup[] = [
  {
    title: 'ORDEN DE PRIORIDAD DE ESTADÍSTICAS',
    stats: [
      'Cap de Índice de golpe',
      'Cap de Pericia',
      'Hard Cap de ArPen',
      'Crítico = Agilidad',
      'Soft Cap de ArPen',
      'Celeridad',
    ],
  },
]

const druidferalDpsStats: WowStatRow[] = [
  {
    label: 'Índice de golpe',
    value: '8%',
  },
  {
    label: 'Pericia',
    value: '26',
  },
  {
    label: 'Penetracion de Armadura (ArPen) · Soft cap',
    value: '722 (51.57%)',
  },
  {
    label: 'Penetracion de Armadura (ArPen) · Hard cap',
    value: '1400 (100%)',
  }
]

const druidferalDpsRotation: WowRotation = {
  groups: [
    {
      title: 'Prioridad',
      steps: [
        {
          label: 'Mantener Rugido Salvaje activo',
          note: 'Siempre activo, aunque sea con 1 punto de combo.',
          icons: ['ability-druid-skinteeth'],
        },
        {
          label: 'Mantener Destripar activo',
          note: 'Siempre con 5 puntos de combo.',
          icons: ['ability-ghoulfrenzy'],
        },
        {
          label: 'Mantener Arañazo activo',
          icons: ['ability-druid-disembowel'],
        },
        {
          label: 'Triturar',
          note: 'Filler principal, generador de puntos de combo.',
          icons: ['spell-shadow-vampiric-aura'],
        },
        {
          label: 'Destrozar',
          icons: ['ability-druid-mangle-2'],
        },
        {
          label: 'Mordedura Feroz',
          note: 'Usar siempre con 5 puntos de combo, es un arma de doble filo, puede subir mucho tu dps o hacerlo decaer.',
          icons: ['ability-druid-ferocious-bite'],
        },
      ],
    },
  ],
}

const druidferalDpsTips: WowBuildTip[] = [
  {
    text: 'Nunca dejes caer tu Rugido Salvaje, es tu buff de daño más importante.',
    icons: ['ability-druid-skinteeth'],
  },
  {
    text: '8-7 Segundos antes del pull, lanza tu Don de lo Salvaje para tener Lanzamiento libre.',
    icons: ['spell-nature-regeneration', 'spell-nature-crystal-ball'],
  },
  {
    text: 'Usa siempre Destripar y Mordedura Feroz con 5 puntos de combo.',
    icons: ['ability-ghoulfrenzy', 'ability-druid-ferocious-bite'],
  },
  {
    text: 'Usa tu Furia del Tigre en momentos clave de la rotación.',
    icons: ['ability-mount-jungletiger'],
  },
  {
    text: 'Usa tu Mordedura Feroz con cuidado, no dejes caer tu rugido o destripar por usar una mordedura.',
    icons: ['ability-druid-ferocious-bite', 'ability-druid-skinteeth', 'ability-ghoulfrenzy'],
  },
]

const armsNotice =
  'Armas es una gran opción para subir de nivel y cuando eres fresh 80 con equipo bajo. Pero en cuanto pasas a un equipo decente (GS 3.500+), Furia comienza a ganar mayor daño en PvE. Si ya estás en ese punto, cambiar a Furia te dará mucho más rendimiento.'

const armsRotation: WowRotation = {
  groups: [
    {
      title: 'Single Target',
      steps: [
        {
          label: 'Desgarrar',
          note: 'Manténlo activo siempre.',
          icons: ['ability-gouge'],
        },
        {
          label: 'Abrumar',
          note: 'Úsalo cada vez que esté disponible.',
          icons: ['ability-meleeda-mage'],
        },
        {
          label: 'Ejecutar',
          icons: ['inv-sword-48'],
        },
        {
          label: 'Golpe mortal',
          icons: ['ability-warrior-savage-blow'],
        },
        {
          label: 'Hender Armadura',
          note: 'Hasta 5 acumulaciones y mantenlo activo.',
          icons: ['ability-warrior-sunder'],
        },
        {
          label: 'Embate',
          icons: ['ability-warrior-decisive-strike'],
        },
        {
          label: 'Golpe heroico',
          note: 'Spammealo siempre que tengas más de 50 de ira.',
          icons: ['ability-rogue-ambush'],
        },
      ],
    },
    {
      title: 'Multitarget',
      steps: [
        {
          label: 'Golpes de barrido + Filotormenta',
          icons: ['ability-rogue-slicedice', 'ability-warrior-blade-storm'],
        },
        {
          label: 'Rajar',
          icons: ['ability-warrior-cleave'],
        },
        {
          label: 'Atronar',
          note: 'Con más de 5 objetivos, va antes de Rajar.',
          icons: ['ability-thunder-clap'],
        },
      ],
    },
  ],
}

const armsTips = [
  'No recomiendo utilizar macros que añadan Golpe heroico y/o Rajar a tus otras habilidades, sobre todo cuando estás aprendiendo y estás por debajo de 5.500 de GS (no te sobra la ira).',
  'Sí recomiendo hacer macros con /startattack en tus habilidades para asegurarte de que siempre estás golpeando.',
  'En realidad Hender Armadura va antes que nada en el orden de prioridades: de esa manera el daño del grupo sube bastante, sobre todo mientras más DPS de daño físico tengas. Pero para evitar que pierdas mucho daño en el proceso, muchos lo tiran en tiempos muertos (cuando tus habilidades principales están en CD).',
]

const dpsStats: WowStatRow[] = [
  'Índice de golpe',
  'Pericia',
  'Índice de golpe crítico',
  'Índice de celeridad',
].map((label) => ({ label }))

const priestDisciplinaStats: WowStatRow[] = [
  { label: 'Celeridad', value: '154', note: 'Cap de celeridad' },
]

const priestDisciplinaPriority = [
  'Poder con Hechizos (SP)',
  'Cap Celeridad',
  'Intelecto',
  'Crítico',
  'MP5',
  'Spirit',
]

const priestDisciplinaGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Palabra de poder: escudo',
    icon: 'spell-holy-powerword-shield',
    description: 'Tu Palabra de poder: escudo también sana al objetivo un 20% de la cantidad absorbida.',
  },
  {
    type: 'major',
    name: 'Glifo de Penitencia',
    icon: 'spell-holy-penance',
    description: 'Reduce el tiempo de reutilización de Penitencia 2 s.',
  },
  {
    type: 'major',
    name: 'Glifo de Rezo de sanación',
    icon: 'spell-holy-prayer-of-healing-02',
    description: 'Tu hechizo Rezo de sanación también sana un 20% adicional de su sanación inicial durante 6s.',
  },
  {
    type: 'minor',
    name: 'Glifo de Maligno de las Sombras',
    icon: 'spell-shadow-shadowfiend',
    description: 'Recibes un 5% de tu maná máximo si tu maligno de las Sombras muere a causa del daño.',
  },
  {
    type: 'minor',
    name: 'Glifo de Entereza',
    icon: 'spell-holy-wordfortitude',
    description: 'Reduce un 50% el coste de maná de tus hechizos Palabra de poder: entereza y rezo de entereza.',
  },
  {
    type: 'minor',
    name: 'Glifo de Levitar',
    icon: 'spell-holy-lay-on-hands',
    description: 'Levitar ya no requiere un componente.',
  },
]

const priestDisciplinaRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Palabra de poder: escudo',
          note: 'Hechizo principal.',
          icons: ['spell-holy-powerword-shield'],
        },
        {
          label: 'Penitencia',
          icons: ['spell-holy-penance'],
        },
        {
          label: 'Sanación relámpago',
          icons: ['spell-holy-flashheal'],
        },
        {
          label: 'Sanación conjunta',
          note: 'Solo si tú y otro objetivo necesitan curación.',
          icons: ['spell-holy-blindingheal'],
        },
        {
          label: 'Renovar',
          note: 'Muy rara vez; solo cuando no tienes nada que curar o escudear. Puedes ponerlo en el tanque.',
          icons: ['spell-holy-renew'],
        },
      ],
    },
    {
      title: 'Multitarget',
      steps: [
        {
          label: 'Palabra de poder: escudo',
          note: 'Hechizo principal.',
          icons: ['spell-holy-powerword-shield'],
        },
        {
          label: 'Rezo de alivio',
          icons: ['spell-holy-prayer-of-mending'],
        },
        {
          label: 'Rezo de sanación',
          icons: ['spell-holy-prayer-of-healing-02'],
        },
      ],
    },
  ],
}

const priestDisciplinaTips: WowBuildTip[] = [
  {
    text: 'En algunos casos debes poner escudos (escudear) varios segundos antes de que empiece el combate, dándote una ventaja abismal sobre otros sanadores.',
    icons: ['spell-holy-powerword-shield'],
  },
]

const priestSagradoStats: WowStatRow[] = []

const priestSagradoPriority = [
  'Celeridad',
  'Poder con Hechizos (SP)',
  'Espíritu',
  'Intelecto',
  'Crítico',
  'MP5',
]

const priestSagradoGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Círculo de sanación',
    icon: 'spell-holy-circle-of-renewal',
    description: 'Tu hechizo Círculo de sanación sana a un objetivo adicional.',
  },
  {
    type: 'major',
    name: 'Glifo de Rezo de sanación',
    icon: 'spell-holy-prayer-of-healing-02',
    description: 'Tu hechizo Rezo de sanación también sana un 20% adicional de su sanación inicial durante 6s.',
  },
  {
    type: 'major',
    name: 'Glifo de Ángel Guardián',
    icon: 'spell-holy-guardian-spirit',
    badge: '2 opciones',
    description:
      'Si Ángel Guardián dura todo su tiempo sin activarse, su tiempo de reutilización se reduce a 1 min.',
    featured: true,
    options: [
      {
        name: 'Glifo de Ángel Guardián',
        icon: 'spell-holy-guardian-spirit',
        description:
          'Si Ángel Guardián dura todo su tiempo sin activarse, su tiempo de reutilización se reduce a 1 min.',
      },
      {
        name: 'Glifo de Palabra de poder: escudo',
        icon: 'spell-holy-powerword-shield',
        description:
          'Tu Palabra de poder: escudo también sana al objetivo un 20% de la cantidad absorbida.',
      },
    ],
  },
  {
    type: 'minor',
    name: 'Glifo de Maligno de las Sombras',
    icon: 'spell-shadow-shadowfiend',
    description: 'Recibes un 5% de tu maná máximo si tu maligno de las Sombras muere a causa del daño.',
  },
  {
    type: 'minor',
    name: 'Glifo de Entereza',
    icon: 'spell-holy-wordfortitude',
    description: 'Reduce un 50% el coste de maná de tus hechizos Palabra de poder: entereza y rezo de entereza.',
  },
  {
    type: 'minor',
    name: 'Glifo de Levitar',
    icon: 'spell-holy-lay-on-hands',
    description: 'Levitar ya no requiere un componente.',
  },
]

const priestSagradoRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Rezo de alivio',
          icons: ['spell-holy-prayer-of-mending'],
        },
        {
          label: 'Renovar',
          icons: ['spell-holy-renew'],
        },
        {
          label: 'Sanación relámpago',
          icons: ['spell-holy-flashheal'],
        },
        {
          label: 'Sanación superior',
          icons: ['spell-holy-greaterheal'],
        },
        {
          label: 'Palabra de poder: escudo',
          icons: ['spell-holy-powerword-shield'],
        },
      ],
    },
    {
      title: 'Multitarget',
      steps: [
        {
          label: 'Rezo de alivio',
          icons: ['spell-holy-prayer-of-mending'],
        },
        {
          label: 'Círculo de sanación',
          icons: ['spell-holy-circle-of-renewal'],
        },
        {
          label: 'Renovar',
          icons: ['spell-holy-renew'],
        },
        {
          label: 'Rezo de sanación',
          icons: ['spell-holy-prayer-of-healing-02'],
        },
        {
          label: 'Palabra de poder: escudo',
          icons: ['spell-holy-powerword-shield'],
        },
      ],
    },
  ],
}

const priestSombraStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '11%' },
  { label: 'Índice de celeridad', value: '1269' },
]

const priestSombraPriority = [
  'Cap Golpe',
  'Poder con Hechizos (SP)',
  'Celeridad',
  'Crítico',
  'Espíritu',
]

const priestSombraGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Sombra',
    icon: 'spell-shadow-shadow-form',
    description:
      'Mientras estés en Forma de las Sombras, tus golpes críticos no periódicos aumentan tu poder con hechizos un 30% de tu espíritu durante 10 s.',
  },
  {
    type: 'major',
    name: 'Glifo de Tortura mental',
    icon: 'spell-shadow-siphonmana',
    description:
      'Aumenta el daño de Tortura mental un 10% si el objetivo tiene Palabra de las Sombras: dolor activa.',
  },
  {
    type: 'major',
    name: 'Glifo de Palabra de las Sombras: muerte',
    icon: 'spell-shadow-demonicfortitude',
    description:
      'Los objetivos por debajo del 35% de salud reciben un 10% de daño adicional de tu Palabra de las Sombras: muerte.',
  },
  {
    type: 'minor',
    name: 'Glifo de Maligno de las Sombras',
    icon: 'spell-shadow-shadowfiend',
    description: 'Recibes un 5% de tu maná máximo si tu maligno de las Sombras muere a causa del daño.',
  },
  {
    type: 'minor',
    name: 'Glifo de Entereza',
    icon: 'spell-holy-wordfortitude',
    description: 'Reduce un 50% el coste de maná de tus hechizos Palabra de poder: entereza y rezo de entereza.',
  },
  {
    type: 'minor',
    name: 'Glifo de Levitar',
    icon: 'spell-holy-lay-on-hands',
    description: 'Levitar ya no requiere un componente.',
  },
]

const priestSombraRotation: WowRotation = {
  groups: [
    {
      title: 'Rotación',
      steps: [
        {
          label: 'Mantener Toque vampírico',
          icons: ['spell-holy-stoicism'],
        },
        {
          label: 'Mantener Peste devoradora',
          icons: ['spell-shadow-devouringplague'],
        },
        {
          label: 'Mantener Palabra de las Sombras: dolor',
          note: 'Se mantiene con Tortura mental, así que solo tíralo una vez.',
          icons: ['spell-shadow-shadowwordpain'],
        },
        {
          label: 'Explosión mental',
          icons: ['spell-shadow-unholyfrenzy'],
        },
        {
          label: 'Tortura mental',
          icons: ['spell-shadow-siphonmana'],
        },
        {
          label: 'Palabra de las Sombras: muerte',
          note: 'Solo si necesitas moverte y tu Peste devoradora tiene más de 6 segundos de duración restante.',
          icons: ['spell-shadow-demonicfortitude'],
        },
      ],
    },
  ],
}

const priestSombraMindFlayRotation: WowRotation = {
  groups: [
    {
      title: 'Rotación',
      steps: [
        {
          label: 'Mantener Toque vampírico',
          icons: ['spell-holy-stoicism'],
        },
        {
          label: 'Mantener Peste devoradora',
          icons: ['spell-shadow-devouringplague'],
        },
        {
          label: 'Mantener Palabra de las Sombras: dolor',
          note: 'Se mantiene con Tortura mental, así que solo tíralo una vez.',
          icons: ['spell-shadow-shadowwordpain'],
        },
        {
          label: 'Tortura mental',
          icons: ['spell-shadow-siphonmana'],
        },
        {
          label: 'Palabra de las Sombras: muerte',
          note: 'Solo si necesitas moverte y tu Peste devoradora tiene más de 6 segundos de duración restante.',
          icons: ['spell-shadow-demonicfortitude'],
        },
      ],
    },
  ],
}

const priestSombraMindFlayNotice =
  'Esta build debe usarse en cuanto tengas 4 piezas de Tier 10 de Sombras y en esta build se deja de utilizar por completo la explosión mental.'

const deathKnightMinorGlyphs: WowGlyphSlot[] = [
  {
    type: 'minor',
    name: 'Glifo de Levantar no muerto',
    icon: 'spell-shadow-animatedead',
    description: 'Levantar no muerto ya no requiere un componente.',
  },
  {
    type: 'minor',
    name: 'Glifo de Pestilencia',
    icon: 'spell-shadow-plaguecloud',
    description: 'Aumenta 5 m el radio de Pestilencia.',
  },
  {
    type: 'minor',
    name: 'Glifo de Transfusión de sangre',
    icon: 'spell-death-knight-bloodtap',
    description: 'Transfusión de sangre ya no causa daño.',
  },
]

const deathKnightBloodGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Enfermedad',
    icon: 'spell-shadow-plaguecloud',
    description:
      'Pestilencia ahora refresca la duración de las enfermedades y sus efectos secundarios en tu objetivo principal hasta su duración máxima.',
  },
  {
    type: 'major',
    name: 'Glifo de Sangre vampírica',
    icon: 'spell-shadow-lifedrain',
    description: 'Aumenta la duración de Sangre vampírica 5 s.',
  },
  {
    type: 'major',
    name: 'Glifo de Golpe rúnico',
    icon: 'spell-death-knight-darkconviction',
    description: 'Aumenta la probabilidad de golpe crítico de Golpe rúnico un 10%.',
  },
  ...deathKnightMinorGlyphs,
]

const deathKnightBloodRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Toque helado para Fiebre de Escarcha',
          icons: [
            'spell-death-knight-ice-touch',
            'spell-death-knight-frostfever',
          ],
        },
        {
          label: 'Golpe de peste para Peste de Sangre',
          icons: [
            'spell-death-knight-empowerruneblade',
            'spell-death-knight-bloodplague',
          ],
        },
        {
          label: 'Pestilencia',
          note: 'gracias al glifo esta habilidad renueva las pestes anterior mencionadas',
          icons: ['spell-shadow-plaguecloud'],
        },
        {
          label: 'Golpe rúnico',
          note: 'Spammearlo siempre que tengas 40 o más de poder rúnico.',
          icons: ['spell-death-knight-darkconviction'],
        },
      ],
    },
    {
      title: 'A partir de aquí, la rotación se divide en dos ramas: más agro o más daño/curación',
      steps: [],
    },
    {
      title: 'Unitarget — Más agro',
      steps: [
        {
          label: 'Spam Toque helado',
          note: 'Puedes usar Transfusión de sangre y/o Potenciar arma de runas para lanzar más Toques helados.',
          icons: [
            'spell-death-knight-ice-touch',
            'spell-death-knight-bloodtap',
            'inv-sword-62',
          ],
        },
        {
          label: 'Golpe de peste',
          icons: ['spell-death-knight-empowerruneblade'],
        },
        {
          label: 'Golpe sangriento',
          icons: ['spell-death-knight-death-strike'],
        },
      ],
    },
    {
      title: 'Unitarget — Más daño/curación',
      steps: [
        {
          label: 'Golpe letal',
          note: 'Puedes usar Potenciar arma de runas para lanzar más Golpes letales, pero cuidado de no perder las pestes.',
          icons: [
            'spell-death-knight-butcher-2',
            'inv-sword-62',
          ],
        },
        {
          label: 'Golpe sangriento',
          icons: ['spell-death-knight-death-strike'],
        },
      ],
    },
    {
      title: 'Multitarget',
      steps: [
        {
          label: 'Muerte y Descomposición (DnD)',
          icons: ['spell-shadow-deathanddecay'],
        },
        {
          label: 'Toque helado',
          icons: ['spell-death-knight-ice-touch'],
        },
        {
          label: 'Golpe de peste',
          icons: ['spell-death-knight-empowerruneblade'],
        },
        {
          label: 'Pestilencia',
          icons: ['spell-shadow-plaguecloud'],
        },
        {
          label: 'Hervor de sangre',
          icons: ['spell-death-knight-bloodboil'],
        },
      ],
    },
  ],
}

const deathKnightFrostStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '5%' },
  { label: 'Índice de golpe Hechizos', value: '11%' },
  { label: 'Pericia', value: '26/26' },
  {
    label: 'Penetración de armadura (ArPen) · Soft cap',
    value: '722 (51.57%)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Hard cap',
    value: '1400 (100%)',
  },
]

const deathKnightFrostPriority = [
  'Cap Golpe',
  'Hard Cap ArPen',
  'Cap Pericia',
  'Fuerza',
  'Crítico',
  'Cap Golpe Hechizos',
  'Soft Cap Arpen',
  'Celeridad',
]

const deathKnightFrostGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Asolar',
    icon: 'spell-death-knight-class-icon',
    description: 'Aumenta un 25% el daño de tu facultad Asolar.',
  },
  {
    type: 'major',
    name: 'Glifo de Golpe de Escarcha',
    icon: 'spell-death-knight-empowerruneblade-2',
    description: 'Reduce el coste de tu Golpe de Escarcha en 8 de poder rúnico.',
  },
  {
    type: 'major',
    name: 'Glifo de Enfermedad',
    icon: 'spell-shadow-plaguecloud',
    description:
      'Pestilencia ahora refresca la duración de las enfermedades y sus efectos secundarios en tu objetivo principal hasta su duración máxima.',
  },
  ...deathKnightMinorGlyphs,
]

const deathKnightFrostRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Toque helado para Fiebre de Escarcha',
          icons: [
            'spell-death-knight-ice-touch',
            'spell-death-knight-frostfever',
          ],
        },
        {
          label: 'Golpe de peste para Peste de Sangre',
          icons: [
            'spell-death-knight-empowerruneblade',
            'spell-death-knight-bloodplague',
          ],
        },
        {
          label: 'Pestilencia',
          note: 'gracias al glifo esta habilidad renueva las pestes anterior mencionadas',
          icons: ['spell-shadow-plaguecloud'],
        },
        {
          label: 'Asolar',
          icons: ['spell-death-knight-class-icon'],
        },
        {
          label: 'Golpe de Escarcha (Con el buff de Máquina de matar)',
          icons: [
            'spell-death-knight-empowerruneblade-2',
            'inv-sword-122',
          ],
        },
        {
          label: 'Explosión aullante (Si tienes el efecto de Niebla congelante)',
          icons: [
            'spell-frost-arcticwinds',
            'spell-frost-freezingbreath',
          ],
        },
        {
          label: 'Golpe de Escarcha (Sin el buff de máquina de matar)',
          icons: ['spell-death-knight-empowerruneblade-2'],
        },
        {
          label: 'Golpe sangriento',
          icons: ['spell-death-knight-death-strike'],
        },
      ],
    },
  ],
}

const deathKnightUnholyStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '8%' },
  { label: 'Índice de golpe Hechizos', value: '11%' },
  { label: 'Pericia', value: '26' },
]

const deathKnightUnholyDwStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '8%' },
  { label: 'Índice de golpe Hechizos', value: '11%' },
  { label: 'Pericia', value: '26/26' },
]

const deathKnightUnholyPriority = [
  'Cap Golpe',
  'Fuerza',
  'Celeridad',
  'Crítico',
  'ArPen',
  'Cap Golpe Hechizos',
  'ArPen',
  'Cap Pericia',
]

const deathKnightUnholyDwPriority = [
  'Cap Golpe',
  'Fuerza',
  'Celeridad',
  'Cap Golpe Hechizos',
  'Crítico',
  'ArPen',
  'ArPen',
  'Cap Pericia',
]

const deathKnightUnholyGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Muerte oscura',
    icon: 'spell-shadow-deathcoil',
    description: 'Aumenta un 15% el daño de tu Espiral de la muerte.',
  },
  {
    type: 'major',
    name: 'Glifo del necrófago',
    icon: 'ability_ghoulfrenzy',
    description: 'Tu necrófago recibe un 40% adicional de tu fuerza y aguante.',
  },
  {
    type: 'major',
    name: 'Glifo de Toque helado',
    icon: 'spell-death-knight-ice-touch',
    description: 'Fiebre de Escarcha inflige un 20% más de daño.',
    badge: '2 opciones',
    featured: true,
    options: [
      {
        name: 'Glifo de Toque helado',
        icon: 'spell-death-knight-ice-touch',
        description: 'Fiebre de Escarcha inflige un 20% más de daño.',
        reason: 'Para la build de Build principal',
      },
      {
        name: 'Glifo de Muerte y descomposición',
        icon: 'spell-shadow-deathanddecay',
        description: 'Aumenta un 20% el daño de Muerte y Descomposición.',
        reason: 'Para la build de Dual Wielding',
      },
    ],
  },
  ...deathKnightMinorGlyphs,
]

const deathKnightUnholyDwGlyphs: WowGlyphSlot[] = deathKnightUnholyGlyphs.map(
  (glyph) =>
    glyph.name === 'Glifo de Toque helado'
      ? {
          type: glyph.type,
          name: 'Glifo de Muerte y descomposición',
          icon: 'spell-shadow-deathanddecay',
          description: 'Aumenta un 20% el daño de Muerte y Descomposición.',
        }
      : glyph,
)

const deathKnightUnholyRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Toque helado para mantener Fiebre de Escarcha',
          icons: [
            'spell-death-knight-ice-touch',
            'spell-death-knight-frostfever',
          ],
        },
        {
          label: 'Golpe de peste para mantener Peste de sangre',
          icons: [
            'spell-death-knight-empowerruneblade',
            'spell-death-knight-bloodplague',
          ],
        },
        {
          label: 'Golpe sangriento para mantener Desolación',
          icons: ['spell-death-knight-death-strike', 'spell-shadow-unholyfrenzy'],
        },
        {
          label: 'Golpe de la Plaga',
          icons: ['spell-death-knight-scourge-strike'],
        },
        {
          label: 'Espiral de la muerte',
          icons: ['spell-shadow-deathcoil'],
        },
      ],
    },
  ],
}

const deathKnightUnholyDwRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Toque helado para mantener Fiebre de Escarcha',
          icons: [
            'spell-death-knight-ice-touch',
            'spell-death-knight-frostfever',
          ],
        },
        {
          label: 'Golpe de peste para mantener Peste de sangre',
          icons: [
            'spell-death-knight-empowerruneblade',
            'spell-death-knight-bloodplague',
          ],
        },
        {
          label: 'Golpe sangriento para mantener Desolación',
          icons: ['spell-death-knight-death-strike', 'spell-shadow-unholyfrenzy'],
        },
        {
          label: 'Muerte y descomposición',
          icons: ['spell-shadow-deathanddecay'],
        },
        {
          label: 'Golpe de la Plaga',
          icons: ['spell-death-knight-scourge-strike'],
        },
        {
          label: 'Espiral de la muerte',
          icons: ['spell-shadow-deathcoil'],
        },
        {
          label: 'Furia del necrófago',
          icons: ['spell-shadow-unholyfrenzy'],
        },
      ],
    },
  ],
}

const deathKnightUnholyTips: WowBuildTip[] = [
  {
    text: 'Invocar Gárgola es el hechizo más poderoso del Profano por lo que deberás lanzarlo (normalmente al inicio) cuando tengas el mayor número de buffs posibles que aumenten tu Celeridad y Poder de ataque o Fuerza.',
    icons: ['ability-hunter-pet-bat'],
  },
]

const deathKnightUnholyDwNotice =
  'Unholy DW, es decir Profano con armas de 1 mano, es la mejor opción hasta obtener Agonía de las Sombras.'

const tankStats: WowStatRow[] = [
  { label: 'Índice de defensa', value: '540' },
  { label: 'Índice de golpe', value: '8%' },
  { label: 'Pericia · Soft cap', value: '26' },
  { label: 'Pericia · Hard cap', value: '56' },
]

const retributionStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '8%' },
  { label: 'Pericia', value: '16', note: '26 - 10 por el glifo' },
]


const hunterBestiasNotice =
  'A pesar de que esta spec es la mejor para subir de nivel y cuando estás fresh 80, a medida que te armas, Supervivencia y Puntería comienzan a superarla por mucho.'

const hunterSupervivenciaNotice =
  'Supervivencia es una especialización exigente: para maximizar el daño, casi siempre tendrás que recurrir al trap weaving, ya que Trampa explosiva inflige mucho más daño que Flecha negra.'

const hunterBestiasStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '8%' },
]

const hunterBestiasGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Cólera de las bestias',
    icon: 'ability-druid-ferocious-bite',
    description: 'Reduce 20 s el tiempo de reutilización de tu Cólera de las bestias.',
  },
  {
    type: 'major',
    name: 'Glifo de Trampa explosiva',
    icon: 'spell-fire-self-destruct',
    description: 'El daño periódico de tu Trampa explosiva puede ser golpe crítico.',
  },
  {
    type: 'major',
    name: 'Glifo de Disparo firme',
    icon: 'ability-hunter-steady-shot',
    description:
      'Aumenta un 10% el daño de tu Disparo firme si tienes una picadura sobre el objetivo.',
  },
  {
    type: 'minor',
    name: 'Glifo de Fingir muerte',
    icon: 'ability-rogue-feign-death',
    description: 'Reduce 5 s el tiempo de reutilización de tu Fingir muerte.',
  },
  {
    type: 'minor',
    name: 'Glifo de Aliviar mascota',
    icon: 'ability-hunter-mend-pet',
    description: 'Aumenta ligeramente la felicidad de tu mascota con Aliviar mascota.',
  },
  {
    type: 'minor',
    name: 'Glifo de Revivir mascota',
    icon: 'ability-hunter-beast-soothe',
    description: 'Reduce a cero el retroceso al lanzar Revivir mascota.',
  },
]

const hunterPunteriaGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Picadura de serpiente',
    icon: 'ability-hunter-quick-shot',
    description: 'Aumenta 6 s la duración de tu Picadura de serpiente.',
  },
  {
    type: 'major',
    name: 'Glifo de Disparo de quimera',
    icon: 'ability-hunter-chimera-shot-2',
    description: 'Reduce 1 s el tiempo de reutilización de tu Disparo de quimera.',
  },
  {
    type: 'major',
    name: 'Glifo de Disparo firme',
    icon: 'ability-hunter-steady-shot',
    description:
      'Aumenta un 10% el daño infligido por Disparo firme cuando el objetivo está afectado por Picadura de serpiente.',
    badge: '3 opciones',
    featured: true,
    options: [
      {
        name: 'Glifo de Disparo firme',
        icon: 'ability-hunter-steady-shot',
        description:
          'Aumenta un 10% el daño infligido por Disparo firme cuando el objetivo está afectado por Picadura de serpiente.',
        reason: 'Para la build de Build principal',
      },
      {
        name: 'Glifo de Trampa explosiva',
        icon: 'spell-fire-self-destruct',
        description: 'El daño periódico de tu Trampa explosiva puede ser golpe crítico.',
        reason: 'Para la build de Trap weaving',
      },
      {
        name: 'Glifo de Marca del cazador',
        icon: 'ability-hunter-sniper-shot',
        description: 'Aumenta un 20% el bonus de poder de ataque de tu Marca del cazador.',
        reason: 'Para la build de Hunter Mark',
      },
    ],
  },
  {
    type: 'minor',
    name: 'Glifo de Fingir muerte',
    icon: 'ability-rogue-feign-death',
    description: 'Reduce 5 s el tiempo de reutilización de tu Fingir muerte.',
  },
  {
    type: 'minor',
    name: 'Glifo de Aliviar mascota',
    icon: 'ability-hunter-mend-pet',
    description: 'Aumenta ligeramente la felicidad de tu mascota con Aliviar mascota.',
  },
  {
    type: 'minor',
    name: 'Glifo de Revivir mascota',
    icon: 'ability-hunter-beast-soothe',
    description: 'Reduce a cero el retroceso al lanzar Revivir mascota.',
  },
]

const hunterPunteriaStats: WowStatRow[] = [
  {
    label: 'Índice de golpe',
    value: '5%',
    note: '8 (-1 por cada punto a Puntería centrada)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Soft cap',
    value: '722 (51.57%)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Hard cap',
    value: '1400 (100%)',
  },
]

const hunterPunteriaPriority = [
  'Cap Golpe',
  'Hard Cap ArPen',
  'Agilidad',
  'Crítico',
  'Soft Cap Arpen',
  'Celeridad',
]

const hunterBestiasRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Marca del cazador',
          note: 'Antes del combate.',
          icons: ['ability-hunter-sniper-shot'],
        },
        {
          label: 'Matar',
          note: 'A CD, no comparte GCD.',
          icons: ['ability-hunter-kill-command'],
        },
        {
          label: 'Disparo mortal',
          note: 'Siempre que esté disponible.',
          icons: ['ability-hunter-assassinate-2'],
        },
        {
          label: 'Picadura de serpiente',
          note: 'Mantener activo.',
          icons: ['ability-hunter-quick-shot'],
        },
        {
          label: 'Multidisparo',
          icons: ['ability-upgrademoonglaive'],
        },
        {
          label: 'Disparo Arcano',
          icons: ['ability-impaling-bolt'],
        },
        {
          label: 'Disparo firme',
          icons: ['ability-hunter-steady-shot'],
        },
      ],
    },
  ],
}

const hunterPunteriaRotationSteps = [
  {
    label: 'Marca del cazador',
    note: 'Antes del combate.',
    icons: ['ability-hunter-sniper-shot'],
  },
  {
    label: 'Disparo mortal',
    icons: ['ability-hunter-assassinate-2'],
  },
  {
    label: 'Picadura de serpiente + Matar + Disparo Silenciador',
    note: 'Puedes lanzar los 3 a la vez ya que no comparten GCD y la picadura se mantiene con tu Disparo de quimera.',
    icons: [
      'ability-hunter-quick-shot',
      'ability-hunter-kill-command',
      'ability-theblack-arrow',
    ],
  },
  {
    label: 'Disparo de quimera',
    icons: ['ability-hunter-chimera-shot-2'],
  },
  {
    label: 'Disparo de puntería',
    icons: ['inv-spear-07'],
  },
  {
    label: 'Disparo firme',
    icons: ['ability-hunter-steady-shot'],
  },
  {
    label: 'Disparo Arcano',
    note: 'Solo si necesitas moverte mientras pegas y todas las habilidades de arriba no están disponibles.',
    icons: ['ability-impaling-bolt'],
  },
]

const hunterPunteriaRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: hunterPunteriaRotationSteps,
    },
  ],
}

const hunterPunteriaTrapRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        ...hunterPunteriaRotationSteps.slice(0, 5),
        {
          label: 'Trampa explosiva',
          note: 'Si usas la build Trap weaving.',
          icons: ['spell-fire-self-destruct'],
        },
        ...hunterPunteriaRotationSteps.slice(5),
      ],
    },
  ],
}

const hunterBestiasPriorityGroups: WowStatPriorityGroup[] = [
  {
    title: 'General',
    stats: [
      'Cap Golpe',
      'Poder de ataque (AP)',
      'Agilidad',
      'Crítico',
      'ArPen',
      'Celeridad',
    ],
  },
]

const hunterBestiasTips: WowBuildTip[] = [
  {
    text: 'Recuerda mantener tu mascota feliz para que haga 125% de daño.',
  },
]

const hunterPunteriaTips: WowBuildTip[] = [
  {
    text: 'Usa la build de Hunter Mark si en tu banda hay 3 o más cazadores.',
  },
  {
    text: 'Usa la build de Trap weaving cuando manejes bien a tu cazador y puedas añadir la trampa a tu rotación sin perder daño de forma eficiente.',
  },
  {
    text: 'Recuerda mantener tu mascota feliz para que haga 125% de daño.',
  },
]

const hunterSupervivenciaGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Disparo explosivo',
    icon: 'ability-hunter-explosive-shot',
    description: 'Aumenta un 4% la probabilidad de golpe crítico de tu Disparo explosivo.',
  },
  {
    type: 'major',
    name: 'Glifo de Trampa explosiva',
    icon: 'spell-fire-self-destruct',
    description: 'El daño periódico de tu Trampa explosiva puede ser golpe crítico.',
  },
  {
    type: 'major',
    name: 'Glifo de Disparo Mortal',
    icon: 'ability-hunter-assassinate-2',
    description: 'Reduce 6 s el tiempo de reutilización de tu Disparo mortal.',
  },
  {
    type: 'minor',
    name: 'Glifo de Fingir muerte',
    icon: 'ability-rogue-feign-death',
    description: 'Reduce 5 s el tiempo de reutilización de tu Fingir muerte.',
  },
  {
    type: 'minor',
    name: 'Glifo de Aliviar mascota',
    icon: 'ability-hunter-mend-pet',
    description: 'Aumenta ligeramente la felicidad de tu mascota con Aliviar mascota.',
  },
  {
    type: 'minor',
    name: 'Glifo de Revivir mascota',
    icon: 'ability-hunter-beast-soothe',
    description: 'Reduce a cero el retroceso al lanzar Revivir mascota.',
  },
]

const hunterSupervivenciaStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '8%' },
]

const hunterSupervivenciaPriority = [
  'Cap Golpe',
  'Agilidad',
  'Crítico',
  'ArPen',
  'Celeridad',
]

const hunterSupervivenciaRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Disparo mortal',
          icons: ['ability-hunter-assassinate-2'],
        },
        {
          label: 'Disparo explosivo',
          icons: ['ability-hunter-explosive-shot'],
        },
        {
          label: 'Trampa explosiva o Flecha negra',
          icons: ['spell-fire-self-destruct', 'spell-shadow-pain-spike'],
        },
        {
          label: 'Mantener Picadura de serpiente',
          icons: ['ability-hunter-quick-shot'],
        },
        {
          label: 'Multidisparo',
          icons: ['ability-upgrademoonglaive'],
        },
        {
          label: 'Disparo firme',
          icons: ['ability-hunter-steady-shot'],
        },
      ],
    },
  ],
}

const hunterSupervivenciaTips: WowBuildTip[] = [
  {
    text: 'Recuerda mantener tu mascota feliz para que haga 125% de daño.',
  },
]

const rogueAsesinatoStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '8%' },
  { label: 'Pericia', value: '26/26' },
]

const rogueAsesinatoPriority = [
  'Cap Golpe',
  'Cap Pericia',
  'Poder de ataque (AP)',
  'Agilidad',
  'Celeridad',
  'Crítico',
  'ArPen',
]

const rogueAsesinatoGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Mutilar',
    icon: 'ability-rogue-shadowstrikes',
    description: 'Reduce 5 p. de energía el coste de Mutilar.',
  },
  {
    type: 'major',
    name: 'Glifo de Hambre de sangre',
    icon: 'ability-rogue-hungerforblood',
    description: 'Aumenta un 3% el bono de daño de Hambre de sangre.',
  },
  {
    type: 'major',
    name: 'Glifo de Secretos del oficio',
    icon: 'ability-rogue-tricks-of-the-trade',
    description:
      'El bono de daño y la redirección de amenaza de Secretos del oficio duran 4 s más.',
    badge: '2 opciones',
    featured: true,
    options: [
      {
        name: 'Glifo de Secretos del oficio',
        icon: 'ability-rogue-tricks-of-the-trade',
        description:
          'El bono de daño y la redirección de amenaza de Secretos del oficio duran 4 s más.',
      },
      {
        name: 'Glifo de Abanico de cuchillos',
        icon: 'ability-rogue-fan-of-knives',
        description: 'Aumenta un 20% el daño de Abanico de cuchillos.',
        reason: 'Para la build de AOE',
      },
    ],
  },
  {
    type: 'minor',
    name: 'Glifo de Velocidad borrosa',
    icon: 'ability-rogue-sprint',
    description: 'Te permite caminar sobre el agua mientras Sprint está activo.',
  },
  {
    type: 'minor',
    name: 'Glifo de Esfumarse',
    icon: 'ability-vanish',
    description: 'Aumenta un 30% tu velocidad de movimiento mientras Esfumarse está activo.',
  },
  {
    type: 'minor',
    name: 'Glifo de Caída segura',
    icon: 'spell-magic-featherfall',
    description: 'Aumenta la distancia que puedes caer sin recibir daño con Caída segura.',
  },
]

const rogueAsesinatoRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Mutilar',
          icons: ['ability-rogue-shadowstrikes'],
        },
        {
          label: 'Hacer picadillo',
          icons: ['ability-rogue-slicedice'],
          note: 'Una vez; no importa los puntos de combo con los que se lance.',
        },
        {
          label: 'Hambre de sangre',
          icons: ['ability-rogue-hungerforblood'],
          note: 'Mantener.',
        },
        {
          label: 'Envenar',
          icons: ['ability-rogue-disembowel'],
          note: 'Con 4 o 5 puntos de combo; con eso se mantiene Hacer picadillo.',
        },
      ],
    },
  ],
}

const rogueAsesinatoTips: WowBuildTip[] = [
  {
    text: 'Si en tu grupo nadie tiene un sangrado para activar Hambre de sangre, usa Ruptura con los puntos de combo que tengas, ya sea 2 o 3, y activa tu Hambre de sangre.',
    icons: ['ability-rogue-rupture', 'ability-rogue-hungerforblood'],
  },
]

const rogueCombatStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '8%' },
  { label: 'Pericia', value: '26/26' },
  {
    label: 'Penetración de armadura (ArPen) · Soft cap',
    value: '722 (51.57%)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Hard cap',
    value: '1400 (100%)',
  },
]

const rogueCombatPriority = [
  'Cap Golpe',
  'Cap Pericia',
  'Hard Cap Arpen',
  'Agilidad = Poder de Ataque (AP)',
  'Soft Cap Arpen',
  'Crítico',
  'Celeridad',
]

const rogueCombatGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Golpe siniestro',
    icon: 'spell-shadow-ritual-of-sacrifice',
    description:
      'Tus golpes críticos con Golpe siniestro tienen un 50% de probabilidad de añadir un punto de combo adicional.',
  },
  {
    type: 'major',
    name: 'Glifo de Asesinato múltiple',
    icon: 'ability-rogue-murderspree',
    description: 'Reduce 45 s el tiempo de reutilización de Asesinato múltiple.',
  },
  {
    type: 'major',
    name: 'Glifo de Secretos del oficio',
    icon: 'ability-rogue-tricks-of-the-trade',
    description:
      'El bono de daño y la redirección de amenaza de Secretos del oficio duran 4 s más.',
    badge: '2 opciones',
    featured: true,
    options: [
      {
        name: 'Glifo de Secretos del oficio',
        icon: 'ability-rogue-tricks-of-the-trade',
        description:
          'El bono de daño y la redirección de amenaza de Secretos del oficio duran 4 s más.',
      },
      {
        name: 'Glifo de Subidón de adrenalina',
        icon: 'spell-shadow-shadowworddominate',
        description: 'Aumenta 5 s la duración de Subidón de adrenalina.',
      },
    ],
  },
  ...rogueAsesinatoGlyphs.filter((glyph) => glyph.type === 'minor'),
]

const rogueCombatRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Mantener Hacer picadillo',
          icons: ['ability-rogue-slicedice'],
        },
        {
          label: 'Mantener Ruptura con 4 o 5 puntos de combo',
          icons: ['ability-rogue-rupture'],
        },
        {
          label: 'Golpe siniestro',
          icons: ['spell-shadow-ritual-of-sacrifice'],
        },
        {
          label: 'Eviscerar',
          icons: ['ability-rogue-eviscerate'],
          note: 'Si a tu Hacer picadillo y/o Ruptura les quedan más de 8 segundos de duración restante.',
        },
      ],
    },
  ],
}

const rogueCombatTips: WowBuildTip[] = [
  {
    text: 'De forma casi obligatoria debes llevar un arma pesada en la mano principal y un arma rápida en la secundaria.',
  },
  {
    text: 'Si tus 2 armas no son espadas o hachas, simplemente cambia el talento de especialización.',
  },
]

const rogueSutilezaNotice =
  'Esta especialización está pensada para PvP; en PvE su diferencia de daño con las otras especialidades del Pícaro es bastante notable.'

const rogueSutilezaStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '11%' },
  { label: 'Pericia', value: '26/26' },
  {
    label: 'Penetración de armadura (ArPen) · Soft cap',
    value: '722 (51.57%)',
  },
  {
    label: 'Penetración de armadura (ArPen) · Hard cap',
    value: '1400 (100%)',
  },
]

const rogueSutilezaGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Ruptura',
    icon: 'ability-rogue-rupture',
    description: 'Aumenta 4 s la duración de Ruptura.',
  },
  {
    type: 'major',
    name: 'Glifo de Eviscerar',
    icon: 'ability-rogue-eviscerate',
    description: 'Aumenta un 10% la probabilidad de golpe crítico de Eviscerar.',
  },
  {
    type: 'major',
    name: 'Glifo de Secretos del oficio',
    icon: 'ability-rogue-tricks-of-the-trade',
    description:
      'El bono de daño y la redirección de amenaza de Secretos del oficio duran 4 s más.',
  },
  ...rogueAsesinatoGlyphs.filter((glyph) => glyph.type === 'minor'),
]

const rogueSutilezaPriority = [
  'Cap Golpe',
  'Cap Pericia',
  'Hard Cap ArPen',
  'Agilidad = Poder de Ataque (AP)',
  'Soft Cap Arpen',
  'Crítico',
  'Celeridad',
]

const rogueSutilezaRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Mantener Hacer picadillo',
          icons: ['ability-rogue-slicedice'],
        },
        {
          label: 'Mantener Ruptura',
          icons: ['ability-rogue-rupture'],
        },
        {
          label: 'Eviscerar',
          icons: ['ability-rogue-eviscerate'],
        },
        {
          label: 'Hemorragia',
          icons: ['spell-shadow-lifedrain'],
        },
      ],
    },
  ],
}

function hunterPetFerocityTree(points: Record<string, number>): WowTalentTree {
  return {
    slug: 'ferocidad',
    name: 'Ferocidad',
    talents: [
      {
        name: 'Reflejos de cobra',
        icon: 'talent-icon-136040',
        maxRank: 2,
        description:
          'Aumenta un 30% la velocidad de ataque de tu mascota, pero cada ataque inflige menos daño.',
        row: 0,
        col: 0,
        points: points['Reflejos de cobra'] ?? 0,
      },
      {
        name: 'Carrerilla',
        icon: 'talent-icon-132120',
        maxRank: 1,
        description: 'Aumenta un 80% la velocidad de movimiento de tu mascota durante 16 s.',
        row: 0,
        col: 1,
        points: points['Carrerilla'] ?? 0,
      },
      {
        name: 'Gran aguante',
        icon: 'talent-icon-136112',
        maxRank: 3,
        description: 'Aumenta el aguante total de tu mascota un 4/8/12%.',
        row: 0,
        col: 2,
        points: points['Gran aguante'] ?? 0,
      },
      {
        name: 'Armadura natural',
        icon: 'talent-icon-136094',
        maxRank: 2,
        description: 'Aumenta la armadura de tu mascota un 5/10%.',
        row: 0,
        col: 3,
        points: points['Armadura natural'] ?? 0,
      },
      {
        name: 'Agazapar mejorado',
        icon: 'talent-icon-132118',
        maxRank: 2,
        description:
          'Reduce un 50/100% la penalización de velocidad de movimiento cuando tu mascota se agazapa.',
        row: 1,
        col: 0,
        points: points['Agazapar mejorado'] ?? 0,
      },
      {
        name: 'Sanguinario',
        icon: 'talent-icon-132139',
        maxRank: 2,
        description:
          'Los ataques de tu mascota tienen un 10/20% de probabilidad de aumentar su felicidad un 5% y curarla un 5% de su salud.',
        row: 1,
        col: 1,
        points: points['Sanguinario'] ?? 0,
      },
      {
        name: 'Collera con pinchos',
        icon: 'talent-icon-133309',
        maxRank: 3,
        description: 'Tu mascota inflige un 3/6/9% más de daño con todos sus ataques.',
        row: 1,
        col: 2,
        points: points['Collera con pinchos'] ?? 0,
      },
      {
        name: 'Velocidad de jabalí',
        icon: 'talent-icon-132184',
        maxRank: 1,
        description: 'Aumenta un 30% la velocidad de movimiento de tu mascota.',
        row: 1,
        col: 3,
        points: points['Velocidad de jabalí'] ?? 0,
      },
      {
        name: 'Desvieje de la manada',
        icon: 'talent-icon-237401',
        maxRank: 3,
        description:
          'Cuando Mordedura, Zarpa o Bofetada de tu mascota es un golpe crítico, tú y tu mascota infligís un 3% más de daño durante 10 s.',
        row: 2,
        col: 0,
        points: points['Desvieje de la manada'] ?? 0,
      },
      {
        name: 'Corazón de león',
        icon: 'talent-icon-132486',
        maxRank: 2,
        description:
          'Reduce un 15/30% la duración de los efectos de aturdimiento y miedo contra tu mascota.',
        row: 2,
        col: 2,
        points: points['Corazón de león'] ?? 0,
      },
      {
        name: 'Cargar',
        icon: 'talent-icon-132183',
        maxRank: 1,
        description:
          'Tu mascota carga contra un enemigo, lo inmoviliza durante 1 s y aumenta un 25% el poder de ataque de su siguiente ataque cuerpo a cuerpo.',
        row: 2,
        col: 3,
        points: points['Cargar'] ?? 0,
      },
      {
        name: 'Corazón del fénix',
        icon: 'talent-icon-134373',
        maxRank: 1,
        description:
          'Cuando tu mascota muere, resucita con un 10% de su salud. No puede ocurrir más de una vez cada 10 min.',
        row: 3,
        col: 1,
        points: points['Corazón del fénix'] ?? 0,
        requires: [{ row: 1, col: 1 }],
      },
      {
        name: 'Picadura de araña',
        icon: 'talent-icon-132196',
        maxRank: 3,
        description: 'Aumenta un 3/6/9% el bono de daño crítico de tu mascota.',
        row: 3,
        col: 2,
        points: points['Picadura de araña'] ?? 0,
        requires: [{ row: 3, col: 1 }],
      },
      {
        name: 'Gran resistencia',
        icon: 'talent-icon-136085',
        maxRank: 3,
        description:
          'Tu mascota recibe un 3/6/9% menos de daño de Arcano, Fuego, Escarcha, Naturaleza y Sombras.',
        row: 3,
        col: 3,
        points: points['Gran resistencia'] ?? 0,
        requires: [{ row: 3, col: 1 }],
      },
      {
        name: 'Rabioso',
        icon: 'talent-icon-236149',
        maxRank: 1,
        description:
          'Tu mascota entra en un frenesí asesino que aumenta su poder de ataque un 5%. Sus ataques tienen un 50% de probabilidad de aumentarlo un 5% adicional, hasta 5 acumulaciones. Dura 20 s.',
        row: 4,
        col: 0,
        points: points['Rabioso'] ?? 0,
      },
      {
        name: 'Lame tus heridas',
        icon: 'talent-icon-132179',
        maxRank: 1,
        description:
          'Tu mascota se detiene a lamer sus heridas y se cura un 100% de su salud total durante 5 s mientras canaliza.',
        row: 4,
        col: 1,
        points: points['Lame tus heridas'] ?? 0,
      },
      {
        name: 'Llamada de lo Salvaje',
        icon: 'talent-icon-236159',
        maxRank: 1,
        description:
          'Tu mascota ruge y aumenta un 10% el poder de ataque cuerpo a cuerpo y a distancia de todos los miembros del grupo en 40 m. Dura 20 s.',
        row: 4,
        col: 2,
        points: points['Llamada de lo Salvaje'] ?? 0,
        requires: [{ row: 3, col: 2 }],
      },
      {
        name: 'Ataque de tiburón',
        icon: 'talent-icon-133921',
        maxRank: 2,
        description: 'Tu mascota inflige un 6% más de daño con todos sus ataques.',
        row: 5,
        col: 0,
        points: points['Ataque de tiburón'] ?? 0,
      },
      {
        name: 'Caza salvaje',
        icon: 'talent-icon-237377',
        maxRank: 2,
        description:
          'Aumenta un 40% la contribución de aguante y un 30% la de poder de ataque que tu mascota recibe de ti.',
        row: 5,
        col: 2,
        points: points['Caza salvaje'] ?? 0,
        requires: [{ row: 4, col: 2 }],
      },
    ],
  }
}

const hunterPetFerocity16 = hunterPetFerocityTree({
  'Reflejos de cobra': 2,
  Carrerilla: 1,
  'Collera con pinchos': 3,
  'Desvieje de la manada': 3,
  'Picadura de araña': 3,
  Rabioso: 1,
  'Llamada de lo Salvaje': 1,
  Sanguinario: 1,
  'Caza salvaje': 1,
})

const hunterPetFerocity20 = hunterPetFerocityTree({
  'Reflejos de cobra': 2,
  Carrerilla: 1,
  'Collera con pinchos': 3,
  'Desvieje de la manada': 3,
  'Picadura de araña': 3,
  Rabioso: 1,
  'Llamada de lo Salvaje': 1,
  Sanguinario: 2,
  'Caza salvaje': 2,
  'Ataque de tiburón': 2,
})

const hunterPetWolf16: WowPetBuild = {
  name: 'Lobo',
  icon: 'talent-icon-132203',
  description: 'La mejor mascota para cazador es el lobo.',
  tree: hunterPetFerocity16,
}

const hunterPetWolf20: WowPetBuild = {
  name: 'Lobo',
  icon: 'talent-icon-132203',
  description: 'La mejor mascota para cazador es el lobo.',
  tree: hunterPetFerocity20,
}

const tankSpecs = new Set(['proteccion', 'guardian', 'sangre'])

function displayBuildLabel(label: string): string {
  const match = label.match(/^Variación \d+\s+—\s+(.+)$/)
  return match ? match[1] : label
}

const rotationPriorityNotice: WowRotationNotice = {
  tone: 'gold',
  text: 'Este es un orden de prioridades, no un orden de secuencia.',
}

const furyOverpowerRotationNotice: WowRotationNotice = {
  ...rotationPriorityNotice,
  items: [{ text: furyRotationNotice }],
}

const shamanElementalStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '11%' },
  { label: 'Celeridad', value: '1269' },
]

const shamanElementalPriority = [
  'Cap Golpe',
  'Poder con hechizos (SP)',
  'Celeridad',
  'Crítico',
]

const shamanElementalNotice =
  'Tristemente, comparado con otros casters y especializaciones en general, Elemental es una de las que menos daño hace (sin contar las specs PvP). Aun así, es viable y una configuración dual de elemental puede ser útil.'

const shamanMinorGlyphs: WowGlyphSlot[] = [
  {
    type: 'minor',
    name: 'Glifo de Escudo de agua',
    icon: 'ability-shaman-water-shield',
    description: 'Aumenta en 1 el número de cargas de tu Escudo de agua.',
  },
  {
    type: 'minor',
    name: 'Glifo de Tormenta de truenos',
    icon: 'spell-shaman-thunder-storm',
    description:
      'Aumenta la cantidad de maná que recibes de tu hechizo Tormenta de truenos un 2%, pero ya no derriba a los enemigos.',
  },
  {
    type: 'minor',
    name: 'Glifo de Vida renovada',
    icon: 'spell-nature-reincarnation',
    description: 'Tu hechizo Reencarnación ya no necesita un componente.',
  },
]

const shamanEnhancementMinorGlyphs: WowGlyphSlot[] = [
  {
    type: 'minor',
    name: 'Glifo de Escudo de agua',
    icon: 'ability-shaman-water-shield',
    description: 'Aumenta en 1 el número de cargas de tu Escudo de agua.',
  },
  {
    type: 'minor',
    name: 'Glifo de Caminar sobre el agua',
    icon: 'spell-frost-windwalkon',
    description: 'Reduce el coste de maná de Caminar sobre el agua.',
  },
  {
    type: 'minor',
    name: 'Glifo de Vida renovada',
    icon: 'spell-nature-reincarnation',
    description: 'Tu hechizo Reencarnación ya no necesita un componente.',
  },
]

const shamanElementalGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Descarga de relámpago',
    icon: 'spell-nature-lightning',
    description: 'Tu Descarga de relámpagos inflige un 4% más de daño.',
  },
  {
    type: 'major',
    name: 'Glifo del Tótem de cólera',
    icon: 'spell-fire-totem-of-wrath',
    description:
      'Cuando lanzas Tótem de cólera, ganas un 30% del bonus de poder con hechizos del tótem durante 5 min.',
  },
  {
    type: 'major',
    name: 'Glifo de Arma lengua de fuego',
    icon: 'spell-fire-flametounge',
    description:
      'Aumenta la probabilidad de golpe crítico con hechizos un 2% mientras Arma lengua de fuego está activada.',
  },
  ...shamanMinorGlyphs,
]

const shamanElementalRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Choque de llamas',
          note: 'Mantener',
          icons: ['spell-fire-flameshock'],
        },
        {
          label: 'Ráfaga de lava',
          note: 'A CD',
          icons: ['spell-shaman-lava-burst'],
        },
        {
          label: 'Descarga de relámpagos',
          icons: ['spell-nature-lightning'],
        },
        {
          label: 'Choque de escarcha',
          note: 'Si necesitas moverte y Choque de llamas tiene más de 3 segundos de duración restante',
          icons: ['spell-frost-frostshock'],
        },
      ],
    },
    {
      title: 'Multitarget',
      steps: [
        {
          label: 'Tótem de magma',
          icons: ['spell-fire-self-destruct'],
        },
        {
          label: 'Nova de Fuego',
          icons: ['spell-fire-sealof-fire'],
        },
        {
          label: 'Cadena de relámpagos',
          icons: ['spell-nature-chainlightning'],
        },
      ],
    },
  ],
}

const shamanEnhancementStats: WowStatRow[] = [
  { label: 'Índice de golpe', value: '2%' },
  { label: 'Índice de golpe Hechizos', value: '14%' },
  { label: 'Pericia', value: '26/26' },
]

const shamanEnhancementPriority = [
  'Cap Golpe',
  'Cap Golpe Hechizos',
  'Celeridad',
  'Poder de Ataque',
  'Cap Pericia',
  'Agilidad',
  'Poder con Hechizos (SP)',
  'Crítico',
]

const shamanEnhancementNotice =
  'Si estás jugando Spellhance, Poder con hechizos tiene mayor importancia que Agilidad.'

const shamanEnhancementGlyphs: WowGlyphSlot[] = [
  {
    type: 'major',
    name: 'Glifo de Espíritu feral',
    icon: 'spell-shaman-feral-spirit',
    description: 'Tus lobos Ferales duran 15 s más.',
  },
  {
    type: 'major',
    name: 'Glifo de Nova de Fuego',
    icon: 'spell-fire-sealof-fire',
    description: 'Reduce el tiempo de reutilización de Nova de Fuego 2 s.',
  },
  {
    type: 'major',
    name: 'Glifo de Golpe de Tormenta',
    icon: 'ability-shaman-storm-strike',
    description: 'Aumenta un 20% el daño de Golpe de Tormenta.',
    badge: '2 opciones',
    featured: true,
    options: [
      {
        name: 'Glifo de Golpe de Tormenta',
        icon: 'ability-shaman-storm-strike',
        description: 'Aumenta un 20% el daño de Golpe de Tormenta.',
        reason: 'Enhancement',
      },
      {
        name: 'Glifo de Arma lengua de fuego',
        icon: 'spell-fire-flametounge',
        description:
          'Aumenta la probabilidad de golpe crítico con hechizos un 2% mientras Arma lengua de fuego está activada.',
        reason: 'Spellhance',
      },
    ],
  },
  ...shamanEnhancementMinorGlyphs,
]

const shamanEnhancementRotation: WowRotation = {
  groups: [
    {
      title: 'Unitarget',
      steps: [
        {
          label: 'Golpe de tormenta',
          icons: ['ability-shaman-storm-strike'],
        },
        {
          label: 'Descarga de relámpago',
          note: 'Con el buff de Vorágine. Si eres Spellhance, este poder va antes que Golpe de Tormenta',
          icons: ['spell-nature-lightning', 'spell-shaman-maelstromweapon'],
        },
        {
          label: 'Choque de llamas',
          note: 'Mantener',
          icons: ['spell-fire-flameshock'],
        },
        {
          label: 'Tótem de fuego o Tótem abrasador',
          icons: ['spell-fire-self-destruct', 'spell-fire-searing-totem'],
        },
        {
          label: 'Escudo de relámpagos',
          note: 'Mantener y solo renovar cuando el escudo haya caído por completo o en tiempos muertos si todo lo demás está en CD',
          icons: ['spell-nature-lightning-shield'],
        },
        {
          label: 'Nova de fuego',
          icons: ['spell-fire-sealof-fire'],
        },
        {
          label: 'Choque de tierra',
          icons: ['spell-nature-earthshock'],
        },
        {
          label: 'Latigazo de lava',
          icons: ['ability-shaman-lavalash'],
        },
      ],
    },
    {
      title: 'Multitarget',
      steps: [
        {
          label: 'Tótem de magma',
          icons: ['spell-fire-self-destruct'],
        },
        {
          label: 'Nova de Fuego',
          icons: ['spell-fire-sealof-fire'],
        },
        {
          label: 'Cadena de relámpagos',
          note: 'Con el buff de Vorágine',
          icons: ['spell-nature-chainlightning', 'spell-shaman-maelstromweapon'],
        },
      ],
    },
  ],
}

function createPlaceholderGlyphs(): WowGlyphSlot[] {
  const glyph = (type: WowGlyphSlot['type'], icon: string): WowGlyphSlot => ({
    type,
    icon,
  })

  return [
    glyph('major', 'inv-glyph-major-warrior'),
    glyph('major', 'inv-glyph-major-warrior'),
    glyph('major', 'inv-glyph-major-warrior'),
    glyph('minor', 'inv-glyph-minor-warrior'),
    glyph('minor', 'inv-glyph-minor-warrior'),
    glyph('minor', 'inv-glyph-minor-warrior'),
  ]
}

function createBuild(
  label: string,
  stats: WowStatRow[],
  options: {
    allocations?: SpecAllocationBuild['trees']
    priority?: string[]
    priorityGroups?: WowStatPriorityGroup[]
    glyphs?: WowGlyphSlot[]
    notice?: string
    noticeTitle?: string
    noticeAtTop?: boolean
    statsNotice?: string
    statsNoticeTitle?: string
    noticeHighlight?: string
    noticeIcons?: string[]
    noticeTone?: 'warning' | 'danger'
    rotation?: WowRotation
    rotationNotice?: string | WowRotationNotice
    tips?: (string | WowBuildTip)[]
    pet?: WowPetBuild
  } = {},
): WowSpecBuild {
  return {
    label,
    allocations: options.allocations,
    glyphs: (options.glyphs ?? createPlaceholderGlyphs()).map((glyph) => ({
      ...glyph,
    })),
    stats: stats.map((row) => ({ ...row })),
    priority: options.priority,
    priorityGroups: options.priorityGroups,
    notice: options.notice,
    noticeTitle: options.noticeTitle,
    noticeAtTop: options.noticeAtTop,
    statsNotice: options.statsNotice,
    statsNoticeTitle: options.statsNoticeTitle,
    noticeHighlight: options.noticeHighlight,
    noticeIcons: options.noticeIcons,
    noticeTone: options.noticeTone,
    rotation: options.rotation,
    rotationNotice: options.rotationNotice,
    tips: options.tips,
    pet: options.pet,
  }
}

const builds: Record<string, Record<string, WowSpecBuild[]>> = {}

for (const [classSlug, specs] of Object.entries(specAllocations)) {
  builds[classSlug] = {}
  for (const [specSlug, variants] of Object.entries(specs)) {
    const isArms = classSlug === 'guerrero' && specSlug === 'armas'
    const isFury = classSlug === 'guerrero' && specSlug === 'furia'
    const isProtection = classSlug === 'guerrero' && specSlug === 'proteccion'
    const isHunter = classSlug === 'cazador'
    const isHunterBestias = isHunter && specSlug === 'bestias'
    const isHunterPunteria = isHunter && specSlug === 'punteria'
    const isHunterSupervivencia = isHunter && specSlug === 'supervivencia'
    const isRogueAsesinato = classSlug === 'picaro' && specSlug === 'asesinato'
    const isRogueCombate = classSlug === 'picaro' && specSlug === 'combate'
    const isRogueSutileza = classSlug === 'picaro' && specSlug === 'sutileza'
    const isDruidRestoration =
      classSlug === 'druida' && specSlug === 'restauracion'
    const isDruidFeralDps = classSlug === 'druida' && specSlug === 'feral'
    const isHoly = classSlug === 'paladin' && specSlug === 'sagrado'
    const isPaladinProtection =
      classSlug === 'paladin' && specSlug === 'proteccion'
    const isRetribution =
      classSlug === 'paladin' && specSlug === 'reprension'
    const isPriestDisciplina =
      classSlug === 'sacerdote' && specSlug === 'disciplina'
    const isPriestSagrado =
      classSlug === 'sacerdote' && specSlug === 'sagrado'
    const isPriestSombra = classSlug === 'sacerdote' && specSlug === 'sombra'
    const isDeathKnight = classSlug === 'caballero-de-la-muerte'
    const isDeathKnightBlood = isDeathKnight && specSlug === 'sangre'
    const isDeathKnightFrost = isDeathKnight && specSlug === 'escarcha'
    const isDeathKnightUnholy = isDeathKnight && specSlug === 'profano'
    const isShamanElemental = classSlug === 'chaman' && specSlug === 'elemental'
    const isShamanEnhancement = classSlug === 'chaman' && specSlug === 'mejora'
    const stats = isDruidFeralDps
      ? druidferalDpsStats
      : isDruidRestoration
        ? druidRestorationStats
        : isShamanElemental
          ? shamanElementalStats
          : isHoly
            ? []
            : isHunterBestias
              ? hunterBestiasStats
              : isHunterPunteria
                ? hunterPunteriaStats
                : isHunterSupervivencia
                  ? hunterSupervivenciaStats
                  : isRogueAsesinato
                    ? rogueAsesinatoStats
                    : isRogueCombate
                      ? rogueCombatStats
                      : isRogueSutileza
                        ? rogueSutilezaStats
                        : isPriestDisciplina
                          ? priestDisciplinaStats
                          : isPriestSagrado
                            ? priestSagradoStats
                            : isRetribution
                              ? retributionStats
                              : isArms
                                ? armsStats
                                : isFury
                                  ? furyStats
                                  : tankSpecs.has(specSlug)
                                    ? tankStats
                                    : dpsStats
    const baseTips = isDruidFeralDps
      ? druidferalDpsTips
      : isDruidRestoration
        ? druidRestorationTips
        : isShamanElemental
          ? undefined
          : isHoly
            ? holyTips
            : isHunterBestias
              ? hunterBestiasTips
              : isHunterPunteria
                ? hunterPunteriaTips
                : isHunterSupervivencia
                  ? hunterSupervivenciaTips
                  : isRogueAsesinato
                    ? rogueAsesinatoTips
                    : isRogueCombate
                      ? rogueCombatTips
                      : isPriestDisciplina
                        ? priestDisciplinaTips
                        : isArms
                          ? armsTips
                          : isFury
                            ? furyTips
                            : isProtection
                              ? protectionTips
                              : isRetribution
                                ? retributionTips
                                : undefined
    const rotation = isPriestSombra
      ? priestSombraRotation
      : isDruidFeralDps
        ? druidferalDpsRotation
        : isDruidRestoration
          ? druidRestorationRotation
          : isShamanElemental
            ? shamanElementalRotation
            : isHoly
              ? holyRotation
              : isHunterBestias
                ? hunterBestiasRotation
                : isHunterPunteria
                  ? hunterPunteriaRotation
                  : isHunterSupervivencia
                    ? hunterSupervivenciaRotation
                    : isRogueAsesinato
                      ? rogueAsesinatoRotation
                      : isRogueCombate
                        ? rogueCombatRotation
                        : isRogueSutileza
                          ? rogueSutilezaRotation
                          : isPriestDisciplina
                            ? priestDisciplinaRotation
                            : isPriestSagrado
                              ? priestSagradoRotation
                              : isPaladinProtection
                                ? paladinProtectionRotation
                                : isRetribution
                                  ? retributionRotation
                                  : isArms
                                    ? armsRotation
                                    : isFury
                                      ? furyRotation
                                      : isProtection
                                        ? protectionRotation
                                        : undefined
    builds[classSlug][specSlug] = variants.map((variant) => {
      const buildLabel = displayBuildLabel(variant.label)
      const isDeathKnightUnholyPrincipal =
        isDeathKnightUnholy && buildLabel === 'Build principal'
      const isDeathKnightUnholyDw =
        isDeathKnightUnholy && buildLabel === 'Dual Wielding'
      const isPriestSombraMindFlay =
        isPriestSombra && buildLabel === 'Mind Flay'
      const buildStats = isDeathKnightUnholyPrincipal
        ? deathKnightUnholyStats
        : isDeathKnightUnholyDw
          ? deathKnightUnholyDwStats
          : isShamanEnhancement
            ? shamanEnhancementStats
            : isDeathKnightFrost
              ? deathKnightFrostStats
              : isPriestSombra
                ? priestSombraStats
                : stats
      const buildRotation = isDeathKnightUnholyPrincipal
        ? deathKnightUnholyRotation
        : isDeathKnightUnholyDw
          ? deathKnightUnholyDwRotation
          : isShamanEnhancement
            ? shamanEnhancementRotation
            : isDeathKnightBlood
              ? deathKnightBloodRotation
              : isDeathKnightFrost
                ? deathKnightFrostRotation
                : isPriestSombraMindFlay
                  ? priestSombraMindFlayRotation
                  : isHunterPunteria && buildLabel === 'Trap weaving'
                    ? hunterPunteriaTrapRotation
                    : rotation

      return createBuild(buildLabel, buildStats, {
        allocations: variant.trees,
        priority: isDeathKnightUnholyPrincipal
          ? deathKnightUnholyPriority
          : isDeathKnightUnholyDw
            ? deathKnightUnholyDwPriority
            : isShamanElemental
              ? shamanElementalPriority
              : isShamanEnhancement
                ? shamanEnhancementPriority
                : isDeathKnightFrost
                  ? deathKnightFrostPriority
                  : isPriestSombra
                    ? priestSombraPriority
                    : isHoly
                      ? holyPriority
                      : isHunterPunteria
                        ? hunterPunteriaPriority
                        : isHunterSupervivencia
                          ? hunterSupervivenciaPriority
                          : isRogueAsesinato
                            ? rogueAsesinatoPriority
                            : isRogueCombate
                              ? rogueCombatPriority
                              : isRogueSutileza
                                ? rogueSutilezaPriority
                                : isPriestDisciplina
                                  ? priestDisciplinaPriority
                                  : isPriestSagrado
                                    ? priestSagradoPriority
                                    : isArms || isFury
                                      ? armsPriority
                                      : undefined,
        priorityGroups: isDeathKnightBlood
          ? deathKnightBloodPriorityGroups
          : isDruidFeralDps
          ? druidferalDpsPriorityGroups
          : isDruidRestoration
          ? druidRestorationPriorityGroups
          : isHunterBestias
            ? hunterBestiasPriorityGroups
            : isPaladinProtection
            ? paladinProtectionPriorityGroups
          : isProtection
            ? protectionPriorityGroups
            : isRetribution
              ? retributionPriorityGroups
              : undefined,
        glyphs: isDeathKnightUnholyPrincipal
          ? deathKnightUnholyGlyphs
          : isDeathKnightUnholyDw
            ? deathKnightUnholyDwGlyphs
            : isShamanElemental
              ? shamanElementalGlyphs
              : isDeathKnightBlood
                ? deathKnightBloodGlyphs
                : isDeathKnightFrost
                  ? deathKnightFrostGlyphs
                  : isDeathKnight
                    ? deathKnightMinorGlyphs
                    : isPriestSombra
                      ? priestSombraGlyphs
                      : isDruidFeralDps
                        ? druidferalDpsGlyphs
                        : isDruidRestoration
                          ? druidRestorationGlyphs
                          : isHoly
                            ? holyGlyphs
                            : isHunterBestias
                              ? hunterBestiasGlyphs
                              : isHunterPunteria
                                ? hunterPunteriaGlyphs
                                : isHunterSupervivencia
                                  ? hunterSupervivenciaGlyphs
                                  : isRogueAsesinato
                                    ? rogueAsesinatoGlyphs
                                    : isRogueCombate
                                      ? rogueCombatGlyphs
                                      : isRogueSutileza
                                        ? rogueSutilezaGlyphs
                                        : isPriestDisciplina
                                          ? priestDisciplinaGlyphs
                                          : isPriestSagrado
                                            ? priestSagradoGlyphs
                                            : isPaladinProtection
                                              ? paladinProtectionGlyphs
                                              : isRetribution
                                                ? retributionGlyphs
                                                : isArms
                                                  ? armsGlyphs
                                                  : isFury
                                                    ? furyGlyphs
                                                    : isProtection
                                                      ? protectionGlyphs
                                                      : isShamanEnhancement
                                                        ? shamanEnhancementGlyphs
                                                        : undefined,
        notice: isDeathKnightUnholyDw
          ? deathKnightUnholyDwNotice
          : isPriestSombraMindFlay
            ? priestSombraMindFlayNotice
            : isArms
              ? armsNotice
              : isHunterBestias
                ? hunterBestiasNotice
                : isHunterSupervivencia
                  ? hunterSupervivenciaNotice
                  : isRogueSutileza
                    ? rogueSutilezaNotice
                    : isProtection
                      ? protectionNotice
                      : isShamanElemental
                        ? shamanElementalNotice
                        : undefined,
        noticeTitle: isDeathKnightUnholyDw
          ? 'Nota de la build'
          : isPriestSombraMindFlay
            ? 'Importante'
            : undefined,
        noticeAtTop: isShamanElemental ? true : undefined,
        noticeHighlight: isDeathKnightUnholyDw
          ? 'Agonía de las Sombras'
          : isShamanElemental
            ? 'viable'
            : undefined,
        noticeIcons: isPriestSombraMindFlay
          ? ['spell-shadow-unholyfrenzy']
          : undefined,
        noticeTone: isRogueSutileza ? 'danger' : undefined,
        statsNotice: isShamanEnhancement
          ? shamanEnhancementNotice
          : undefined,
        statsNoticeTitle: isShamanEnhancement
          ? 'Nota de la build'
          : undefined,
        rotation: buildRotation,
        rotationNotice:
          isHunterPunteria ||
          isHunterSupervivencia ||
          isRogueAsesinato ||
          isRogueCombate ||
          isRogueSutileza ||
          isPriestDisciplina ||
          isPriestSagrado ||
          isPriestSombraMindFlay ||
          isDeathKnightBlood ||
          isDeathKnightFrost
            ? undefined
            : buildRotation
            ? isFury && variant.label.includes('Overpower')
              ? furyOverpowerRotationNotice
              : rotationPriorityNotice
            : undefined,
        tips: isDeathKnightUnholyPrincipal
          ? deathKnightUnholyTips
          : tankSpecs.has(specSlug)
            ? [...(baseTips ?? []), ...tankTips]
            : baseTips,
        pet: isHunter
          ? isHunterBestias
            ? hunterPetWolf20
            : hunterPetWolf16
          : undefined,
      })
    })
  }
}

export function getSpecBuilds(
  classSlug: string,
  specSlug: string,
): WowSpecBuild[] {
  return builds[classSlug]?.[specSlug] ?? []
}
