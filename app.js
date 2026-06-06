/* ============================================================
   ESTUDIO BÍBLICO FAMILIAR — app.js
   PWA sin dependencias externas — 100% offline
   ============================================================ */

'use strict';

// ── VERSÍCULOS ──────────────────────────────────────────────
const VERSES = [
  { text:"Lámpara es a mis pies tu palabra, y lumbrera a mi camino.", ref:"Salmo 119:105" },
  { text:"Jehová es mi pastor; nada me faltará.", ref:"Salmo 23:1" },
  { text:"Todo lo puedo en Cristo que me fortalece.", ref:"Filipenses 4:13" },
  { text:"Fíate de Jehová de todo tu corazón, y no te apoyes en tu propia prudencia.", ref:"Proverbios 3:5" },
  { text:"Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes.", ref:"Josué 1:9" },
  { text:"El amor es sufrido, es benigno; el amor no tiene envidia.", ref:"1 Corintios 13:4" },
  { text:"Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas.", ref:"Jeremías 33:3" },
  { text:"Tú guardarás en completa paz a aquel cuyo pensamiento en ti persevera.", ref:"Isaías 26:3" },
  { text:"El que habita al abrigo del Altísimo morará bajo la sombra del Omnipotente.", ref:"Salmo 91:1" },
  { text:"Sean gratos los dichos de mi boca y la meditación de mi corazón delante de ti.", ref:"Salmo 19:14" },
  { text:"Buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.", ref:"Mateo 6:33" },
  { text:"No os afanéis por nada; sino sean conocidas vuestras peticiones delante de Dios.", ref:"Filipenses 4:6" },
  { text:"Encomienda a Jehová tus obras, y tus pensamientos serán afirmados.", ref:"Proverbios 16:3" },
  { text:"Mas los que esperan a Jehová tendrán nuevas fuerzas.", ref:"Isaías 40:31" },
  { text:"Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.", ref:"Salmo 46:1" },
  { text:"Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito.", ref:"Juan 3:16" },
  { text:"Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá.", ref:"Juan 11:25" },
  { text:"Yo soy el camino, la verdad y la vida.", ref:"Juan 14:6" },
  { text:"La paz os dejo, mi paz os doy; no os la doy como el mundo la da.", ref:"Juan 14:27" },
  { text:"Estad quietos y conoced que yo soy Dios.", ref:"Salmo 46:10" },
  { text:"Porque yo sé los planes que tengo para ustedes — planes de bienestar y no de calamidad.", ref:"Jeremías 29:11" },
  { text:"El corazón alegre hermosea el rostro.", ref:"Proverbios 15:13" },
  { text:"Jehová es mi luz y mi salvación; ¿de quién temeré?", ref:"Salmo 27:1" },
  { text:"Crea en mí, oh Dios, un corazón limpio, y renueva un espíritu recto dentro de mí.", ref:"Salmo 51:10" },
  { text:"Alabaré a Jehová en mi vida; cantaré salmos a mi Dios mientras viva.", ref:"Salmo 146:2" },
  { text:"Estas cosas os he hablado para que en mí tengáis paz.", ref:"Juan 16:33" },
  { text:"El Señor es mi fortaleza y mi escudo; en él confió mi corazón.", ref:"Salmo 28:7" },
  { text:"Bienaventurados los de limpio corazón, porque ellos verán a Dios.", ref:"Mateo 5:8" },
];

// ── LIBROS DE LA BIBLIA ─────────────────────────────────────
const LIBROS = [
  { n:"Génesis",        cap:50 }, { n:"Éxodo",          cap:40 },
  { n:"Levítico",       cap:27 }, { n:"Números",         cap:36 },
  { n:"Deuteronomio",   cap:34 }, { n:"Josué",           cap:24 },
  { n:"Jueces",         cap:21 }, { n:"Rut",             cap:4  },
  { n:"1 Samuel",       cap:31 }, { n:"2 Samuel",        cap:24 },
  { n:"1 Reyes",        cap:22 }, { n:"2 Reyes",         cap:25 },
  { n:"1 Crónicas",     cap:29 }, { n:"2 Crónicas",      cap:36 },
  { n:"Esdras",         cap:10 }, { n:"Nehemías",        cap:13 },
  { n:"Ester",          cap:10 }, { n:"Job",             cap:42 },
  { n:"Salmos",         cap:150}, { n:"Proverbios",      cap:31 },
  { n:"Eclesiastés",    cap:12 }, { n:"Cantares",        cap:8  },
  { n:"Isaías",         cap:66 }, { n:"Jeremías",        cap:52 },
  { n:"Lamentaciones",  cap:5  }, { n:"Ezequiel",        cap:48 },
  { n:"Daniel",         cap:12 }, { n:"Oseas",           cap:14 },
  { n:"Joel",           cap:3  }, { n:"Amós",            cap:9  },
  { n:"Abdías",         cap:1  }, { n:"Jonás",           cap:4  },
  { n:"Miqueas",        cap:7  }, { n:"Nahúm",           cap:3  },
  { n:"Habacuc",        cap:3  }, { n:"Sofonías",        cap:3  },
  { n:"Hageo",          cap:2  }, { n:"Zacarías",        cap:14 },
  { n:"Malaquías",      cap:4  },
  { n:"Mateo",          cap:28 }, { n:"Marcos",          cap:16 },
  { n:"Lucas",          cap:24 }, { n:"Juan",            cap:21 },
  { n:"Hechos",         cap:28 }, { n:"Romanos",         cap:16 },
  { n:"1 Corintios",    cap:16 }, { n:"2 Corintios",     cap:13 },
  { n:"Gálatas",        cap:6  }, { n:"Efesios",         cap:6  },
  { n:"Filipenses",     cap:4  }, { n:"Colosenses",      cap:4  },
  { n:"1 Tesalonicenses",cap:5 }, { n:"2 Tesalonicenses",cap:3  },
  { n:"1 Timoteo",      cap:6  }, { n:"2 Timoteo",       cap:4  },
  { n:"Tito",           cap:3  }, { n:"Filemón",         cap:1  },
  { n:"Hebreos",        cap:13 }, { n:"Santiago",        cap:5  },
  { n:"1 Pedro",        cap:5  }, { n:"2 Pedro",         cap:3  },
  { n:"1 Juan",         cap:5  }, { n:"2 Juan",          cap:1  },
  { n:"3 Juan",         cap:1  }, { n:"Judas",           cap:1  },
  { n:"Apocalipsis",    cap:22 },
];

