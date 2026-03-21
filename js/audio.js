// === DARK AMBIENT AUDIO SYSTEM ===
var DaoguiAudio = (function() {
  var audioCtx = null;
  var masterGain = null;
  var isPlaying = false;
  var isMuted = true;
  var nodes = [];
  var sanityIntensity = 0; // 0 = normal, 1 = max intensity

  function init() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0; // Start muted
    masterGain.connect(audioCtx.destination);
  }

  function createDroneLayer(freq, type, filterFreq, filterQ, gainVal) {
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    var filter = audioCtx.createBiquadFilter();

    osc.type = type;
    osc.frequency.value = freq;

    filter.type = 'lowpass';
    filter.frequency.value = filterFreq;
    filter.Q.value = filterQ;

    gain.gain.value = gainVal;

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    osc.start();

    nodes.push({ osc: osc, gain: gain, filter: filter });
    return { osc: osc, gain: gain, filter: filter };
  }

  function startAmbient() {
    if (isPlaying) return;
    init();
    isPlaying = true;

    // Deep bass drone - foundation
    createDroneLayer(55, 'sine', 200, 1, 0.15);

    // Sub-harmonic rumble
    createDroneLayer(36.7, 'sine', 120, 0.5, 0.1);

    // Dark mid-range texture
    createDroneLayer(110, 'triangle', 400, 2, 0.06);

    // Eerie high overtone
    createDroneLayer(220, 'sine', 600, 3, 0.03);

    // Wind/breathing texture - filtered noise
    var bufferSize = audioCtx.sampleRate * 2;
    var noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    var data = noiseBuffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * 0.5;
    }
    var noiseSource = audioCtx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    var noiseFilter = audioCtx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.value = 300;
    noiseFilter.Q.value = 0.8;

    var noiseGain = audioCtx.createGain();
    noiseGain.gain.value = 0.025;

    noiseSource.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(masterGain);
    noiseSource.start();

    nodes.push({ osc: noiseSource, gain: noiseGain, filter: noiseFilter });

    // Slow LFO modulation on wind texture for breathing effect
    var lfo = audioCtx.createOscillator();
    var lfoGain = audioCtx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.15; // Very slow breathing
    lfoGain.gain.value = 150;
    lfo.connect(lfoGain);
    lfoGain.connect(noiseFilter.frequency);
    lfo.start();
    nodes.push({ osc: lfo, gain: lfoGain, filter: null });

    // Second LFO for subtle drone pitch wobble
    var lfo2 = audioCtx.createOscillator();
    var lfo2Gain = audioCtx.createGain();
    lfo2.type = 'sine';
    lfo2.frequency.value = 0.08;
    lfo2Gain.gain.value = 1.5;
    lfo2.connect(lfo2Gain);
    if (nodes[0] && nodes[0].osc) {
      lfo2Gain.connect(nodes[0].osc.frequency);
    }
    lfo2.start();
    nodes.push({ osc: lfo2, gain: lfo2Gain, filter: null });
  }

  function stopAmbient() {
    nodes.forEach(function(n) {
      try { n.osc.stop(); } catch(e) {}
    });
    nodes = [];
    isPlaying = false;
  }

  function setMuted(muted) {
    isMuted = muted;
    if (!audioCtx || !masterGain) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    var now = audioCtx.currentTime;
    masterGain.gain.cancelScheduledValues(now);
    masterGain.gain.setValueAtTime(masterGain.gain.value, now);
    masterGain.gain.linearRampToValueAtTime(muted ? 0 : 0.7, now + 0.5);
  }

  function toggle() {
    if (!isPlaying) {
      startAmbient();
    }
    isMuted = !isMuted;
    setMuted(isMuted);
    return !isMuted;
  }

  // Intensify audio based on sanity (0-1 where 1 = lowest sanity)
  function setSanityIntensity(intensity) {
    sanityIntensity = Math.max(0, Math.min(1, intensity));
    if (!isPlaying || !audioCtx) return;

    var now = audioCtx.currentTime;

    // Increase dissonant overtone
    if (nodes[3] && nodes[3].gain) {
      var eerie = 0.03 + sanityIntensity * 0.08;
      nodes[3].gain.gain.setTargetAtTime(eerie, now, 0.5);
    }

    // Shift filter on dark mid-range
    if (nodes[2] && nodes[2].filter) {
      var filterF = 400 + sanityIntensity * 800;
      nodes[2].filter.frequency.setTargetAtTime(filterF, now, 0.5);
    }

    // Increase wind/breathing
    if (nodes[4] && nodes[4].gain) {
      var wind = 0.025 + sanityIntensity * 0.04;
      nodes[4].gain.gain.setTargetAtTime(wind, now, 0.5);
    }

    // Speed up breathing LFO
    if (nodes[5] && nodes[5].osc) {
      var lfoFreq = 0.15 + sanityIntensity * 0.3;
      nodes[5].osc.frequency.setTargetAtTime(lfoFreq, now, 0.5);
    }
  }

  // Play a brief gong/ding sound for events
  function playEventSound() {
    if (isMuted || !audioCtx) return;
    if (audioCtx.state === 'suspended') return;

    var now = audioCtx.currentTime;

    // Gong-like tone: two sine oscillators with quick decay
    var osc1 = audioCtx.createOscillator();
    var osc2 = audioCtx.createOscillator();
    var gain1 = audioCtx.createGain();
    var gain2 = audioCtx.createGain();
    var filter = audioCtx.createBiquadFilter();

    osc1.type = 'sine';
    osc1.frequency.value = 174; // Low gong fundamental

    osc2.type = 'sine';
    osc2.frequency.value = 261; // Overtone

    filter.type = 'lowpass';
    filter.frequency.value = 800;
    filter.Q.value = 1;

    gain1.gain.setValueAtTime(0.15, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

    gain2.gain.setValueAtTime(0.08, now);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.8);

    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(filter);
    gain2.connect(filter);
    filter.connect(masterGain);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 2.5);
    osc2.stop(now + 2.0);
  }

  // Play a subtle percussion click for choices
  function playChoiceSound() {
    if (isMuted || !audioCtx) return;
    if (audioCtx.state === 'suspended') return;

    var now = audioCtx.currentTime;

    // Short metallic ding
    var osc = audioCtx.createOscillator();
    var gain = audioCtx.createGain();
    var filter = audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.value = 523; // Higher pitched ding

    filter.type = 'bandpass';
    filter.frequency.value = 600;
    filter.Q.value = 5;

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);

    osc.start(now);
    osc.stop(now + 0.8);
  }

  return {
    toggle: toggle,
    isMuted: function() { return isMuted; },
    setSanityIntensity: setSanityIntensity,
    playEventSound: playEventSound,
    playChoiceSound: playChoiceSound
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
