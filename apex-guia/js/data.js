// ============ LEYENDAS (Nombres exactos de descarga en assets/img/legends/*.webp) ============
const LEGENDS = [
  {
    id: "alter",
    name: "Alter",
    cls: "Escaramuza",
    origin: "Dimensiones alternas",
    classPerk: "Movilidad rápida y ventaja al reposicionarse o flanquear.",
    img: "assets/img/legends/268px-Alter_Legend_Card.webp",
    lore: "Una enigmática viajera interdimensional que abre brechas en la realidad con total naturalidad. Busca reescribir su propio destino mientras disfruta del caos de los Juegos Apex.",
    abilities: [
      { n: "Pasiva", d: "Regalo de la Grieta: interactúa con cajas de muerte a distancia para tomar un objeto y ver objetos valiosos cercanos a través de paredes." },
      { n: "Táctica", d: "Paso dimensional: crea un portal en una superficie cercana que conecta con el lado opuesto (ideal para atravesar muros o suelos)." },
      { n: "Definitiva", d: "Nexo de vacío: despliega un dispositivo que abre un portal de retorno para todo el escuadrón." }
    ],
    tip: "Abre portales en paredes o techos para sorprender por la espalda y usa el Nexo antes de iniciar un push arriesgado."
  },
  {
    id: "ash",
    name: "Ash",
    cls: "Asalto",
    origin: "Tierras Fronterizas",
    classPerk: "Más munición por stack, compartimentos extra para granadas y bonificación al romper escudos.",
    img: "assets/img/legends/268px-Ash_Legend_Card.webp",
    lore: "Una simulacra letal forjada a partir de la mente de la Dra. Reid. Fría, metódica y calculadora, entra a la arena para probar su supremacía táctica.",
    abilities: [
      { n: "Pasiva", d: "Marca de depredador: ve las cajas de muerte recientes y puede escanear una para localizar al escuadrón que las provocó." },
      { n: "Táctica", d: "Atadura arcana: lanza un grillete eléctrico que daña y encadena a un rival en un radio corto." },
      { n: "Definitiva", d: "Rasgadura de fase: abre un portal unidireccional rápido para avanzar con tu equipo." }
    ],
    tip: "Encadena a un enemigo con la táctica y lánzale una granada de fragmentación o estrella de arco justo donde caerá."
  },
  {
    id: "ballistic",
    name: "Ballistic",
    cls: "Asalto",
    origin: "Gaea",
    classPerk: "Más munición por stack, compartimentos extra para granadas y bonificación al romper escudos.",
    img: "assets/img/legends/268px-Ballistic_Legend_Card.webp",
    lore: "August Montgomery Brinkman, veterano de las primeras épocas de los Juegos Apex y caballero de alta sociedad, regresa para demostrar que la experiencia vence a la juventud.",
    abilities: [
      { n: "Pasiva", d: "As en la manga: porta una tercera arma en el espacio de sling sin accesorios." },
      { n: "Táctica", d: "Silbador: dispara un proyectil inteligente que sobrecalienta el arma del rival y le inflige daño si sigue disparando." },
      { n: "Definitiva", d: "Tempestad: mejora el arma de su sling y otorga a aliados cercanos recarga más rápida, velocidad de movimiento y munición infinita temporal." }
    ],
    tip: "Guarda un arma de ráfaga rápida o subfusil en el sling para sacarle el máximo provecho durante la definitiva."
  },
  {
    id: "bangalore",
    name: "Bangalore",
    cls: "Asalto",
    origin: "Gridiron",
    classPerk: "Más munición por stack, compartimentos extra para granadas y bonificación al romper escudos.",
    img: "assets/img/legends/268px-Bangalore_Legend_Card.webp",
    lore: "Anita Williams creció en una familia militar del IMC y lucha en los Juegos Apex para reunir fondos y regresar a su hogar junto a su hermano Jackson.",
    abilities: [
      { n: "Pasiva", d: "Doble tiempo: al recibir disparos o pasar cerca de explosiones, gana velocidad de movimiento por un breve lapso." },
      { n: "Táctica", d: "Lanzahumo: dispara botes de humo que bloquean la línea de visión y rompen puertas al impactar." },
      { n: "Definitiva", d: "Trueno rodante: solicita un bombardeo de artillería en línea que aturde y daña al avanzar." }
    ],
    tip: "No lances humo encima de tu propio equipo si no tienes miras con detección; úsalo para cortar ángulos y rotar."
  },
  {
    id: "bloodhound",
    name: "Bloodhound",
    cls: "Reconocimiento",
    origin: "Talos",
    classPerk: "Puede usar balizas de reconocimiento y revelar pistas/enemigos según el rol de exploración.",
    img: "assets/img/legends/268px-Bloodhound_Legend_Card.webp",
    lore: "Guiados por los Antiguos y la tecnología, Bloodhound rastrea presas con precisión espiritual y táctica para honrar sus tradiciones.",
    abilities: [
      { n: "Pasiva", d: "Rastreador: muestra huellas y marcas de acciones enemigas recientes con el tiempo transcurrido." },
      { n: "Táctica", d: "Ojo de todo padre: emite un pulso frontal que revela enemigos, trampas y pistas a través de obstáculos." },
      { n: "Definitiva", d: "Bestia de caza: aumenta la velocidad de movimiento, mejora la visibilidad de objetivos y reduce el enfriamiento de la táctica." }
    ],
    tip: "Activa Bestia de caza justo antes de entrar a un combate cerrado para moverte más rápido y ver mejor."
  },
  {
    id: "catalyst",
    name: "Catalyst",
    cls: "Control",
    origin: "Cleo",
    classPerk: "Fortifica posiciones defensivas y obtiene ventajas al defender zonas o dentro del anillo.",
    img: "assets/img/legends/268px-Catalyst_Legend_Card.webp",
    lore: "Tressa Smith utiliza ferrofluido manipulado para proteger su luna natal Cleo y controlar el espacio en cada enfrentamiento.",
    abilities: [
      { n: "Pasiva", d: "Barricada: refuerza puertas y crea muros temporales con ferrofluido." },
      { n: "Táctica", d: "Púas perforantes: despliega trampas de ferrofluido que ralentizan y dañan a quienes pasan cerca." },
      { n: "Definitiva", d: "Velo oscuro: levanta un muro alto de ferrofluido que bloquea la visión y ralentiza a los enemigos que lo cruzan." }
    ],
    tip: "Usa el Velo oscuro para dividir una pelea en dos o escapar de un tercer equipo que llega a rematar."
  },
  {
    id: "caustic",
    name: "Caustic",
    cls: "Control",
    origin: "Gaea",
    classPerk: "Fortifica posiciones defensivas y obtiene ventajas al defender edificios o zonas cerradas.",
    img: "assets/img/legends/268px-Caustic_Legend_Card.webp",
    lore: "Antiguo investigador llamado Alexander Nox que perfeccionó su gas Nox en la arena, tratando cada partida como un experimento de supervivencia.",
    abilities: [
      { n: "Pasiva", d: "Visión Nox: distingue mejor a los objetivos afectados por su gas." },
      { n: "Táctica", d: "Trampa de gas Nox: coloca barriles que liberan gas tóxico al activarse o al dispararles en la base." },
      { n: "Definitiva", d: "Granada de gas Nox: lanza un proyectil que cubre un área amplia con gas." }
    ],
    tip: "No bloquees todas las salidas de un edificio si tu equipo necesita rotar; deja una vía de escape controlada."
  },
  {
    id: "conduit",
    name: "Conduit",
    cls: "Apoyo",
    origin: "Planeta de los Titanes",
    classPerk: "Facilita curaciones, recuperación de escudos y reapariciones seguras del escuadrón.",
    img: "assets/img/legends/268px-Conduit_Legend_Card.webp",
    lore: "Optimista y decidida, usa la energía de un Titán de la Frontera para proteger a su familia y mantener en pie a su escuadrón.",
    abilities: [
      { n: "Pasiva", d: "Ahorro de energía: gana velocidad de movimiento al correr hacia aliados fuera de su rango de visión directa." },
      { n: "Táctica", d: "Transferencia radial: envía energía de escudo temporal a un aliado cercano (y un poco a ella misma)." },
      { n: "Definitiva", d: "Acometida energética: despliega una hilera de emisores que dañan y ralentizan a los enemigos." }
    ],
    tip: "Usa la táctica apenas rompan el escudo de un compañero para que pueda seguir presionando sin frenar."
  },
  {
    id: "crypto",
    name: "Crypto",
    cls: "Reconocimiento",
    origin: "Gaea",
    classPerk: "Aporta inteligencia de mapa, balizas y vigilancia remota.",
    img: "assets/img/legends/268px-Crypto_Legend_Card.webp",
    lore: "Tae Joon Park es un hacker brillante que opera en las sombras para descubrir la verdad detrás de quienes lo incriminaron.",
    abilities: [
      { n: "Pasiva", d: "Neurolink: los enemigos detectados por su dron quedan marcados para el equipo." },
      { n: "Táctica", d: "Dron de vigilancia: despliega y pilota un dron aéreo para explorar, recoger banners o escanear." },
      { n: "Definitiva", d: "PEM: detona una onda electromagnética que daña escudos, ralentiza y destruye trampas cercanas." }
    ],
    tip: "No pases demasiado tiempo volando el dron lejos de tu equipo; úsalo en ráfagas cortas y mantente a cubierto."
  },
  {
    id: "fuse",
    name: "Fuse",
    cls: "Asalto",
    origin: "Salvo",
    classPerk: "Más munición por stack, compartimentos extra para granadas y bonificación al romper escudos.",
    img: "assets/img/legends/268px-Fuse_Legend_Card.webp",
    lore: "Walter Fitzroy Jr. es un carismático especialista en explosivos de Salvo que convierte cada pelea en un espectáculo pirotécnico.",
    abilities: [
      { n: "Pasiva", d: "Granadero: apila más granadas por espacio y las lanza con mayor velocidad y precisión." },
      { n: "Táctica", d: "Racimo de nudillos: dispara un dispositivo que emite explosiones continuas en el punto de impacto." },
      { n: "Definitiva", d: "La traca: lanza un mortero que crea un anillo de llamas alrededor del objetivo." }
    ],
    tip: "Dispara el Racimo de nudillos detrás de coberturas para obligar al rival a asomarse donde tu equipo lo espera."
  },
  {
    id: "gibraltar",
    name: "Gibraltar",
    cls: "Apoyo",
    origin: "Solace",
    classPerk: "Facilita curaciones, recuperación de escudos y reapariciones seguras del escuadrón.",
    img: "assets/img/legends/268px-Gibraltar_Legend_Card.webp",
    lore: "Makoa Gibraltar es un protector nato de Solace que compite para salvaguardar a quienes lo rodean y honrar a su gente.",
    abilities: [
      { n: "Pasiva", d: "Escudo de arma: al apuntar con la mira, despliega un escudo frontal que absorbe daño." },
      { n: "Táctica", d: "Cúpula de protección: crea un domo impenetrable durante unos segundos." },
      { n: "Definitiva", d: "Bombardeo defensivo: solicita ataques de mortero concentrados en una zona." }
    ],
    tip: "Usa la Cúpula para curar o revivir con seguridad, y sal del borde justo antes de disparar."
  },
  {
    id: "horizon",
    name: "Horizon",
    cls: "Escaramuza",
    origin: "Órbita de Olympus",
    classPerk: "Movilidad vertical y horizontal para ganar altura o rotar rápido.",
    img: "assets/img/legends/268px-Horizon_Legend_Card.webp",
    lore: "La Dra. Mary Somers es una astrofísica decidida a encontrar una forma de regresar con su hijo tras años distorsionados por un agujero negro.",
    abilities: [
      { n: "Pasiva", d: "Paseo espacial: ofrece mayor control en el aire y reduce el impacto al caer desde alturas." },
      { n: "Táctica", d: "Ascensor gravitatorio: genera una corriente ascendente que impulsa hacia arriba." },
      { n: "Definitiva", d: "Agujero negro: despliega a N.E.W.T., que atrae a los enemigos cercanos hacia el centro." }
    ],
    tip: "Combina el Agujero negro con granadas o la definitiva de Fuse para castigar a todo un escuadrón agrupado."
  },
  {
    id: "lifeline",
    name: "Lifeline",
    cls: "Apoyo",
    origin: "Psamathe",
    classPerk: "Facilita curaciones, recuperación de escudos y reapariciones seguras del escuadrón.",
    img: "assets/img/legends/268px-Lifeline_Legend_Card.webp",
    lore: "Ajay Che utiliza su talento y recursos para ayudar a comunidades vulnerables de la Frontera mientras compite en los Juegos Apex.",
    abilities: [
      { n: "Pasiva", d: "Médica de combate: asiste en curaciones y reanimaciones con apoyo de su dron." },
      { n: "Táctica", d: "D.O.C. Curación: despliega un dron médico para restaurar salud en combate." },
      { n: "Definitiva", d: "Paquete de supervivencia: llama un cápsula con equipamiento y apoyo para el equipo." }
    ],
    tip: "Mantente con vida al final de las peleas; tu capacidad para levantar compañeros puede cambiar el resultado."
  },
  {
    id: "loba",
    name: "Loba",
    cls: "Apoyo",
    origin: "Boreas",
    classPerk: "Facilita el acceso a equipamiento y el sostén del escuadrón.",
    img: "assets/img/legends/268px-Loba_Legend_Card.webp",
    lore: "Hija de ladrones y marcada por una tragedia, Loba combina elegancia, agilidad y precisión para conseguir lo que quiere.",
    abilities: [
      { n: "Pasiva", d: "Ojo de ladrón: detecta botín épico y legendario cercano a través de paredes." },
      { n: "Táctica", d: "Salto del ladrón: lanza su brazalete para teletransportarse al punto de impacto." },
      { n: "Definitiva", d: "Tienda del mercado negro: abre un punto de acceso para tomar botín del entorno." }
    ],
    tip: "Usa el Mercado negro nada más aterrizar o tras ganar una pelea para equipar rápido a tu equipo y recoger munición."
  },
  {
    id: "madmaggie",
    name: "Mad Maggie",
    cls: "Asalto",
    origin: "Salvo",
    classPerk: "Más munición por stack, compartimentos extra para granadas y bonificación al romper escudos.",
    img: "assets/img/legends/268px-Mad_Maggie_Legend_Card.webp",
    lore: "Rebelde feroz de Salvo que lleva su conflicto personal a los Juegos Apex con un estilo agresivo y sin concesiones.",
    abilities: [
      { n: "Pasiva", d: "Ira del caudillo: permite correr más rápido con escopetas y resalta a los enemigos a los que daña." },
      { n: "Táctica", d: "Taladro antidisturbios: adhiere un taladro a superficies que quema al otro lado." },
      { n: "Definitiva", d: "Bola de demolición: lanza una esfera explosiva que genera plataformas de impulso y golpea a rivales." }
    ],
    tip: "Lleva siempre una escopeta secundaria y usa el taladro para sacar a rivales escondidos tras muros o puertas."
  },
  {
    id: "mirage",
    name: "Mirage",
    cls: "Apoyo",
    origin: "Solace",
    classPerk: "Facilita reanimaciones y engaños tácticos para el equipo.",
    img: "assets/img/legends/268px-Mirage_Legend_Card.webp",
    lore: "Elliott Witt usa tecnología holográfica para ocultar sus inseguridades y brillar en la arena con trucos impredecibles.",
    abilities: [
      { n: "Pasiva", d: "Ahora me ves...: oculta visualmente al reanimar o usar balizas y activa señuelos al caer." },
      { n: "Táctica", d: "Psique: envía un señuelo holográfico que imita movimiento." },
      { n: "Definitiva", d: "Fiesta de engaños: genera múltiples señuelos alrededor para confundir al rival." }
    ],
    tip: "Lanza un señuelo justo antes de asomarte o de curarte para que el rival gaste balas en el holograma."
  },
  {
    id: "newcastle",
    name: "Newcastle",
    cls: "Apoyo",
    origin: "Harris Valley",
    classPerk: "Facilita curaciones, escudos y reanimaciones seguras del escuadrón.",
    img: "assets/img/legends/268px-Newcastle_Legend_Card.webp",
    lore: "Jackson Williams asume la identidad de Newcastle para proteger a su gente y mantener a salvo a su hermana Anita.",
    abilities: [
      { n: "Pasiva", d: "Recuperar heridos: permite arrastrar a aliados caídos mientras despliega un escudo frontal." },
      { n: "Táctica", d: "Escudo móvil: proyecta un dron con barrera energética que puedes mover." },
      { n: "Definitiva", d: "Muralla del castillo: salta y crea una fortificación electrificada que aturde al impactar." }
    ],
    tip: "Arrastra a un compañero caído hacia cobertura sólida antes de terminar de levantarlo."
  },
  {
    id: "octane",
    name: "Octane",
    cls: "Escaramuza",
    origin: "Psamathe",
    classPerk: "Movilidad rápida para rotaciones agresivas y flanqueos.",
    img: "assets/img/legends/268px-Octane_Legend_Card.webp",
    lore: "Octavio Silva busca la máxima adrenalina en cada salto y carrera, convirtiendo cada partida en un espectáculo de velocidad.",
    abilities: [
      { n: "Pasiva", d: "Reparación rápida: regenera salud progresivamente cuando no recibe daño." },
      { n: "Táctica", d: "Estimulante: aumenta la velocidad de movimiento a cambio de un poco de salud." },
      { n: "Definitiva", d: "Plataforma de lanzamiento: coloca un trampolín que impulsa por los aires." }
    ],
    tip: "No uses Estimulante justo antes de entrar a un duelo si vas bajo de vida; úsalo para reposicionarte o perseguir."
  },
  {
    id: "pathfinder",
    name: "Pathfinder",
    cls: "Escaramuza",
    origin: "Desconocido",
    classPerk: "Movilidad vertical y horizontal con tirolesas y desplazamientos rápidos.",
    img: "assets/img/legends/268px-Pathfinder_Legend_Card.webp",
    lore: "Un robot MRVN amigable y optimista que compite en los Juegos Apex con la esperanza de encontrar pistas sobre su creador.",
    abilities: [
      { n: "Pasiva", d: "Conocimiento interno: interactúa con paquetes o sistemas para obtener ventajas de posicionamiento y definitiva." },
      { n: "Táctica", d: "Gancho: dispara un gancho para balancearte y ganar impulso o altura." },
      { n: "Definitiva", d: "Cañón de tirolesa: crea una tirolesa de largo alcance para el escuadrón." }
    ],
    tip: "Salta al final del gancho para convertir la tensión en un arco largo y rápido."
  },
  {
    id: "rampart",
    name: "Rampart",
    cls: "Control",
    origin: "Gaea",
    classPerk: "Fortifica posiciones y aprovecha armas pesadas o coberturas.",
    img: "assets/img/legends/268px-Rampart_Legend_Card.webp",
    lore: "Ramya Parekh es una talentosa modificadora de armas con carácter fuerte que prueba sus creaciones directamente en la arena.",
    abilities: [
      { n: "Pasiva", d: "Cargador modificado: mejora el rendimiento y recarga con ametralladoras ligeras." },
      { n: "Táctica", d: "Cobertura amplificada: levanta un escudo que bloquea tiros y amplifica los disparos que salen por él." },
      { n: "Definitiva", d: "Ametralladora móvil Sheila: despliega o empuña una ametralladora pesada de alta cadencia." }
    ],
    tip: "Coloca la cobertura amplificada un poco antes de asomarte; la parte inferior tarda menos en armarse que la superior."
  },
  {
    id: "revenant",
    name: "Revenant",
    cls: "Escaramuza",
    origin: "Desconocido",
    classPerk: "Movilidad ágil y capacidad de presión en duelos cercanos.",
    img: "assets/img/legends/268px-Revenant_Legend_Card.webp",
    lore: "Atrapado en un cuerpo sintético durante siglos, Revenant busca liberarse de quienes lo controlan mientras siembra terror en la arena.",
    abilities: [
      { n: "Pasiva", d: "Acechador: trepa muros con mayor altura y se mueve agachado con más rapidez." },
      { n: "Táctica", d: "Salto de sombra: realiza un salto potenciado para atacar o escapar." },
      { n: "Definitiva", d: "Forja de sombras: genera un escudo de sombras que se regenera al derribar enemigos." }
    ],
    tip: "Aprovecha su escalada silenciosa y alta para llegar a tejados donde los rivales no esperan un ataque."
  },
  {
    id: "seer",
    name: "Seer",
    cls: "Reconocimiento",
    origin: "Boreas",
    classPerk: "Aporta información táctica de posición y lectura de combates.",
    img: "assets/img/legends/268px-Seer_Legend_Card.webp",
    lore: "Obi Edolasim nació bajo un augurio particular y usa su percepción para leer el ritmo de la batalla como un artista.",
    abilities: [
      { n: "Pasiva", d: "Sensor de latidos: al apuntar con la mira, detecta señales de enemigos cercanos." },
      { n: "Táctica", d: "Atención enfocada: lanza un microdron que revela y dificulta acciones a los rivales alcanzados." },
      { n: "Definitiva", d: "Exhibición: crea una esfera que rastrea a los enemigos que se mueven rápido o disparan dentro de ella." }
    ],
    tip: "Usa su lectura de cercanía antes de doblar esquinas para evitar caer en emboscadas."
  },
  {
    id: "valkyrie",
    name: "Valkyrie",
    cls: "Escaramuza",
    origin: "Angelia",
    classPerk: "Movilidad aérea para reposicionarse y tomar altura rápida.",
    img: "assets/img/legends/268px-Valkyrie_Legend_Card.webp",
    lore: "Kairi Imahara heredó el espíritu de vuelo de su padre Viper y surca los cielos de los Juegos Apex con su jetpack.",
    abilities: [
      { n: "Pasiva", d: "Propulsor VTOL: permite volar y mantenerse en el aire usando combustible recargable." },
      { n: "Táctica", d: "Enjambre de misiles: dispara una salva de mini-misiles que daña y aturde." },
      { n: "Definitiva", d: "Salto celestial: impulsa a Valkyrie y a sus aliados por los aires para redesplegarse." }
    ],
    tip: "No te quedes flotando en línea recta frente a francotiradores o rifles de precisión; úsala para saltar a cobertura."
  },
  {
    id: "vantage",
    name: "Vantage",
    cls: "Reconocimiento",
    origin: "Págos",
    classPerk: "Reconocimiento de largo alcance y lectura de objetivos.",
    img: "assets/img/legends/268px-Vantage_Legend_Card.webp",
    lore: "Criada en los helados páramos de Págos junto a su murciélago Echo, domina el tiro de precisión y la supervivencia.",
    abilities: [
      { n: "Pasiva", d: "Mira de reconocimiento: muestra información del objetivo al apuntar y mejora el zoom con armas sin mira." },
      { n: "Táctica", d: "¡Vamos, Echo!: envía a su murciélago y puede saltar hacia su posición." },
      { n: "Definitiva", d: "Rifle de francotirador: despliega un rifle especial que marca objetivos y amplifica el daño posterior." }
    ],
    tip: "Usa el salto hacia Echo para ganar altura de sorpresa y cancelar el impulso a medio camino si necesitas cubrirte."
  },
  {
    id: "wattson",
    name: "Wattson",
    cls: "Control",
    origin: "Solace",
    classPerk: "Fortifica zonas y protege posiciones contra proyectiles y avances.",
    img: "assets/img/legends/268px-Wattson_Legend_Card.webp",
    lore: "Natalie Paquette creció entre los circuitos de la arena y diseña defensas eléctricas precisas para proteger a su equipo.",
    abilities: [
      { n: "Pasiva", d: "Chispazo de genio: acelera la carga de definitiva y regenera escudos de forma gradual." },
      { n: "Táctica", d: "Valla perimetral: conecta postes para crear cercas eléctricas que ralentizan y dañan." },
      { n: "Definitiva", d: "Pilón interceptor: recarga escudos cercanos e intercepta proyectiles y granadas." }
    ],
    tip: "Coloca el pilón detrás de una cobertura sólida, nunca en medio de la habitación donde puedan romperlo fácil."
  },
  {
    id: "wraith",
    name: "Wraith",
    cls: "Escaramuza",
    origin: "Tierra de Typhon",
    classPerk: "Movilidad rápida para entradas, salidas y rotaciones seguras.",
    img: "assets/img/legends/268px-Wraith_Legend_Card.webp",
    lore: "Renee Blasey busca reconstruir su pasado tras experimentar con portales dimensionales, guiada por voces de otras realidades.",
    abilities: [
      { n: "Pasiva", d: "Voces del vacío: advierte sobre peligros cercanos o cuando alguien te apunta." },
      { n: "Táctica", d: "Al vacío: otorga invulnerabilidad temporal y velocidad para reposicionarte." },
      { n: "Definitiva", d: "Grieta dimensional: abre un portal de ida y vuelta para el escuadrón." }
    ],
    tip: "Abre el portal en un lugar seguro y ciérralo en una posición cubierta para que tu equipo pueda retroceder o avanzar."
  }
];

