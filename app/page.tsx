import Link from "next/link";
import { appStoreLink, site } from "./site";
import { Mark } from "./components/Mark";
import { Masthead } from "./components/Masthead";
import { Footer } from "./components/Footer";
import { MacWindow, Phone } from "./components/Devices";
import { Rooms } from "./components/Rooms";
import { ReaderDemo } from "./components/ReaderDemo";
import { NoteDemo } from "./components/NoteDemo";
import { HighlightsDemo } from "./components/HighlightsDemo";
import { MacTour } from "./components/MacTour";
import { AccentPicker } from "./components/AccentPicker";
import {
  ArrowGlyph,
  ArrowUpRightGlyph,
  BoxGlyph,
  CloudGlyph,
  GitHubGlyph,
  ImportGlyph,
  InboxGlyph,
  LinkGlyph,
  PenGlyph,
  QuoteGlyph,
  SunGlyph,
  TrashGlyph,
} from "./components/glyphs";
import "./landing.css";

const FORMATS = ["EPUB", "PDF", "Web articles", "Markdown", "Kindle & Readwise", "iCloud, yours"];

const DESK = [
  {
    icon: <SunGlyph />,
    title: "A page for today",
    copy: "Today opens on a dated page and keeps the ones before it in a journal. Start it from the Home Screen, a widget, Control Center or Shortcuts.",
  },
  {
    icon: <BoxGlyph />,
    title: "Every open box, in one list",
    copy: "Tasks gathers the unticked boxes from every note. Tick one there and it is ticked in the note it was written in.",
  },
  {
    icon: <InboxGlyph />,
    title: "Places you name yourself",
    copy: "Inbox for whatever arrives, spaces of your own for what stays, pinned notes at the top of the list.",
  },
  {
    icon: <LinkGlyph />,
    title: "Part of a larger thought",
    copy: "[[Links]] connect notes both ways, #tags gather them, and a note started inside a book keeps the book beside it.",
  },
  {
    icon: <QuoteGlyph />,
    title: "From passage to page",
    copy: "Expand a passage into a note, or collect a dozen of them into one. The source comes with them.",
  },
  {
    icon: <TrashGlyph />,
    title: "A deletion that waits",
    copy: "Recently deleted holds a note for 30 days, so getting rid of one costs a tap rather than a decision.",
  },
];

const LEDGER = [
  { value: "0", label: "accounts", note: "Nothing to sign up for, nothing to sign in to." },
  { value: "0", label: "trackers", note: "No analytics, no crash SDK, no advertising identifiers." },
  { value: "0", label: "servers", note: "The developer runs no backend. There is no database of you." },
  { value: "100%", label: "open source", note: "MIT licensed, so the claims above can be read." },
  { value: "$0", label: "forever", note: "No subscription, no paid tier, no in-app purchases." },
];

