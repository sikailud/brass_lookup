/*
 * Common fingering references for the instruments supported by this app.
 * Valve masks use bit 0 = valve 1, bit 1 = valve 2, etc.
 * These are practical chart fingerings; brass players may use alternatives
 * for intonation, response, and instrument-specific setup.
 */
const FINGERING_DATA = {
  valves: {
    // Written pitch, standard 3-valve chart; repeats by octave.
    trumpet: {
      range: [54, 84],
      pitchClass: [0, 7, 5, 6, 3, 1, 2, 0, 6, 3, 1, 2],
    },
    flugelhorn: {
      range: [54, 84],
      pitchClass: [0, 7, 5, 6, 3, 1, 2, 0, 6, 3, 1, 2],
    },
    // Written-pitch chart for a double horn. 4th valve selects the B♭ side.
    horn: {
      range: [48, 84],
      byMidi: {
        // Written C3–B3.
        48: { mask: 0, side: "F" },
        49: { mask: 7, side: "F" },
        50: { mask: 5, side: "F" },
        51: { mask: 6, side: "F" },
        52: { mask: 3, side: "F" },
        53: { mask: 1, side: "F" },
        54: { mask: 3, side: "F" },
        55: { mask: 0, side: "F" },
        56: { mask: 6, side: "F" },
        57: { mask: 3, side: "F" },
        58: { mask: 1, side: "F" },
        59: { mask: 7, side: "Bb" },
        // Written C4–B4.
        60: { mask: 0, side: "F" },
        61: { mask: 7, side: "F" },
        62: { mask: 5, side: "F" },
        63: { mask: 6, side: "F" },
        64: { mask: 3, side: "F" },
        65: { mask: 1, side: "F" },
        66: { mask: 6, side: "F" },
        67: { mask: 0, side: "F" },
        68: { mask: 6, side: "F" },
        69: { mask: 3, side: "Bb" },
        70: { mask: 1, side: "Bb" },
        71: { mask: 6, side: "Bb" },
        // Written C5–C6, using the B♭ side of the double horn.
        72: { mask: 0, side: "Bb" },
        73: { mask: 3, side: "Bb" },
        74: { mask: 1, side: "Bb" },
        75: { mask: 6, side: "Bb" },
        76: { mask: 3, side: "Bb" },
        77: { mask: 0, side: "Bb" },
        78: { mask: 2, side: "Bb" },
        79: { mask: 0, side: "Bb" },
        80: { mask: 6, side: "Bb" },
        81: { mask: 3, side: "Bb" },
        82: { mask: 1, side: "Bb" },
        83: { mask: 2, side: "Bb" },
        84: { mask: 0, side: "Bb" },
      },
    },
    // C euphonium and C tuba use a standard 4-valve chart. The fourth valve
    // substitutes for 1+3 (and 2+4 for 1+2+3) to improve low-register tuning.
    euphonium: {
      range: [40, 84],
      pitchClass: [0, 7, 5, 6, 3, 1, 2, 0, 6, 3, 1, 2],
      fourValve: true,
    },
    euphoniumBb: {
      range: [50, 84],
      pitchClass: [0, 7, 5, 6, 3, 1, 2, 0, 6, 3, 1, 2],
      fourValve: true,
    },
    tuba: {
      range: [48, 77],
      pitchClass: [0, 7, 5, 6, 3, 1, 2, 0, 6, 3, 1, 2],
      fourValve: true,
    },
  },
  // Common tenor trombone positions by written/concert MIDI pitch. Where
  // several positions appear in standard harmonic-series charts, all are kept.
  trombonePositions: {
    // E2–B2.
    40: [7],
    41: [6],
    42: [5],
    43: [4],
    44: [3],
    45: [2],
    46: [1],
    47: [7],
    // C3–B3.
    48: [6],
    49: [5],
    50: [4],
    51: [3],
    52: [2],
    53: [1, 6],
    54: [5],
    55: [4],
    56: [3, 7],
    57: [2, 6],
    58: [1, 5],
    59: [4, 7],
    // C4–B4.
    60: [3, 6],
    61: [2, 5],
    62: [1, 4, 7],
    63: [3, 6],
    64: [2, 5, 7],
    65: [1, 4, 6],
    66: [3, 5],
    67: [2, 4],
    68: [1, 3, 7],
    69: [2, 6],
    70: [1, 5],
    71: [4, 7],
    // C5–Bb5.
    72: [3, 6],
    73: [2, 5],
    74: [1, 4, 7],
    75: [3, 6],
    76: [2, 5, 7],
    77: [1, 4, 6],
    78: [3, 5],
    79: [2, 4],
    80: [1, 3, 7],
    81: [2, 6],
    82: [1, 5],
  },
};

function fingeringFor(instrumentId, midi) {
  const chart = FINGERING_DATA.valves[instrumentId];
  if (!chart || midi < chart.range[0] || midi > chart.range[1]) return null;
  if (instrumentId === "horn") return chart.byMidi[midi] || null;
  let mask = chart.pitchClass[((midi % 12) + 12) % 12];
  if (chart.fourValve) {
    if (mask === 5) mask = 8;
    else if (mask === 7) mask = 10;
  }
  return mask;
}

function trombonePositions(midi) {
  return FINGERING_DATA.trombonePositions[midi] || [];
}
