// === DAO GUI AMBIENT MUSIC SYSTEM ===
// Procedural music using Web Audio API
// Supports: age-based, faction-based, cultivation-based, event-based music

var DaoguiAudio = (function() {
  var audioCtx = null;
  var masterGain = null;
  var isPlaying = false;
  var isMuted = true;
  
  // Music layers
  var nodes = {
    bassDrone: [],
    melodyOsc: [],
    texture: [],
    harmonics: []
  };
  
  // Current state
  var currentState = {
    age: 0,
    faction: 'none',
    cultivation: 0,
    isXinsu: false,
    location: 'zhao_cun',
    eventType: 'normal',
    sanity: 100
  };
  
  // Pentatonic scale frequencies (Hz) - Chinese 宫商角徵羽
  var pentatonic = {
    gong: 261.63,  // C4
    shang: 293.66, // D4
    jiao: 329.63,  // E4
    zhi: 392.00,   // G4
    yu: 440.00,    // A4
    gongHigh: 523.25,  // C5
    shangHigh: 587.33  // D5
  };
  
  // Mode configurations
  var modes = {
    // Childhood - innocent, simple
    childhood: {
      tempo: 0.08,
      filterFreq: 400,
      melodyComplexity: 0.3,
      baseNote: pentatonic.gong
    },
    // Teenage - confused, searching
    teenage: {
      tempo: 0.12,
      filterFreq: 600,
      melodyComplexity: 0.5,
      baseNote: pentatonic.shang
    },
    // Adult - worldly, experienced
    adult: {
      tempo: 0.15,
      filterFreq: 800,
      melodyComplexity: 0.7,
      baseNote: pentatonic.zhi
    },
    // Ancient era - primordial, powerful
    ancient: {
      tempo: 0.06,
      filterFreq: 500,
      melodyComplexity: 0.8,
      baseNote: pentatonic.jiao
    }
  };
  
  // Faction-specific sounds
  var factionSounds = {
    zuowang: { baseFreq: 55, filterQ: 4, character: 'mysterious' },
    jiantian: { baseFreq: 110, filterQ: 1, character: 'official' },
    aojing: { baseFreq: 165, filterQ: 2, character: 'fiery' },
    bailian: { baseFreq: 220, filterQ: 3, character: 'holy' },
    biaoju: { baseFreq: 82, filterQ: 1, character: 'martial' },
    fa_jiao: { baseFreq: 73, filterQ: 5, character: 'dark' }
  };

  function init() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0;
    masterGain.connect(audioCtx.destination);
  }

  // Create a drone layer
  function createDrone(freq, type, filterFreq, filterQ, gainVal) {
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    var filter = audioCtx.createBiquadFilter();
    
    osc.type = type;
    osc.frequency.value = freq;
    
    filter.type = 'lowpass';
    filter.frequency.value = filterFreq;
    filter.Q.value = filterQ;
    
    gain.gain.setValueAtTime(0, audioCtx.currentTime);
    gain.gain.linearRampToValueAtTime(gainVal, audioCtx.currentTime + 2);
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    osc.start();
    
    return { osc: osc, gain: gain, filter: filter };
  }

  // Create pentatonic melody
  function createMelody() {
    var notes = [pentatonic.gong, pentatonic.shang, pentatonic.jiao, pentatonic.zhi, pentatonic.yu];
    
    function playNote() {
      if (!isPlaying || isMuted) {
        setTimeout(playNote, 1000);
        return;
      }
      
      var note = notes[Math.floor(Math.random() * notes.length)];
      var mode = getCurrentMode();
      
      // Skip some notes based on complexity
      if (Math.random() > mode.melodyComplexity) {
        setTimeout(playNote, 2000 / (mode.tempo * 20));
        return;
      }
      
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      var filter = audioCtx.createBiquadFilter();
      
      osc.type = Math.random() > 0.5 ? 'sine' : 'triangle';
      osc.frequency.value = note * (Math.random() > 0.7 ? 2 : 1);
      
      filter.type = 'lowpass';
      filter.frequency.value = 800 + currentState.cultivation * 2;
      filter.Q.value = 2;
      
      var now = audioCtx.currentTime;
      var noteLength = 1 + Math.random() * 2;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + noteLength);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      
      osc.start(now);
      osc.stop(now + noteLength + 0.1);
      
      var nextTime = (1500 + Math.random() * 2000) / (mode.tempo * 20);
      setTimeout(playNote, nextTime);
    }
    
    setTimeout(playNote, 1000);
  }

  // Create harmonic pad for atmosphere
  function createHarmonicPad() {
    var mode = getCurrentMode();
    var baseNote = mode.baseNote;
    
    // Create soft harmonics
    var harmonics = [1, 2, 3, 4, 5];
    harmonics.forEach(function(h, i) {
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      var filter = audioCtx.createBiquadFilter();
      
      osc.type = 'sine';
      osc.frequency.value = baseNote * (h * 0.5);
      
      filter.type = 'lowpass';
      filter.frequency.value = mode.filterFreq;
      filter.Q.value = 1;
      
      gain.gain.value = 0.015 / h; // Decreasing volume for higher harmonics
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start();
      
      nodes.harmonics.push({ osc: osc, gain: gain, filter: filter });
    });
  }

  // Get current music mode based on game state
  function getCurrentMode() {
    if (gameState.year < -100) return modes.ancient;
    if (gameState.age < 10) return modes.childhood;
    if (gameState.age < 18) return modes.teenage;
    return modes.adult;
  }

  // Start ambient music
  function startAmbient() {
    if (isPlaying) return;
    init();
    isPlaying = true;
    
    var mode = getCurrentMode();
    var faction = factionSounds[gameState.faction] || { baseFreq: 55, filterQ: 1 };
    
    // Deep bass drone - foundation
    nodes.bassDrone.push(createDrone(55, 'sine', 150, 1, 0.15));
    
    // Sub bass
    nodes.bassDrone.push(createDrone(36.7, 'sine', 100, 0.5, 0.1));
    
    // Faction-specific drone
    if (gameState.faction !== 'none') {
      nodes.bassDrone.push(createDrone(faction.baseFreq, 'sine', 300, faction.filterQ, 0.08));
    }
    
    // Mid texture
    nodes.texture.push(createDrone(110, 'triangle', mode.filterFreq, 2, 0.05));
    
    // High harmonic
    nodes.texture.push(createDrone(220, 'sine', 600, 3, 0.025));
    
    // Create harmonic pad
    createHarmonicPad();
    
    // Start melody loop
    createMelody();
    
    setMuted(false);
  }

  // Stop all audio
  function stopAmbient() {
    Object.keys(nodes).forEach(function(key) {
      nodes[key].forEach(function(n) {
        try {
          if (n.osc) n.osc.stop();
        } catch(e) {}
      });
    });
    nodes = { bassDrone: [], melodyOsc: [], texture: [], harmonics: [] };
    isPlaying = false;
  }

  // Set muted state
  function setMuted(muted) {
    isMuted = muted;
    if (!audioCtx || !masterGain) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    var now = audioCtx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.linearRampToValueAtTime(muted ? 0 : 0.6, now + 1);
  }

  // Toggle audio
  function toggle() {
    if (!isPlaying) {
      startAmbient();
    }
    isMuted = !isMuted;
    setMuted(isMuted);
    return !isMuted;
  }

  // Update music based on game state changes
  function updateMusicState(age, faction, cultivation, isXinsu, location, sanity) {
    if (!isPlaying || !audioCtx) return;
    
    var now = audioCtx.currentTime;
    currentState = { age, faction, cultivation, isXinsu, location, sanity };
    
    var mode = getCurrentMode();
    
    // Update bass drone
    if (nodes.bassDrone[0]) {
      nodes.bassDrone[0].gain.gain.setTargetAtTime(0.15, now, 1);
    }
    
    // Update filter based on cultivation
    nodes.texture.forEach(function(n) {
      if (n.filter) {
        var filterFreq = mode.filterFreq + cultivation * 1.5;
        n.filter.frequency.setTargetAtTime(filterFreq, now, 1);
      }
    });
    
    // Update harmonic filters
    nodes.harmonics.forEach(function(n) {
      if (n.filter) {
        n.filter.frequency.setTargetAtTime(mode.filterFreq, now, 1);
      }
    });
  }

  // Faction change - transition music
  function onFactionChange(newFaction) {
    if (!isPlaying || !audioCtx) return;
    
    var now = audioCtx.currentTime;
    
    // Remove old faction drone
    if (nodes.bassDrone.length > 2) {
      var oldFactionDrone = nodes.bassDrone.pop();
      if (oldFactionDrone && oldFactionDrone.osc) {
        oldFactionDrone.gain.gain.setTargetAtTime(0, now, 0.5);
        setTimeout(function() {
          try { oldFactionDrone.osc.stop(); } catch(e) {}
        }, 1000);
      }
    }
    
    // Add new faction drone
    if (newFaction !== 'none' && factionSounds[newFaction]) {
      var faction = factionSounds[newFaction];
      var newDrone = createDrone(faction.baseFreq, 'sine', 300, faction.filterQ, 0.08);
      nodes.bassDrone.push(newDrone);
    }
  }

  // Play event sound - gong
  function playEventSound() {
    if (isMuted || !audioCtx) return;
    if (audioCtx.state === 'suspended') return;

    var now = audioCtx.currentTime;
    
    var freqs = [174, 261, 348, 435];
    var gains = [0.15, 0.08, 0.04, 0.02];
    
    freqs.forEach(function(freq, i) {
      var osc = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      var filter = audioCtx.createBiquadFilter();
      
      osc.type = 'sine';
      osc.frequency.value = freq;
      
      filter.type = 'lowpass';
      filter.frequency.value = 1000;
      filter.Q.value = 1;
      
      gain.gain.setValueAtTime(gains[i], now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 3);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      
      osc.start(now);
      osc.stop(now + 3);
    });
  }

  // Play choice sound - subtle ding
  function playChoiceSound() {
    if (isMuted || !audioCtx) return;
    if (audioCtx.state === 'suspended') return;

    var now = audioCtx.currentTime;
    
    var notes = [pentatonic.gongHigh, pentatonic.zhi, pentatonic.yu];
    var note = notes[Math.floor(Math.random() * notes.length)];
    
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    var filter = audioCtx.createBiquadFilter();
    
    osc.type = 'sine';
    osc.frequency.value = note;
    
    filter.type = 'bandpass';
    filter.frequency.value = 800;
    filter.Q.value = 3;
    
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    
    osc.start(now);
    osc.stop(now + 0.8);
  }

  // Play special event music
  function playSpecialEvent(eventId) {
    if (isMuted || !audioCtx) return;
    if (audioCtx.state === 'suspended') return;
    
    var now = audioCtx.currentTime;
    
    if (eventId === 'meet_li') {
      var osc1 = audioCtx.createOscillator();
      var osc2 = audioCtx.createOscillator();
      var gain = audioCtx.createGain();
      
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(110, now);
      osc1.frequency.linearRampToValueAtTime(55, now + 2);
      
      osc2.type = 'square';
      osc2.frequency.setValueAtTime(165, now);
      osc2.frequency.linearRampToValueAtTime(82, now + 2);
      
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 2);
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(masterGain);
      
      osc1.start(now);
      osc2.start(now);
      osc1.stop(now + 2);
      osc2.stop(now + 2);
    }
    else if (eventId === 'baiyujing') {
      var notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach(function(freq, i) {
        var osc = audioCtx.createOscillator();
        var gain = audioCtx.createGain();
        
        osc.type = 'sine';
        osc.frequency.value = freq;
        
        var startTime = now + i * 0.3;
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.06, startTime + 0.5);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 4);
        
        osc.connect(gain);
        gain.connect(masterGain);
        
        osc.start(startTime);
        osc.stop(startTime + 4);
      });
    }
  }

  // Sanity intensity - for xinsu players
  function setSanityIntensity(intensity) {
    if (!isPlaying || !audioCtx) return;
    
    var now = audioCtx.currentTime;
    intensity = Math.max(0, Math.min(1, intensity));
    
    // Increase filter frequency for more tension
    nodes.texture.forEach(function(n) {
      if (n.filter && n.filter.type === 'lowpass') {
        var freq = 600 + intensity * 800;
        n.filter.frequency.setTargetAtTime(freq, now, 0.5);
      }
    });
    
    // Increase harmonic brightness
    nodes.harmonics.forEach(function(n) {
      if (n.gain) {
        var g = 0.015 + intensity * 0.02;
        n.gain.gain.setTargetAtTime(g, now, 0.5);
      }
    });
  }

  return {
    toggle: toggle,
    isMuted: function() { return isMuted; },
    updateMusicState: updateMusicState,
    onFactionChange: onFactionChange,
    setSanityIntensity: setSanityIntensity,
    playEventSound: playEventSound,
    playChoiceSound: playChoiceSound,
    playSpecialEvent: playSpecialEvent,
    startAmbient: startAmbient,
    stopAmbient: stopAmbient
  };
})();

// Toggle button handler
document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('audio-toggle');
  if (btn) {
    btn.addEventListener('click', function() {
      var active = DaoguiAudio.toggle();
      btn.classList.toggle('active', active);
      btn.textContent = active ? '♪' : '♪';
      btn.title = active ? '静音' : '开启音效';
    });
  }
});