// ============ ARMAS (Rutas assets/img/weapons/*.webp sin prefijo de px) ============
const WEAPONS = [
  // LIGERA
  {
    name: "R-301",
    cat: "Ligera",
    dmg: "14 / 28",
    rate: "810 RPM",
    img: "assets/img/weapons/R-301_Carbine.webp",
    recoil: [[0,0],[1,7],[2,14],[1,21],[-1,28],[-3,35],[-4,42],[-3,49],[-2,56],[-1,63]],
    tip: "Ideal para principiantes: retroceso estable, compensa hacia abajo y un poco a la izquierda."
  },
  {
    name: "R-99",
    cat: "Ligera",
    dmg: "12 / 18",
    rate: "1080 RPM",
    img: "assets/img/weapons/R-99_SMG.webp",
    recoil: [[0,0],[2,6],[4,12],[2,18],[-2,24],[-4,30],[-3,36],[1,42],[4,48],[2,54]],
    tip: "Cadencia altísima a corta distancia: mantén ráfagas controladas y corrige los cambios laterales."
  },
  {
    name: "G7 Scout",
    cat: "Ligera",
    dmg: "34 / 60",
    rate: "273 RPM",
    img: "assets/img/weapons/G7_Scout.webp",
    recoil: [[0,0],[1,11],[1,22],[0,33],[-1,44],[-1,55],[0,66],[1,77],[1,88],[0,99]],
    tip: "Excelente a media distancia: dispara con ritmo constante y acompáñalo de movimiento lateral."
  },
  {
    name: "P2020",
    cat: "Ligera",
    dmg: "18 / 27",
    rate: "420 RPM",
    img: "assets/img/weapons/P2020.webp",
    recoil: [[0,0],[1,6],[1,12],[0,18],[-1,24],[0,30],[1,36],[1,42],[0,48],[-1,54]],
    tip: "Confiable como respaldo rápido; mantén la mira estable al disparar en secuencia."
  },
  {
    name: "RE-45",
    cat: "Ligera",
    dmg: "12 / 18",
    rate: "780 RPM",
    img: "assets/img/weapons/RE-45_Auto.webp",
    recoil: [[0,0],[2,6],[2,12],[1,18],[-1,24],[-2,30],[-1,36],[1,42],[2,48],[1,54]],
    tip: "Muy cómoda desde el inicio de partida y útil a corta distancia."
  },
  {
    name: "Alternator",
    cat: "Ligera",
    dmg: "16 / 24",
    rate: "600 RPM",
    img: "assets/img/weapons/Alternator_SMG.webp",
    recoil: [[0,0],[1,7],[1,14],[0,21],[-1,28],[-1,35],[0,42],[1,49],[1,56],[0,63]],
    tip: "Muy fácil de controlar para quienes empiezan; gran precisión en cadera y mira."
  },

  // PESADA
  {
    name: "Flatline",
    cat: "Pesada",
    dmg: "18 / 36",
    rate: "600 RPM",
    img: "assets/img/weapons/VK-47_Flatline.webp",
    recoil: [[0,0],[-2,8],[-4,16],[-5,24],[-3,32],[1,40],[4,48],[5,56],[4,64],[2,72]],
    tip: "Gran daño por bala: tira hacia abajo y a la izquierda al inicio, luego corrige a la derecha."
  },
  {
    name: "Hemlok",
    cat: "Pesada",
    dmg: "22 / 44",
    rate: "Ráfaga / Auto",
    img: "assets/img/weapons/Hemlok_Burst_AR.webp",
    recoil: [[0,0],[1,12],[2,24],[1,36],[-1,48],[-2,60],[-1,72],[1,84],[2,96],[1,108]],
    tip: "Muy contundente a media distancia: reajusta el centro entre ráfagas."
  },
  {
    name: "Prowler",
    cat: "Pesada",
    dmg: "15 / 22",
    rate: "Ráfaga de 5",
    img: "assets/img/weapons/Prowler_Burst_PDW.webp",
    recoil: [[0,0],[2,8],[3,16],[1,24],[-2,32],[-3,40],[-1,48],[2,56],[3,64],[1,72]],
    tip: "Pega durísimo en espacios cerrados si conectas la ráfaga completa."
  },
  {
    name: "Spitfire",
    cat: "Pesada",
    dmg: "19 / 38",
    rate: "540 RPM",
    img: "assets/img/weapons/M600_Spitfire.webp",
    recoil: [[0,0],[-1,8],[-2,16],[-1,24],[1,32],[2,40],[1,48],[-1,56],[-2,64],[-1,72]],
    tip: "Cargador amplio para presionar y sostener fuego de cobertura."
  },
  {
    name: "30-30 Repeater",
    cat: "Pesada",
    dmg: "42 / 84",
    rate: "Palanca",
    img: "assets/img/weapons/30-30_Repeater.webp",
    recoil: [[0,0],[0,14],[1,28],[0,42],[-1,56],[0,70],[1,84],[0,98],[-1,112],[0,126]],
    tip: "Cargar el disparo con la mira aumenta su daño y velocidad de proyectil."
  },
  {
    name: "Wingman",
    cat: "Pesada",
    dmg: "45 / 90",
    rate: "Semiautomática",
    img: "assets/img/weapons/Wingman.webp",
    recoil: [[0,0],[1,16],[2,32],[1,48],[-1,64],[-2,80],[-1,96],[1,112],[2,128],[1,144]],
    tip: "Exige precisión pero recompensa con daño alto y buena movilidad al apuntar."
  },
  {
    name: "C.A.R. SMG",
    cat: "Pesada",
    dmg: "13 / 20",
    rate: "900 RPM",
    img: "assets/img/weapons/C.A.R._SMG.webp",
    recoil: [[0,0],[2,7],[3,14],[1,21],[-2,28],[-3,35],[-2,42],[1,49],[3,56],[2,63]],
    tip: "Versátil en munición y rápida en duelos cercanos; controla el retroceso desde el primer disparo."
  },

  // ENERGÍA
  {
    name: "Volt",
    cat: "Energía",
    dmg: "15 / 23",
    rate: "780 RPM",
    img: "assets/img/weapons/Volt_SMG.webp",
    recoil: [[0,0],[1,7],[2,14],[1,21],[-1,28],[-2,35],[-1,42],[1,49],[2,56],[1,63]],
    tip: "Proyectiles rápidos y retroceso limpio; excelente para combinar con rifle de asalto o escopeta."
  },
  {
    name: "Devotion",
    cat: "Energía",
    dmg: "17 / 34",
    rate: "Aceleración (hasta 900 RPM)",
    img: "assets/img/weapons/Devotion_LMG.webp",
    recoil: [[0,0],[-2,10],[-3,20],[-2,30],[1,40],[3,50],[4,60],[2,70],[-1,80],[-2,90]],
    tip: "Empieza despacio y acelera mucho; prepárate para compensar con firmeza cuando alcance velocidad."
  },
  {
    name: "Havoc",
    cat: "Energía",
    dmg: "18 / 36",
    rate: "Carga + Automática",
    img: "assets/img/weapons/HAVOC_Rifle.webp",
    recoil: [[0,0],[2,9],[3,18],[2,27],[-1,36],[-3,45],[-4,54],[-2,63],[1,72],[2,81]],
    tip: "Precalienta el disparo antes de asomarte si no llevas Turbocharger."
  },
  {
    name: "Triple Take",
    cat: "Energía",
    dmg: "21x3 / 42x3",
    rate: "Semiautomática",
    img: "assets/img/weapons/Triple_Take.webp",
    recoil: [[0,0],[0,15],[1,30],[0,45],[-1,60],[0,75],[1,90],[0,105],[-1,120],[0,135]],
    tip: "Funciona tanto a media distancia como de cerca sin apuntar gracias a su dispersión triple."
  },
  {
    name: "Nemesis",
    cat: "Energía",
    dmg: "16 / 26",
    rate: "Ráfaga energética",
    img: "assets/img/weapons/Nemesis_Burst_AR.webp",
    recoil: [[0,0],[1,9],[2,18],[1,27],[-1,36],[-2,45],[-1,54],[1,63],[2,72],[1,81]],
    tip: "Al encadenar disparos reduce el intervalo entre ráfagas y se vuelve muy agresiva."
  },

  // FRANCOTIRADOR
  {
    name: "Longbow DMR",
    cat: "Francotirador",
    dmg: "55 / 110",
    rate: "Semiautomática",
    img: "assets/img/weapons/Longbow_DMR.webp",
    recoil: [[0,0],[0,22],[0,44],[1,66],[0,88],[-1,110],[0,132],[0,154],[1,176],[0,198]],
    tip: "Busca posiciones elevadas y reajusta tras cada tiro para mantener la mira sobre el rival."
  },
  {
    name: "Charge Rifle",
    cat: "Francotirador",
    dmg: "90 (a distancia)",
    rate: "Carga de energía",
    img: "assets/img/weapons/Charge_Rifle.webp",
    recoil: [[0,0],[0,16],[1,32],[0,48],[-1,64],[0,80],[1,96],[0,112],[-1,128],[0,144]],
    tip: "Útil para presionar a larga distancia y desgastar escudos antes de avanzar."
  },
  {
    name: "Sentinel",
    cat: "Francotirador",
    dmg: "70 / 140",
    rate: "Cerrojo",
    img: "assets/img/weapons/Sentinel.webp",
    recoil: [[0,0],[0,24],[0,48],[0,72],[1,96],[0,120],[-1,144],[0,168],[0,192],[0,216]],
    tip: "Cargar con una célula de escudo potencia sus disparos temporalmente para romper escudos de golpe."
  },

  // ESCOPETA
  {
    name: "Peacekeeper",
    cat: "Escopeta",
    dmg: "10x11 / 15x11",
    rate: "Palanca",
    img: "assets/img/weapons/Peacekeeper.webp",
    recoil: [[0,0],[2,16],[4,32],[2,48],[-2,64],[-3,80],[-1,96],[2,112],[3,128],[1,144]],
    tip: "Apuntar con la mira concentra los perdigones para hacer daño sólido a media-corta distancia."
  },
  {
    name: "EVA-8",
    cat: "Escopeta",
    dmg: "7x9 / 10x9",
    rate: "Automática",
    img: "assets/img/weapons/EVA-8_Auto.webp",
    recoil: [[0,0],[1,11],[2,22],[1,33],[-1,44],[-2,55],[-1,66],[1,77],[2,88],[1,99]],
    tip: "Mantén presionado el gatillo mientras te mueves lateralmente en espacios cerrados."
  },
  {
    name: "Mastiff",
    cat: "Escopeta",
    dmg: "11x5 / 16x5",
    rate: "Cerrojo",
    img: "assets/img/weapons/Mastiff_Shotgun.webp",
    recoil: [[0,0],[2,14],[3,28],[1,42],[-2,56],[-2,70],[0,84],[2,98],[2,112],[0,126]],
    tip: "Su patrón horizontal castiga mucho en pasillos o puertas; dispara y cúbrete entre tiros."
  },
  {
    name: "Mozambique",
    cat: "Escopeta",
    dmg: "15x3 / 22x3",
    rate: "Rápida",
    img: "assets/img/weapons/Mozambique_Shotgun.webp",
    recoil: [[0,0],[1,10],[2,20],[1,30],[-1,40],[-1,50],[0,60],[1,70],[1,80],[0,90]],
    tip: "Ágil y con buena cadencia; ideal para rematar rivales sin escudo o acompañar un rifle."
  },

  // ESPECIALES / TIEMPO LIMITADO (Care Package y LTM)
  {
    name: "Kraber .50-Cal",
    cat: "Especiales",
    tag: "Paquete de Supervivencia",
    dmg: "145 / 290",
    rate: "Cerrojo muy lento",
    img: "assets/img/weapons/Kraber_.50-Cal_Sniper.webp",
    recoil: [[0,0],[0,32],[0,64],[1,96],[0,128],[-1,160],[0,192],[0,224],[1,256],[0,288]],
    tip: "Munición limitada: asegúrate de tener ángulo claro antes de disparar y cambia de arma tras el tiro."
  },
  {
    name: "Bocek Compound Bow",
    cat: "Especiales",
    tag: "Paquete de Supervivencia / Rotación",
    dmg: "70 / 105",
    rate: "Arco tensado",
    img: "assets/img/weapons/Bocek_Compound_Bow.webp",
    recoil: [[0,0],[1,14],[1,28],[0,42],[-1,56],[-1,70],[0,84],[1,98],[1,112],[0,126]],
    tip: "Disparo silencioso sin rastros de bala visibles: excelente para hostigar sin delatar tu posición."
  },
  {
    name: "Buster Sword (LTM)",
    cat: "Especiales",
    tag: "Evento de Tiempo Limitado (LTM)",
    dmg: "Cuerpo a cuerpo / Límite",
    rate: "Cuerpo a cuerpo",
    img: "assets/img/weapons/Buster_Sword_R5.webp",
    recoil: null,
    tip: "Objeto especial de evento por tiempo limitado (LTM): combina tajos, bloqueo y embestida cuando está disponible."
  },
  {
    name: "Cañón / Reliquias LTM",
    cat: "Especiales",
    tag: "Modos y Eventos Limitados",
    dmg: "Variable según modo",
    rate: "Evento temporal",
    img: "assets/img/weapons/LTM_Special.webp",
    recoil: null,
    tip: "En eventos de tiempo limitado (LTM) aparecen armas especiales, modificadores y variantes exclusivas de temporada."
  }
];

