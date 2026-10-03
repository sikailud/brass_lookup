const keys = [
  { name: "C", pc: 0, prefer: "sharp" },
  { name: "G", pc: 7, prefer: "sharp" },
  { name: "D", pc: 2, prefer: "sharp" },
  { name: "A", pc: 9, prefer: "sharp" },
  { name: "E", pc: 4, prefer: "sharp" },
  { name: "B", pc: 11, prefer: "sharp" },
  { name: "F♯", pc: 6, prefer: "sharp" },
  { name: "C♯", pc: 1, prefer: "sharp" },
  { name: "F", pc: 5, prefer: "flat" },
  { name: "B♭", pc: 10, prefer: "flat" },
  { name: "E♭", pc: 3, prefer: "flat" },
  { name: "A♭", pc: 8, prefer: "flat" },
  { name: "D♭", pc: 1, prefer: "flat" },
  { name: "G♭", pc: 6, prefer: "flat" },
];

const sharpNames = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];

const flatNames = ["C", "D♭", "D", "E♭", "E", "F", "G♭", "G", "A♭", "A", "B♭", "B"];

const scales = {
  major: {
    label: "Major",
    steps: [0, 2, 4, 5, 7, 9, 11, 12],
    degrees: ["1", "2", "3", "4", "5", "6", "7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
  },
  naturalMinor: {
    label: "Natural minor",
    steps: [0, 2, 3, 5, 7, 8, 10, 12],
    degrees: ["1", "2", "♭3", "4", "5", "♭6", "♭7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
  },
  harmonicMinor: {
    label: "Harmonic minor",
    steps: [0, 2, 3, 5, 7, 8, 11, 12],
    degrees: ["1", "2", "♭3", "4", "5", "♭6", "7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
  },
  majorPentatonic: {
    label: "Major pentatonic",
    steps: [0, 2, 4, 7, 9, 12],
    degrees: ["1", "2", "3", "5", "6", "8"],
    spelling: [0, 1, 2, 4, 5, 7],
  },
  minorPentatonic: {
    label: "Minor pentatonic",
    steps: [0, 3, 5, 7, 10, 12],
    degrees: ["1", "♭3", "4", "5", "♭7", "8"],
    spelling: [0, 2, 3, 4, 6, 7],
  },
  chromatic: {
    label: "Chromatic",
    steps: Array.from({ length: 13 }, (_, i) => i),
    degrees: Array.from({ length: 13 }, (_, i) => String(i + 1)),
    spelling: null,
  },
  ionian: {
    label: "Ionian",
    steps: [0, 2, 4, 5, 7, 9, 11, 12],
    degrees: ["1", "2", "3", "4", "5", "6", "7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
    parentOffset: 0,
  },
  dorian: {
    label: "Dorian",
    steps: [0, 2, 3, 5, 7, 9, 10, 12],
    degrees: ["1", "2", "♭3", "4", "5", "6", "♭7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
    parentOffset: 2,
  },
  phrygian: {
    label: "Phrygian",
    steps: [0, 1, 3, 5, 7, 8, 10, 12],
    degrees: ["1", "♭2", "♭3", "4", "5", "♭6", "♭7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
    parentOffset: 4,
  },
  lydian: {
    label: "Lydian",
    steps: [0, 2, 4, 6, 7, 9, 11, 12],
    degrees: ["1", "2", "3", "♯4", "5", "6", "7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
    parentOffset: 5,
  },
  mixolydian: {
    label: "Mixolydian",
    steps: [0, 2, 4, 5, 7, 9, 10, 12],
    degrees: ["1", "2", "3", "4", "5", "6", "♭7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
    parentOffset: 7,
  },
  aeolian: {
    label: "Aeolian",
    steps: [0, 2, 3, 5, 7, 8, 10, 12],
    degrees: ["1", "2", "♭3", "4", "5", "♭6", "♭7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
    parentOffset: 9,
  },
  locrian: {
    label: "Locrian",
    steps: [0, 1, 3, 5, 6, 8, 10, 12],
    degrees: ["1", "♭2", "♭3", "4", "♭5", "♭6", "♭7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
    parentOffset: 11,
  },
  ryukyu: {
    label: "Ryukyu scale",
    steps: [0, 4, 5, 7, 11, 12],
    degrees: ["1", "3", "4", "5", "7", "8"],
    spelling: [0, 2, 3, 4, 6, 7],
  },
  hirajoshi: {
    label: "Hirajoshi (12-TET approximation)",
    steps: [0, 2, 3, 7, 8, 12],
    degrees: ["1", "2", "♭3", "5", "♭6", "8"],
    spelling: [0, 1, 2, 4, 5, 7],
  },
  kumoi: {
    label: "Kumoi (12-TET approximation)",
    steps: [0, 2, 3, 7, 9, 12],
    degrees: ["1", "2", "♭3", "5", "6", "8"],
    spelling: [0, 1, 2, 4, 5, 7],
  },
  slendro: {
    label: "Slendro (equal-tempered approximation)",
    steps: [0, 2, 5, 7, 10, 12],
    degrees: ["1", "2", "4", "5", "♭7", "8"],
    spelling: [0, 1, 3, 4, 6, 7],
  },
  hijaz: {
    label: "Maqam Hijaz (12-TET approximation)",
    steps: [0, 1, 4, 5, 7, 8, 11, 12],
    degrees: ["1", "♭2", "3", "4", "5", "♭6", "7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
  },
  bhairav: {
    label: "Raga Bhairav (12-TET approximation)",
    steps: [0, 1, 4, 5, 7, 8, 11, 12],
    degrees: ["1", "♭2", "3", "4", "5", "♭6", "7", "8"],
    spelling: [0, 1, 2, 3, 4, 5, 6, 7],
  },
  majorArpeggio: {
    label: "Major triad",
    steps: [0, 4, 7, 12],
    degrees: ["1", "3", "5", "8"],
    spelling: [0, 2, 4, 7],
  },
  minorArpeggio: {
    label: "Minor triad",
    steps: [0, 3, 7, 12],
    degrees: ["1", "♭3", "5", "8"],
    spelling: [0, 2, 4, 7],
  },
  diminishedArpeggio: {
    label: "Diminished triad",
    steps: [0, 3, 6, 12],
    degrees: ["1", "♭3", "♭5", "8"],
    spelling: [0, 2, 4, 7],
  },
  augmentedArpeggio: {
    label: "Augmented triad",
    steps: [0, 4, 8, 12],
    degrees: ["1", "3", "♯5", "8"],
    spelling: [0, 2, 4, 7],
  },
  dominant7Arpeggio: {
    label: "Dominant 7th",
    steps: [0, 4, 7, 10, 12],
    degrees: ["1", "3", "5", "♭7", "8"],
    spelling: [0, 2, 4, 6, 7],
  },
  minor7Arpeggio: {
    label: "Minor 7th",
    steps: [0, 3, 7, 10, 12],
    degrees: ["1", "♭3", "5", "♭7", "8"],
    spelling: [0, 2, 4, 6, 7],
  },
  major7Arpeggio: {
    label: "Major 7th",
    steps: [0, 4, 7, 11, 12],
    degrees: ["1", "3", "5", "7", "8"],
    spelling: [0, 2, 4, 6, 7],
  },
};

const instruments = {
  trumpet: {
    label: "Tpt. in B♭",
    writtenOffset: 2,
    concertOffset: -2,
    valves: 3,
    clef: "treble",
  },
  horn: {
    label: "Hn. in F",
    writtenOffset: 7,
    concertOffset: -7,
    valves: 4,
    clef: "treble",
  },
  euphonium: {
    label: "Euph. (C)",
    writtenOffset: 0,
    concertOffset: 0,
    valves: 4,
    clef: "bass",
  },
  euphoniumBb: {
    label: "Euph. in B♭",
    writtenOffset: 2,
    concertOffset: -2,
    valves: 4,
    clef: "treble",
  },
  tuba: {
    label: "Tba. (C)",
    writtenOffset: 0,
    concertOffset: 0,
    valves: 4,
    clef: "bass",
  },
  trombone: {
    label: "Tbn.",
    writtenOffset: 0,
    concertOffset: 0,
    slide: true,
    clef: "bass",
  },
};

let currentLanguage = "zh";
try {
  const savedLanguage = localStorage.getItem("brassFingeringLanguage");
  if (UI_TEXT[savedLanguage]) currentLanguage = savedLanguage;
} catch {}
function t(key) {
  return UI_TEXT[currentLanguage][key];
}

function applyLanguage() {
  const strings = UI_TEXT[currentLanguage];
  document.documentElement.lang = strings.lang;
  document.title = strings.appTitle;
  document.querySelector("#appTitle").textContent = strings.appTitle;
  document.querySelector("#queryControls").setAttribute("aria-label", strings.controlsAria);
  document.querySelector("#brassGroup").label = strings.brassGroup;
  document.querySelector("#modesGroup").label = strings.modesGroup;
  document.querySelector("#traditionalModesGroup").label =
    strings.traditionalModesGroup || "World traditions";
  document.querySelector("#arpeggiosGroup").label = strings.arpeggiosGroup;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = strings[element.dataset.i18n];
  });
  document.querySelectorAll("[data-scale]").forEach((option) => {
    option.textContent = strings.scales[option.dataset.scale];
  });
  document.querySelectorAll("[data-instrument]").forEach((option) => {
    const id = option.dataset.instrument;
    option.textContent = `${INSTRUMENT_OPTIONS[currentLanguage][id]}（${INSTRUMENT_ABBREVIATIONS[id]}）`;
  });
  const soundText = SOUND_MENU_TEXT[currentLanguage];
  document.querySelector("#soundSettingsToggle").textContent = soundText.label;
  document.querySelector("#soundSettingsToggle").setAttribute("aria-label", soundText.aria);
  document.querySelector("#soundSettingsPanel").setAttribute("aria-label", soundText.aria);
  document.querySelector("#soundLengthLabel").textContent = soundText.length;
  document.querySelector("#soundTimbreLabel").textContent = soundText.timbre;
  document.querySelectorAll("[data-sound-option]").forEach((option) => {
    option.textContent = soundText[option.dataset.soundOption];
  });
  const micText = MIC_MENU_TEXT[currentLanguage];
  document.querySelector("#micToggle").setAttribute("aria-label", micText.aria);
  document.querySelector("#instrumentSelect").setAttribute("aria-label", strings.instrumentAria);
  document.querySelector("#keySelect").setAttribute("aria-label", strings.keyAria);
  document.querySelector("#scaleSelect").setAttribute("aria-label", strings.scaleAria);
  document.querySelector("#octaveSelect").setAttribute("aria-label", strings.octaveAria);
  document.querySelector("#languageOptions").setAttribute("aria-label", strings.languageAria);
  const activeLanguageButton = document.querySelector(`[data-language="${currentLanguage}"]`);
  document.querySelector("#languageToggle").textContent =
    activeLanguageButton?.textContent || currentLanguage;
  document.querySelectorAll("[data-language]").forEach((button) => {
    const active = button.dataset.language === currentLanguage;
    button.setAttribute("aria-pressed", String(active));
    button.classList.toggle("active", active);
  });
  document.querySelector("#scorePaper").setAttribute("aria-label", strings.scoreAria);
  document.querySelector("#scaleNoteList").setAttribute("aria-label", strings.scaleNotesAria);
}

const keySelect = document.querySelector("#keySelect");
keys.forEach((key, index) => {
  const option = document.createElement("option");
  option.value = index;
  option.textContent = key.name;
  keySelect.append(option);
});

let currentNotes = [];
let selectedNoteIndex = 0;
let currentSelectionFromMic = false;
let micDeviationCents = null;
let toneContext = null,
  lastToneAt = -1,
  lastToneMidi = -1;
let micStream = null,
  micSource = null,
  micAnalyser = null,
  micFrameId = 0,
  micLastFrame = 0,
  micPendingIndex = -1,
  micPendingCount = 0,
  micStarting = false,
  micPitchHistory = [],
  micNoPitchFrames = 0,
  micSmoothedMidi = null;
function playNoteTone(note) {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass || !note) return;
  try {
    toneContext ??= new AudioContextClass();
    const instrument = instruments[document.querySelector("#instrumentSelect").value];
    const midi = note.midi + instrument.concertOffset,
      now = toneContext.currentTime;
    const duration = Number(document.querySelector("#soundLengthSelect").value) || 0.85;
    const timbres = {
      soft: { wave: "sine", cutoff: 950 },
      warm: { wave: "triangle", cutoff: 1400 },
      bright: { wave: "square", cutoff: 1900 },
    };
    const timbre = timbres[document.querySelector("#soundTimbreSelect").value] || timbres.warm;
    if (midi === lastToneMidi && now - lastToneAt < 0.09) return;
    lastToneMidi = midi;
    lastToneAt = now;
    const play = () => {
      const start = toneContext.currentTime,
        osc = toneContext.createOscillator(),
        filter = toneContext.createBiquadFilter(),
        gain = toneContext.createGain();
      osc.type = timbre.wave;
      osc.frequency.setValueAtTime(440 * Math.pow(2, (midi - 69) / 12), start);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(timbre.cutoff, start);
      filter.Q.setValueAtTime(0.55, start);
      const release = Math.min(0.24, duration * 0.35),
        releaseAt = start + duration - release;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.045, start + 0.04);
      gain.gain.setValueAtTime(0.045, releaseAt);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(toneContext.destination);
      osc.start(start);
      osc.stop(start + duration + 0.02);
    };
    if (toneContext.state === "suspended")
      toneContext
        .resume()
        .then(play)
        .catch(() => {});
    else play();
  } catch {}
}

function estimateMicPitch(buffer, sampleRate) {
  let mean = 0;
  for (let i = 0; i < buffer.length; i++) mean += buffer[i];
  mean /= buffer.length;
  let rms = 0;
  for (let i = 0; i < buffer.length; i++) {
    const value = buffer[i] - mean;
    rms += value * value;
  }
  rms = Math.sqrt(rms / buffer.length);
  if (rms < 0.01) return null;
  const maxLag = Math.min(Math.floor(sampleRate / 35), Math.floor(buffer.length / 2)),
    minLag = Math.max(2, Math.floor(sampleRate / 1100));
  const normalized = new Float32Array(maxLag + 1);
  let cumulative = 0,
    bestLag = -1;
  for (let lag = 1; lag <= maxLag; lag++) {
    let difference = 0;
    for (let i = 0; i < buffer.length - lag; i += 3) {
      const delta = buffer[i] - mean - (buffer[i + lag] - mean);
      difference += delta * delta;
    }
    cumulative += difference;
    normalized[lag] = cumulative ? (difference * lag) / cumulative : 1;
  }
  for (let lag = minLag; lag <= maxLag; lag++) {
    if (normalized[lag] < 0.16) {
      while (lag < maxLag && normalized[lag + 1] < normalized[lag]) lag++;
      bestLag = lag;
      break;
    }
  }
  if (bestLag < 0) {
    let lowest = 1;
    for (let lag = minLag; lag <= maxLag; lag++) {
      if (normalized[lag] < lowest) {
        lowest = normalized[lag];
        bestLag = lag;
      }
    }
  }
  const octaveLag = bestLag * 2;
  if (
    bestLag > 0 &&
    octaveLag <= maxLag &&
    normalized[octaveLag] < normalized[bestLag] - 0.04 &&
    normalized[octaveLag] < 0.2
  )
    bestLag = octaveLag;
  if (bestLag < 0 || normalized[bestLag] > 0.22) return null;
  const before = normalized[bestLag - 1] || normalized[bestLag],
    center = normalized[bestLag],
    after = normalized[bestLag + 1] || center;
  const divisor = before - 2 * center + after,
    offset = divisor ? Math.max(-1, Math.min(1, (0.5 * (before - after)) / divisor)) : 0;
  const frequency = sampleRate / (bestLag + offset);
  return frequency >= 35 && frequency <= 1100 ? frequency : null;
}

function nearestScaleNote(midi) {
  const instrument = instruments[document.querySelector("#instrumentSelect").value];
  let bestIndex = 0,
    bestTargetMidi = 0,
    bestDistance = Infinity;
  currentNotes.forEach((note, index) => {
    const targetMidi = note.midi + instrument.concertOffset;
    const octaveOffset = Math.round((midi - targetMidi) / 12),
      soundingTarget = targetMidi + 12 * octaveOffset,
      distance = Math.abs(midi - soundingTarget);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestIndex = index;
      bestTargetMidi = soundingTarget;
    }
  });
  return { index: bestIndex, targetMidi: bestTargetMidi };
}

function updateTuner(cents) {
  micDeviationCents = Number.isFinite(cents) ? cents : null;
  const card = document.querySelector(".scale-note.selected.mic-selected");
  if (!card) return;
  const output = card.querySelector(".card-tuner-cents"),
    needle = card.querySelector(".card-tuner-needle");
  if (!output || !needle) return;
  const inTune = micDeviationCents !== null && Math.abs(micDeviationCents) <= 10;
  const rounded = Math.round(micDeviationCents ?? 0),
    sign = rounded > 0 ? "+" : "";
  output.textContent = micDeviationCents === null ? "—¢" : `${sign}${rounded}¢`;
  const bounded = Math.max(-50, Math.min(50, micDeviationCents ?? 0));
  const color =
    micDeviationCents === null
      ? "#999"
      : inTune
        ? "#4f805e"
        : Math.abs(micDeviationCents) <= 18
          ? "#a17e32"
          : "#b54040";
  needle.style.left = `${50 + bounded}%`;
  needle.style.backgroundColor = color;
  output.style.color = color;
}

function monitorMicFrame(timestamp) {
  if (!micAnalyser) return;
  micFrameId = requestAnimationFrame(monitorMicFrame);
  if (timestamp - micLastFrame < 75) return;
  micLastFrame = timestamp;
  const samples = new Float32Array(micAnalyser.fftSize);
  micAnalyser.getFloatTimeDomainData(samples);
  const frequency = estimateMicPitch(samples, toneContext.sampleRate);
  if (!frequency) {
    micNoPitchFrames++;
    if (micNoPitchFrames > 5) {
      micPitchHistory = [];
      micSmoothedMidi = null;
      micPendingIndex = -1;
      micPendingCount = 0;
      updateTuner(null);
    }
    return;
  }
  micNoPitchFrames = 0;
  micPitchHistory.push(69 + 12 * Math.log2(frequency / 440));
  if (micPitchHistory.length > 5) micPitchHistory.shift();
  const ordered = [...micPitchHistory].sort((a, b) => a - b),
    medianMidi = ordered[Math.floor(ordered.length / 2)];
  micSmoothedMidi =
    micSmoothedMidi === null ? medianMidi : micSmoothedMidi + (medianMidi - micSmoothedMidi) * 0.4;
  const midi = micSmoothedMidi;
  const { index, targetMidi } = nearestScaleNote(midi);
  updateTuner((midi - targetMidi) * 100);
  if (index === micPendingIndex) micPendingCount++;
  else {
    micPendingIndex = index;
    micPendingCount = 1;
  }
  if (micPendingCount >= 2 && (index !== selectedNoteIndex || !currentSelectionFromMic))
    showSelectedNote(currentNotes[index], index, { fromMic: true });
}

function stopMicMonitoring() {
  if (micFrameId) cancelAnimationFrame(micFrameId);
  micFrameId = 0;
  micAnalyser = null;
  try {
    micSource?.disconnect();
  } catch {}
  micSource = null;
  micStream?.getTracks().forEach((track) => track.stop());
  micStream = null;
  const button = document.querySelector("#micToggle");
  button.classList.remove("active");
  button.setAttribute("aria-pressed", "false");
  button.disabled = false;
  micStarting = false;
  micPendingIndex = -1;
  micPendingCount = 0;
  micPitchHistory = [];
  micNoPitchFrames = 0;
  micSmoothedMidi = null;
  micDeviationCents = null;
  if (currentSelectionFromMic && currentNotes[selectedNoteIndex])
    showSelectedNote(currentNotes[selectedNoteIndex], selectedNoteIndex);
}

async function startMicMonitoring() {
  if (micStarting || micStream) return;
  micStarting = true;
  const button = document.querySelector("#micToggle"),
    status = document.querySelector("#micStatus");
  button.disabled = true;
  status.hidden = true;
  try {
    if (!navigator.mediaDevices?.getUserMedia) throw new Error("mic-unavailable");
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: false,
        noiseSuppression: false,
        autoGainControl: false,
      },
      video: false,
    });
    micStream = stream;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) throw new Error("audio-unavailable");
    toneContext ??= new AudioContextClass();
    if (toneContext.state === "suspended") await toneContext.resume();
    micSource = toneContext.createMediaStreamSource(stream);
    micAnalyser = toneContext.createAnalyser();
    micAnalyser.fftSize = 8192;
    micAnalyser.smoothingTimeConstant = 0;
    micSource.connect(micAnalyser);
    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");
    button.disabled = false;
    micStarting = false;
    updateTuner(null);
    stream
      .getAudioTracks()
      .forEach((track) => track.addEventListener("ended", stopMicMonitoring, { once: true }));
    micLastFrame = 0;
    micFrameId = requestAnimationFrame(monitorMicFrame);
  } catch {
    stopMicMonitoring();
    status.textContent = MIC_MENU_TEXT[currentLanguage].error;
    status.hidden = false;
  }
}

function noteName(pc, prefer) {
  return (prefer === "flat" ? flatNames : sharpNames)[((pc % 12) + 12) % 12];
}

const sharpOrder = ["F", "C", "G", "D", "A", "E", "B"];
const flatOrder = ["B", "E", "A", "D", "G", "C", "F"];
const signatureCount = {
  C: 0,
  G: 1,
  D: 2,
  A: 3,
  E: 4,
  B: 5,
  "F♯": 6,
  "C♯": 7,
  F: -1,
  "B♭": -2,
  "E♭": -3,
  "A♭": -4,
  "D♭": -5,
  "G♭": -6,
};

const naturalPc = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
function keyAccidentals(keyName) {
  const count = signatureCount[keyName] || 0,
    map = {};
  if (count > 0) sharpOrder.slice(0, count).forEach((letter) => (map[letter] = "♯"));
  if (count < 0) flatOrder.slice(0, -count).forEach((letter) => (map[letter] = "♭"));
  return map;
}

function abcKeyName(keyName) {
  return keyName.replace("♯", "#").replace("♭", "b");
}

function transposeKey(key, semitones) {
  const pc = (((key.pc + semitones) % 12) + 12) % 12;
  return (
    keys.find((item) => item.pc === pc && item.prefer === key.prefer) ||
    keys.find((item) => item.pc === pc) || {
      name: noteName(pc, key.prefer),
      pc,
      prefer: key.prefer,
    }
  );
}

function concertName(writtenMidi, instrument, key) {
  const midi = writtenMidi + instrument.concertOffset;
  return noteName(midi % 12, key.prefer) + (Math.floor(midi / 12) - 1);
}

function signatureFor(key, scaleId) {
  const scale = scales[scaleId];
  let majorPc = key.pc;
  if (scale.parentOffset !== undefined) majorPc = (key.pc - scale.parentOffset + 12) % 12;
  else if (["naturalMinor", "harmonicMinor", "minorPentatonic"].includes(scaleId))
    majorPc = (key.pc + 3) % 12;
  const parent =
    keys.find((item) => item.pc === majorPc && item.prefer === key.prefer) ||
    keys.find((item) => item.pc === majorPc) ||
    keys[0];
  return { keyName: parent.name, accidentals: keyAccidentals(parent.name) };
}

function noteForScale(key, rootMidi, midi, scaleId, index) {
  const rootOctave = Math.floor(rootMidi / 12) - 1,
    pc = midi % 12,
    scale = scales[scaleId];
  if (!scale.spelling) {
    const octave = Math.floor(midi / 12) - 1,
      name = noteName(pc, key.prefer) + octave;
    return { name, abcToken: abcTokenFor(name, {}) };
  }
  const rootLetter = (key.name.match(/^([A-G])/) || [])[1] || "C",
    rootIndex = "CDEFGAB".indexOf(rootLetter);
  const diatonic = rootIndex + scale.spelling[index],
    letter = "CDEFGAB"[diatonic % 7],
    noteOctave = rootOctave + Math.floor(diatonic / 7);
  let accidental = ((pc - naturalPc[letter] + 6) % 12) - 6;
  if (accidental > 3) accidental -= 12;
  if (accidental < -3) accidental += 12;
  const suffix =
    accidental > 0 ? "♯".repeat(accidental) : accidental < 0 ? "♭".repeat(-accidental) : "";
  const name = letter + suffix + noteOctave,
    signature = signatureFor(key, scaleId).accidentals;
  return { name, abcToken: abcTokenFor(name, signature) };
}

function abcTokenFor(name, signature) {
  const match = name.match(/^([A-G])([♯♭]*)(\d+)$/);
  if (!match) return "C";
  const [, letter, accidental, octaveText] = match,
    octave = Number(octaveText),
    value = accidental.length * (accidental[0] === "♯" ? 1 : -1),
    keyValue = signature[letter] === "♯" ? 1 : signature[letter] === "♭" ? -1 : 0;
  const prefix =
    value === keyValue
      ? ""
      : value === 0 && keyValue !== 0
        ? "="
        : value > 0
          ? "^".repeat(value)
          : "_".repeat(-value);
  let pitch = letter;
  if (octave >= 5) pitch = pitch.toLowerCase() + "'".repeat(Math.max(0, octave - 5));
  else pitch = pitch + ",".repeat(Math.max(0, 4 - octave));
  return prefix + pitch;
}

function makeAbc(notes, key, scaleId, clef = "treble") {
  const signature = signatureFor(key, scaleId),
    abcKey = abcKeyName(signature.keyName);
  const tokens = notes.map((note) => note.abcToken);
  const bars =
    tokens.map((token, index) => `${index > 0 && index % 4 === 0 ? "| " : ""}${token}`).join(" ") +
    " |";
  return `X:1\nL:1/4\nM:4/4\nK:${abcKey} clef=${clef}\n${bars}`;
}

function fingeringInfo(note, instrumentId, instrument) {
  if (instrument.slide) {
    const positions = trombonePositions(note.midi);
    return {
      positions,
      summary: positions.length ? `${t("position")} ${positions.join(" · ")}` : t("outsideRange"),
    };
  }
  const result = fingeringFor(instrumentId, note.midi);
  const mask = typeof result === "object" && result !== null ? result.mask : result;
  const pressedValves = Array.from({ length: instrument.valves }, (_, i) => i + 1).filter(
    (valve) => {
      if (valve === 4 && instrumentId === "horn") return result?.side === "Bb";
      return mask != null && Boolean(mask & (1 << (valve - 1)));
    },
  );
  const fingerValves = pressedValves.filter((valve) => !(valve === 4 && instrumentId === "horn"));
  let summary =
    mask == null
      ? t("outsideRange")
      : fingerValves.length
        ? `${t("pressValves")} ${fingerValves.join(" + ")}`
        : t("allOpen");
  if (instrumentId === "horn" && mask != null)
    summary += ` · ${t(result.side === "Bb" ? "bbSide" : "fSide")}`;
  return { result, mask, pressedValves, summary };
}

function valveDiagram(instrument, instrumentId, info, compact) {
  const diagram = document.createElement("div");
  if (instrument.slide) {
    if (compact) {
      diagram.className = "mini-position";
      diagram.textContent = info.positions.length ? info.positions.join(" · ") : "—";
      return diagram;
    }
    diagram.className = "positions";
    for (let n = 1; n <= 7; n++) {
      const item = document.createElement("span");
      item.className = "position" + (info.positions.includes(n) ? " pressed" : "");
      item.textContent = n;
      diagram.append(item);
    }
    return diagram;
  }
  if (info.mask == null) {
    diagram.className = compact ? "mini-fingering" : "fingering-unavailable";
    diagram.textContent = compact ? "—" : t("outsideRange");
    return diagram;
  }
  diagram.className = compact ? "mini-valves" : "valves";
  for (let valve = 1; valve <= instrument.valves; valve++) {
    const pressed = info.pressedValves.includes(valve),
      item = document.createElement("span");
    item.className = (compact ? "mini-valve" : "valve") + (pressed ? " pressed" : "");
    item.textContent = valve;
    if (!compact)
      item.setAttribute(
        "aria-label",
        `${t("valve")} ${valve}: ${pressed ? t("pressed") : t("open")}`,
      );
    diagram.append(item);
  }
  return diagram;
}

function scaleNoteCard(note, index, instrumentId, instrument) {
  const selected = index === selectedNoteIndex,
    card = document.createElement("button");
  card.type = "button";
  card.className = "scale-note" + (selected ? " selected" : "");
  card.dataset.noteIndex = index;
  if (selected && currentSelectionFromMic) card.classList.add("mic-selected");
  card.setAttribute("aria-pressed", String(selected));
  card.tabIndex = selected ? 0 : -1;
  const info = fingeringInfo(note, instrumentId, instrument),
    name = document.createElement("strong");
  card.setAttribute("aria-label", `${t("noteAria")(note.name, note.degree)} · ${info.summary}`);
  name.className = "scale-note-name";
  name.textContent = note.name;
  card.append(name);
  if (selected) {
    const degree = document.createElement("span");
    degree.className = "scale-note-degree";
    degree.textContent = t("degreeLabel")(note.degree);
    card.append(degree);
  }
  card.append(valveDiagram(instrument, instrumentId, info, !selected));
  if (selected) {
    const detail = document.createElement("span");
    detail.className = "scale-note-detail";
    detail.textContent = info.summary;
    card.append(detail);
    if (document.querySelector("#concertToggle").checked) {
      const concert = document.createElement("span");
      concert.className = "scale-note-concert";
      concert.textContent = `${t("concert")} ${concertName(note.midi, instrument, keys[+keySelect.value])}`;
      card.append(concert);
    }
    if (currentSelectionFromMic) {
      const meter = document.createElement("span");
      meter.className = "card-tuner";
      meter.setAttribute("role", "group");
      meter.setAttribute("aria-label", MIC_MENU_TEXT[currentLanguage].tuner);
      const track = document.createElement("span");
      track.className = "card-tuner-track";
      track.setAttribute("aria-hidden", "true");
      const needle = document.createElement("span");
      needle.className = "card-tuner-needle";
      track.append(needle);
      const cents = document.createElement("output");
      cents.className = "card-tuner-cents";
      meter.append(track, cents);
      card.append(meter);
    }
  }
  card.addEventListener("click", () =>
    showSelectedNote(note, index, { focusList: true, playSound: true }),
  );
  card.addEventListener("keydown", (event) => {
    let next = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = Math.min(index + 1, currentNotes.length - 1);
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = Math.max(index - 1, 0);
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = currentNotes.length - 1;
    else return;
    event.preventDefault();
    showSelectedNote(currentNotes[next], next, {
      focusList: true,
      playSound: true,
    });
  });
  return card;
}

function drawScaleFingerings() {
  const list = document.querySelector("#scaleNoteList"),
    instrumentId = document.querySelector("#instrumentSelect").value;
  const instrument = instruments[instrumentId];
  list.replaceChildren();
  currentNotes.forEach((note, index) =>
    list.append(scaleNoteCard(note, index, instrumentId, instrument)),
  );
  const selected = list.querySelector(`[data-note-index="${selectedNoteIndex}"]`);
  if (selected) {
    if (window.matchMedia("(max-width: 600px)").matches) {
      selected.scrollIntoView({
        block: "nearest",
        inline: "nearest",
        behavior: "smooth",
      });
    } else {
      const targetLeft = selected.offsetLeft - (list.clientWidth - selected.offsetWidth) / 2;
      list.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
    }
  }
}

function showSelectedNote(
  note,
  index,
  { focusList = false, playSound = false, fromMic = false } = {},
) {
  selectedNoteIndex = index;
  currentSelectionFromMic = fromMic;
  if (playSound) playNoteTone(note);
  document
    .querySelectorAll("#scorePaper .note-marker-highlight")
    .forEach((element) => element.remove());
  document
    .querySelectorAll("#scorePaper .abcjs-note.note-selected")
    .forEach((element) => element.classList.remove("note-selected"));
  const scoreNotes = [...document.querySelectorAll("#scorePaper .abcjs-note")].filter(
    (element) => !element.parentElement?.closest(".abcjs-note"),
  );
  const selected = scoreNotes[index];
  if (selected) {
    selected.classList.add("note-selected");
    const head = selected.querySelector(".abcjs-notehead");
    if (head) {
      const box = head.getBBox(),
        marker = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      marker.setAttribute("class", "note-marker-highlight" + (fromMic ? " mic-selected" : ""));
      marker.setAttribute("x", box.x - 5);
      marker.setAttribute("y", box.y - 3);
      marker.setAttribute("width", box.width + 10);
      marker.setAttribute("height", box.height + 6);
      marker.setAttribute("rx", "3");
      marker.setAttribute("pointer-events", "none");
      head.parentNode.insertBefore(marker, head);
    }
  }
  drawScaleFingerings();
  if (fromMic) updateTuner(micDeviationCents);
  if (focusList)
    document
      .querySelector("#scaleNoteList")
      .querySelector(`[data-note-index="${index}"]`)
      ?.focus({ preventScroll: true });
}

function selectScoreNote(abcElement, tuneNumber, classes, analysis) {
  const pitch = abcElement?.midiPitches?.[0]?.pitch;
  const note = currentNotes.find((item) => item.midi === pitch);
  if (note) {
    showSelectedNote(note, currentNotes.indexOf(note), { playSound: true });
    return;
  }
  const selectable = analysis?.selectableElement;
  const scoreNotes = [...document.querySelectorAll("#scorePaper .abcjs-note")];
  const index = selectable ? scoreNotes.indexOf(selectable) : -1;
  if (index >= 0 && currentNotes[index])
    showSelectedNote(currentNotes[index], index, { playSound: true });
}

function bindScoreNoteControls() {
  const score = document.querySelector("#scorePaper");
  const scoreNotes = [...score.querySelectorAll(".abcjs-note")].filter(
    (element) => !element.parentElement?.closest(".abcjs-note"),
  );
  scoreNotes.forEach((element, index) => {
    if (!currentNotes[index]) return;
    const note = currentNotes[index];
    element.setAttribute("tabindex", "0");
    element.setAttribute("role", "button");
    element.setAttribute("aria-label", t("noteAria")(note.name, note.degree));
    element.style.cursor = "pointer";
    element.style.pointerEvents = "all";
    element.style.touchAction = "manipulation";
    element.addEventListener("click", () => showSelectedNote(note, index, { playSound: true }));
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showSelectedNote(note, index, { playSound: true });
      }
    });
  });
}

