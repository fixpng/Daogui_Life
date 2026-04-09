// === DAO GUI AMBIENT MUSIC SYSTEM ===
// Procedural music using Web Audio API

let audioCtx: AudioContext | null = null
let masterGain: GainNode | null = null
let isPlaying = false
let isMutedState = true

// Music layers
let nodes: { melodyOsc: any[]; harmonics: any[] } = {
  melodyOsc: [],
  harmonics: []
}

// Current state
let currentState = {
  age: 0,
  faction: 'none',
  cultivation: 0,
  isXinsu: false,
  location: 'zhao_cun',
  eventType: 'normal',
  sanity: 100
}

// Pentatonic scale frequencies (Hz) - Chinese
const pentatonic = {
  gong: 261.63,
  shang: 293.66,
  jiao: 329.63,
  zhi: 392.00,
  yu: 440.00,
  gongHigh: 523.25,
  shangHigh: 587.33
}

// Mode configurations
const modes: Record<string, any> = {
  childhood: { tempo: 0.08, filterFreq: 400, melodyComplexity: 0.3, baseNote: pentatonic.gong },
  teenage: { tempo: 0.12, filterFreq: 600, melodyComplexity: 0.5, baseNote: pentatonic.shang },
  adult: { tempo: 0.15, filterFreq: 800, melodyComplexity: 0.7, baseNote: pentatonic.zhi },
  ancient: { tempo: 0.06, filterFreq: 500, melodyComplexity: 0.8, baseNote: pentatonic.jiao },
  village: { tempo: 0.08, filterFreq: 400, melodyComplexity: 0.3, baseNote: pentatonic.gong },
  city: { tempo: 0.12, filterFreq: 700, melodyComplexity: 0.5, baseNote: pentatonic.shang },
  mountain: { tempo: 0.06, filterFreq: 350, melodyComplexity: 0.4, baseNote: pentatonic.jiao },
  evil: { tempo: 0.15, filterFreq: 900, melodyComplexity: 0.8, baseNote: pentatonic.yu },
  ghost: { tempo: 0.10, filterFreq: 500, melodyComplexity: 0.6, baseNote: 220 },
  jungle: { tempo: 0.12, filterFreq: 600, melodyComplexity: 0.5, baseNote: pentatonic.zhi },
  war: { tempo: 0.18, filterFreq: 1000, melodyComplexity: 0.9, baseNote: 196 },
  celestial: { tempo: 0.05, filterFreq: 300, melodyComplexity: 0.3, baseNote: pentatonic.gongHigh },
  void: { tempo: 0.04, filterFreq: 200, melodyComplexity: 0.2, baseNote: 130.81 }
}

const LOCATION_THEMES_AUDIO: Record<string, string> = {
  'zhao_cun': 'village', 'li_cun': 'village', 'wai_jiao': 'village',
  'lu_cheng': 'city', 'yang_cheng': 'city', 'da_liang': 'city', 'shang_jing': 'city',
  'shan_qu': 'mountain', 'kun_lun': 'mountain', 'xing_dao': 'mountain', 'long_min': 'mountain',
  'qing_feng': 'evil', 'zheng_de_si': 'evil', 'an_ci': 'mountain',
  'gui_shi': 'ghost', 'xu_kong': 'void', 'tian_chen': 'ghost',
  'nan_jiang': 'jungle', 'hu_shan': 'jungle',
  'bian_jing': 'war', 'si_qi': 'war', 'bei_jiang': 'war',
  'baiyu_jing': 'celestial'
}

function init() {
  if (audioCtx) return
  audioCtx = new (window.AudioContext || window.webkitAudioContext)()
  masterGain = audioCtx.createGain()
  masterGain.gain.value = 0
  masterGain.connect(audioCtx.destination)
}

function getCurrentMode() {
  var locTheme = currentState.location ? (LOCATION_THEMES_AUDIO[currentState.location] || null) : null
  if (locTheme && modes[locTheme]) return modes[locTheme]
  // Use currentState instead of gameState
  if (currentState.age < 10) return modes.childhood
  if (currentState.age < 18) return modes.teenage
  return modes.adult
}

