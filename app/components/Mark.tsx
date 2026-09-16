import { MARK } from "./mark-data";

type MarkProps = {
  /** Unique within the document: the pen mask is referenced by id. */
  id: string;
  /** `write` animates the pen once the element is revealed; `still` prints the finished mark. */
  motion?: "write" | "still";
  className?: string;
};

/**
 * `>d.` — the icon, written rather than drawn.
 *
 * The strokes only uncover the outline: a stroked centre line would be a rounder mark than the
 * face's own, and the whole point of the icon is that it is a name in somebody's hand.
 */
export function Mark({ id, motion = "still", className }: MarkProps) {
  const maskId = `${id}-pen`;
  const [x, y, width, height] = MARK.viewBox.split(" ").map(Number);
  // The pen is wider than the ink, so the mask has to reach past the glyphs on every side.
  const bleed = MARK.penWidth;

  return (
    <svg
      className={["mark", motion === "write" ? "mark-write" : "", className]
        .filter(Boolean)
        .join(" ")}
      viewBox={MARK.viewBox}
      role="img"
      aria-label="diple"
      style={{ "--mark-ratio": MARK.ratio } as React.CSSProperties}
    >
      {motion === "write" ? (
        <defs>
          <mask
            id={maskId}
            maskUnits="userSpaceOnUse"
            x={x - bleed}
            y={y - bleed}
            width={width + bleed * 2}
            height={height + bleed * 2}
          >
            {MARK.strokes.map((stroke, index) => (
              <path
                key={index}
                className="mark-stroke"
                d={stroke.d}
                pathLength={1}
                fill="none"
                stroke="#fff"
                strokeWidth={MARK.penWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={
                  {
                    "--start": `${stroke.start}s`,
                    "--pace": `${stroke.duration}s`,
                  } as React.CSSProperties
                }
              />
            ))}
            {MARK.dots.map((dot, index) => (
              <circle
                key={`dot-${index}`}
                className="mark-dot"
                cx={dot.cx}
                cy={dot.cy}
                r={MARK.dotReach}
                fill="#fff"
                style={
                  {
                    "--start": `${dot.start}s`,
                    "--pace": `${dot.duration}s`,
                  } as React.CSSProperties
                }
              />
            ))}
          </mask>
        </defs>
      ) : null}
      <path d={MARK.ink} fill="currentColor" mask={motion === "write" ? `url(#${maskId})` : undefined} />
    </svg>
  );
}
