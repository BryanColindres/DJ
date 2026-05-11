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
    hora:       "11:00 AM",
    lugar:      "Valletal Eventos",
    mapsUrl:    "https://maps.app.goo.gl/5VHu6E56MUNGPrey8?g_st=ac",
    wazeUrl:    "https://waze.com/ul?ll=14.129855588419803,-87.03454760434946&navigate=yes",
    coordenadas:{ lat: 14.129855588419803, lng: -87.03454760434946 }
  },

  whatsapp: {
    numero:  "50431626792",
    mensaje: "Hola {nombre}, confirmo mi asistencia a la boda de Bryan y Stefany el 03 de octubre de 2026. 🌹"
  },

  versiculo: {
    texto: "El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso.",
    cita:  "1 Corintios 13:4"
  },

  // ── INVITACIÓN PERSONALIZADA ─────────────────────────
  // Mensaje que aparece en la sección de confirmación
  // {nombre} se reemplaza automáticamente con el nombre del invitado
  invitacionPersonal: {
    titulo:  "Esta invitación es personal e intransferible",
    mensaje: "Ha sido enviada especialmente para:",
    nota:    "Por favor no compartas este enlace con otras personas."
  },

  // ── VESTIMENTA ───────────────────────────────────────
  vestimenta: {
    // Cambia este link cuando tengas tu collage de Pinterest listo
    pinterestUrl: "https://www.pinterest.com",
    texto: "Etiqueta formal. Evita el blanco y el negro puro. Preferimos tonos cálidos y elegantes."
  },

  // ── REGALO ───────────────────────────────────────────
  regalo: {
    titulo: "Regalo",
    // Cambia este texto cuando quieras personalizarlo
    texto: "Tu presencia es nuestro mayor regalo. Si deseas obsequiarnos algo, preferimos recibirlo en efectivo. Esto nos ayudará a construir juntos los sueños que tenemos como pareja."
  },

  // ── LÍNEA DE TIEMPO — todos con foto ─────────────────
  // Las fotos se repiten por ahora, cámbialas después
  timeline: [
    { fecha:"2020",           titulo:"Nos conocimos",        texto:"Una tarde que ninguno de los dos olvidará. Algo especial comenzó sin que lo planeáramos.",              icono:"✨", foto:"img/preboda1.png"  },
    { fecha:"2020",           titulo:"Primera conversación", texto:"Horas hablando sin darnos cuenta. Supimos que había algo diferente en el otro.",                        icono:"💬", foto:"img/preboda2.jpg"  },
    { fecha:"2021",           titulo:"Primera cita",         texto:"Los nervios, las risas y la magia de estar juntos por primera vez a solas.",                            icono:"🌹", foto:"img/preboda3.jpg"  },
    { fecha:"2021",           titulo:"Nuestro primer viaje", texto:"Descubrimos que viajar juntos era lo más natural del mundo.",                                           icono:"✈️", foto:"img/preboda4.jpg"  },
    { fecha:"2022",           titulo:"Nos hicimos novios",   texto:"El día que lo hicimos oficial. Comenzó una nueva etapa llena de amor.",                                 icono:"💑", foto:"img/preboda5.JPG"  },
    { fecha:"2022",           titulo:"Nuestras familias",    texto:"Dos familias que se unieron y que hoy forman una sola.",                                                icono:"👨‍👩‍👧‍👦", foto:"img/preboda6.JPG"  },
    { fecha:"2023",           titulo:"Momentos difíciles",   texto:"Aprendimos que juntos somos más fuertes. Cada obstáculo nos acercó más.",                               icono:"🤝", foto:"img/preboda7.JPG"  },
    { fecha:"2024",           titulo:"La propuesta",         texto:"El momento en que todo cambió. La respuesta fue un sí que venía del corazón.",                          icono:"💍", foto:"img/preboda1.png"  },
    { fecha:"2025",           titulo:"Nuestra preboda",      texto:"Un día de fotos, risas y amor. La antesala del momento más especial.",                                  icono:"📸", foto:"img/preboda3.jpg"  },
    { fecha:"03 · 10 · 2026", titulo:"Nos casamos",          texto:"El día que prometemos amarnos, respetarnos y acompañarnos para siempre.",                              icono:"⛪", foto:"img/hero.jpg"       }
  ],

  // ── INSTRUCCIONES (sin Confirmación — se puso Regalo) ─
  instrucciones: [
    { icono:"⏰", titulo:"Hora de llegada",      texto:"Te pedimos llegar 30 minutos antes de la ceremonia para que puedas ubicarte con comodidad." },
    { icono:"👗", titulo:"Código de vestimenta", texto:"Etiqueta formal. Toca el botón para ver referencias de vestimenta en Pinterest.", tieneLink: true },
    { icono:"🚫", titulo:"Solo adultos",         texto:"Este es un evento solo para adultos. Agradecemos tu comprensión."                           },
    { icono:"🎁", titulo:"Regalo",               texto:"Tu presencia es nuestro mayor regalo. Si deseas obsequiarnos algo, preferimos un regalo en efectivo." }
  ],

  historiaTextos: [
    "Desde el primer momento supimos que algo especial comenzaba. Cada día juntos ha sido un regalo que atesoramos profundamente.",
    "Compartimos sueños, risas y caminos. Hoy queremos que seas parte del día más importante de nuestras vidas.",
    "Porque el amor verdadero no es perfecto, es real. Y el nuestro ha crecido día a día, paso a paso, juntos."
  ],

  rsvp: { descripcion: "Nos encantaría contar con tu presencia. Por favor confírmanos antes del 01 de septiembre de 2026." },
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
    permitirMensajePrivado:  true,
    mostrarMensajesPublicos: true,
    permitirFotos:           true
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
