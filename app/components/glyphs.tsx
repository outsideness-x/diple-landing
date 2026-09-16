/** Line glyphs, drawn at 1.5px on a 24 grid so they sit at the weight of the app's own icons. */

type GlyphProps = { size?: number };

function Frame({ size = 18, children }: GlyphProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function GitHubGlyph({ size = 18 }: GlyphProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

export function ArrowGlyph({ size = 16 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Frame>
  );
}

export function ArrowUpRightGlyph({ size = 15 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M7 17 17 7M8 7h9v9" />
    </Frame>
  );
}

export function SearchGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <circle cx="11" cy="11" r="6" />
      <path d="m20 20-3.5-3.5" />
    </Frame>
  );
}

export function PenGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M4 20h4L19.5 8.5a2.12 2.12 0 0 0-3-3L5 17v3Z" />
      <path d="M14.5 6.5l3 3" />
    </Frame>
  );
}

export function PageGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h4" />
    </Frame>
  );
}

export function ShelfGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M5 4h3v16H5zM10.5 4h3v16h-3zM16.2 5.2l2.9.8-3.6 14-2.9-.8z" />
    </Frame>
  );
}

export function QuoteGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M9 7c-2.5 1-4 3-4 6h4v5H4v-5M20 7c-2.5 1-4 3-4 6h4v5h-5v-5" />
    </Frame>
  );
}

export function BoxGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <path d="m8.5 12 2.5 2.5L16 9.5" />
    </Frame>
  );
}

export function SunGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M3 12h2M19 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </Frame>
  );
}

export function InboxGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M4 13V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M4 13h4l1.5 3h5L16 13h4M4 13v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
    </Frame>
  );
}

export function LinkGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 0-5.7-5.7l-1.2 1.2" />
      <path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.3 2.3a4 4 0 0 0 5.7 5.7l1.2-1.2" />
    </Frame>
  );
}

export function TrashGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13M11 11v6M14 11v6" />
    </Frame>
  );
}

export function ImportGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M12 4v11M8 11l4 4 4-4M5 20h14" />
    </Frame>
  );
}

export function CloudGlyph({ size = 18 }: GlyphProps) {
  return (
    <Frame size={size}>
      <path d="M7.5 18a4 4 0 0 1-.4-8A5.5 5.5 0 0 1 18 10.5a3.75 3.75 0 0 1-.5 7.5z" />
    </Frame>
  );
}

export function HeartGlyph({ size = 17 }: GlyphProps) {
  // Asymmetric on purpose — the app's own colophon draws it by hand rather than reaching for a
  // symbol, and a perfectly geometric heart reads as a control.
  return (
    <svg width={size} height={size * 0.88} viewBox="0 0 17 15" fill="currentColor" aria-hidden="true">
      <path d="M8.4 14.3C6.2 12.5 1 9.1 1 5.3 1 3 2.6 1.2 4.8 1.2c1.5 0 2.8.8 3.5 2.1.6-1.4 2-2.4 3.6-2.3 2.2.1 3.7 2 3.6 4.3-.2 3.5-4.2 6.4-7.1 9z" />
    </svg>
  );
}