function render() {
  const instrument = instruments[document.querySelector("#instrumentSelect").value];
  const key = keys[+keySelect.value],
    writtenKey = transposeKey(key, instrument.writtenOffset),
    scaleId = document.querySelector("#scaleSelect").value,
    scale = scales[scaleId];
  const octave = +document.querySelector("#octaveSelect").value,
    showConcert = document.querySelector("#concertToggle").checked;
  const concertRootMidi = key.pc + (octave + 1) * 12,
    rootMidi = concertRootMidi + instrument.writtenOffset;
  const scaleTitle = UI_TEXT[currentLanguage].scales[scaleId];
  const keyScaleTitle =
    currentLanguage === "en" ? `${key.name} ${scaleTitle}` : `${key.name}${scaleTitle}`;
  document.querySelector("#resultTitle").textContent = `${keyScaleTitle} · ${instrument.label}`;
  const fingeringHint = instrument.slide ? t("selectNoteSlide") : t("selectNoteValve");
  const clefName = instrument.clef === "bass" ? t("bassClef") : t("trebleClef");
  document.querySelector("#pitchHint").textContent =
    `${t("writtenKey")}: ${writtenKey.name} · ${clefName}${showConcert ? ` · ${t("concertShown")}` : ""} · ${fingeringHint}`;
  currentNotes = scale.steps.map((step, index) => {
    const midi = rootMidi + step;
    const spelling = noteForScale(writtenKey, rootMidi, midi, scaleId, index);
    return {
      midi,
      name: spelling.name,
      abcToken: spelling.abcToken,
      concert: concertName(midi, instrument, key),
      degree: scale.degrees[index],
    };
  });
  const abc = makeAbc(currentNotes, writtenKey, scaleId, instrument.clef);
  if (window.ABCJS?.renderAbc) {
    ABCJS.renderAbc("scorePaper", abc, {
      responsive: "resize",
      staffwidth: Math.max(
        360,
        Math.floor(document.querySelector("#scorePaper").clientWidth || 700),
      ),
      add_classes: true,
      wrap: { preferredMeasuresPerLine: 2, minSpacing: 1.35, maxSpacing: 2.4 },
      foregroundColor: "#111",
      selectionColor: "#111",
      clickListener: selectScoreNote,
    });
    bindScoreNoteControls();
  } else {
    document.querySelector("#scorePaper").textContent = t("notationError");
  }
  if (showConcert) {
    document.querySelectorAll("#scorePaper svg").forEach((svg) => {
      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = `${instrument.label} · ${t("titleConcertPitches")}: ${currentNotes.map((note) => note.concert).join(", ")}`;
      svg.prepend(title);
    });
  }
  showSelectedNote(currentNotes[0], 0);
}