// Versículos representativos por capítulo (generados para demostración offline)
// En producción se puede ampliar con una Biblia completa en JSON
function getCapituloTexto(libro, cap) {
  const seed = (libro.length * 7 + cap * 13) % VERSES.length;
  const count = 5 + (seed % 8); // entre 5 y 12 versículos
  const versos = [];
  for (let i = 1; i <= count; i++) {
    const idx = (seed + i * 3) % VERSES.length;
    versos.push({ num: i, text: VERSES[idx].text + ' (' + VERSES[idx].ref + ')' });
  }
  return versos;
}

// ── STORAGE KEYS ───────────────────────────────────────────
const KEY_BOSQUEJOS   = 'biblia_bosquejos';
const KEY_REFLEXIONES = 'biblia_reflexiones';
const KEY_THEME       = 'biblia_theme';
const KEY_STREAK      = 'biblia_streak';

// ── STATE ──────────────────────────────────────────────────
let bosquejos    = [];
let reflexiones  = [];
let editBosquejoId   = null;
let editReflexionId  = null;
let currentVerseIdx  = -1;
let reflColor        = 'none';
let currentTab       = 'tab-inicio';

// Lector state
let lectorLibroIdx = -1;
let lectorCapIdx   = 1;

// ── ZEN AUDIO STATE ───────────────────────────────────────
let audioCtx    = null;
let zenSound    = 'none';
let zenPlaying  = false;
let rainSrc     = null;
let pianoTimer  = null;
let binOscL     = null;
let binOscR     = null;
let delayNode   = null;
let delayFb     = null;

// ── HELPERS ───────────────────────────────────────────────
const $ = id => document.getElementById(id);

function load(key, def) {
  try { const r = localStorage.getItem(key); return r ? JSON.parse(r) : def; }
  catch { return def; }
}

function save(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2600);
}

function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('es-ES', { day:'2-digit', month:'short', year:'numeric' });
  } catch { return ''; }
}

// ── TABS ──────────────────────────────────────────────────
function switchTab(tabId) {
  document.querySelectorAll('.tab-screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const screen = $(tabId);
  if (screen) screen.classList.add('active');
  const navId = 'nav-' + tabId.replace('tab-', '');
  const nb = $(navId);
  if (nb) nb.classList.add('active');
  currentTab = tabId;
  if (tabId === 'tab-bosquejos')   renderBosquejos();
  if (tabId === 'tab-reflexiones') renderReflexiones();
  if (tabId === 'tab-inicio')      updateStats();
}

// ── VERSÍCULO DEL DÍA ─────────────────────────────────────
function initVerse() {
  const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(),0,0)) / 86400000);
  currentVerseIdx = dayOfYear % VERSES.length;
  showVerse(currentVerseIdx);
}

function showVerse(idx) {
  const v = VERSES[idx];
  const vt = $('verse-text'), vr = $('verse-ref');
  if (vt) vt.textContent = '\u201C' + v.text + '\u201D';
  if (vr) vr.textContent = '— ' + v.ref;
}

function bindVerseButtons() {
  const btnCopy = $('btn-copy-verse');
  const btnNew  = $('btn-new-verse');
  let touchHandled = false;

  function handleCopy(e) {
    if (e.type === 'touchend') {
      e.preventDefault();
      touchHandled = true;
      setTimeout(() => { touchHandled = false; }, 400);
    } else if (touchHandled) {
      return; // skip click after touchend
    }
    const v = VERSES[currentVerseIdx];
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText('\u201C' + v.text + '\u201D — ' + v.ref)
        .then(() => toast('📋 Versículo copiado'))
        .catch(() => toast('⚠️ No se pudo copiar'));
    } else {
      // Fallback for mobile browsers without clipboard API
      const ta = document.createElement('textarea');
      ta.value = '\u201C' + v.text + '\u201D — ' + v.ref;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); toast('📋 Versículo copiado'); }
      catch { toast('⚠️ No se pudo copiar'); }
      document.body.removeChild(ta);
    }
  }

  function handleNewVerse(e) {
    if (e.type === 'touchend') {
      e.preventDefault();
      touchHandled = true;
      setTimeout(() => { touchHandled = false; }, 400);
    } else if (touchHandled) {
      return; // skip click after touchend
    }
    currentVerseIdx = (currentVerseIdx + 1) % VERSES.length;
    showVerse(currentVerseIdx);
    toast('✨ Nuevo versículo');
  }

  if (btnCopy) {
    btnCopy.addEventListener('click', handleCopy);
    btnCopy.addEventListener('touchend', handleCopy);
  }
  if (btnNew) {
    btnNew.addEventListener('click', handleNewVerse);
    btnNew.addEventListener('touchend', handleNewVerse);
  }
}

// ── ESTADÍSTICAS ──────────────────────────────────────────
function updateStats() {
  const sb = $('stat-bosquejos'), sr = $('stat-reflexiones'), ss = $('stat-streak');
  if (sb) sb.textContent = bosquejos.length;
  if (sr) sr.textContent = reflexiones.length;
  if (ss) {
    const streakData = load(KEY_STREAK, { count: 0, last: '' });
    if (ss) ss.textContent = streakData.count || 0;
  }
}

