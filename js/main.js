// ═══════════════════════════════════════════════════════
//  MAIN.JS — Boda Bryan & Stefany v4
// ═══════════════════════════════════════════════════════
const C = window.BODA_CONFIG;
const $  = id => document.getElementById(id);

// ── Nombre del invitado desde URL ──────────────────────
function getGuest() {
  const p = new URLSearchParams(window.location.search);
  const raw = p.get('i') || p.get('inv') || '';
  if (!raw) return '';
  return raw.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}
const GUEST = getGuest();

// ── Aplicar config ────────────────────────────────────
function applyConfig() {
  const set  = (id, v) => { const el=$(id); if(el) el.textContent = v; };
  const href = (id, u) => { const el=$(id); if(el) el.href = u; };

  // Nombres
  set('heroNovio',   C.novio.nombre);
  set('heroNovia',   C.novia.nombre);
  set('heroApellidos', C.novio.apellidos + ' · ' + C.novia.apellidos);
  set('footerNovio', C.novio.nombre.split(' ')[0]);
  set('footerNovia', C.novia.nombre.split(' ')[0]);

  // Evento
  set('eventDate',  C.evento.fechaTexto);
  set('eventTime',  C.evento.hora);
  // venueName = nombre del salon, eventVenue = dirección
  // Ambos están fijos en el HTML — solo actualizamos la dirección
  set('venueName',  'Valletal Eventos');
  set('eventVenue', 'Cerro Grande, Valle de Ángeles');

  // Versículo
  const bq = $('verseText');
  if(bq) bq.textContent = '"' + C.versiculo.texto + '"';
  set('verseCite', '— ' + C.versiculo.cita);

  // Mapas
  href('mapsBtn', C.evento.mapsUrl);
  href('wazeBtn', C.evento.wazeUrl);

  // Historia — título, subtítulo y textos
  if(C.historiaTitulo)    set('historiaTituloEl',    C.historiaTitulo);
  if(C.historiaSubtitulo) set('historiaSubtituloEl', C.historiaSubtitulo);
  ['story1','story2','story3'].forEach((id,i) => set(id, C.historiaTextos[i]||''));

  // Libro de firmas — etiquetas desde config
  if(C.libroFirmas.titulo)       set('bookTituloEl',    C.libroFirmas.titulo);
  if(C.libroFirmas.subtitulo)    set('bookSubtituloEl', C.libroFirmas.subtitulo);
  if(C.libroFirmas.descripcion)  set('bookDescEl',      C.libroFirmas.descripcion);

  // Vestimenta section
  if(C.vestimentaSeccion) {
    set('vestTituloLabel', C.vestimentaSeccion.titulo);
    set('vestTitulo',      C.vestimentaSeccion.subtitulo);
    set('vestTexto',       C.vestimentaSeccion.texto);
    const vl = document.getElementById('vestPinterest');
    if(vl) vl.href = C.vestimentaSeccion.pinterestUrl;
    // Sin columna de imagen en esta versión
  }

  // RSVP
  set('rsvpDesc', C.rsvp.descripcion);

  // Footer
  set('footerPhrase', C.footer.frase);

  // Audio
  const bgM = $('bgMusic'), voiceM = $('voiceMsg');
  if(bgM) bgM.src = C.audio.musica;
  if(voiceM) voiceM.src = C.audio.mensajeVoz;

  // Instrucciones — con Pinterest y Regalo
  buildInstrucciones();

  // Galería
  const gg = $('galleryGrid');
  if(gg) gg.innerHTML = C.fotos.galeria.map((src,i) => `
    <div class="gal-item reveal" data-idx="${i}">
      <img src="${src}" onerror="this.parentElement.style.display='none'"/>
    </div>`).join('');

  // Timeline
  buildTimeline();

  // Libro de firmas — opciones
  const privRow  = $('bookPrivacyRow');
  const photoArea = $('bookPhotoArea');
  if(privRow)   privRow.style.display   = C.libroFirmas.permitirMensajePrivado ? 'block' : 'none';
  if(photoArea) photoArea.style.display = C.libroFirmas.permitirFotos ? 'block' : 'none';

  // Nombre del invitado personalizado
  if(GUEST) {
    // Voz
    set('voiceName', GUEST);
    // Libro
    set('bookGuestName', GUEST);
    // RSVP personal
    const block = $('rsvpPersonal');
    if(block) block.style.display = 'block';
    set('rsvpPersonalTitulo', C.invitacionPersonal.titulo);
    set('rsvpPersonalMsg',    C.invitacionPersonal.mensaje);
    set('rsvpPersonalNombre', GUEST);
    set('rsvpPersonalNota',   C.invitacionPersonal.nota);
    // WhatsApp personalizado — dos botones
    const msg = C.whatsapp.mensaje.replace('{nombre}', GUEST);
    setWAButtons(msg);
  } else {
    // WhatsApp genérico
    const msg = C.whatsapp.mensaje.replace('{nombre}', 'Invitado');
    setWAButtons(msg);
  }
}