function createMelody() {
  var noteList = [pentatonic.gong, pentatonic.shang, pentatonic.jiao, pentatonic.zhi, pentatonic.yu]
  function playNote() {
    if (!isPlaying || isMutedState) { setTimeout(playNote, 1000); return }
    var note = noteList[Math.floor(Math.random() * noteList.length)]
    var mode = getCurrentMode()
    if (Math.random() > mode.melodyComplexity) { setTimeout(playNote, 2000 / (mode.tempo * 20)); return }
    var osc = audioCtx!.createOscillator()
    var gain = audioCtx!.createGain()
    var filter = audioCtx!.createBiquadFilter()
    osc.type = Math.random() > 0.5 ? 'sine' : 'triangle'
    osc.frequency.value = note * (Math.random() > 0.7 ? 2 : 1)
    filter.type = 'lowpass'
    filter.frequency.value = 800 + currentState.cultivation * 2
    filter.Q.value = 2
    var now = audioCtx!.currentTime
    var noteLength = 1 + Math.random() * 2
    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.05, now + 0.1)
    gain.gain.exponentialRampToValueAtTime(0.001, now + noteLength)
    osc.connect(filter)
    filter.connect(gain)
    gain.connect(masterGain!)
    osc.start(now)
    osc.stop(now + noteLength + 0.1)
    var nextTime = (1500 + Math.random() * 2000) / (mode.tempo * 20)
    setTimeout(playNote, nextTime)
  }
  setTimeout(playNote, 1000)
}

function createHarmonicPad() {
  var mode = getCurrentMode()
  var baseNote = mode.baseNote
  var harmonicsList = [1, 2, 3, 4, 5]
  harmonicsList.forEach(function (h: number) {
    var osc = audioCtx!.createOscillator()
    var gain = audioCtx!.createGain()
    var filter = audioCtx!.createBiquadFilter()
    osc.type = 'sine'
    osc.frequency.value = baseNote * (h * 0.5)
    filter.type = 'lowpass'
    filter.frequency.value = mode.filterFreq
    filter.Q.value = 1
    gain.gain.value = 0.015 / h
    osc.connect(filter)
    filter.connect(gain)
    gain.connect(masterGain!)
    osc.start()
    nodes.harmonics.push({ osc, gain, filter })
  })
}

function setMuted(muted: boolean) {
  isMutedState = muted
  if (!audioCtx || !masterGain) return
  if (audioCtx.state === 'suspended') audioCtx.resume()
  var now = audioCtx.currentTime
  masterGain.gain.cancelScheduledValues(now)
  masterGain.gain.setValueAtTime(masterGain.gain.value, now)
  masterGain.gain.linearRampToValueAtTime(muted ? 0 : 0.6, now + 1)
}

function startAmbient() {
  if (isPlaying) return
  init()
  isPlaying = true
  createHarmonicPad()
  createMelody()
  setMuted(false)
}

function stopAmbient() {
  Object.keys(nodes).forEach(function (key) {
    (nodes as any)[key].forEach(function (n: any) {
      try { if (n.osc) n.osc.stop() } catch (e) {}
    })
  })
  nodes = { melodyOsc: [], harmonics: [] }
  isPlaying = false
}

function toggle() {
  if (!isPlaying) startAmbient()
  isMutedState = !isMutedState
  setMuted(isMutedState)
  return !isMutedState
}

function updateMusicState(age: number, faction: string, cultivation: number, isXinsu: any, location: string, sanity: number) {
  if (!isPlaying || !audioCtx) return
  var now = audioCtx.currentTime
  currentState = { age, faction, cultivation, isXinsu, location, sanity, eventType: 'normal' }
  var mode = getCurrentMode()
  nodes.harmonics.forEach(function (n: any) {
    if (n.filter) n.filter.frequency.setTargetAtTime(mode.filterFreq, now, 1)
  })
}

function onFactionChange(_newFaction: string) {}