// ============ ACCESORIOS ============
const ATTACHMENTS = {
  general: [
    { name: "Culata (Stock)", desc: "Reduce el tiempo de cambio de arma y la deriva al apuntar. Nivel 3 reduce fuertemente la deriva.", weapons: "Fusiles de asalto, subfusiles y ametralladoras ligeras." },
    { name: "Estabilizador de Cañón", desc: "Suaviza el retroceso y reduce la dispersión. En niveles altos aporta mayor control en ráfagas largas.", weapons: "R-301, Flatline, Havoc, etc. (según disponibilidad)." },
    { name: "Mira (Optic)", desc: "Ajusta el aumento visual. Para empezar, 1x o 2x son los más cómodos para duelos medios y cercanos.", weapons: "Todas las categorías compatibles." },
    { name: "Cargador Extendido", desc: "Aumenta la capacidad de munición antes de recargar. El nivel dorado recarga automáticamente al guardar el arma.", weapons: "Munición ligera, pesada, energética y francotirador." },
    { name: "Láser (Laser Sight)", desc: "Mejora la precisión al disparar sin apuntar (hip-fire).", weapons: "Subfusiles y pistolas automáticas compatibles." },
    { name: "Culata de Francotirador", desc: "Disminuye la deriva de la mira y acelera el manejo en armas de largo alcance.", weapons: "Rifles de precisión y francotiradores." }
  ],
  hopups: [
    { name: "Turbocharger", weapons: "Havoc / Devotion", desc: "Elimina o reduce la demora inicial de disparo y acelera la cadencia." },
    { name: "Hammerpoint Rounds", weapons: "P2020 / Mozambique / RE-45", desc: "Incrementa notablemente el daño contra objetivos sin escudo." },
    { name: "Skullpiercer Rifling", weapons: "Longbow / Wingman / 30-30", desc: "Aumenta el multiplicador de daño crítico en la cabeza." }
  ],
  note: "La rotación de accesorios y Hop-Ups cambia entre temporadas; revisa el inventario o el campo de tiro en cada parche."
};