function updateStreak() {
  const today = new Date().toDateString();
  const s = load(KEY_STREAK, { count: 0, last: '' });
  if (s.last === today) return;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  s.count = (s.last === yesterday) ? s.count + 1 : 1;
  s.last  = today;
  save(KEY_STREAK, s);
}

// ── BOSQUEJOS ─────────────────────────────────────────────
function showEditorBosquejo(id = null) {
  editBosquejoId = id;
  const b = id ? bosquejos.find(x => x.id === id) : null;
  const title = $('editor-bosquejo-title');
  if (title) title.textContent = b ? 'Editar Bosquejo' : 'Nuevo Bosquejo';
  const fields = ['b-titulo','b-objetivo','b-pasaje','b-intro','b-desarrollo','b-conclusion','b-reflexion'];
  const keys   = ['titulo','objetivo','pasaje','intro','desarrollo','conclusion','reflexion'];
  fields.forEach((fid, i) => {
    const el = $(fid);
    if (el) el.value = b ? (b[keys[i]] || '') : '';
  });
  const ed = $('editor-bosquejo');
  if (ed) ed.classList.add('active');
}

function closeEditorBosquejo() {
  const ed = $('editor-bosquejo');
  if (ed) ed.classList.remove('active');
}

function saveBosquejo() {
  const titulo = ($('b-titulo') || {}).value?.trim();
  if (!titulo) return toast('✏️ El título es obligatorio');
  const data = {
    titulo,
    objetivo:    ($('b-objetivo') || {}).value?.trim()    || '',
    pasaje:      ($('b-pasaje') || {}).value?.trim()      || '',
    intro:       ($('b-intro') || {}).value?.trim()       || '',
    desarrollo:  ($('b-desarrollo') || {}).value?.trim()  || '',
    conclusion:  ($('b-conclusion') || {}).value?.trim()  || '',
    reflexion:   ($('b-reflexion') || {}).value?.trim()   || '',
    updatedAt:   new Date().toISOString(),
  };
  if (editBosquejoId) {
    const i = bosquejos.findIndex(x => x.id === editBosquejoId);
    if (i > -1) bosquejos[i] = { ...bosquejos[i], ...data };
  } else {
    bosquejos.push({ id: Date.now().toString(36), createdAt: data.updatedAt, ...data });
  }
  save(KEY_BOSQUEJOS, bosquejos);
  updateStreak();
  closeEditorBosquejo();
  renderBosquejos();
  updateStats();
  toast('✅ Bosquejo guardado');
}

function deleteBosquejo(id) {
  bosquejos = bosquejos.filter(x => x.id !== id);
  save(KEY_BOSQUEJOS, bosquejos);
  renderBosquejos();
  updateStats();
  toast('🗑️ Bosquejo eliminado');
}

function renderBosquejos() {
  const list = $('bosquejo-list');
  const empty = $('bosquejo-empty');
  if (!list) return;
  const q = (($('search-bosquejos') || {}).value || '').toLowerCase().trim();
  list.querySelectorAll('.bosquejo-card').forEach(c => c.remove());
  const filtered = bosquejos.filter(b =>
    !q || b.titulo.toLowerCase().includes(q) || (b.pasaje || '').toLowerCase().includes(q)
  );
  if (empty) empty.style.display = filtered.length === 0 ? 'block' : 'none';
  [...filtered].reverse().forEach(b => {
    const card = document.createElement('div');
    card.className = 'bosquejo-card';
    card.innerHTML = `
      <button class="delete-btn" title="Eliminar">✕</button>
      <div class="bosquejo-card-title">${b.titulo}</div>
      <div class="bosquejo-card-meta">
        ${b.pasaje ? '<span>📖 ' + b.pasaje + '</span>' : ''}
        <span>🗓 ${formatDate(b.updatedAt)}</span>
      </div>
    `;
    card.onclick = e => { if (!e.target.closest('.delete-btn')) showEditorBosquejo(b.id); };
    const del = card.querySelector('.delete-btn');
    if (del) del.onclick = e => { e.stopPropagation(); deleteBosquejo(b.id); };
    list.insertBefore(card, empty);
  });
}

// ── REFLEXIONES ───────────────────────────────────────────
function showEditorReflexion(id = null) {
  editReflexionId = id;
  const r = id ? reflexiones.find(x => x.id === id) : null;
  const title = $('editor-reflexion-title');
  if (title) title.textContent = r ? 'Editar Reflexión' : 'Nueva Reflexión';
  const rp = $('r-pasaje'), rc = $('r-contenido');
  if (rp) rp.value = r ? (r.pasaje || '') : '';
  if (rc) rc.value = r ? (r.contenido || '') : '';
  reflColor = r ? (r.color || 'none') : 'none';
  document.querySelectorAll('.color-dot').forEach(d => d.classList.toggle('active', d.dataset.color === reflColor));
  const ed = $('editor-reflexion');
  if (ed) ed.classList.add('active');
}

function closeEditorReflexion() {
  const ed = $('editor-reflexion');
  if (ed) ed.classList.remove('active');
}

function saveReflexion() {
  const contenido = ($('r-contenido') || {}).value?.trim();
  if (!contenido) return toast('✏️ Escribe algo antes de guardar');
  const data = {
    pasaje:    ($('r-pasaje') || {}).value?.trim() || '',
    contenido,
    color:     reflColor,
    updatedAt: new Date().toISOString(),
  };
  if (editReflexionId) {
    const i = reflexiones.findIndex(x => x.id === editReflexionId);
    if (i > -1) reflexiones[i] = { ...reflexiones[i], ...data };
  } else {
    reflexiones.push({ id: Date.now().toString(36), createdAt: data.updatedAt, ...data });
  }
  save(KEY_REFLEXIONES, reflexiones);
  updateStreak();
  closeEditorReflexion();
  renderReflexiones();
  updateStats();
  toast('🙏 Reflexión guardada');
}

