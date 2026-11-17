import type { WowTalent } from '../../types/wow'

export const warriorArmsTalents: WowTalent[] = [
  {
    name: 'Golpe heroico mejorado',
    icon: 'ability_rogue_ambush',
    maxRank: 3,
    description: 'Reduce el coste de tu Golpe heroico en 3 puntos de ira.',
    row: 0,
    col: 0,
  },
  {
    name: 'Desvío',
    icon: 'ability_parry',
    maxRank: 5,
    description: 'Aumenta un 5% tu probabilidad de parada.',
    row: 0,
    col: 1,
  },
  {
    name: 'Desgarrar mejorado',
    icon: 'ability_gouge',
    maxRank: 2,
    description:
      'Aumenta un 20% el daño de sangrado infligido por tu Desgarrar.',
    row: 0,
    col: 2,
  },
  {
    name: 'Carga mejorada',
    icon: 'ability_warrior_charge',
    maxRank: 2,
    description: 'Aumenta en 10 la ira generada por tu Carga.',
    row: 1,
    col: 0,
  },
  {
    name: 'Voluntad de hierro',
    icon: 'spell_magic_magearmor',
    maxRank: 3,
    description:
      'Reduce un 20% la duración de todos los efectos de aturdimiento y encantamiento que se te apliquen.',
    row: 1,
    col: 1,
  },
  {
    name: 'Maestría táctica',
    icon: 'spell_nature_enchantarmor',
    maxRank: 3,
    description:
      'Conservas hasta 15 puntos de ira adicionales al cambiar de actitud. Además, aumenta mucho la amenaza generada por Sed de sangre y Golpe mortal en Actitud defensiva.',
    row: 1,
    col: 2,
  },
  {
    name: 'Abrumar mejorado',
    icon: 'inv_sword_05',
    maxRank: 2,
    description:
      'Aumenta un 50% la probabilidad de golpe crítico de tu Revés.',
    row: 2,
    col: 0,
  },
  {
    name: 'Control de la ira',
    icon: 'spell_holy_blessingofstamina',
    maxRank: 1,
    description: 'Genera 1 punto de ira cada 3 segundos.',
    row: 2,
    col: 1,
  },
  {
    name: 'Empalar',
    icon: 'ability_searingarrow',
    maxRank: 2,
    description:
      'Aumenta un 20% el daño adicional de los golpes críticos de tus habilidades.',
    row: 2,
    col: 2,
  },
  {
    name: 'Heridas profundas',
    icon: 'ability_backstab',
    maxRank: 3,
    description:
      'Tus golpes críticos hacen sangrar al oponente, infligiendo un 48% del daño medio de tu arma cuerpo a cuerpo durante 6 s.',
    row: 2,
    col: 3,
    requires: [{ row: 2, col: 2 }],
  },
  {
    name: 'Especialización en armas de dos manos',
    icon: 'inv_axe_09',
    maxRank: 3,
    description:
      'Aumenta un 6% el daño que infliges con armas cuerpo a cuerpo de dos manos.',
    row: 3,
    col: 1,
  },
  {
    name: 'Gusto por la sangre',
    icon: 'ability_rogue_hungerforblood',
    maxRank: 3,
    description:
      'Cuando tu Desgarrar inflige daño, tienes un 100% de probabilidad de poder usar Revés durante 9 s. 1 carga. Este efecto no puede ocurrir más de una vez cada 6 s.',
    row: 3,
    col: 2,
  },
  {
    name: 'Especialización en hachas y astas',
    icon: 'inv_axe_06',
    maxRank: 5,
    description:
      'Aumenta un 5% tu probabilidad de golpe crítico y el daño crítico con hachas y astas.',
    row: 4,
    col: 0,
  },
  {
    name: 'Golpes de barrido',
    icon: 'ability_rogue_slicedice',
    maxRank: 1,
    description:
      'Tus siguientes 5 ataques cuerpo a cuerpo golpean también a un oponente cercano adicional.',
    row: 4,
    col: 1,
  },
  {
    name: 'Especialización en mazas',
    icon: 'inv_mace_01',
    maxRank: 5,
    description:
      'Tus ataques con mazas ignoran hasta un 15% de la armadura de tu oponente.',
    row: 4,
    col: 2,
  },
  {
    name: 'Especialización en espadas',
    icon: 'inv_sword_27',
    maxRank: 5,
    description:
      'Te da un 10% de probabilidad de realizar un ataque adicional al mismo objetivo tras golpearlo con tu espada. Este efecto no puede ocurrir más de una vez cada 6 s.',
    row: 4,
    col: 3,
  },
  {
    name: 'Maestría con armas',
    icon: 'ability_warrior_weaponmastery',
    maxRank: 2,
    description:
      'Reduce un 2% la probabilidad de que tus ataques sean esquivados y un 50% la duración de todos los efectos de desarme que se te apliquen. No se acumula con otros efectos que reduzcan la duración del desarme.',
    row: 5,
    col: 0,
  },
  {
    name: 'Seccionar mejorado',
    icon: 'ability_shockwave',
    maxRank: 3,
    description:
      'Da a tu Seccionar un 15% de probabilidad de inmovilizar al objetivo durante 5 s.',
    row: 5,
    col: 2,
  },
  {
    name: 'Trauma',
    icon: 'ability_warrior_bloodnova',
    maxRank: 2,
    description:
      'Tus golpes críticos cuerpo a cuerpo aumentan un 30% la efectividad de los efectos de sangrado sobre el objetivo durante 1 min.',
    row: 5,
    col: 3,
  },
  {
    name: 'Segundo aliento',
    icon: 'ability_hunter_harass',
    maxRank: 2,
    description:
      'Cuando te afecta un aturdimiento o inmovilización, generas 20 de ira y un 10% de tu salud total durante 10 s.',
    row: 6,
    col: 0,
  },
  {
    name: 'Golpe mortal',
    icon: 'ability_warrior_savageblow',
    maxRank: 1,
    description:
      'Un golpe sañudo que inflige daño de arma más 85 y hiere al objetivo, reduciendo un 50% la efectividad de cualquier sanación durante 10 s.',
    row: 6,
    col: 1,
    requires: [{ row: 4, col: 1 }],
  },
  {
    name: 'Fuerza de armas',
    icon: 'ability_warrior_offensivestance',
    maxRank: 2,
    description:
      'Aumenta un 4% tu Fuerza y Aguante totales y tu Pericia en 4.',
    row: 6,
    col: 2,
  },
  {
    name: 'Embate mejorado',
    icon: 'ability_warrior_decisivestrike',
    maxRank: 2,
    description: 'Reduce 1 s el tiempo de lanzamiento de tu Embate.',
    row: 6,
    col: 3,
  },
  {
    name: 'Fuerza irresistible',
    icon: 'ability_warrior_bullrush',
    maxRank: 1,
    description:
      'Tu Carga se puede usar en combate, pero su tiempo de reutilización aumenta 5 s. Tras una Carga, tu siguiente Embate o Golpe mortal tiene un 25% adicional de probabilidad de golpe crítico si se usa en 10 s.',
    row: 7,
    col: 0,
  },
  {
    name: 'Golpe mortal mejorado',
    icon: 'ability_warrior_savageblow',
    maxRank: 3,
    description:
      'Aumenta un 10% el daño de tu Golpe mortal y reduce 1 s su tiempo de reutilización.',
    row: 7,
    col: 1,
    requires: [{ row: 6, col: 1 }],
  },
  {
    name: 'Asalto implacable',
    icon: 'ability_warrior_unrelentingassault',
    maxRank: 2,
    description:
      'Reduce 4 s el tiempo de reutilización de tus habilidades Revés y Represalia y aumenta un 20% el daño de ambas. Además, si golpeas a un jugador con Revés mientras está lanzando un hechizo, su daño mágico y sanación se reducen un 50% durante 6 s.',
    row: 7,
    col: 2,
  },
  {
    name: 'Muerte súbita',
    icon: 'ability_warrior_improveddisciplines',
    maxRank: 3,
    description:
      'Tus golpes cuerpo a cuerpo tienen un 9% de probabilidad de permitir el uso de Ejecutar independientemente del estado de salud del objetivo. Además, conservas al menos 10 de ira tras usar Ejecutar.',
    row: 8,
    col: 0,
  },
  {
    name: 'Ira interminable',
    icon: 'ability_warrior_endlessrage',
    maxRank: 1,
    description: 'Generas un 25% más de ira por el daño infligido.',
    row: 8,
    col: 1,
  },
  {
    name: 'Frenesí sangriento',
    icon: 'ability_warrior_bloodfrenzy',
    maxRank: 2,
    description:
      'Aumenta un 10% tu velocidad de ataque cuerpo a cuerpo. Además, tus habilidades Desgarrar y Heridas profundas aumentan un 4% todo el daño físico infligido a ese objetivo.',
    row: 8,
    col: 2,
  },
  {
    name: 'Equipo de demolición',
    icon: 'ability_warrior_trauma',
    maxRank: 5,
    description:
      'Tus golpes críticos cuerpo a cuerpo te enfurecen, aumentando un 10% todo el daño infligido durante 12 s. Este efecto no se acumula con Enfurecer.',
    row: 9,
    col: 1,
  },
  {
    name: 'Filotormenta',
    icon: 'ability_warrior_bladestorm',
    maxRank: 1,
    description:
      'Giras instantáneamente hasta 4 objetivos cercanos y durante los siguientes 6 s realizas un ataque de torbellino cada 1 s. Mientras dura Tormenta de acero puedes moverte, pero no usar otras habilidades; no sientes piedad, remordimiento ni miedo y no se te puede detener salvo matándote.',
    row: 10,
    col: 1,
  },
]