export default function Home() {
  return (
    <>
      <Masthead />

      <main id="top">
        {/* ───────────────────────────  Hero  ─────────────────────────── */}
        <section className="hero">
          <div className="wrap hero-inner">
            <div className="hero-copy" data-reveal>
              <Mark id="hero-mark" motion="write" className="hero-mark" />

              <a className="pill" href="#write">
                <b>New in 1.1</b>
                <span>Notes — a second room</span>
                <ArrowGlyph size={14} />
              </a>

              <h1 className="display hero-title">
                Read in one room.
                <br />
                Write in the other.
              </h1>

              <p className="lede hero-lede">
                diple is a reader and a notebook in one app. EPUB, PDF and saved articles on one
                side; your notes, journal and tasks on the other. No account, no ads, nothing to
                subscribe to.
              </p>

              <div className="hero-actions">
                <a className="btn btn-primary" {...appStoreLink}>
                  Download on the App Store
                </a>
                <a className="btn btn-ghost" href={site.sourceUrl} target="_blank" rel="noreferrer">
                  <GitHubGlyph size={16} /> Read the source
                </a>
              </div>

              <p className="hero-meta small">
                iPhone · iPad · Mac — free and open source, with optional sync through your own
                iCloud.
              </p>
            </div>

          </div>

          <div className="hero-stage" data-reveal>
            <MacWindow
              src="/shots/mac-notes.webp"
              alt="diple on macOS: spaces, the note list and the page open side by side"
              sizes="(max-width: 1100px) 94vw, 1060px"
              preload
              className="hero-mac"
            />
            <Phone
              src="/shots/reader-chrome.webp"
              alt="diple on iPhone, open at Chapter X of Frankenstein with the reader controls showing"
              sizes="(max-width: 900px) 42vw, 280px"
              className="hero-phone"
            />
          </div>

          <ul className="formats" aria-label="What diple reads">
            {FORMATS.map((format) => (
              <li key={format}>{format}</li>
            ))}
          </ul>
        </section>

        {/* ───────────────────────────  Two rooms  ─────────────────────────── */}
        <section className="section" id="rooms">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <p className="kicker">One app, two rooms</p>
              <h2 className="display">One circle apart.</h2>
              <p className="lede">
                Reading is where you read and keep what the text gives you. Notes is where you
                think, write and get things done. The bar keeps three places and one verb, and the
                verb changes with the room: in Reading you search, in Notes you write.
              </p>
            </div>

            <div data-reveal>
              <Rooms />
            </div>
          </div>
        </section>

        {/* ───────────────────────────  Read  ─────────────────────────── */}
        <section className="section section-read" id="read">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <p className="kicker">I · Read</p>
              <h2 className="display">The book. Nothing else.</h2>
              <p className="lede">
                The page takes the light and the controls recede. Four papers, ten sizes, margins
                and spacing that stay where you put them — and Atkinson Hyperlegible and
                OpenDyslexic bundled for the readers who need them.
              </p>
            </div>

            <div className="read-layout">
              <div data-reveal>
                <ReaderDemo />
              </div>

              <ul className="notes-list" data-reveal>
                <li>
                  <h3>A mark is made, not switched on.</h3>
                  <p>
                    The colour crosses the words at the speed of a pen, line after line, with the
                    leading edge soft where the ink is still spreading. Four colours, one tap.
                  </p>
                </li>
                <li>
                  <h3>Footnotes open at the foot of the page.</h3>
                  <p>
                    Not on a screen somewhere else. Figures open at full size, a word can be looked
                    up from the selection, and a passage can leave as an image.
                  </p>
                </li>
                <li>
                  <h3>Progress means where you left off.</h3>
                  <p>
                    Not the furthest you ever got. Re-read a chapter and the number goes back with
                    you — one figure you can check against the page in front of you.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ───────────────────────────  Mark  ─────────────────────────── */}
        <section className="section section-margin">
          <div className="wrap margin-layout">
            <div className="margin-copy" data-reveal>
              <p className="kicker">II · Mark</p>
              <h2 className="display">A thought stays where it happened.</h2>
              <p className="lede">
                Highlight a line and write beside it. The note lives in the margin of the passage
                that caused it — not in a folder somewhere, not at the end of the book — and it is
                there again the next time you come past.
              </p>
              <ul className="ticks">
                <li>Mark in one tap, in any of four colours</li>
                <li>Tag passages in your own words; rename or merge the tags later</li>
                <li>Bookmarks, a chapter outline, and search inside the book</li>
                <li>Bring what you already marked in Kindle or Readwise</li>
              </ul>
            </div>

            <div className="margin-shot" data-reveal>
              <Phone
                src="/shots/margin.webp"
                alt="A handwritten margin note beside a highlighted passage in diple"
                sizes="(max-width: 900px) 70vw, 340px"
              />
              <p className="margin-caption">
                <span>Living margin</span>
                The page slides aside; the passage stays where it was.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────  Write  ─────────────────────────── */}
        <section className="section section-write" id="write">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <p className="kicker">III · Write</p>
              <h2 className="display">Markdown that dresses as you type.</h2>
              <p className="lede">
                Headings, quotes, boxes, links and tags style themselves in place, with their
                markers still standing quietly beside them. What is saved is portable Markdown —
                the same text any plain editor would show you.
              </p>
            </div>

            <div className="write-layout">
              <div data-reveal>
                <NoteDemo />
              </div>
              <div className="write-shots" data-reveal>
                <Phone
                  src="/shots/today.webp"
                  alt="Today's page in diple with tasks and a link to another note"
                  sizes="(max-width: 900px) 52vw, 260px"
                  className="write-phone write-phone-back"
                />
                <Phone
                  src="/shots/tasks.webp"
                  alt="The Tasks list in diple, gathered from every note"
                  sizes="(max-width: 900px) 52vw, 260px"
                  className="write-phone write-phone-front"
                />
              </div>
            </div>

            <ul className="desk" data-reveal>
              {DESK.map((item) => (
                <li className="card desk-card" key={item.title}>
                  <span className="desk-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────────────────────────  Return  ─────────────────────────── */}
        <section className="section section-return" id="return">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <p className="kicker">IV · Return</p>
              <h2 className="display">An index of your attention.</h2>
              <p className="lede">
                Every passage you kept, narrowed by book, colour or tag — and one passage a day
                back on the surface, with the others in your library that share its rarer words.
              </p>
            </div>

            <div className="return-layout">
              <div data-reveal>
                <HighlightsDemo />
              </div>

              <aside className="echo card" data-reveal>
                <p className="echo-label">Passage of the day</p>
                <blockquote className="echo-quote">
                  Learn from me, if not by my precepts, at least by my example, how dangerous is the
                  acquirement of knowledge.
                </blockquote>
                <p className="echo-note">The novel’s thesis, stated by the least reliable witness in it.</p>
                <p className="echo-source">Frankenstein · Mary Shelley</p>
                <div className="echo-elsewhere">
                  <p className="echo-label">Elsewhere · from “learn”</p>
                  <p>We learn from failure, not from success!</p>
                  <span>Dracula · Bram Stoker</span>
                </div>
                <p className="echo-foot">
                  <ImportGlyph size={15} /> Import from Kindle or Readwise, export the library as
                  Markdown.
                </p>
              </aside>
            </div>
          </div>
        </section>

        {/* ───────────────────────────  Mac  ─────────────────────────── */}
        <section className="section section-mac" id="mac">
          <div className="wrap">
            <div className="section-head section-head-center" data-reveal>
              <p className="kicker">Also on the Mac</p>
              <h2 className="display">Three columns, one desk.</h2>
              <p className="lede">
                The same library, the same notes, the same passages — with a sidebar, a list, a
                page, and the shortcuts a keyboard expects.
              </p>
            </div>

            <div data-reveal>
              <MacTour />
            </div>
          </div>
        </section>

        {/* ───────────────────────────  Private  ─────────────────────────── */}
        <section className="section section-private" id="private">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <p className="kicker">Private by architecture</p>
              <h2 className="display">Your reading is not data.</h2>
              <p className="lede">
                Books, progress, highlights and notes stay on your device. Turn on sync and they
                travel through your own iCloud account — the developer has no access to it and
                operates no backend of any kind.
              </p>
            </div>

            <div className="private-layout">
              <ul className="ledger" data-reveal>
                {LEDGER.map((row) => (
                  <li key={row.label}>
                    <b className="serif">{row.value}</b>
                    <span>{row.label}</span>
                    <p>{row.note}</p>
                  </li>
                ))}
              </ul>

              <div className="manifest card" data-reveal>
                <p className="manifest-path">diple/PrivacyInfo.xcprivacy</p>
                <pre>
                  <code>
                    {`<key>NSPrivacyCollectedDataTypes</key>
<array/>

<key>NSPrivacyTracking</key>
<false/>

<key>NSPrivacyTrackingDomains</key>
<array/>`}
                  </code>
                </pre>
                <p className="manifest-note">
                  Apple’s own privacy manifest, as it ships in the app: nothing collected, nothing
                  tracked, no domain to track it to. Trust should be inspectable.
                </p>
                <div className="manifest-links">
                  <Link className="link" href="/privacy">
                    Privacy policy <ArrowUpRightGlyph />
                  </Link>
                  <a className="link" href={site.sourceUrl} target="_blank" rel="noreferrer">
                    Read the code <ArrowUpRightGlyph />
                  </a>
                </div>
                <p className="manifest-foot">
                  <CloudGlyph size={15} /> iCloud sync is off until you turn it on, and writes only
                  to your own private database.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────  The mark  ─────────────────────────── */}
        <section className="section section-mark" id="mark">
          <div className="wrap mark-layout">
            <div className="mark-copy" data-reveal>
              <p className="kicker">The mark</p>
              <h2 className="display">A wedge in the margin, written by hand.</h2>
              <p className="lede">
                A <em>diple</em> is the wedge Alexandrian scholars set in the margin against a line
                worth noticing — the ancestor of the quotation mark, and the app’s name and its
                whole function. The icon is that wedge with the app’s initial and the full stop the
                wordmark has always carried.
              </p>
              <p className="lede">
                It is set in Mynerve and <em>written</em>, not drawn: the intro on first launch
                writes it stroke by stroke, and so does this page. Its colour is the accent, because
                in diple the accent is always the reader’s own act — the highlight, the progress
                ribbon, the pen.
              </p>
            </div>

            <div className="mark-picker" data-reveal>
              <AccentPicker />
              <p className="small">
                Five accents, and each one has a Home Screen icon of its own. Pick one here and the
                page takes it too.
              </p>
            </div>
          </div>
        </section>

        {/* ───────────────────────────  Download  ─────────────────────────── */}
        <section className="finale" id="download">
          <div className="wrap finale-inner" data-reveal>
            <Mark id="finale-mark" motion="write" className="finale-mark" />
            <h2 className="display finale-title">Keep what keeps you.</h2>
            <p className="lede finale-lede">
              Read. Mark. Write. Return. Free for iPhone, iPad and Mac — and open source, so the
              privacy claims on this page can be checked rather than believed.
            </p>
            <div className="hero-actions finale-actions">
              <a className="btn btn-primary" {...appStoreLink}>
                Download on the App Store
              </a>
              <a className="btn btn-ghost" href={site.sourceUrl} target="_blank" rel="noreferrer">
                <GitHubGlyph size={16} /> GitHub
              </a>
            </div>
            <p className="finale-foot small">
              <PenGlyph size={15} /> Version {site.version} adds Notes: a page for today, tasks from
              every note, spaces of your own — and a new icon.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