function deleteReflexion(id) {
  reflexiones = reflexiones.filter(x => x.id !== id);
  save(KEY_REFLEXIONES, reflexiones);
  renderReflexiones();
  updateStats();
  toast('🗑️ Reflexión eliminada');
}

function selectReflColor(el, color) {
  reflColor = color;
  document.querySelectorAll('.color-dot').forEach(d => d.classList.remove('active'));
  el.classList.add('active');
}

function renderReflexiones() {
  const list = $('reflexion-list');
  const empty = $('reflexion-empty');
  if (!list) return;
  const q = (($('search-reflexiones') || {}).value || '').toLowerCase().trim();
  list.querySelectorAll('.reflection-card').forEach(c => c.remove());
  const filtered = reflexiones.filter(r =>
    !q || r.contenido.toLowerCase().includes(q) || (r.pasaje || '').toLowerCase().includes(q)
  );
  if (empty) empty.style.display = filtered.length === 0 ? 'block' : 'none';
  [...filtered].reverse().forEach(r => {
    const card = document.createElement('div');
    card.className = 'reflection-card ' + (r.color !== 'none' ? 'dot-' + r.color : '');
    card.style.borderLeft = r.color && r.color !== 'none' ? '' : '';
    card.innerHTML = `
      <button class="delete-btn" title="Eliminar" style="opacity:1;">✕</button>
      ${r.pasaje ? '<div class="reflection-passage">📖 ' + r.pasaje + '</div>' : ''}
      <div class="reflection-content">${r.contenido.replace(/\n/g,'<br>')}</div>
      <div class="reflection-date">${formatDate(r.updatedAt)}</div>
    `;
    card.onclick = e => { if (!e.target.closest('.delete-btn')) showEditorReflexion(r.id); };
    const del = card.querySelector('.delete-btn');
    if (del) del.onclick = e => { e.stopPropagation(); deleteReflexion(r.id); };
    list.insertBefore(card, empty);
  });
}

// ── LECTOR ───────────────────────────────────────────────
function initLector() {
  const sel = $('sel-libro');
  if (!sel) return;
  LIBROS.forEach((l, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = l.n;
    sel.appendChild(opt);
  });
}

function onLibroChange() {
  const sel = $('sel-libro');
  const selCap = $('sel-capitulo');
  if (!sel || !selCap) return;
  lectorLibroIdx = parseInt(sel.value);
  selCap.innerHTML = '<option value="">Cap.</option>';
  if (isNaN(lectorLibroIdx) || lectorLibroIdx < 0) return;
  const libro = LIBROS[lectorLibroIdx];
  for (let i = 1; i <= libro.cap; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    selCap.appendChild(opt);
  }
  selCap.value = '1';
  lectorCapIdx = 1;
  loadCapitulo();
}

function loadCapitulo() {
  const selCap = $('sel-capitulo');
  if (!selCap) return;
  lectorCapIdx = parseInt(selCap.value) || 1;
  if (lectorLibroIdx < 0) return;
  const libro = LIBROS[lectorLibroIdx];
  const versos = getCapituloTexto(libro.n, lectorCapIdx);
  const display = $('verse-display');
  if (!display) return;
  display.innerHTML = `
    <div style="font-size:13px; font-weight:700; color:var(--gold); margin-bottom:14px; letter-spacing:.06em; text-transform:uppercase;">
      ${libro.n} — Capítulo ${lectorCapIdx}
    </div>
    <div class="verse-display-text">
      ${versos.map(v => `<sup class="verse-num">${v.num}</sup>${v.text} `).join('')}
    </div>
  `;
}

function navCapitulo(dir) {
  if (lectorLibroIdx < 0) return;
  const libro = LIBROS[lectorLibroIdx];
  lectorCapIdx = Math.max(1, Math.min(libro.cap, lectorCapIdx + dir));
  const selCap = $('sel-capitulo');
  if (selCap) selCap.value = lectorCapIdx;
  loadCapitulo();
}

// ── TEMA ──────────────────────────────────────────────────
function initTheme() {
  const theme = load(KEY_THEME, 'dark');
  document.documentElement.setAttribute('data-theme', theme);
  const btn = $('btn-theme');
  if (btn) btn.textContent = theme === 'dark' ? '🌙' : '☀️';
  if (btn) btn.onclick = () => {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    btn.textContent = next === 'dark' ? '🌙' : '☀️';
    save(KEY_THEME, next);
  };
}

// ── ZEN AUDIO ─────────────────────────────────────────────
function initAudio() {
  try {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    if (!audioCtx) {
      audioCtx = new AC();
      delayNode = audioCtx.createDelay(2.0);
      delayNode.delayTime.value = 0.55;
      delayFb = audioCtx.createGain();
      delayFb.gain.value = 0.38;
      delayNode.connect(delayFb);
      delayFb.connect(delayNode);
      delayNode.connect(audioCtx.destination);
    }
    if (audioCtx.state === 'suspended') audioCtx.resume();
  } catch {}
}

// ── ZEN MELODIES ──────────────────────────────────────────
const MELODY_AMAZING_GRACE = [
  { f: 261.63, d: 1 }, // C4
  { f: 349.23, d: 2 }, // F4
  { f: 440.00, d: 0.5 }, // A4
  { f: 349.23, d: 0.5 }, // F4
  { f: 440.00, d: 1 }, // A4
  { f: 392.00, d: 2 }, // G4
  { f: 349.23, d: 1 }, // F4
  { f: 293.66, d: 2 }, // D4
  { f: 261.63, d: 1 }, // C4
  
  { f: 261.63, d: 1 }, // C4
  { f: 349.23, d: 2 }, // F4
  { f: 440.00, d: 0.5 }, // A4
  { f: 349.23, d: 0.5 }, // F4
  { f: 440.00, d: 1 }, // A4
  { f: 392.00, d: 1 }, // G4
  { f: 523.25, d: 3 }, // C5
  
  { f: 440.00, d: 1 }, // A4
  { f: 523.25, d: 2 }, // C5
  { f: 440.00, d: 0.5 }, // A4
  { f: 523.25, d: 0.5 }, // C5
  { f: 440.00, d: 1 }, // A4
  { f: 349.23, d: 2 }, // F4
  { f: 261.63, d: 1 }, // C4
  { f: 293.66, d: 2 }, // D4
  { f: 261.63, d: 1 }, // C4
  
  { f: 261.63, d: 1 }, // C4
  { f: 349.23, d: 2 }, // F4
  { f: 440.00, d: 0.5 }, // A4
  { f: 349.23, d: 0.5 }, // F4
  { f: 440.00, d: 1 }, // A4
  { f: 392.00, d: 2 }, // G4
  { f: 349.23, d: 3 }, // F4
];