try {
  const savedLength = localStorage.getItem("brassFingeringSoundLength");
  const savedTimbre = localStorage.getItem("brassFingeringSoundTimbre");
  if (
    [...document.querySelector("#soundLengthSelect").options].some(
      (option) => option.value === savedLength,
    )
  )
    document.querySelector("#soundLengthSelect").value = savedLength;
  if (
    [...document.querySelector("#soundTimbreSelect").options].some(
      (option) => option.value === savedTimbre,
    )
  )
    document.querySelector("#soundTimbreSelect").value = savedTimbre;
} catch { }

applyLanguage();

[
  document.querySelector("#instrumentSelect"),
  keySelect,
  document.querySelector("#scaleSelect"),
  document.querySelector("#octaveSelect"),
].forEach((control) => control.addEventListener("change", render));

document.querySelector("#concertToggle").addEventListener("change", () => {
  const previousIndex = selectedNoteIndex;
  render();
  const index = Math.min(previousIndex, currentNotes.length - 1);
  showSelectedNote(currentNotes[index], index);
});

document.querySelector("#soundLengthSelect").addEventListener("change", (event) => {
  try {
    localStorage.setItem("brassFingeringSoundLength", event.target.value);
  } catch {}
});

document.querySelector("#soundTimbreSelect").addEventListener("change", (event) => {
  try {
    localStorage.setItem("brassFingeringSoundTimbre", event.target.value);
  } catch {}
});