function playEventSound() {
  if (isMutedState || !audioCtx) return
  if (audioCtx.state === 'suspended') return
  var now = audioCtx.currentTime
  var freqs = [174, 261, 348, 435]
  var gains = [0.15, 0.08, 0.04, 0.02]
  freqs.forEach(function (freq, i) {
    var osc = audioCtx!.createOscillator()
    var gain = audioCtx!.createGain()
    var filter = audioCtx!.createBiquadFilter()
    osc.type = 'sine'; osc.frequency.value = freq
    filter.type = 'lowpass'; filter.frequency.value = 1000; filter.Q.value = 1
    gain.gain.setValueAtTime(gains[i], now)
    gain.gain.exponentialRampToValueAtTime(0.001, now + 3)
    osc.connect(filter); filter.connect(gain); gain.connect(masterGain!)
    osc.start(now); osc.stop(now + 3)
  })
}

function playChoiceSound() {
  if (isMutedState || !audioCtx) return
  if (audioCtx.state === 'suspended') return
  var now = audioCtx.currentTime
  var noteList = [pentatonic.gongHigh, pentatonic.zhi, pentatonic.yu]
  var note = noteList[Math.floor(Math.random() * noteList.length)]
  var osc = audioCtx.createOscillator()
  var gain = audioCtx.createGain()
  var filter = audioCtx.createBiquadFilter()
  osc.type = 'sine'; osc.frequency.value = note
  filter.type = 'bandpass'; filter.frequency.value = 800; filter.Q.value = 3
  gain.gain.setValueAtTime(0.08, now)
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8)
  osc.connect(filter); filter.connect(gain); gain.connect(masterGain!)
  osc.start(now); osc.stop(now + 0.8)
}

function playSpecialEvent(eventId: string) {
  if (isMutedState || !audioCtx) return
  if (audioCtx.state === 'suspended') return
  var now = audioCtx.currentTime
  if (eventId === 'meet_li') {
    var osc1 = audioCtx.createOscillator()
    var osc2 = audioCtx.createOscillator()
    var gain = audioCtx.createGain()
    osc1.type = 'sawtooth'; osc1.frequency.setValueAtTime(110, now); osc1.frequency.linearRampToValueAtTime(55, now + 2)
    osc2.type = 'square'; osc2.frequency.setValueAtTime(165, now); osc2.frequency.linearRampToValueAtTime(82, now + 2)
    gain.gain.setValueAtTime(0.1, now); gain.gain.exponentialRampToValueAtTime(0.001, now + 2)
    osc1.connect(gain); osc2.connect(gain); gain.connect(masterGain!)
    osc1.start(now); osc2.start(now); osc1.stop(now + 2); osc2.stop(now + 2)
  } else if (eventId === 'baiyujing') {
    var notesList = [523.25, 659.25, 783.99, 1046.50]
    notesList.forEach(function (freq, i) {
      var osc = audioCtx!.createOscillator()
      var gain = audioCtx!.createGain()
      osc.type = 'sine'; osc.frequency.value = freq
      var startTime = now + i * 0.3
      gain.gain.setValueAtTime(0, startTime)
      gain.gain.linearRampToValueAtTime(0.06, startTime + 0.5)
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 4)
      osc.connect(gain); gain.connect(masterGain!)
      osc.start(startTime); osc.stop(startTime + 4)
    })
  }
}

function setSanityIntensity(intensity: number) {
  if (!isPlaying || !audioCtx) return
  var now = audioCtx.currentTime
  intensity = Math.max(0, Math.min(1, intensity))
  nodes.harmonics.forEach(function (n: any) {
    if (n.gain) { var g = 0.015 + intensity * 0.02; n.gain.gain.setTargetAtTime(g, now, 0.5) }
    if (n.filter) { var freq = 600 + intensity * 800; n.filter.frequency.setTargetAtTime(freq, now, 0.5) }
  })
}

export const DaoguiAudio = {
  toggle,
  isMuted: function () { return isMutedState },
  updateMusicState,
  onFactionChange,
  setSanityIntensity,
  playEventSound,
  playChoiceSound,
  playSpecialEvent,
  startAmbient,
  stopAmbient
}

// Toggle button handler
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('audio-toggle')
  if (btn) {
    btn.addEventListener('click', function () {
      var active = DaoguiAudio.toggle()
      btn!.classList.toggle('active', active)
      btn!.textContent = active ? '\u266A' : '\u266A'
      btn!.title = active ? '\u9759\u97F3' : '\u5F00\u542F\u97F3\u6548'
    })
  }
})
