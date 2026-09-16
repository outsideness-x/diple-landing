"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useStillness } from "./useStillness";
import { PageGlyph, PenGlyph, QuoteGlyph, SearchGlyph, ShelfGlyph, SunGlyph, InboxGlyph, BoxGlyph } from "./glyphs";

type Room = "reading" | "notes";

const ROOMS: Record<
  Room,
  {
    label: string;
    screen: string;
    alt: string;
    places: { icon: React.ReactNode; name: string }[];
    verb: { icon: React.ReactNode; name: string };
    note: string;
  }
> = {
  reading: {
    label: "Reading",
    screen: "/shots/highlights.webp",
    alt: "The Highlights place in diple, with saved passages from Frankenstein and Dracula",
    places: [
      { icon: <PageGlyph size={15} />, name: "Home" },
      { icon: <ShelfGlyph size={15} />, name: "Library" },
      { icon: <QuoteGlyph size={15} />, name: "Highlights" },
    ],
    verb: { icon: <SearchGlyph size={14} />, name: "Search" },
    note: "Books, PDFs and saved articles — and everything you marked in them.",
  },
  notes: {
    label: "Notes",
    screen: "/shots/desk.webp",
    alt: "The Notes desk in diple, with Inbox, Today, Tasks, pinned notes and spaces",
    places: [
      { icon: <InboxGlyph size={15} />, name: "Inbox" },
      { icon: <SunGlyph size={15} />, name: "Today" },
      { icon: <BoxGlyph size={15} />, name: "Tasks" },
    ],
    verb: { icon: <PenGlyph size={14} />, name: "Write" },
    note: "A page that doesn't have to be about a book — unless you want it to be.",
  },
};

/**
 * The app's main gesture, on a page.
 *
 * The circle in the corner shows the room it leads *to*, the places pill collapses by width
 * rather than by inset, and the verb on the right changes with the room: in Reading you search,
 * in Notes you write. It cycles on its own until somebody takes it over.
 */
export function Rooms() {
  const [room, setRoom] = useState<Room>("reading");
  const [taken, setTaken] = useState(false);
  const holder = useRef<HTMLDivElement>(null);
  const still = useStillness();

  useEffect(() => {
    if (taken || still) return;
    const timer = window.setInterval(() => {
      setRoom((current) => (current === "reading" ? "notes" : "reading"));
    }, 5200);
    return () => window.clearInterval(timer);
  }, [taken, still]);

  const cross = (next: Room) => {
    setTaken(true);
    setRoom(next);
  };

  const other = room === "reading" ? "notes" : "reading";

  return (
    <div className="rooms" ref={holder} data-room={room}>
      <div className="rooms-stage">
        <div className="phone phone-lg">
          <div className="phone-screen">
            {(Object.keys(ROOMS) as Room[]).map((key) => (
              <Image
                key={key}
                src={ROOMS[key].screen}
                alt={ROOMS[key].alt}
                width={880}
                height={1912}
                sizes="(max-width: 760px) 74vw, 360px"
                quality={90}
                className="phone-plate"
                data-shown={room === key}
              />
            ))}
          </div>
        </div>

        {/* The app's own bar: a circle for the room, three places, one verb. */}
        <div className="bar" role="group" aria-label="Room switch">
          <button
            type="button"
            className="bar-circle"
            onClick={() => cross(other)}
            aria-label={`Switch to ${ROOMS[other].label}`}
          >
            {other === "notes" ? <ShelfGlyph size={18} /> : <PageGlyph size={18} />}
          </button>

          <div className="bar-pill" aria-hidden={room === "notes"}>
            {ROOMS.reading.places.map((place, index) => (
              <span key={place.name} className="bar-place" data-active={index === 2}>
                {place.icon}
              </span>
            ))}
          </div>

          <button type="button" className="bar-circle bar-verb" onClick={() => cross(other)} aria-hidden="true" tabIndex={-1}>
            {room === "reading" ? <SearchGlyph size={18} /> : <PenGlyph size={18} />}
          </button>
        </div>
      </div>

      <div className="rooms-copy">
        {(Object.keys(ROOMS) as Room[]).map((key) => (
          <button
            type="button"
            key={key}
            className="room-card"
            data-active={room === key}
            onClick={() => cross(key)}
          >
            <span className="room-card-head">
              <span className="room-card-name">{ROOMS[key].label}</span>
              <span className="room-card-dot" aria-hidden="true" />
            </span>
            <span className="room-card-places">
              {ROOMS[key].places.map((place) => (
                <span key={place.name}>
                  {place.icon}
                  {place.name}
                </span>
              ))}
            </span>
            <span className="room-card-note">{ROOMS[key].note}</span>
            <span className="room-card-verb">
              {ROOMS[key].verb.icon}
              {ROOMS[key].verb.name} — the verb on the right of the bar
            </span>
          </button>
        ))}
        <p className="small rooms-hint">
          Tap the circle in the corner of the bar to cross. The room you were last in is the room
          the app opens in — remembered per device, not synced over your other one.
        </p>
      </div>
    </div>
  );
}