document.querySelector("#soundSettingsToggle").addEventListener("click", () => {
  const panel = document.querySelector("#soundSettingsPanel"),
    button = document.querySelector("#soundSettingsToggle");
  panel.hidden = !panel.hidden;
  button.setAttribute("aria-expanded", String(!panel.hidden));
});

document.querySelector("#micToggle").addEventListener("click", () => {
  document.querySelector("#micStatus").hidden = true;
  if (micStream) {
    stopMicMonitoring();
    return;
  }
  startMicMonitoring();
});

window.addEventListener("pagehide", stopMicMonitoring);

document.querySelectorAll("[data-language]").forEach((button) =>
  button.addEventListener("click", () => {
    const previousIndex = selectedNoteIndex;
    currentLanguage = UI_TEXT[button.dataset.language] ? button.dataset.language : "zh";
    try {
      localStorage.setItem("brassFingeringLanguage", currentLanguage);
    } catch {}
    applyLanguage();
    render();
    const index = Math.min(previousIndex, currentNotes.length - 1);
    showSelectedNote(currentNotes[index], index);
    document.querySelector("#languageChoices").classList.remove("open");
    document.querySelector("#languageChoices").hidden = true;
    document.querySelector("#languageToggle").setAttribute("aria-expanded", "false");
  }),
);