function setWAButtons(msg) {
  const encoded = encodeURIComponent(msg);
  const btnNovio = document.getElementById('whatsappBtnNovio');
  const btnNovia = document.getElementById('whatsappBtnNovia');
  if(btnNovio) btnNovio.href = `https://wa.me/50431626792?text=${encoded}`;
  if(btnNovia) btnNovia.href = `https://wa.me/50499223790?text=${encoded}`;

  // Colores
  const r = document.documentElement.style;
  r.setProperty('--rose-deep', C.colores.roseProfundo);
  r.setProperty('--rose-mid',  C.colores.roseMedio);
  r.setProperty('--rose-soft', C.colores.roseSuave);
  r.setProperty('--blush',     C.colores.blush);
  r.setProperty('--cream',     C.colores.crema);
  r.setProperty('--gold',      C.colores.dorado);
}

// ── Instrucciones con Pinterest y Regalo ──────────────
function buildInstrucciones() {
  const grid = $('instrGrid');
  if(!grid) return;
  grid.innerHTML = C.instrucciones.map(item => {
    const pinterestBtn = item.tieneLink
      ? `<a class="btn btn-pinterest" href="${C.vestimenta.pinterestUrl}" target="_blank" style="margin-top:.75rem;font-size:.72rem;padding:.55rem 1.2rem">
          <svg viewBox="0 0 24 24" fill="currentColor" style="color:#E60023"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
          Ver referencias
        </a>`
      : '';
    return `
      <div class="instr-card reveal">
        <div class="instr-card__icon">${item.icono}</div>
        <h3>${item.titulo}</h3>
        <p>${item.texto}</p>
        ${pinterestBtn}
      </div>`;
  }).join('');
}

// ── Timeline con fotos ────────────────────────────────
function buildTimeline() {
  const wrap = $('timelineWrap');
  if(!wrap) return;
  wrap.innerHTML = C.timeline.map((item, i) => {
    const photoHtml = item.foto
      ? `<div class="tl-photo"><img src="${item.foto}" alt="${item.titulo}" onerror="this.parentElement.style.display='none'"/></div>`
      : '';
    const body = `
      <div class="tl-body">
        <span class="tl-fecha">${item.fecha}</span>
        <h3 class="tl-titulo">${item.titulo}</h3>
        <p class="tl-texto">${item.texto}</p>
        ${photoHtml}
      </div>`;
    const dot   = `<div class="tl-dot"><div class="tl-dot__icon">${item.icono}</div></div>`;
    const empty = `<div class="tl-empty"></div>`;
    return `<div class="tl-item" data-i="${i}">
      ${i%2===0 ? body+dot+empty : empty+dot+body}
    </div>`;
  }).join('');
}

// ── Pétalos ────────────────────────────────────────────
function spawnPetals(containerId, count) {
  const el = $(containerId);
  if(!el) return;
  const colors = ['#EDD5C5','#D4A99A','#C4907A','#E8C4B4','#F0D8CC'];
  for(let i=0; i<count; i++) {
    const p = document.createElement('div');
    const sz = Math.random()*14+7;
    p.className = containerId==='videoPetals' ? 'v-petal' : 'petal';
    p.style.cssText = `left:${Math.random()*100}%;width:${sz}px;height:${sz*1.3}px;background:${colors[i%colors.length]};animation-duration:${Math.random()*7+6}s;animation-delay:${Math.random()*10}s;`;
    el.appendChild(p);
  }
}

// ── Countdown ─────────────────────────────────────────
function startCountdown() {
  const target = new Date(C.evento.fecha).getTime();
  const pad = n => String(Math.floor(n)).padStart(2,'0');
  const tick = () => {
    const diff = target - Date.now();
    if(diff<=0){ $('cdLabel').textContent='¡Es hoy! 🌹'; return; }
    $('cd-days').textContent  = pad(diff/86400000);
    $('cd-hours').textContent = pad((diff%86400000)/3600000);
    $('cd-mins').textContent  = pad((diff%3600000)/60000);
    $('cd-secs').textContent  = pad((diff%60000)/1000);
  };
  tick(); setInterval(tick,1000);
}

