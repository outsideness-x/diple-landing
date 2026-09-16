import Image from "next/image";

type PhoneProps = {
  src: string;
  alt: string;
  /** Rendered width of the glass, in CSS pixels, for the sizes hint. */
  sizes?: string;
  preload?: boolean;
  className?: string;
};

/**
 * A phone, built rather than photographed: an edge with a light on it, a black bezel, and the
 * capture inside. The screenshots already carry the island and the status bar.
 */
export function Phone({ src, alt, sizes = "(max-width: 760px) 74vw, 380px", preload, className }: PhoneProps) {
  return (
    <div className={["phone", className].filter(Boolean).join(" ")}>
      <div className="phone-screen">
        <Image
          src={src}
          alt={alt}
          width={880}
          height={1912}
          sizes={sizes}
          preload={preload}
          loading={preload ? "eager" : undefined}
          quality={90}
        />
      </div>
    </div>
  );
}

type WindowProps = {
  src: string;
  alt: string;
  sizes?: string;
  preload?: boolean;
  className?: string;
};

/** The Mac, with the three lights the capture does not include. */
export function MacWindow({ src, alt, sizes = "(max-width: 1100px) 92vw, 1100px", preload, className }: WindowProps) {
  return (
    <div className={["mac", className].filter(Boolean).join(" ")}>
      <span className="mac-lights" aria-hidden="true">
        <i style={{ background: "#FF5F57" }} />
        <i style={{ background: "#FEBC2E" }} />
        <i style={{ background: "#28C840" }} />
      </span>
      <Image
        src={src}
        alt={alt}
        width={2400}
        height={1500}
        sizes={sizes}
        preload={preload}
        loading={preload ? "eager" : undefined}
        fetchPriority={preload ? "high" : undefined}
        quality={90}
      />
    </div>
  );
}
