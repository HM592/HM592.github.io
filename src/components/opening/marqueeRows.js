// Builds the rows of blurred "rival application" cards that scroll behind
// the clipboard. Matches the reference design's makeRows() with the
// default pileDensity of 3 (see design_handoff_cv_website/README.md).
const PILE_DENSITY = 3
const ROW_COUNT = Math.max(3, Math.min(7, Math.round(3 + PILE_DENSITY * 0.4)))
const CARD_WIDTH = 168
const CARD_HEIGHT = 104
const GAP = 38
const CARDS_PER_COPY = 8
const DURATION_S = 40

function buildRow(rowIndex) {
  const top = ROW_COUNT > 1 ? 4 + rowIndex * (90 / (ROW_COUNT - 1)) : 44
  const cardCount = CARDS_PER_COPY * 2 // two copies back-to-back for a seamless loop
  return {
    top: `${top}%`,
    trackStyle: {
      display: 'flex',
      gap: `${GAP}px`,
      width: 'max-content',
      animation: `marquee ${DURATION_S}s linear infinite`,
    },
    cards: Array.from({ length: cardCount }, (_, i) => i),
  }
}

export const MARQUEE_ROWS = Array.from({ length: ROW_COUNT }, (_, r) => buildRow(r))
export const CARD_STYLE = { width: CARD_WIDTH, height: CARD_HEIGHT }