// ── Scroll Reveal ─────────────────────────────────────
function initReveal() {
  const obs = new IntersectionObserver(es => {
    es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, {threshold:0.1});
  document.querySelectorAll('.reveal,.reveal-left,.reveal-right').forEach(el => obs.observe(el));

  const tlObs = new IntersectionObserver(es => {
    es.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in-view'); tlObs.unobserve(e.target); }});
  }, {threshold:0.15});
  document.querySelectorAll('.tl-item').forEach(el => tlObs.observe(el));
}

// ══════════════════════════════════════════════════════
//  VIDEO INTRO
// ══════════════════════════════════════════════════════
function initVideo() {
  const screen     = $('videoScreen');
  const videoEl    = $('videoEl');
  const progressF  = $('videoProgressFill');
  const skipBtn    = $('videoSkip');
  const invitation = $('invitation');
  // El delay en segundos viene del config — fácil de cambiar
  const delayMs    = (C.videoDelay || 2) * 1000;

  const tapMsg    = $('videoTapMsg');
  let playStarted  = false;
  let skipShown    = false;

  // Al tocar cualquier parte de la pantalla → ocultar mensaje y reproducir
  screen.addEventListener('click', () => {
    if(!playStarted) startVideo();
  });

  function startVideo() {
    if(playStarted) return;
    playStarted = true;
    // Ocultar mensaje de toque elegantemente
    if(tapMsg) {
      tapMsg.classList.add('hiding');
      setTimeout(() => tapMsg.classList.add('gone'), 700);
    }
    videoEl.volume = 1;
    videoEl.play().catch(() => {
      videoEl.muted = true;
      videoEl.play().catch(() => openInvitation());
    });
  }

  // Progreso del video
  videoEl.addEventListener('timeupdate', () => {
    if(!videoEl.duration) return;
    progressF.style.width = (videoEl.currentTime / videoEl.duration * 100) + '%';
    // Skip aparece después de 3 segundos de reproducción
    if(!skipShown && videoEl.currentTime >= 3) {
      skipShown = true;
      skipBtn.style.display = 'block';
    }
  });

  // Video terminó → esperar los segundos configurados → abrir invitación
  videoEl.addEventListener('ended', () => {
    setTimeout(openInvitation, delayMs);
  });

  // Botón skip
  skipBtn.addEventListener('click', openInvitation);

  function openInvitation() {
    if(screen.classList.contains('closing')) return;
    screen.classList.add('closing');
    setTimeout(() => {
      screen.classList.add('gone');
      invitation.classList.add('visible');
      playMusicSoftly();
      setTimeout(initReveal, 100);
      initLightbox();
    }, 800);
  }
}

// ── Música ────────────────────────────────────────────
let musicOn = false;
function initMusic() {
  const btn = $('musicBtn'), aud = $('bgMusic');
  if(!aud) return;
  aud.volume = 0;
  btn.addEventListener('click', () => {
    if(musicOn){ aud.pause(); musicOn=false; toggleIcon(false); }
    else { aud.play().catch(()=>{}); fadeVol(aud,0,.32,3500); musicOn=true; toggleIcon(true); }
  });
}
function toggleIcon(on){
  $('musicOn').style.display  = on?'block':'none';
  $('musicOff').style.display = on?'none':'block';
}
function playMusicSoftly() {
  const aud = $('bgMusic');
  if(!aud||musicOn) return;
  aud.play().then(()=>{ musicOn=true; toggleIcon(true); fadeVol(aud,0,.28,5000); }).catch(()=>{});
}
function fadeVol(aud,from,to,ms) {
  aud.volume=from;
  const steps=60, step=(to-from)/steps;
  let cur=from;
  const iv=setInterval(()=>{ cur+=step; aud.volume=Math.min(Math.max(cur,0),1); if((step>0&&cur>=to)||(step<0&&cur<=to)) clearInterval(iv); },ms/steps);
}

// ── Mensaje de voz ────────────────────────────────────
function initVoice() {
  const btn=  $('voiceBtn'), aud=$('voiceMsg'),
        prog= $('voiceProgress'), fill=$('voiceProgressFill'),
        lbl=  $('voiceLabel'), ico=$('voiceIcon');
  if(!btn||!aud) return;
  let playing=false;
  btn.addEventListener('click',()=>{
    if(!playing){
      aud.play().catch(()=>{ lbl.textContent='Audio no disponible aún'; return; });
      playing=true; ico.textContent='⏸'; lbl.textContent='Pausar';
      prog.classList.add('active');
      const bg=$('bgMusic');
      if(bg&&musicOn) fadeVol(bg,bg.volume,.07,1500);
    } else {
      aud.pause(); playing=false; ico.textContent='▶'; lbl.textContent='Escuchar mensaje';
      const bg=$('bgMusic');
      if(bg&&musicOn) fadeVol(bg,bg.volume,.28,1500);
    }
  });
  aud.addEventListener('timeupdate',()=>{ if(aud.duration) fill.style.width=(aud.currentTime/aud.duration*100)+'%'; });
  aud.addEventListener('ended',()=>{
    playing=false; ico.textContent='▶'; lbl.textContent='Escuchar de nuevo';
    const bg=$('bgMusic');
    if(bg&&musicOn) fadeVol(bg,bg.volume,.28,2000);
  });
}

// ── Lightbox ──────────────────────────────────────────
let lbImgs=[], lbIdx=0;
function initLightbox() {
  const lb=$('lightbox'), img=$('lbImg');
  if(!lb) return;
  $('lbClose').onclick = ()=>{ lb.classList.remove('open'); document.body.style.overflow=''; };
  $('lbPrev').onclick  = ()=>{ lbIdx=(lbIdx-1+lbImgs.length)%lbImgs.length; img.src=lbImgs[lbIdx]; };
  $('lbNext').onclick  = ()=>{ lbIdx=(lbIdx+1)%lbImgs.length; img.src=lbImgs[lbIdx]; };
  lb.onclick = e=>{ if(e.target===lb){ lb.classList.remove('open'); document.body.style.overflow=''; }};
  document.addEventListener('keydown',e=>{
    if(!lb.classList.contains('open')) return;
    if(e.key==='Escape'){ lb.classList.remove('open'); document.body.style.overflow=''; }
    if(e.key==='ArrowLeft') { lbIdx=(lbIdx-1+lbImgs.length)%lbImgs.length; img.src=lbImgs[lbIdx]; }
    if(e.key==='ArrowRight'){ lbIdx=(lbIdx+1)%lbImgs.length; img.src=lbImgs[lbIdx]; }
  });
  const gg=$('galleryGrid');
  if(gg) gg.addEventListener('click',e=>{
    const item=e.target.closest('.gal-item'); if(!item) return;
    lbImgs=Array.from(document.querySelectorAll('.gal-item img')).map(i=>i.src);
    lbIdx=parseInt(item.dataset.idx)||0;
    img.src=lbImgs[lbIdx];
    lb.classList.add('open'); document.body.style.overflow='hidden';
  });
}

// ══════════════════════════════════════════════════════
//  LIBRO DE FIRMAS
// ══════════════════════════════════════════════════════
const BOOK_KEY = 'boda_book_v4';
let selectedEmoji = '❤️';
let bookPage = 0;
const PER_PAGE = 4;
let uploadedPhotoUrl = '';

// ── StPageFlip — libro de firmas realista ─────────────
let pageFlipInstance = null;

function buildFlipBook(entries) {
  const wrap     = document.getElementById('bookFlipWrap');
  const flipCont = document.getElementById('bookFlipContainer');
  const emptyMsg = document.getElementById('bookEmptyMsg');
  const navEl    = document.getElementById('bookNav');
  if(!flipCont) return;

  // Destruir instancia anterior si existe
  if(pageFlipInstance) {
    try { pageFlipInstance.destroy(); } catch(e){}
    pageFlipInstance = null;
  }
  flipCont.innerHTML = '';

  if(!entries || !entries.length) {
    if(emptyMsg) emptyMsg.style.display = 'block';
    if(navEl) navEl.style.display = 'none';
    return;
  }

  if(emptyMsg) emptyMsg.style.display = 'none';

  // Dimensiones del contenedor padre
  const rightPage = document.getElementById('bookPageRight');
  const rect = rightPage ? rightPage.getBoundingClientRect() : { width: 340, height: 480 };
  const W = Math.max(200, Math.floor(rect.width * 0.92));
  const H = Math.max(260, Math.floor(rect.height * 0.60));

  flipCont.style.width  = W + 'px';
  flipCont.style.height = H + 'px';

  // Crear una página por entrada
  entries.forEach((e, i) => {
    const page = document.createElement('div');
    page.className = 'stpf-page';
    const hasPhoto = e.fotoUrl && e.fotoUrl !== '_local_' && e.fotoUrl !== '';
    // Altura de la foto = 60% de la altura de la página si hay foto
    const photoH = hasPhoto ? Math.floor(H * 0.58) : 0;
    page.innerHTML = `
      <div class="stpf-page__inner">
        <div class="stpf-page__header">
          <span class="stpf-page__name">${e.nombre}</span>
          <span class="stpf-page__emoji">${e.emoji}</span>
        </div>
        <div class="stpf-page__line"></div>
        <p class="stpf-page__msg">"${e.mensaje}"</p>
        <p class="stpf-page__date">${e.fecha}</p>
        ${hasPhoto ? `<div class="stpf-page__photo" style="height:${photoH}px"><img src="${e.fotoUrl}" alt="${e.nombre}" loading="lazy"/></div>` : ''}
        <span class="stpf-page__num">${i + 1}</span>
      </div>`;
    flipCont.appendChild(page);
  });

  // Inicializar StPageFlip
  try {
    pageFlipInstance = new St.PageFlip(flipCont, {
      width:             W,
      height:            H,
      size:              'fixed',
      minWidth:          150,
      maxWidth:          W,
      minHeight:         200,
      maxHeight:         H,
      flippingTime:      800,
      usePortrait:       true,
      autoSize:          false,
      drawShadow:        true,
      maxShadowOpacity:  0.4,
      showCover:         false,
      mobileScrollSupport: false,
      disableFlipByClick: false,
      useMouseEvents:    true,
    });

    pageFlipInstance.loadFromHTML(flipCont.querySelectorAll('.stpf-page'));

    pageFlipInstance.on('flip', (e) => {
      const total = pageFlipInstance.getPageCount();
      const cur   = pageFlipInstance.getCurrentPageIndex() + 1;
      const numEl = document.getElementById('bookPageNum');
      if(numEl) numEl.textContent = `${cur} / ${total}`;
    });

    // Mostrar nav
    if(navEl) {
      navEl.style.display = 'flex';
      const total = entries.length;
      const numEl = document.getElementById('bookPageNum');
      if(numEl) numEl.textContent = `1 / ${total}`;
    }

  } catch(err) {
    console.warn('StPageFlip error:', err);
    // Fallback simple si la librería no cargó
    flipCont.innerHTML = entries.map(e => `
      <div class="book-entry">
        <div class="book-entry__photo"><span>${e.emoji}</span></div>
        <div class="book-entry__body">
          <div class="book-entry__header"><span class="book-entry__name">${e.nombre}</span></div>
          <p class="book-entry__msg">"${e.mensaje}"</p>
          <p class="book-entry__date">${e.fecha}</p>
        </div>
      </div>`).join('');
  }
}

function initBook() {
  document.querySelectorAll('.book-emoji').forEach(btn => {
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.book-emoji').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedEmoji = btn.dataset.e;
    });
  });

  const ta = $('bookMessage');
  if(ta) ta.addEventListener('input',()=>{ $('bookChars').textContent = 280-ta.value.length; });

  // Foto
  const preview  = $('bookPhotoPreview');
  const input    = $('bookPhotoInput');
  const img      = $('bookPhotoImg');
  const placeholder = $('bookPhotoPlaceholder');
  const removeBtn   = $('bookPhotoRemove');

  if(preview) {
    preview.addEventListener('click',()=>{ if(!uploadedPhotoUrl) input.click(); });
    input.addEventListener('change', async e=>{
      const file = e.target.files[0]; if(!file) return;
      const reader = new FileReader();
      reader.onload = ev => {
        img.src=ev.target.result; img.style.display='block';
        placeholder.style.display='none'; removeBtn.style.display='flex';
      };
      reader.readAsDataURL(file);
      if(C.cloudinary.cloudName !== 'TU_CLOUD_NAME') {
        uploadedPhotoUrl = await uploadCloudinary(file);
      } else {
        uploadedPhotoUrl = '_local_';
      }
    });
    if(removeBtn) removeBtn.addEventListener('click',e=>{
      e.stopPropagation();
      img.src=''; img.style.display='none';
      placeholder.style.display='flex'; removeBtn.style.display='none';
      uploadedPhotoUrl=''; input.value='';
    });
  }

  $('bookSubmit').addEventListener('click', submitFirma);

  const prevB=$('bookPrev'), nextB=$('bookNext');
  if(prevB) prevB.addEventListener('click',()=>{
    if(pageFlipInstance) pageFlipInstance.flipPrev();
  });
  if(nextB) nextB.addEventListener('click',()=>{
    if(pageFlipInstance) pageFlipInstance.flipNext();
  });

  // Cargar mensajes desde Airtable al iniciar
  loadFromAirtable();
}

