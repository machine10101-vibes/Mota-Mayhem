const KEY = 'mm-sound-v1';
let context = null;
let master = null;

export function soundEnabled() {
  try { return localStorage.getItem(KEY) !== 'off'; } catch { return true; }
}

export function setSoundEnabled(enabled) {
  try { localStorage.setItem(KEY, enabled ? 'on' : 'off'); } catch { /* preference is optional */ }
  return !!enabled;
}

function audio() {
  if (typeof window === 'undefined' || !window.AudioContext) return null;
  if (!context) {
    context = new window.AudioContext();
    master = context.createGain();
    master.gain.value = 0.16;
    master.connect(context.destination);
  }
  if (context.state === 'suspended') context.resume().catch(() => {});
  return context;
}

function tone({ frequency, endFrequency = frequency, duration = 0.12, wave = 'sine', volume = 0.6, delay = 0 }) {
  const ctx = audio();
  if (!ctx || !master) return;
  const start = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = wave;
  osc.frequency.setValueAtTime(Math.max(35, frequency), start);
  osc.frequency.exponentialRampToValueAtTime(Math.max(35, endFrequency), start + duration);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0002, volume), start + Math.min(0.018, duration * 0.2));
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(master);
  osc.start(start);
  osc.stop(start + duration + 0.015);
}

const CUES = {
  plant: [{ frequency: 420, endFrequency: 620, duration: 0.09, wave: 'triangle' }, { frequency: 680, endFrequency: 840, duration: 0.07, delay: 0.07, volume: 0.42 }],
  water: [{ frequency: 720, endFrequency: 360, duration: 0.2, volume: 0.38 }, { frequency: 510, endFrequency: 300, duration: 0.16, wave: 'triangle', delay: 0.06, volume: 0.25 }],
  harvest: [{ frequency: 520, endFrequency: 760, duration: 0.13, wave: 'triangle' }, { frequency: 780, endFrequency: 1040, duration: 0.17, delay: 0.1 }],
  success: [{ frequency: 620, duration: 0.1 }, { frequency: 780, duration: 0.12, delay: 0.09 }, { frequency: 980, duration: 0.18, delay: 0.19 }],
  unlock: [{ frequency: 380, endFrequency: 520, duration: 0.13, wave: 'triangle' }, { frequency: 520, endFrequency: 820, duration: 0.18, wave: 'triangle', delay: 0.12 }],
  ui: [{ frequency: 420, endFrequency: 470, duration: 0.045, volume: 0.25 }],
  error: [{ frequency: 220, endFrequency: 160, duration: 0.13, wave: 'square', volume: 0.22 }],
};

export function playSfx(name) {
  if (!soundEnabled() || !CUES[name] || !audio()) return false;
  for (const note of CUES[name]) tone(note);
  return true;
}