const MELODY_TU_FIDELIDAD = [
  { f: 392.00, d: 1 }, // G4
  { f: 440.00, d: 1 }, // A4
  { f: 493.88, d: 1.5 }, // B4
  { f: 493.88, d: 0.5 }, // B4
  { f: 440.00, d: 1 }, // A4
  { f: 392.00, d: 1 }, // G4
  { f: 440.00, d: 1.5 }, // A4
  { f: 392.00, d: 0.5 }, // G4
  { f: 349.23, d: 1 }, // F4
  { f: 329.63, d: 2 }, // E4
  
  { f: 440.00, d: 1 }, // A4
  { f: 493.88, d: 1 }, // B4
  { f: 523.25, d: 1.5 }, // C5
  { f: 523.25, d: 0.5 }, // C5
  { f: 493.88, d: 1 }, // B4
  { f: 440.00, d: 1 }, // A4
  { f: 392.00, d: 1.5 }, // G4
  { f: 349.23, d: 0.5 }, // F4
  { f: 329.63, d: 1 }, // E4
  { f: 293.66, d: 2 }, // D4
  
  { f: 392.00, d: 1 }, // G4
  { f: 440.00, d: 1 }, // A4
  { f: 493.88, d: 1.5 }, // B4
  { f: 493.88, d: 0.5 }, // B4
  { f: 523.25, d: 1 }, // C5
  { f: 587.33, d: 1 }, // D5
  { f: 523.25, d: 1 }, // C5
  { f: 493.88, d: 1 }, // B4
  { f: 440.00, d: 2 }, // A4
  
  { f: 587.33, d: 1 }, // D5
  { f: 523.25, d: 1 }, // C5
  { f: 493.88, d: 1 }, // B4
  { f: 392.00, d: 1.5 }, // G4
  { f: 440.00, d: 0.5 }, // A4
  { f: 493.88, d: 1 }, // B4
  { f: 440.00, d: 1.5 }, // A4
  { f: 392.00, d: 0.5 }, // G4
  { f: 369.99, d: 1 }, // F#4
  { f: 392.00, d: 3 }, // G4
];

const MELODY_CUAN_GRANDE = [
  { f: 261.63, d: 1 }, // C4
  { f: 329.63, d: 1 }, // E4
  { f: 392.00, d: 1.5 }, // G4
  { f: 392.00, d: 0.5 }, // G4
  { f: 440.00, d: 1 }, // A4
  { f: 349.23, d: 1 }, // F4
  { f: 440.00, d: 1.5 }, // A4
  { f: 349.23, d: 0.5 }, // F4
  { f: 392.00, d: 1 }, // G4
  { f: 329.63, d: 2 }, // E4
  
  { f: 392.00, d: 1 }, // G4
  { f: 523.25, d: 1.5 }, // C5
  { f: 523.25, d: 0.5 }, // C5
  { f: 493.88, d: 1 }, // B4
  { f: 392.00, d: 1 }, // G4
  { f: 440.00, d: 1.5 }, // A4
  { f: 349.23, d: 0.5 }, // F4
  { f: 293.66, d: 1 }, // D4
  { f: 261.63, d: 3 }, // C4
];

let currentMelody = null;
let melodyNoteIdx = 0;
let melodyTimer = null;

function stopZen() {
  if (rainSrc)  { try { rainSrc.stop(); } catch {} rainSrc = null; }
  if (pianoTimer) { clearTimeout(pianoTimer); pianoTimer = null; }
  if (melodyTimer) { clearTimeout(melodyTimer); melodyTimer = null; }
  if (binOscL)  { try { binOscL.stop(); } catch {} binOscL = null; }
  if (binOscR)  { try { binOscR.stop(); } catch {} binOscR = null; }
}

function playZen() {
  stopZen();
  if (!zenPlaying || zenSound === 'none' || !audioCtx) return;
  
  if (zenSound === 'lluvia') {
    startRainSound(0.18);
    playAmbientChords();
  } else if (zenSound === 'sublime') {
    currentMelody = MELODY_AMAZING_GRACE;
    melodyNoteIdx = 0;
    playMelodyNote();
  } else if (zenSound === 'fidelidad') {
    currentMelody = MELODY_TU_FIDELIDAD;
    melodyNoteIdx = 0;
    playMelodyNote();
  } else if (zenSound === 'grande') {
    currentMelody = MELODY_CUAN_GRANDE;
    melodyNoteIdx = 0;
    playMelodyNote();
  }
}

function startRainSound(volume = 0.3) {
  if (!audioCtx) return;
  const sr = audioCtx.sampleRate;
  const buf = audioCtx.createBuffer(1, sr * 2, sr);
  const d = buf.getChannelData(0);
  let b0=0,b1=0,b2=0,b3=0,b4=0,b5=0,b6=0;
  for (let i=0;i<d.length;i++) {
    const w = Math.random()*2-1;
    b0=.99886*b0+w*.0555179; b1=.99332*b1+w*.0750759;
    b2=.96900*b2+w*.1538520; b3=.86650*b3+w*.3104856;
    b4=.55000*b4+w*.5329522; b5=-.7616*b5-w*.0168980;
    d[i]=(b0+b1+b2+b3+b4+b5+b6+w*.5362)*0.1;
    b6=w*.115926;
  }
  rainSrc = audioCtx.createBufferSource();
  rainSrc.buffer = buf; rainSrc.loop = true;
  const f = audioCtx.createBiquadFilter();
  f.type = 'lowpass'; f.frequency.value = 650;
  const g = audioCtx.createGain(); g.gain.value = volume;
  rainSrc.connect(f); f.connect(g); g.connect(audioCtx.destination);
  rainSrc.start();
}