async function uploadCloudinary(file) {
  const fd=new FormData();
  fd.append('file',file); fd.append('upload_preset',C.cloudinary.uploadPreset);
  try {
    const res=await fetch(`https://api.cloudinary.com/v1_1/${C.cloudinary.cloudName}/image/upload`,{method:'POST',body:fd});
    const d=await res.json(); return d.secure_url||'';
  } catch{ return ''; }
}

async function submitFirma() {
  const msg=($('bookMessage').value||'').trim();
  if(!msg){ toast('Por favor escribe un mensaje 🌹'); return; }
  const btn=$('bookSubmit'); btn.disabled=true;
  $('bookSubmitLabel').textContent='Enviando...';

  const esPrivado = C.libroFirmas.permitirMensajePrivado ? ($('bookPrivate')?.checked||false) : false;
  const firma = {
    nombre: GUEST||'Invitado especial', mensaje:msg, emoji:selectedEmoji,
    fotoUrl:uploadedPhotoUrl, privado:esPrivado,
    fecha:new Date().toLocaleDateString('es-HN',{day:'numeric',month:'long',year:'numeric'}),
    ts:Date.now()
  };

  // Guardar en Airtable (fuente central) y localmente como respaldo
  if(C.airtable.apiKey!=='TU_API_KEY_AQUI') {
    try { await saveAirtable(firma); } catch(e){ console.warn('Airtable error:',e); }
  }
  // También local como caché rápida
  const all=getAllEntries(); all.unshift(firma);
  localStorage.setItem(BOOK_KEY,JSON.stringify(all));

  $('bookMessage').value=''; $('bookChars').textContent='280';
  uploadedPhotoUrl=''; if($('bookPhotoInput')) $('bookPhotoInput').value='';
  const pi=$('bookPhotoImg'); if(pi){pi.src='';pi.style.display='none';}
  const pp=$('bookPhotoPlaceholder'); if(pp) pp.style.display='flex';
  const pr=$('bookPhotoRemove'); if(pr) pr.style.display='none';

  btn.disabled=false; $('bookSubmitLabel').textContent='Firmar el libro 💌';
  bookPage=0;
  // Recargar desde Airtable para mostrar todos los mensajes actualizados
  await loadFromAirtable();
  toast(esPrivado?'🔒 Mensaje enviado — solo Bryan & Stefany lo verán 💌':'💌 ¡Tu mensaje fue enviado con amor!');
}