// ============ CONSUMIBLES Y SUPERVIVENCIA (Rutas assets/img/consumables/*.svg) ============
const CONSUMIBLES = [
  { name: "Jeringa", cat: "Curación", img: "assets/img/consumables/Syringe_white.svg", info: "Restaura 25 de salud en ~2.5 s. Ideal para curarte rápido tras una escaramuza." },
  { name: "Botiquín", cat: "Curación", img: "assets/img/consumables/Med_Kit_white.svg", info: "Restaura 100 de salud en ~8 s. Úsalo a cubierto cuando recibas daño directo a la vida." },
  { name: "Célula de escudo", cat: "Escudos", img: "assets/img/consumables/Shield_Cell_white.svg", info: "Restaura 25 de escudo en ~3 s. La más rápida para recuperar un segmento en pleno combate." },
  { name: "Batería de escudo", cat: "Escudos", img: "assets/img/consumables/Shield_Battery_white.svg", info: "Restaura 100 de escudo en ~5 s. Prioritaria si te rompieron el escudo y tienes cobertura." },
  { name: "Kit Fénix", cat: "Curación + Escudo", img: "assets/img/consumables/Phoenix_Kit_white.svg", info: "Restaura salud y escudo al máximo en ~10 s. Requiere tiempo seguro sin presión." },
  { name: "Acelerador de definitiva", cat: "Táctico", img: "assets/img/consumables/Ultimate_Accelerant_white.svg", info: "Recarga un porcentaje de la habilidad definitiva; muy útil para rotar o abrir peleas." },
  { name: "Granada de fragmentación", cat: "Granada", img: "assets/img/consumables/Frag_Grenade_white.svg", info: "Explosión con daño de área; puedes calcular el tiempo antes de lanzarla para sorprender." },
  { name: "Estrella de arco", cat: "Granada", img: "assets/img/consumables/Arc_Star_white.svg", info: "Se adhiere a superficies o enemigos, aturde y ralentiza antes de detonar." },
  { name: "Termita", cat: "Granada", img: "assets/img/consumables/Thermite_Grenade_white.svg", info: "Crea una línea de fuego que daña en área y bloquea pasos estrechos." },
  { name: "Torre de evacuación", cat: "Supervivencia", img: "assets/img/consumables/Evac_Tower_white.svg", info: "Despliega una baliza con tirolesas ascendentes para rotar rápido fuera del anillo o escapar." }
];