function synthesizePianoNote(freq, volume = 0.08) {
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  
  osc.type = 'triangle';
  osc.frequency.value = freq;
  
  gain.gain.setValueAtTime(0, audioCtx.currentTime);
  gain.gain.linearRampToValueAtTime(volume, audioCtx.currentTime + 0.18);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.2);
  
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  
  if (delayNode) gain.connect(delayNode);
  
  osc.start();
  osc.stop(audioCtx.currentTime + 4.5);
}

function playMelodyNote() {
  if (!currentMelody || !zenPlaying || !audioCtx) return;
  
  const note = currentMelody[melodyNoteIdx];
  if (!note) {
    melodyNoteIdx = 0;
    playMelodyNote();
    return;
  }
  
  synthesizePianoNote(note.f, 0.08);
  
  const tempoDurationMs = 1100; // Tempo tranquilo
  const delayTimeMs = note.d * tempoDurationMs;
  
  melodyNoteIdx = (melodyNoteIdx + 1) % currentMelody.length;
  melodyTimer = setTimeout(playMelodyNote, delayTimeMs);
}

function playAmbientChords() {
  if (zenSound !== 'lluvia' || !zenPlaying || !audioCtx) return;
  
  // Acordes pastorales en C / F / Am / G
  const chords = [
    [130.81, 164.81, 196.00], // C3, E3, G3
    [174.61, 220.00, 261.63], // F3, A3, C4
    [220.00, 261.63, 329.63], // A3, C4, E4
    [196.00, 246.94, 293.66]  // G3, B3, D4
  ];
  
  const chord = chords[Math.floor(Math.random() * chords.length)];
  chord.forEach((freq, idx) => {
    setTimeout(() => {
      synthesizePianoNote(freq * 2, 0.04);
    }, idx * 180);
  });
  
  pianoTimer = setTimeout(playAmbientChords, 5500 + Math.random() * 3000);
}

function selectZenSound(el) {
  const sound = el.dataset.sound;
  zenSound = sound;
  document.querySelectorAll('.zen-option').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  const names = {
    none: 'Silencio',
    sublime: 'Sublime Gracia 🎹',
    fidelidad: 'Tu Fidelidad 🕊️',
    grande: 'Cuán Grande Es Él 🌟',
    lluvia: 'Lluvia de Oración 🌧️'
  };
  const nameEl = $('zen-name');
  if (nameEl) {
    nameEl.textContent = names[sound];
    nameEl.className = 'zen-name' + (sound !== 'none' ? ' playing-text' : '');
  }
  if (sound !== 'none') {
    zenPlaying = true;
    const bar = $('zen-bar'); if (bar) bar.classList.add('playing');
    const svg = $('zen-play-svg'); if (svg) svg.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
  } else {
    zenPlaying = false;
    const bar = $('zen-bar'); if (bar) bar.classList.remove('playing');
    const svg = $('zen-play-svg'); if (svg) svg.innerHTML = '<path d="M8 5v14l11-7z"/>';
  }
  initAudio();
  playZen();
  closeZenDrawer();
  toast('🔊 ' + names[sound]);
}

function closeZenDrawer(e) {
  if (e && e.target !== $('zen-drawer-overlay')) return;
  const ov = $('zen-drawer-overlay');
  if (ov) ov.classList.remove('open');
}

function bindZenButtons() {
  const btnSel  = $('btn-zen-select');
  const btnPlay = $('btn-zen-play');
  if (btnSel) btnSel.onclick = () => {
    initAudio();
    const ov = $('zen-drawer-overlay');
    if (ov) ov.classList.add('open');
  };
  if (btnPlay) btnPlay.onclick = () => {
    initAudio();
    if (zenSound === 'none') { const ov = $('zen-drawer-overlay'); if (ov) ov.classList.add('open'); return; }
    zenPlaying = !zenPlaying;
    const bar = $('zen-bar'), svg = $('zen-play-svg');
    if (zenPlaying) {
      if (bar) bar.classList.add('playing');
      if (svg) svg.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
      playZen(); toast('▶️ Reanudado');
    } else {
      if (bar) bar.classList.remove('playing');
      if (svg) svg.innerHTML = '<path d="M8 5v14l11-7z"/>';
      stopZen(); toast('⏸️ Pausado');
    }
  };
}

// ── ONLINE STATUS ─────────────────────────────────────────
function updateOnlineStatus() {
  const el = $('online-status');
  if (!el) return;
  if (navigator.onLine) {
    el.textContent = '● Iglesia Hosanna Sur';
    el.style.color = 'var(--emerald-light)';
  } else {
    el.textContent = '▲ Modo sin conexión';
    el.style.color = 'var(--gold)';
  }
}

// ── SERVICE WORKER ────────────────────────────────────────
function registerSW() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

// ── VERSE MODAL STATE & LOGIC ─────────────────────────────
let lastBosquejoField = 'b-pasaje';
let vmCurrentTestament = 'AT';
let vmSelectedBookIdx = -1;
let vmSelectedCap = 1;
let vmSelectedVerses = [];
let vmCurrentVerses = [];

function openVerseModal(fieldId = null) {
  if (fieldId) {
    lastBosquejoField = fieldId;
  }
  const ov = $('vm-overlay');
  if (ov) ov.classList.add('open');
  vmInitSelector();
}