// Cache en memoria de los registros de Airtable
let airtableCache = [];

// Cargar TODOS los mensajes desde Airtable (fuente única de verdad)
async function loadFromAirtable() {
  if(C.airtable.apiKey==='TU_API_KEY_AQUI') {
    // Sin Airtable → usar localStorage
    renderEntries(getAllEntries().filter(e=>!e.privado));
    return;
  }
  const container=$('bookEntries');
  if(container) container.innerHTML='<p class="book-entries__empty" style="opacity:.5">Cargando mensajes... 🌹</p>';

  try {
    const {apiKey,baseId,tableId}=C.airtable;
    // Traer registros públicos ordenados por fecha de creación descendente
    const url=`https://api.airtable.com/v0/${baseId}/${tableId}?filterByFormula=${encodeURIComponent('{EsPublico}=TRUE()')}&sort[0][field]=Fecha&sort[0][direction]=desc&maxRecords=100`;
    const res=await fetch(url,{headers:{'Authorization':`Bearer ${apiKey}`}});
    const data=await res.json();
    if(data.records) {
      airtableCache = data.records.map(r=>({
        nombre:  r.fields.Nombre  || 'Invitado',
        mensaje: r.fields.Mensaje || '',
        emoji:   r.fields.Emoji   || '❤️',
        fotoUrl: r.fields.FotoUrl || '',
        fecha:   r.fields.Fecha   || '',
        privado: !r.fields.EsPublico
      }));
      renderEntries(airtableCache);
    }
  } catch(e) {
    console.warn('Error leyendo Airtable:', e);
    // Fallback a localStorage si falla la red
    renderEntries(getAllEntries().filter(e=>!e.privado));
  }
}

