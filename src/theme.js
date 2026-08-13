export const C = {
  ink: "#0A1B33",
  ink2: "#0F2545",
  navy: "#123057",
  teal: "#16B8A6",
  tealDeep: "#0E9184",
  gold: "#F0A83C",
  goldDeep: "#D98F27",
  violet: "#8B7CF0",
  cyan: "#4FD8E4",
  paper: "#E0E8F2",
  paperDim: "#D1D9E5",
  text: "#101826",
  muted: "#5B6472",
  mutedOnDark: "#AEB9CC",
  white: "#F4F7FB",
};

export function hexToRgba(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export const TONES = [
  "teal",
  "gold",
  "violet",
  "cyan",
  "mint",
  "amber",
  "iris",
  "ocean",
  "rose",
  "sky",
  "lime",
  "sunset",
  "peach",
  "aqua",
  "coral",
];

export const TONE_GRADIENTS = {
  teal: [C.teal, C.cyan],
  gold: [C.gold, C.goldDeep],
  violet: [C.violet, C.teal],
  cyan: [C.cyan, C.violet],
  mint: ["#7AE7C8", "#16B8A6"],
  amber: ["#F8C75C", C.gold],
  iris: ["#B4A0FF", C.violet],
  ocean: ["#5AC8FA", C.cyan],
  rose: ["#FF8AAE", "#8B7CF0"],
  sky: ["#7DD3FC", "#5AC8FA"],
  lime: ["#A5E56A", "#16B8A6"],
  sunset: ["#FFB067", C.gold],
  peach: ["#FFB799", "#F0A83C"],
  aqua: ["#7AE7DB", C.cyan],
  coral: ["#FF8F70", "#F0A83C"],
};

export const toneAt = (i, perRow = 4) => TONES[(i + Math.floor(i / perRow)) % TONES.length];