// ============ MOVEMENT (Guía de movimiento, trucos y cómo mejorar) ============
const MOVEMENT = [
  {
    tier: "Básico",
    cls: "tier-basic",
    guideNote: "Domina estos tres fundamentos antes de intentar mecánicas complejas: el movimiento limpio vale más que un truco fallido.",
    tricks: [
      {
        n: "Slide-jump (Deslizamiento con salto)",
        howTo: "Corre, presiona agacharse (Ctrl / C) para deslizar y salta (Espacio) justo antes de perder velocidad.",
        whenToUse: "Para desplazarte rápido en terreno llano o cuesta abajo y entrar con impulso a duelos.",
        tip: "Practica el ritmo en el Campo de Tiro hasta encadenarlo sin quedarte pegado."
      },
      {
        n: "Guardar armas al correr",
        howTo: "Guarda tu arma (tecla 3 / enfundar) durante las rotaciones largas y sácala al acercarte al combate.",
        whenToUse: "Al moverte entre zonas o huir del anillo.",
        tip: "Acostúmbrate a cambiar de arma con teclas numéricas o rueda para no perder tiempo."
      },
      {
        n: "Escalada básica y mantle",
        howTo: "Salta hacia muros o cajas y mantén el salto al llegar al borde para trepar.",
        whenToUse: "Para tomar altura rápida y romper la línea de visión del enemigo.",
        tip: "Si cancelas el salto antes de terminar de trepar, puedes engañar al rival."
      }
    ]
  },
  {
    tier: "Intermedio",
    cls: "tier-inter",
    guideNote: "Aquí empiezas a combinar movimiento con lectura de cobertura para hacerte más difícil de acertar.",
    tricks: [
      {
        n: "Wall-bounce (Rebote en pared)",
        howTo: "Haz un slide-jump hacia una pared, toca brevemente la superficie y salta separándote de ella.",
        whenToUse: "Al cruzar pasillos, esquinas o escapar de un duelo cercano.",
        tip: "No te quedes pegado a la pared; el toque y el salto deben sentirse ágiles."
      },
      {
        n: "Air-strafing (Control aéreo)",
        howTo: "En el aire, suelta W y usa A o D girando suavemente la cámara hacia ese lado.",
        whenToUse: "Tras saltar de rampas, tirolesas o bordes para ajustar tu trayectoria.",
        tip: "Evita moverte en línea recta en el aire si hay enemigos apuntándote."
      },
      {
        n: "Zipline dancing",
        howTo: "Salta, vuelve a engancharte a la tirolesa y alterna movimientos sin quedarte quieto.",
        whenToUse: "Al cruzar zonas abiertas o disputar altura en tirolesas.",
        tip: "Ten cuidado de no caer al vacío por encadenar demasiados saltos seguidos."
      }
    ]
  },
  {
    tier: "Avanzado",
    cls: "tier-adv",
    guideNote: "Mecánicas exigentes: úsalas solo cuando ya tengas buena puntería y control de cámara.",
    tricks: [
      {
        n: "Tap-strafing",
        howTo: "Tras un salto con impulso, pulsa rápidamente direcciones de movimiento mientras giras la cámara para cambiar de ángulo brusco.",
        whenToUse: "Para girar esquinas cerradas o confundir al rival en combates cercanos.",
        tip: "Requiere práctica constante y configuración cómoda de teclas."
      },
      {
        n: "Superglide",
        howTo: "Al finalizar un slide, presiona salto y agacharse casi al mismo tiempo en la transición para un impulso explosivo.",
        whenToUse: "Para salir disparado de coberturas o cruzar huecos rápidos.",
        tip: "Es cuestión de sincronización fina; dedícale unos minutos diarios en el Campo de Tiro."
      },
      {
        n: "Mantle jump",
        howTo: "Trepa un borde, cancela el impulso hacia arriba y salta nuevamente para ganar altura extra.",
        whenToUse: "Para sorprender a rivales que vigilan un borde o escalera.",
        tip: "Útil en edificios y estructuras verticales con bordes claros."
      }
    ]
  }
];