function getAllEntries(){ try{return JSON.parse(localStorage.getItem(BOOK_KEY))||[];}catch{return[];} }

function renderEntries(entries) {
  if(!C.libroFirmas.mostrarMensajesPublicos) entries=[];
  // Ordenar: fotos primero
  const sorted = [...(entries||[])].sort((a,b)=>{
    const aH = a.fotoUrl&&a.fotoUrl!=='_local_'&&a.fotoUrl!=='';
    const bH = b.fotoUrl&&b.fotoUrl!=='_local_'&&b.fotoUrl!=='';
    return (aH&&!bH)?-1:((!aH&&bH)?1:0);
  });
  // Usar StPageFlip
  buildFlipBook(sorted);
}

async function saveAirtable(firma) {
  const {apiKey,baseId,tableId}=C.airtable;
  const res=await fetch(`https://api.airtable.com/v0/${baseId}/${tableId}`,{
    method:'POST',
    headers:{'Authorization':`Bearer ${apiKey}`,'Content-Type':'application/json'},
    body:JSON.stringify({fields:{
      Nombre:   firma.nombre,
      Mensaje:  firma.mensaje,
      Emoji:    firma.emoji,
      FotoUrl:  firma.fotoUrl||'',
      EsPublico:!firma.privado,
      Fecha:    firma.fecha
    }})
  });
  if(!res.ok) throw new Error('Airtable save failed: '+res.status);
}