function closeVerseModal() {
  const ov = $('vm-overlay');
  if (ov) ov.classList.remove('open');
}

function vmFilterTestament(btn) {
  document.querySelectorAll('.vm-t-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  vmCurrentTestament = btn.dataset.t;
  vmInitSelector();
}

function vmInitSelector() {
  const selLibro = $('vm-libro');
  if (!selLibro) return;
  
  selLibro.innerHTML = '<option value="">— Selecciona un libro —</option>';
  
  const isAT = vmCurrentTestament === 'AT';
  const start = isAT ? 0 : 39;
  const end = isAT ? 38 : LIBROS.length - 1;
  
  for (let i = start; i <= end; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = LIBROS[i].n;
    selLibro.appendChild(opt);
  }
  
  if (vmSelectedBookIdx >= start && vmSelectedBookIdx <= end) {
    selLibro.value = vmSelectedBookIdx;
  } else {
    selLibro.value = '';
    const selCap = $('vm-cap');
    if (selCap) selCap.innerHTML = '<option value="">Capítulo</option>';
    vmSelectedBookIdx = -1;
    vmSelectedVerses = [];
    vmCurrentVerses = [];
    vmUpdateVerseList();
  }
}

function vmOnLibroChange() {
  const sel = $('vm-libro');
  const selCap = $('vm-cap');
  if (!sel || !selCap) return;
  
  vmSelectedBookIdx = parseInt(sel.value);
  selCap.innerHTML = '<option value="">Capítulo</option>';
  vmSelectedVerses = [];
  vmCurrentVerses = [];
  
  if (isNaN(vmSelectedBookIdx) || vmSelectedBookIdx < 0) {
    vmSelectedBookIdx = -1;
    vmUpdateVerseList();
    return;
  }
  
  const libro = LIBROS[vmSelectedBookIdx];
  for (let i = 1; i <= libro.cap; i++) {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = i;
    selCap.appendChild(opt);
  }
  
  selCap.value = '1';
  vmSelectedCap = 1;
  vmLoadVerses();
}

function vmLoadVerses() {
  const selCap = $('vm-cap');
  if (!selCap) return;
  
  vmSelectedCap = parseInt(selCap.value) || 1;
  vmSelectedVerses = [];
  
  if (vmSelectedBookIdx < 0) {
    vmCurrentVerses = [];
    vmUpdateVerseList();
    return;
  }
  
  const libroName = LIBROS[vmSelectedBookIdx].n;
  vmCurrentVerses = getCapituloTexto(libroName, vmSelectedCap);
  
  const rangeBar = $('vm-range-bar');
  if (rangeBar) rangeBar.style.display = 'flex';
  
  const fromInput = $('vm-range-from');
  const toInput = $('vm-range-to');
  if (fromInput) { fromInput.value = ''; fromInput.max = vmCurrentVerses.length; }
  if (toInput) { toInput.value = ''; toInput.max = vmCurrentVerses.length; }
  
  vmUpdateVerseList();
}

function vmUpdateVerseList() {
  const list = $('vm-list');
  if (!list) return;
  
  if (vmSelectedBookIdx < 0 || vmCurrentVerses.length === 0) {
    list.innerHTML = `
      <div class="empty-state" style="padding:30px 20px;">
        <div class="empty-state-icon">📖</div>
        <p>Selecciona un libro y capítulo<br>para ver los versículos.</p>
      </div>
    `;
    const rangeBar = $('vm-range-bar');
    if (rangeBar) rangeBar.style.display = 'none';
    vmUpdatePreview();
    return;
  }
  
  list.innerHTML = '';
  
  vmCurrentVerses.forEach(v => {
    const isSelected = vmSelectedVerses.includes(v.num);
    const row = document.createElement('div');
    row.className = 'vm-verse-row' + (isSelected ? ' selected' : '');
    row.onclick = () => vmToggleVerse(v.num);
    
    const cleanText = v.text.replace(/\s*\([^)]+\)\s*$/, '');
    
    row.innerHTML = `
      <div class="vm-verse-num">${v.num}</div>
      <div class="vm-verse-text">${cleanText}</div>
      <div class="vm-verse-check">${isSelected ? '☑' : '☐'}</div>
    `;
    list.appendChild(row);
  });
  
  vmUpdatePreview();
}

function vmToggleVerse(num) {
  const idx = vmSelectedVerses.indexOf(num);
  if (idx > -1) {
    vmSelectedVerses.splice(idx, 1);
  } else {
    vmSelectedVerses.push(num);
  }
  
  const list = $('vm-list');
  if (list) {
    const rows = list.querySelectorAll('.vm-verse-row');
    vmCurrentVerses.forEach((v, i) => {
      const row = rows[i];
      if (row) {
        const isSel = vmSelectedVerses.includes(v.num);
        row.classList.toggle('selected', isSel);
        const check = row.querySelector('.vm-verse-check');
        if (check) check.textContent = isSel ? '☑' : '☐';
      }
    });
  }
  
  vmUpdatePreview();
}

function vmApplyRange() {
  const fromVal = parseInt($('vm-range-from').value);
  const toVal = parseInt($('vm-range-to').value);
  
  if (isNaN(fromVal) || isNaN(toVal) || fromVal < 1 || toVal < 1 || fromVal > vmCurrentVerses.length || toVal > vmCurrentVerses.length) {
    toast('⚠️ Rango inválido');
    return;
  }
  
  const min = Math.min(fromVal, toVal);
  const max = Math.max(fromVal, toVal);
  
  vmSelectedVerses = [];
  for (let i = min; i <= max; i++) {
    vmSelectedVerses.push(i);
  }
  
  const list = $('vm-list');
  if (list) {
    const rows = list.querySelectorAll('.vm-verse-row');
    vmCurrentVerses.forEach((v, i) => {
      const row = rows[i];
      if (row) {
        const isSel = vmSelectedVerses.includes(v.num);
        row.classList.toggle('selected', isSel);
        const check = row.querySelector('.vm-verse-check');
        if (check) check.textContent = isSel ? '☑' : '☐';
      }
    });
  }
  
  vmUpdatePreview();
  toast(`📏 Rango aplicado: v. ${min} al ${max}`);
}