// ============ CONFIGURACIÓN RECOMENDADA ============
const SETTINGS = [
  { name: "Campo de Visión (FOV)", value: "90–110", desc: "El valor por defecto es 70, demasiado cerrado. Entre 90 y 110 amplías tu visión periférica sin exagerar." },
  { name: "Sensibilidad del ratón", value: "3.0–5.0", desc: "Empieza moderado para mantener precisión en media distancia y desactiva la aceleración del ratón." },
  { name: "Multiplicador ADS", value: "1.0", desc: "Mantenerlo en 1.0 ayuda a que la memoria muscular al apuntar sea consistente." },
  { name: "Sincronización vertical", value: "Desactivada", desc: "Reduce el retraso de entrada (input lag) para una respuesta más directa." },
  { name: "Calidad de sombras/efectos", value: "Baja / Media", desc: "Prioriza fluidez (FPS) y claridad visual durante los combates." }
];

// ============ DESBLOQUEO DE LEYENDAS ============
const UNLOCK_INFO = [
  { title: "Leyendas iniciales", desc: "Comienzas con un grupo base de leyendas disponibles desde el inicio." },
  { title: "Desafíos y progresión", desc: "Al completar misiones iniciales y subir de nivel acumulas fichas/monedas para desbloquear más leyendas." },
  { title: "Coste de nuevas leyendas", desc: "Puedes desbloquearlas con 12,000 Tokens de Leyenda (obtenidos al subir de nivel) o con Apex Coins." }
];

// ============ RANKED ============
const RANKED_INFO = {
  req: "Se desbloquea al alcanzar el nivel 20 de cuenta.",
  costs: [
    { rank: "Rookie", cost: "0 RP" },
    { rank: "Bronce", cost: "Entrada baja" },
    { rank: "Plata", cost: "Moderado" },
    { rank: "Oro", cost: "Intermedio" },
    { rank: "Platino", cost: "Exigente" },
    { rank: "Diamante", cost: "Alto" },
    { rank: "Maestro / Depredador", cost: "Muy alto" }
  ],
  tip: "Prioriza sobrevivir, rotar a tiempo y tomar peleas con ventaja numérica; las eliminaciones sin posicionamiento rara vez sostienen el rango."
};