// ── Toast ─────────────────────────────────────────────
const toastStyle = document.createElement('style');
toastStyle.textContent='@keyframes fadeUpT{from{opacity:0;transform:translateX(-50%) translateY(10px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}';
document.head.appendChild(toastStyle);

function toast(msg){
  const t=document.createElement('div');
  t.style.cssText='position:fixed;bottom:2rem;left:50%;transform:translateX(-50%);background:var(--rose-deep);color:white;padding:.85rem 2rem;border-radius:50px;font-family:var(--font-b);font-size:.85rem;z-index:9999;box-shadow:0 4px 20px rgba(0,0,0,.2);white-space:nowrap;animation:fadeUpT .4s both';
  t.textContent=msg; document.body.appendChild(t);
  setTimeout(()=>t.remove(),4000);
}

// ── Admin ─────────────────────────────────────────────
let ac=0,at;
$('adminTrigger').addEventListener('click',()=>{
  ac++; clearTimeout(at); at=setTimeout(()=>ac=0,800);
  if(ac>=3){ ac=0; adminLogin(); }
});
function adminLogin(){
  const ov=mkOv();
  ov.innerHTML=`<div style="background:white;border-radius:24px;padding:2.5rem;max-width:380px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.25)">
    <h2 style="font-family:var(--font-d);font-size:2rem;color:var(--rose-deep);margin-bottom:.5rem">Panel de edición</h2>
    <input type="password" id="ap" placeholder="Contraseña" style="width:100%;padding:.65rem .9rem;border:1.5px solid var(--blush);border-radius:10px;font-family:var(--font-b);font-size:.88rem;outline:none;margin:1rem 0;box-sizing:border-box"/>
    <div style="display:flex;gap:.75rem">
      <button onclick="chkP()" style="padding:.7rem 1.5rem;background:var(--rose-deep);color:white;border:none;border-radius:50px;font-family:var(--font-b);cursor:pointer">Entrar</button>
      <button onclick="closeOv()" style="padding:.7rem 1.5rem;background:none;border:1.5px solid var(--rose-deep);color:var(--rose-deep);border-radius:50px;font-family:var(--font-b);cursor:pointer">Cancelar</button>
    </div>
  </div>`;
  document.body.appendChild(ov);
  $('ap').addEventListener('keydown',e=>{ if(e.key==='Enter') window.chkP(); });
  setTimeout(()=>ov.style.opacity='1',10);
}
window.chkP=function(){ if($('ap').value==='bodadanieljissel'){ closeOv(); toast('✅ Panel admin activo'); } else { $('ap').style.borderColor='#e55'; $('ap').value=''; $('ap').placeholder='Contraseña incorrecta'; }};
function mkOv(){ window.closeOv(); const o=document.createElement('div'); o.id='adm-o'; o.style.cssText='position:fixed;inset:0;background:rgba(20,10,10,.6);backdrop-filter:blur(6px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:1rem;opacity:0;transition:opacity .3s'; return o; }
window.closeOv=function(){ const e=$('adm-o'); if(e){e.style.opacity='0';setTimeout(()=>e.remove(),300);} };

// ── INIT ──────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  startCountdown();
  spawnPetals('videoPetals', 12);
  spawnPetals('petalsHero', 10);
  initVideo();
  initMusic();
  initVoice();
  initBook();
  initVestModal();
  initAutoNudge();
});