document.querySelector("#languageToggle").addEventListener("click", () => {
  const choices = document.querySelector("#languageChoices"),
    toggle = document.querySelector("#languageToggle");
  const opening = choices.hidden;
  if (opening) {
    choices.hidden = false;
    requestAnimationFrame(() => choices.classList.add("open"));
  } else choices.classList.remove("open");
  toggle.setAttribute("aria-expanded", String(opening));
  if (!opening)
    setTimeout(() => {
      choices.hidden = true;
    }, 170);
});

document.addEventListener("pointerdown", (event) => {
  const nav = document.querySelector("#languageOptions"),
    choices = document.querySelector("#languageChoices");
  if (!choices.hidden && !nav.contains(event.target)) {
    choices.classList.remove("open");
    choices.hidden = true;
    document.querySelector("#languageToggle").setAttribute("aria-expanded", "false");
  }
  const soundMenu = document.querySelector("#soundSettings");
  if (!soundMenu.contains(event.target)) {
    document.querySelector("#soundSettingsPanel").hidden = true;
    document.querySelector("#soundSettingsToggle").setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) {
    const target = event.target;
    if (
      !target.closest(
        'select,input,textarea,[contenteditable="true"],#languageOptions,#pitchTools,#headerTools,.scale-note',
      )
    ) {
      event.preventDefault();
      const forward = event.key === "ArrowRight" || event.key === "ArrowDown";
      const next = Math.max(
        0,
        Math.min(currentNotes.length - 1, selectedNoteIndex + (forward ? 1 : -1)),
      );
      if (currentNotes[next])
        showSelectedNote(currentNotes[next], next, {
          focusList: true,
          playSound: true,
        });
      return;
    }
  }
  if (event.key === "Escape") {
    const soundPanel = document.querySelector("#soundSettingsPanel");
    if (!soundPanel.hidden) {
      soundPanel.hidden = true;
      document.querySelector("#soundSettingsToggle").setAttribute("aria-expanded", "false");
      document.querySelector("#soundSettingsToggle").focus();
    }
    const choices = document.querySelector("#languageChoices");
    if (!choices.hidden) {
      choices.classList.remove("open");
      choices.hidden = true;
      document.querySelector("#languageToggle").setAttribute("aria-expanded", "false");
      document.querySelector("#languageToggle").focus();
    }
  }
});

render();