function vmClearAll() {
  vmSelectedVerses = [];
  
  const list = $('vm-list');
  if (list) {
    const rows = list.querySelectorAll('.vm-verse-row');
    rows.forEach(row => {
      row.classList.remove('selected');
      const check = row.querySelector('.vm-verse-check');
      if (check) check.textContent = '☐';
    });
  }
  
  vmUpdatePreview();
}

function formatVerseRanges(arr) {
  if (arr.length === 0) return '';
  const sorted = [...arr].sort((a,b) => a - b);
  const parts = [];
  let start = sorted[0];
  let end = sorted[0];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === end + 1) {
      end = sorted[i];
    } else {
      parts.push(start === end ? `${start}` : `${start}-${end}`);
      start = sorted[i];
      end = sorted[i];
    }
  }
  parts.push(start === end ? `${start}` : `${start}-${end}`);
  return parts.join(',');
}

function vmUpdatePreview() {
  const countEl = $('vm-count');
  const previewTextEl = $('vm-preview-text');
  if (!countEl || !previewTextEl) return;
  
  countEl.textContent = vmSelectedVerses.length;
  
  if (vmSelectedVerses.length === 0) {
    previewTextEl.textContent = 'Toca versículos arriba para seleccionarlos.';
    previewTextEl.style.fontStyle = 'italic';
    return;
  }
  
  previewTextEl.style.fontStyle = 'normal';
  
  const bookName = LIBROS[vmSelectedBookIdx].n;
  const ref = `${bookName} ${vmSelectedCap}:${formatVerseRanges(vmSelectedVerses)}`;
  
  const sorted = [...vmSelectedVerses].sort((a, b) => a - b);
  const texts = sorted.map(num => {
    const vObj = vmCurrentVerses.find(v => v.num === num);
    return vObj ? vObj.text.replace(/\s*\([^)]+\)\s*$/, '') : '';
  });
  
  previewTextEl.textContent = `${ref} — "${texts.join(' / ')}"`;
}

function vmCopy() {
  if (vmSelectedVerses.length === 0) {
    toast('⚠️ Selecciona al menos un versículo');
    return;
  }
  
  const bookName = LIBROS[vmSelectedBookIdx].n;
  const ref = `${bookName} ${vmSelectedCap}:${formatVerseRanges(vmSelectedVerses)}`;
  const sorted = [...vmSelectedVerses].sort((a, b) => a - b);
  const texts = sorted.map(num => {
    const vObj = vmCurrentVerses.find(v => v.num === num);
    return vObj ? vObj.text.replace(/\s*\([^)]+\)\s*$/, '') : '';
  });
  
  const combined = `${ref} — "${texts.join(' / ')}"`;
  
  navigator.clipboard.writeText(combined)
    .then(() => toast('📋 Versículos copiados'))
    .catch(() => toast('⚠️ Error al copiar'));
}

function vmInsert() {
  if (vmSelectedVerses.length === 0) {
    toast('⚠️ Selecciona al menos un versículo');
    return;
  }
  
  const bookName = LIBROS[vmSelectedBookIdx].n;
  const ref = `${bookName} ${vmSelectedCap}:${formatVerseRanges(vmSelectedVerses)}`;
  const sorted = [...vmSelectedVerses].sort((a, b) => a - b);
  const texts = sorted.map(num => {
    const vObj = vmCurrentVerses.find(v => v.num === num);
    return vObj ? vObj.text.replace(/\s*\([^)]+\)\s*$/, '') : '';
  });
  
  const combined = `${ref} — "${texts.join(' / ')}"`;
  
  const field = $(lastBosquejoField);
  if (field) {
    insertTextAtCursor(field, combined);
    closeVerseModal();
    toast('✅ Versículo(s) insertado(s)');
  } else {
    navigator.clipboard.writeText(combined);
    closeVerseModal();
    toast('📋 Portapapeles (campo no seleccionado)');
  }
}

function insertTextAtCursor(el, text) {
  if (!el) return;
  const start = el.selectionStart;
  const end = el.selectionEnd;
  const val = el.value;
  
  let insertText = text;
  if (val.length > 0) {
    if (el.tagName.toLowerCase() === 'textarea') {
      const prevChar = start > 0 ? val[start - 1] : '';
      const prefix = (prevChar && prevChar !== '\n' && prevChar !== ' ') ? '\n' : '';
      insertText = prefix + text;
    } else {
      const prevChar = start > 0 ? val[start - 1] : '';
      const prefix = (prevChar && prevChar !== ' ') ? ' ' : '';
      insertText = prefix + text;
    }
  }
  
  if (typeof start === 'number' && typeof end === 'number') {
    el.value = val.substring(0, start) + insertText + val.substring(end);
    el.selectionStart = el.selectionEnd = start + insertText.length;
  } else {
    el.value += insertText;
  }
  
  el.dispatchEvent(new Event('input', { bubbles: true }));
  el.focus();
}

// ── INIT ──────────────────────────────────────────────────
function startApp() {
  try {
    bosquejos   = load(KEY_BOSQUEJOS, []);
    reflexiones = load(KEY_REFLEXIONES, []);
    initTheme();
    initVerse();
    bindVerseButtons();
    bindZenButtons();
    initLector();
    updateStats();
    updateOnlineStatus();
    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    registerSW();
    console.log('✅ Biblia App iniciada correctamente');
  } catch(e) {
    console.error('❌ Error en init:', e);
    // Show error visually on mobile for debugging
    const vt = document.getElementById('verse-text');
    if (vt) vt.textContent = 'Error al iniciar: ' + e.message;
  }
}

// Ensure DOM is fully loaded before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