// ── Auto-nudge scroll (2 mini scrolls después de 1.5s) ─
function initAutoNudge() {
  // Solo cuando la invitación sea visible y el usuario no haya hecho scroll
  const inv = document.getElementById('invitation');
  if(!inv) return;
  const observer = new MutationObserver(() => {
    if(inv.classList.contains('visible')) {
      observer.disconnect();
      setTimeout(() => {
        if(window.scrollY > 10) return; // ya scrolleó solo
        // Nudge 1: baja
        window.scrollBy({ top: 80, behavior: 'smooth' });
        setTimeout(() => {
          if(window.scrollY > 100) return;
          // Nudge 2: sube
          window.scrollBy({ top: -80, behavior: 'smooth' });
          setTimeout(() => {
            if(window.scrollY > 20) return;
            // Nudge 3: baja de nuevo más pronunciado
            window.scrollBy({ top: 90, behavior: 'smooth' });
            setTimeout(() => {
              if(window.scrollY > 120) return;
              // Nudge 4: vuelve arriba
              window.scrollBy({ top: -90, behavior: 'smooth' });
            }, 650);
          }, 650);
        }, 650);
      }, 1500);
    }
  });
  observer.observe(inv, { attributes: true, attributeFilter: ['class'] });
}

// ══════════════════════════════════════════════════════
//  MODAL VESTIMENTA
// ══════════════════════════════════════════════════════

// Definir cuáles fotos son de hombres y cuáles de mujeres
// NOTA: las primeras 8 = hombres, las siguientes 8 = mujeres
// Ajusta este número cuando Bryan confirme la división
const VEST_HOMBRES_COUNT = 8;

function initVestModal() {
  // Generar las imágenes en los grids
  const total = 16;
  const gridH = document.getElementById('vestGridHombres');
  const gridD = document.getElementById('vestGridDamas');
  if(!gridH || !gridD) return;

  for(let i = 1; i <= total; i++) {
    const img = document.createElement('div');
    img.className = 'vest-grid__item';
    img.innerHTML = `<img src="img/vestimenta/v${i}.jpg" alt="Referencia ${i}" loading="lazy" onerror="this.parentElement.style.display='none'" onclick="openVestImg(this.src)"/>`;
    if(i <= VEST_HOMBRES_COUNT) gridH.appendChild(img);
    else gridD.appendChild(img);
  }

  // Cerrar con Escape
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape') {
      window.closeVestModal();
      document.getElementById('vestImgModal')?.classList.remove('open');
    }
  });
  // Cerrar tocando el fondo
  document.getElementById('vestModal')?.addEventListener('click', e => {
    if(e.target.id === 'vestModal') window.closeVestModal();
  });
}

let _vestScrollY = 0;

window.openVestModal = function() {
  const m = document.getElementById('vestModal');
  if(!m) return;
  // Guardar scroll y bloquear SOLO con overflow — sin position:fixed
  // para que el modal position:fixed siga siendo visible
  _vestScrollY = window.scrollY || window.pageYOffset;
  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';
  m.scrollTop = 0;
  m.classList.add('open');
};

window.closeVestModal = function() {
  // Restaurar scroll y regresar a la misma posición
  document.documentElement.style.overflow = '';
  document.body.style.overflow = '';
  const m = document.getElementById('vestModal');
  if(m) m.classList.remove('open');
  // Regresar exactamente donde estaba sin parpadeo
  window.scrollTo({ top: _vestScrollY, behavior: 'instant' });
};

// Lightbox dentro del modal
window.openVestImg = function(src) {
  let lb = document.getElementById('vestImgModal');
  if(!lb) {
    lb = document.createElement('div');
    lb.id = 'vestImgModal';
    lb.style.cssText = 'position:fixed;inset:0;background:rgba(10,5,5,.95);z-index:3000;display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;cursor:pointer';
    lb.innerHTML = '<img style="max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px"/>';
    lb.onclick = () => lb.classList.remove('open');
    document.body.appendChild(lb);
  }
  lb.querySelector('img').src = src;
  lb.classList.add('open');
  setTimeout(() => lb.style.opacity = '1', 10);
};
// Hacer toggle de clase con opacity
const vestImgStyle = document.createElement('style');
vestImgStyle.textContent = '#vestImgModal.open{opacity:1!important;pointer-events:all}#vestImgModal:not(.open){opacity:0!important;pointer-events:none}';
document.head.appendChild(vestImgStyle);