export const warriorFuryTalents: WowTalent[] = [
  {
    name: 'Blindado hasta los dientes',
    icon: 'inv_shoulder_22',
    maxRank: 3,
    description:
      'Aumenta tu poder de ataque en 3 por cada 108 de valor de armadura que tengas.',
    row: 0,
    col: 0,
  },
  {
    name: 'Voz atronadora',
    icon: 'spell_nature_purge',
    maxRank: 2,
    description:
      'Aumenta un 50% el área de efecto y la duración de tu Grito de batalla, Grito desmoralizador y Grito de mando.',
    row: 0,
    col: 1,
  },
  {
    name: 'Crueldad',
    icon: 'ability_rogue_eviscerate',
    maxRank: 5,
    description:
      'Aumenta un 5% tu probabilidad de golpe crítico con armas cuerpo a cuerpo.',
    row: 0,
    col: 2,
  },
  {
    name: 'Grito desmoralizador mejorado',
    icon: 'ability_warrior_warcry',
    maxRank: 5,
    description:
      'Aumenta un 40% la reducción de poder de ataque cuerpo a cuerpo de tu Grito desmoralizador.',
    row: 1,
    col: 1,
  },
  {
    name: 'Ira desenfrenada',
    icon: 'spell_nature_stoneclawtotem',
    maxRank: 5,
    description:
      'Te da una probabilidad de generar un punto de ira adicional cuando infliges daño cuerpo a cuerpo con un arma.',
    row: 1,
    col: 2,
  },
  {
    name: 'Rajar mejorado',
    icon: 'ability_warrior_cleave',
    maxRank: 3,
    description:
      'Aumenta un 120% el daño adicional de tu habilidad Rajar.',
    row: 2,
    col: 0,
  },
  {
    name: 'Aullido penetrante',
    icon: 'spell_shadow_deathscream',
    maxRank: 1,
    description:
      'Hace que todos los enemigos en un radio de 10 m queden aturdidos, reduciendo un 50% su velocidad de movimiento durante 6 s.',
    row: 2,
    col: 1,
  },
  {
    name: 'Furia sangrienta',
    icon: 'spell_shadow_summonimp',
    maxRank: 3,
    description:
      'Regenera un 6% de tu salud total durante 6 s tras recibir un golpe crítico.',
    row: 2,
    col: 2,
  },
  {
    name: 'Presencia de mando',
    icon: 'spell_nature_focusedmind',
    maxRank: 5,
    description:
      'Aumenta un 25% el bonus de poder de ataque cuerpo a cuerpo de tu Grito de batalla y el bonus de salud de tu Grito de mando.',
    row: 2,
    col: 3,
  },
  {
    name: 'Especialización en empuñadura dual',
    icon: 'ability_dualwield',
    maxRank: 5,
    description:
      'Aumenta un 25% el daño infligido con tu arma de la mano izquierda.',
    row: 3,
    col: 0,
  },
  {
    name: 'Ejecutar mejorado',
    icon: 'inv_sword_48',
    maxRank: 2,
    description: 'Reduce 5 el coste de ira de tu habilidad Ejecutar.',
    row: 3,
    col: 1,
  },
  {
    name: 'Enfurecer',
    icon: 'spell_shadow_unholyfrenzy',
    maxRank: 5,
    description:
      'Te da un 30% de probabilidad de recibir un 10% de daño adicional durante 12 s tras recibir un ataque dañino. Este efecto no se acumula con Cuadrilla de demolición.',
    row: 3,
    col: 2,
  },
  {
    name: 'Precisión',
    icon: 'ability_marksmanship',
    maxRank: 3,
    description:
      'Aumenta un 3% tu probabilidad de golpear con armas cuerpo a cuerpo.',
    row: 4,
    col: 0,
  },
  {
    name: 'Deseo de muerte',
    icon: 'spell_shadow_deathpact',
    maxRank: 1,
    description:
      'Al activarlo te enfureces, aumentando un 20% tu daño físico pero un 5% todo el daño que recibes. Dura 30 s.',
    row: 4,
    col: 1,
  },
  {
    name: 'Interceptar mejorado',
    icon: 'ability_rogue_sprint',
    maxRank: 2,
    description:
      'Reduce 10 s el tiempo de reutilización de tu habilidad Interceptar.',
    row: 4,
    col: 2,
  },
  {
    name: 'Ira de berserker mejorada',
    icon: 'spell_nature_ancestralguardian',
    maxRank: 2,
    description: 'La habilidad Ira de berserker genera 20 de ira al usarse.',
    row: 5,
    col: 0,
  },
  {
    name: 'Ráfaga',
    icon: 'ability_ghoulfrenzy',
    maxRank: 5,
    description:
      'Aumenta un 25% tu velocidad de ataque durante tus siguientes 3 golpes tras asestar un golpe crítico cuerpo a cuerpo.',
    row: 5,
    col: 2,
  },
  {
    name: 'Intensificar la ira',
    icon: 'ability_warrior_endlessrage',
    maxRank: 3,
    description:
      'Reduce un 33% el tiempo de reutilización de tus habilidades Ira sangrienta, Ira de berserker, Temeridad y Deseo de muerte.',
    row: 6,
    col: 0,
  },
  {
    name: 'Sed de sangre',
    icon: 'spell_nature_bloodlust',
    maxRank: 1,
    description:
      'Ataca instantáneamente al objetivo e inflige daño igual a AP*50/100. Además, tus siguientes 3 ataques cuerpo a cuerpo con éxito restauran un 1% de la salud máxima. Este efecto dura 8 s. El daño se basa en tu poder de ataque.',
    row: 6,
    col: 1,
    requires: [{ row: 4, col: 1 }],
  },
  {
    name: 'Torbellino mejorado',
    icon: 'ability_whirlwind',
    maxRank: 2,
    description: 'Aumenta un 20% el daño de tu habilidad Torbellino.',
    row: 6,
    col: 3,
  },
  {
    name: 'Ataques furiosos',
    icon: 'ability_warrior_furiousresolve',
    maxRank: 2,
    description:
      'Tus ataques cuerpo a cuerpo normales tienen una probabilidad de reducir un 25% toda la sanación recibida por el objetivo durante 10 s. Se puede acumular hasta 2 veces.',
    row: 7,
    col: 0,
  },
  {
    name: 'Actitud de berserker mejorada',
    icon: 'ability_racial_avatar',
    maxRank: 5,
    description:
      'Aumenta un 20% tu Fuerza y reduce un 10% la amenaza generada mientras estás en Actitud de berserker.',
    row: 7,
    col: 3,
  },
  {
    name: 'Ira heroica',
    icon: 'ability_heroicleap',
    maxRank: 1,
    description:
      'Elimina cualquier efecto de inmovilización y refresca el tiempo de reutilización de tu habilidad Interceptar.',
    row: 8,
    col: 0,
  },
  {
    name: 'Desenfreno',
    icon: 'ability_warrior_rampage',
    maxRank: 1,
    description:
      'Aumenta un 5% la probabilidad de golpe crítico cuerpo a cuerpo y a distancia de todos los miembros del grupo y la banda en un radio de 100 m.',
    row: 8,
    col: 1,
    requires: [{ row: 6, col: 1 }],
  },
  {
    name: 'Oleada de sangre',
    icon: 'ability_warrior_bloodsurge',
    maxRank: 3,
    description:
      'Tus golpes de Golpe heroico, Sed de sangre y Torbellino tienen un 20% de probabilidad de hacer que tu siguiente Embate sea instantáneo durante 5 s.',
    row: 8,
    col: 2,
    requires: [{ row: 6, col: 1 }],
  },
  {
    name: 'Ira inacabable',
    icon: 'ability_warrior_intensifyrage',
    maxRank: 5,
    description:
      'Aumenta un 10% el daño de tus habilidades Embate, Torbellino y Sed de sangre.',
    row: 9,
    col: 1,
  },
  {
    name: 'Agarre del titán',
    icon: 'ability_warrior_titansgrip',
    maxRank: 1,
    description:
      'Te permite equipar hachas, mazas y espadas de dos manos en una mano. Mientras tengas un arma de dos manos equipada en una mano, el daño físico que infliges se reduce un 10%.',
    row: 10,
    col: 1,
  },
]

