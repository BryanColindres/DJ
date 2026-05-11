// ═══════════════════════════════════════════════════════
//  CONFIG.JS — Boda Bryan & Stefany v4
//  ✅ Solo edita este archivo para cambiar contenido
// ═══════════════════════════════════════════════════════
window.BODA_CONFIG = {

  novio:  { nombre: "Bryan Daniel",   apellidos: "Colindres Mejia"  },
  novia:  { nombre: "Stefany Jissel", apellidos: "Herrera Flores"   },

  evento: {
    fecha:      "2026-10-03T11:00:00",
    fechaTexto: "Sábado, 03 de octubre de 2026",
    hora:       "10:30 AM",
    lugar:      "Cerro Grande, Valle de Ángeles",
    mapsUrl:    "https://maps.app.goo.gl/5VHu6E56MUNGPrey8?g_st=ac",
    wazeUrl:    "https://waze.com/ul?ll=14.129855588419803,-87.03454760434946&navigate=yes",
    coordenadas:{ lat: 14.129855588419803, lng: -87.03454760434946 }
  },

  whatsapp: {
    numero:  "50431626792",
    mensaje: "Hola, soy {nombre}, confirmo mi asistencia a la boda de Bryan y Stefany el 03 de octubre de 2026."
  },

  versiculo: {
    texto: "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",
    cita:  "1 Corintios 13:4"
  },

  invitacionPersonal: {
    titulo:  "Esta invitación es personal e intransferible",
    mensaje: "Ha sido enviada especialmente para:",
    nota:    "Por favor no compartas este enlace con otras personas."
  },

  vestimenta: {
    pinterestUrl: "https://pin.it/7ask6Yvrq",
    texto: "Etiqueta formal, colores suaves. Nos reservamos el blanco para la novia y el beige para el novio. Toca el botón para ver referencias de vestimenta en Pinterest."
  },

  regalo: {
    titulo: "Regalos",
    texto: "Tu presencia es el mejor regalo en este día especial; cualquier otro detalle será una contribución para nuestro hogar y futuros sueños."
  },

  // ── LÍNEA DE TIEMPO — 9 eventos ──────────────────────
  timeline: [
    { fecha:"Enero, 2022",         titulo:"Nos conocimos",          texto:"Un día aparecimos en la vida del otro, sin planearlo, ni esperarlo. Cada uno pensando en lo suyo, sin darnos cuenta lo que vendría a continuación, de la mano de nuestro instrumento querido.",                                                                                                icono:"✨", foto:"img/nos_conocimos.jpg" },
    { fecha:"2022",                titulo:"Primeras conversaciones", texto:"Nuestra amistad se fue haciendo cada vez más grande y llegamos a compartir experiencias pasadas y planes a futuro. Y poco a poco la amistad se fue transformando en algo más, hasta el punto de que en nuestras conversaciones del futuro nos visualizábamos juntos.",                          icono:"💬", foto:"img/primeras_conv.jpg" },
    { fecha:"Enero, 2023",         titulo:"Primera cita",           texto:"Inolvidable cita, donde ambos, finalmente, nos abrimos y confesamos lo que ya llevaba días sembrado en nuestro interior. Desde entonces, las citas y los planes se convirtieron en el motor de nuestra vida.",                                                                                  icono:"🌹", foto:"img/primera_cita.jpg" },
    { fecha:"10 de abril, 2023",   titulo:"Nos hicimos novios",     texto:"Luego de hacer muy larga la espera, decidimos dar el paso que nuestros corazones ya habían elegido desde hacía tiempo. Así comenzó oficialmente nuestra historia como novios, una etapa llena de amor, sueños compartidos.",                                                                   icono:"💑", foto:"img/novios.jpg" },
    { fecha:"Mayo, 2024",          titulo:"Nuestro primer viaje",   texto:"Descubrimos que viajar juntos era lo más natural del mundo y nos animamos a hacerlo, con la esperanza de poder hacerlo más seguido en el futuro.",                                                                                                                                              icono:"✈️", foto:"img/viaje.jpg" },
    { fecha:"Diciembre, 2024",     titulo:"Nuestras familias",      texto:"Hicimos una gran familia que siempre ha estado a nuestro lado, apoyándonos y guiándonos por el buen camino, siendo ejemplo de amor y temor a Dios.",                                                                                                                                           icono:"👨‍👩‍👧‍👦", foto:"img/familia.jpg" },
    { fecha:"Febrero, 2026",       titulo:"La propuesta",           texto:"El 14 de febrero, el amor quedó inmortalizado, se dijo el tan esperado: \"Si, acepto\", y entre lágrimas y sonrisas celebramos nuestro recorrido hacia el altar.",                                                                                                                             icono:"💍", foto:"img/pripuesta.jpg" },
    { fecha:"Mayo, 2026",          titulo:"La preboda",             texto:"Un día de fotos, risas y amor. La antesala del momento más especial.",                                                                                                                                                                                                                          icono:"📸", foto:"img/preboda3.png" },
    { fecha:"03 de Octubre, 2026", titulo:"Nos casamos",            texto:"El día que prometemos amarnos, respetarnos y acompañarnos para siempre.",                                                                                                                                                                                                                      icono:"⛪", foto:"img/hero.jpg"     }
  ],

  // ── INSTRUCCIONES ────────────────────────────────────
  instrucciones: [
    { icono:"⏰", titulo:"Hora de llegada",      texto:"Te pedimos llegar 30 minutos antes de la ceremonia para que puedas ubicarte con comodidad." },
    { icono:"🚫", titulo:"Solo adultos",         texto:"Esperamos compartir una celebración pensada exclusivamente para adultos. Para una mejor organización del evento, agradecemos respetar que la invitación es únicamente para las personas señaladas." },
    { icono:"🎁", titulo:"Regalos",              texto:"Tu presencia es el mejor regalo en este día especial; cualquier otro detalle será una contribución para nuestro hogar y futuros sueños." }
  ],

  // ── SECCIÓN VESTIMENTA (separada de instrucciones) ───
  vestimentaSeccion: {
    titulo:    "Código de Vestimenta",
    subtitulo: "Etiqueta formal, colores suaves",
    texto:     "Nos reservamos el blanco para la novia y el beige para el novio. Los invitamos a usar tonos cálidos y elegantes que armonicen con la paleta de la celebración.",
    pinterestUrl:   "https://pin.it/7ask6Yvrq",
    pinterestLabel: "Ver referencias en Pinterest",
    imagen:    "img/paleta-colores1.png"
  },

  // ── TÍTULOS SECCIÓN HISTORIA ─────────────────────────
  historiaTitulo:    "UNA PROMESA DE AMOR",
  historiaSubtitulo: "La historia que hoy queremos celebrar junto a ustedes.",

  historiaTextos: [
    "Con la bendición de Dios y de nuestros padres, hemos decidido dar un paso más en esta hermosa historia que comenzó hace tres años, cuando supimos que algo especial nacía entre nosotros. Desde entonces, cada momento compartido ha sido un regalo; nuestro amor ha crecido día a día, al igual que nuestro deseo de caminar juntos por la vida.",
    "Hoy, con el corazón lleno de alegría e ilusión, queremos que seas testigo y parte del día más importante de nuestras vidas, compartiendo este momento tan especial junto a las personas que más amamos.",
    "\"Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre.\" Mateo 19:6"
  ],

  rsvp: { descripcion: "Nos encantaría contar con tu presencia. Por favor confírmanos antes del 01 de agosto de 2026." },
  footer: { frase: "Con amor, los esperamos." },

  // ── CLOUDINARY ────────────────────────────────────────
  cloudinary: {
    cloudName:    "di6hpumct",
    uploadPreset: "boda_jissel_daniel"
  },

  // ── AIRTABLE ─────────────────────────────────────────
  airtable: {
    apiKey:  "pat4zs7JDR0AQGPfa.f4c24a2ca0e1e9f788656d2b54229c12e75c762a1a6b3b79819301df2f6d0e5b",
    baseId:  "app4iSEuGfWcESBSB",
    tableId: "Firmas"
  },

  // ── LIBRO DE FIRMAS ───────────────────────────────────
  libroFirmas: {
    permitirMensajePrivado:  false,
    mostrarMensajesPublicos: true,
    permitirFotos:           true,
    titulo:    "LIBRO DE FIRMAS",
    subtitulo: "Cada palabra y cada recuerdo significan mucho para nosotros.",
    descripcion: "Deja un mensaje y comparte una imagen junto a los novios o con alguno de ellos."
  },

  // ── MEDIOS ────────────────────────────────────────────
  video: "img/video-intro.mp4",

  // ⏱️ Segundos de espera después de que termine el video (cámbialo a lo que quieras)
  videoDelay: 0,

  audio: { musica: "audio/musica.mp3", mensajeVoz: "audio/mensaje.mp3" },

  fotos: {
    hero:      "img/hero.jpg",
    verso:     "img/preboda2.jpg",
    evento:    "img/preboda3.jpg",
    historia1: "img/preboda4.jpg",
    historia2: "img/preboda5.JPG",
    historia3: "img/preboda6.JPG",
    galeria:   ["img/preboda1.png","img/preboda2.jpg","img/preboda3.jpg","img/preboda4.jpg","img/preboda5.JPG","img/preboda6.JPG"],
    rsvp:      "img/preboda12.JPG",
    footer:    "img/footer.JPG"
  },

  colores: {
    roseProfundo: "#9B6B6B",
    roseMedio:    "#C4907A",
    roseSuave:    "#D4A99A",
    blush:        "#EDD5C5",
    crema:        "#F7EFE8",
    dorado:       "#C9A84C"
  }
};