export const warriorProtectionTalents: WowTalent[] = [
  {
    name: 'Ira sangrienta mejorada',
    icon: 'ability_racial_bloodrage',
    maxRank: 2,
    description:
      'Aumenta un 50% la ira generada por tu habilidad Ira sangrienta.',
    row: 0,
    col: 0,
  },
  {
    name: 'Especialización en escudos',
    icon: 'inv_shield_06',
    maxRank: 5,
    description:
      'Aumenta un 5% tu probabilidad de bloquear ataques con un escudo y tiene un 100% de probabilidad de generar 5 de ira cuando se produce un bloqueo, esquiva o parada.',
    row: 0,
    col: 1,
  },
  {
    name: 'Atronar mejorado',
    icon: 'ability_thunderclap',
    maxRank: 3,
    description:
      'Reduce 4 puntos de ira el coste de tu habilidad Atronar y aumenta un 30% el daño y un 10% adicional el efecto de ralentización.',
    row: 0,
    col: 2,
  },
  {
    name: 'Incitar',
    icon: 'ability_warrior_incite',
    maxRank: 3,
    description:
      'Aumenta un 15% la probabilidad de golpe crítico de tus habilidades Golpe heroico, Atronar y Rajar.',
    row: 1,
    col: 1,
  },
  {
    name: 'Anticipación',
    icon: 'spell_nature_mirrorimage',
    maxRank: 5,
    description: 'Aumenta un 5% tu probabilidad de esquivar.',
    row: 1,
    col: 2,
  },
  {
    name: 'Última resistencia',
    icon: 'spell_holy_ashestoashes',
    maxRank: 1,
    description:
      'Al activarse, esta habilidad te otorga temporalmente un 30% de tu salud máxima durante 20 s. Cuando el efecto expira, la salud se pierde.',
    row: 2,
    col: 0,
  },
  {
    name: 'Represalia mejorada',
    icon: 'ability_warrior_revenge',
    maxRank: 2,
    description:
      'Aumenta un 60% el daño de tu habilidad Represalia y hace que Represalia golpee a un objetivo adicional.',
    row: 2,
    col: 1,
  },
  {
    name: 'Maestría con escudos',
    icon: 'ability_warrior_shieldmastery',
    maxRank: 2,
    description:
      'Aumenta un 30% el valor de tu bloqueo y reduce 20 s el tiempo de reutilización de tu habilidad Bloqueo con escudo.',
    row: 2,
    col: 2,
  },
  {
    name: 'Dureza',
    icon: 'spell_holy_devotion',
    maxRank: 5,
    description:
      'Aumenta un 10% el valor de armadura de tus objetos y reduce un 30% la duración de todos los efectos de ralentización de movimiento.',
    row: 2,
    col: 3,
  },
  {
    name: 'Reflejo de hechizos mejorado',
    icon: 'ability_warrior_shieldreflection',
    maxRank: 2,
    description:
      'Reduce un 4% la probabilidad de que te alcancen los hechizos y, al usar la habilidad, refleja el primer hechizo lanzado contra los 4 miembros del grupo más cercanos en un radio de 20 m.',
    row: 3,
    col: 0,
  },
  {
    name: 'Desarmar mejorado',
    icon: 'ability_warrior_disarm',
    maxRank: 2,
    description:
      'Reduce 20 s el tiempo de reutilización de tu habilidad Desarmar y hace que el objetivo reciba un 10% de daño adicional mientras está desarmado.',
    row: 3,
    col: 1,
  },
  {
    name: 'Perforar',
    icon: 'ability_warrior_sunder',
    maxRank: 3,
    description:
      'Reduce 3 el coste de ira de tus habilidades Desgarrar armadura y Devastar.',
    row: 3,
    col: 2,
  },
  {
    name: 'Disciplinas mejoradas',
    icon: 'ability_warrior_shieldwall',
    maxRank: 2,
    description:
      'Reduce 60 s el tiempo de reutilización de tus habilidades Muro de escudo, Represalias y Temeridad.',
    row: 4,
    col: 0,
  },
  {
    name: 'Golpe conmocionante',
    icon: 'ability_thunderbolt',
    maxRank: 1,
    description:
      'Aturde al oponente durante 5 s e inflige daño igual a 38/100*AP (basado en el poder de ataque).',
    row: 4,
    col: 1,
  },
  {
    name: 'Orden de silencio',
    icon: 'ability_warrior_shieldbash',
    maxRank: 2,
    description:
      'Da a tus habilidades Golpe con escudo y Lanzamiento heroico un 100% de probabilidad de silenciar al objetivo durante 3 s y aumenta un 10% el daño de tu habilidad Embate con escudo.',
    row: 4,
    col: 2,
  },
  {
    name: 'Especialización en armas de una mano',
    icon: 'inv_sword_20',
    maxRank: 5,
    description:
      'Aumenta un 10% el daño físico que infliges cuando tienes equipada un arma cuerpo a cuerpo de una mano.',
    row: 5,
    col: 2,
  },
  {
    name: 'Actitud defensiva mejorada',
    icon: 'ability_warrior_defensivestance',
    maxRank: 2,
    description:
      'Mientras estás en Actitud defensiva, todo el daño de hechizos se reduce un 6% y, cuando bloqueas, paradas o esquivas un ataque, tienes un 100% de probabilidad de enfurecerte, aumentando un 10% el daño físico infligido durante 12 s.',
    row: 6,
    col: 0,
  },
  {
    name: 'Vigilancia',
    icon: 'ability_warrior_vigilance',
    maxRank: 1,
    description:
      'Centras tu mirada protectora en un objetivo de grupo o banda, reduciendo un 3% el daño que recibe y transfiriéndote un 10% de la amenaza que genera. Además, cada vez que recibe un ataque se refresca el tiempo de reutilización de tu Provocar. Dura 30 min. Este efecto solo puede estar en un objetivo a la vez.',
    row: 6,
    col: 1,
    requires: [{ row: 4, col: 1 }],
  },
  {
    name: 'Ira concentrada',
    icon: 'ability_warrior_focusedrage',
    maxRank: 3,
    description:
      'Reduce 3 el coste de ira de tus habilidades ofensivas.',
    row: 6,
    col: 2,
  },
  {
    name: 'Vitalidad',
    icon: 'inv_helmet_21',
    maxRank: 3,
    description:
      'Aumenta un 6% tu Fuerza total, un 9% tu Aguante y tu Pericia en 6.',
    row: 7,
    col: 1,
  },
  {
    name: 'Salvaguarda',
    icon: 'ability_warrior_safeguard',
    maxRank: 2,
    description:
      'Reduce un 30% el daño recibido por el objetivo de tu habilidad Intervenir durante 6 s.',
    row: 7,
    col: 2,
  },
  {
    name: 'Belisario',
    icon: 'ability_warrior_warbringer',
    maxRank: 1,
    description:
      'Tus habilidades Carga, Interceptar e Intervenir se pueden usar en combate y en cualquier actitud. Además, tu Intervenir elimina todos los efectos que dificultan el movimiento.',
    row: 8,
    col: 0,
  },
  {
    name: 'Devastar',
    icon: 'inv_sword_11',
    maxRank: 1,
    description:
      'Destroza la armadura del objetivo causando el efecto Desgarrar armadura. Además, inflige un 120% del daño del arma más 58 por cada aplicación de Desgarrar armadura sobre el objetivo. El efecto Desgarrar armadura se puede acumular hasta 5 veces.',
    row: 8,
    col: 1,
  },
  {
    name: 'Bloqueo crítico',
    icon: 'ability_warrior_criticalblock',
    maxRank: 3,
    description:
      'Tus bloqueos exitosos tienen un 60% de probabilidad de bloquear el doble de lo normal y aumenta un 15% adicional tu probabilidad de golpe crítico con tu habilidad Embate con escudo.',
    row: 8,
    col: 2,
  },
  {
    name: 'Espada y tablero',
    icon: 'ability_warrior_swordandboard',
    maxRank: 3,
    description:
      'Aumenta un 15% la probabilidad de golpe crítico de tu habilidad Devastar y, cuando tu Devastar o Represalia infligen daño, tienen un 30% de probabilidad de refrescar el tiempo de reutilización de tu Embate con escudo y reducir su coste un 100% durante 5 s.',
    row: 9,
    col: 1,
    requires: [{ row: 8, col: 1 }],
  },
  {
    name: 'Escudo de daño',
    icon: 'inv_shield_31',
    maxRank: 2,
    description:
      'Cada vez que recibes daño o bloqueas un ataque cuerpo a cuerpo, infliges daño igual a un 20% del valor de tu bloqueo.',
    row: 9,
    col: 2,
  },
  {
    name: 'Onda de choque',
    icon: 'ability_warrior_shockwave',
    maxRank: 1,
    description:
      'Envía una onda de fuerza frente al guerrero, infligiendo daño igual a 75/100*AP (basado en el poder de ataque) y aturdiendo a todos los enemigos en un radio de 10 m en un cono frontal durante 4 s.',
    row: 10,
    col: 1,
  },
]
