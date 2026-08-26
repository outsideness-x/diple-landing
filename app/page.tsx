import Image from "next/image";
import Link from "next/link";

const sourceUrl = "https://github.com/outsideness-x/diple";
const privacyUrl = "/privacy";
const appStoreUrl = "#download";
const mailUrl = "mailto:outsidenessx@gmail.com";

type ScreenProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

function Screen({ src, alt, className = "", priority = false }: ScreenProps) {
  return (
    <figure className={`screen ${className}`}>
      <div className="screen-glass">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 760px) 76vw, (max-width: 1100px) 42vw, 28vw"
        />
      </div>
    </figure>
  );
}

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

const features = [
  ["01", "Read", "EPUB, PDF and saved articles in one beautiful reader."],
  ["02", "Mark", "Highlight in a tap; add the thought before it disappears."],
  ["03", "Collect", "Every passage stays arranged by book and author."],
  ["04", "Write", "Notes, Markdown, tasks, tags and links between ideas."],
  ["05", "Find", "One search across books, passages, notes and articles."],
  ["06", "Continue", "Your current page and reading progress stay in reach."],
];

export default function Home() {
  return (
    <main id="top">
      <div className="reading-progress" aria-hidden="true" />

      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="diple home">diple.</a>
        <nav className="edition-nav" aria-label="On this page">
          <a href="#reader">Reader</a>
          <a href="#feel">Feel</a>
          <a href="#memory">Memory</a>
          <Link href={privacyUrl}>Privacy</Link>
        </nav>
        <a className="source-link" href={sourceUrl} target="_blank" rel="noreferrer">
          GitHub <Arrow />
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="kicker">The reader&apos;s private room · Est. 2026</p>
          <h1 id="hero-title">
            Read.<br />Mark.<br /><em>Remember.</em>
          </h1>
          <p className="dek">
            A quiet place for books and the thoughts they leave behind. No feed.
            No audience. No one looking over your shoulder.
          </p>
          <p className="free-note">
            <strong>Completely free.</strong>
            <span>No subscription. No paid tier.</span>
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#reader">
              Enter the reading room <span aria-hidden="true">↓</span>
            </a>
            <a className="store-link" href={appStoreUrl}>
              <span>App Store</span>
              <small>Soon</small>
            </a>
          </div>
        </div>

        <div className="hero-object" aria-label="diple reader preview">
          <div className="plate-number">Plate I · The Reader</div>
          <Screen
            src="/screens/01-home-reading-loop.png"
            alt="diple home with the current book, highlights and recent notes"
            className="hero-screen"
            priority
          />
          <div className="object-caption">
            <span>The reading loop</span>
            <span>Ink / Brass</span>
          </div>
        </div>

        <div className="hero-mark" aria-hidden="true">d</div>
        <div className="hero-folio" aria-hidden="true">001</div>
      </section>

      <section className="declaration reveal" aria-label="Product statement">
        <p className="declaration-note">A reading instrument</p>
        <blockquote>
          A book is not content.<br /><em>It is a place you return to.</em>
        </blockquote>
        <div className="declaration-meta">
          <span>Books · PDFs · Articles</span>
          <span>iPhone · iPad · Mac</span>
        </div>
      </section>

      <section className="chapter reader-chapter" id="reader">
        <div className="chapter-heading reveal">
          <p className="section-index">01 / The reading room</p>
          <h2>The book,<br /><em>and nothing else.</em></h2>
        </div>

        <div className="reader-layout">
          <div className="reader-copy reveal">
            <div className="dropcap">D</div>
            <p>
              diple gets out of the way. The page takes the light, the controls
              recede, and the type is yours to tune—from margin and scale to the
              exact shade of paper.
            </p>
            <p>
              EPUB, PDF or a saved essay: each opens into the same deliberate
              reading loop, with progress that means exactly where you left off.
            </p>
            <dl className="chapter-spec">
              <div><dt>Formats</dt><dd>EPUB · PDF · Web</dd></div>
              <div><dt>Type</dt><dd>Reader controlled</dd></div>
              <div><dt>Sync</dt><dd>Personal iCloud</dd></div>
            </dl>
          </div>

          <div className="reader-plates">
            <Screen
              src="/screens/02-library-of-classics.png"
              alt="A personal library of classic books in diple"
              className="screen-back"
            />
            <Screen
              src="/screens/03-beautiful-reader.png"
              alt="A focused reading page with typography and progress controls"
              className="screen-front"
            />
            <p className="margin-note margin-note-top">Your library,<br />not a storefront.</p>
            <p className="margin-note margin-note-bottom">A page tuned<br />to its reader.</p>
          </div>
        </div>
      </section>

      <section className="quote-interlude" aria-label="A passage from Frankenstein">
        <div className="quote-rule" />
        <blockquote className="reveal">
          “Nothing is so painful to the human mind as a great and sudden change.”
        </blockquote>
        <p>Mary Wollstonecraft Shelley · Frankenstein</p>
        <div className="quote-comment">Keep for the essay<br />on the sublime.</div>
      </section>

      <section className="tactile" id="feel" aria-labelledby="tactile-title">
        <div className="tactile-heading reveal">
          <p className="section-index">Interlude / The page as a place</p>
          <h2 id="tactile-title">Reading you can<br /><em>almost feel.</em></h2>
          <p className="tactile-lede">
            A good book has a physical logic: weight, rhythm, a margin waiting
            for your hand. diple brings that feeling to glass. The text keeps
            its measure, the page holds still, and a thought can live beside
            the sentence that made it.
          </p>
        </div>

        <div className="tactile-stage">
          <Screen
            src="/screens/02-living-margins.png"
            alt="A handwritten thought resting in the dark margin beside the page"
            className="tactile-focus screen-natural"
          />
          <div className="tactile-observation reveal">
            <p className="tactile-number">01</p>
            <h3>Not an endless feed.<br /><em>A page with edges.</em></h3>
            <p>
              Open a living margin without losing the passage beneath it. Your
              note stays spatially attached to the line that called it into being.
            </p>
          </div>
        </div>

        <div className="tactile-gallery" aria-label="New diple reading details">
          <article className="tactile-card tactile-card-wide reveal">
            <Screen
              src="/screens/01-living-margin-note.png"
              alt="A handwritten note beside a highlighted passage in the Carbon reader theme"
              className="screen-natural"
            />
            <div>
              <span>02 / Living margin</span>
              <h3>A thought stays where it happened.</h3>
            </div>
          </article>
          <article className="tactile-card tactile-card-low reveal">
            <Screen
              src="/screens/07-reader-controls.png"
              alt="Reader controls with paper moods, typefaces, size and spacing"
              className="screen-natural"
            />
            <div>
              <span>03 / Your measure</span>
              <h3>Type, spacing and paper tone become part of the reading.</h3>
            </div>
          </article>
          <article className="tactile-card reveal">
            <Screen
              src="/screens/05-second-read.png"
              alt="Second Read gathering memorable passages into a personal edition"
              className="screen-natural"
            />
            <div>
              <span>04 / Second Read</span>
              <h3>The traces you leave become a book you can return to.</h3>
            </div>
          </article>
        </div>
      </section>

      <section className="chapter memory-chapter" id="memory">
        <div className="chapter-heading memory-heading reveal">
          <p className="section-index">02 / The living margin</p>
          <h2>What strikes you<br /><em>stays with you.</em></h2>
          <p className="chapter-intro">
            A highlight is not the end of a thought. Capture the passage, add the
            reason it mattered, and let diple build an index of your attention.
          </p>
        </div>

        <div className="screen-triptych" aria-label="diple highlighting workflow">
          <div className="triptych-item item-one reveal">
            <span className="plate-label">I · Mark</span>
            <Screen
              src="/screens/04-highlight-and-comment.png"
              alt="A passage highlighted and commented inside the diple reader"
            />
          </div>
          <div className="triptych-item item-two reveal">
            <span className="plate-label">II · Gather</span>
            <Screen
              src="/screens/05-highlights-library.png"
              alt="The highlights library grouped by source"
            />
          </div>
          <div className="triptych-item item-three reveal">
            <span className="plate-label">III · Return</span>
            <Screen
              src="/screens/06-quotes-by-book.png"
              alt="Saved quotes from The Adventures of Sherlock Holmes"
            />
          </div>
        </div>
      </section>

      <section className="knowledge" aria-labelledby="knowledge-title">
        <div className="knowledge-rule" />
        <div className="knowledge-copy reveal">
          <p className="section-index">03 / From passage to thought</p>
          <h2 id="knowledge-title">The book ends.<br /><em>Your thinking doesn&apos;t.</em></h2>
          <p>
            Turn a quote into a connected note. Write in Markdown, link ideas,
            keep tasks beside the text that created them, then find the whole
            thread again with one search.
          </p>
          <div className="knowledge-index">
            <span>Connected notes</span>
            <span>Tags + sources</span>
            <span>Unified search</span>
          </div>
        </div>

        <div className="knowledge-visual">
          <Screen
            src="/screens/07-connected-note.png"
            alt="A connected reading note with tasks, source and linked ideas"
            className="knowledge-main"
          />
          <Screen
            src="/screens/08-search-everything.png"
            alt="Unified search across notes, highlights and books"
            className="knowledge-search"
          />
          <div className="brass-thread thread-one" aria-hidden="true" />
          <div className="brass-thread thread-two" aria-hidden="true" />
        </div>
      </section>

      <section className="features" aria-labelledby="features-title">
        <div className="features-title reveal">
          <p className="section-index">04 / The whole apparatus</p>
          <h2 id="features-title">A library that<br /><em>thinks with you.</em></h2>
        </div>
        <div className="feature-list">
          {features.map(([number, title, copy]) => (
            <article className="feature-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="privacy" id="privacy" aria-labelledby="privacy-title">
        <div className="privacy-seal" aria-hidden="true">
          <Image src="/icon.png" alt="" width={190} height={190} />
        </div>
        <div className="privacy-title reveal">
          <p className="section-index">05 / Private by architecture</p>
          <h2 id="privacy-title">Your reading<br />is <em>not data.</em></h2>
        </div>
        <div className="privacy-copy reveal">
          <p className="privacy-lede">
            No account. No developer-operated backend. No advertising,
            trackers, third-party analytics or profiling.
          </p>
          <p>
            Books, progress, highlights and notes stay on your device. If you
            choose sync, they travel through your own iCloud account—not ours.
            The entire source is public, because trust should be inspectable.
          </p>
          <Link className="text-link dark-link" href={privacyUrl}>
            Read the privacy policy <Arrow />
          </Link>
        </div>
        <div className="privacy-ledger">
          <div><span>Accounts</span><strong>None</strong></div>
          <div><span>Tracking</span><strong>None</strong></div>
          <div><span>Backend</span><strong>None</strong></div>
          <div><span>Source</span><strong>Open</strong></div>
        </div>
      </section>

      <section className="colophon" aria-labelledby="colophon-title">
        <div className="colophon-film">
          <div className="film-label">First light · 00:06</div>
          <Image
            src="/first-launch.gif"
            alt="The animated diple colophon shown on first launch"
            fill
            unoptimized
            sizes="(max-width: 760px) 74vw, 28vw"
          />
        </div>
        <div className="colophon-copy reveal">
          <p className="section-index">A small ceremony before the first page</p>
          <h2 id="colophon-title">Made like a book.<br /><em>Kept like a secret.</em></h2>
          <p>
            diple is an independent, open-source reading application for iOS and
            macOS—built for people who want a quieter relationship with what they read.
          </p>
        </div>
      </section>

      <section className="finale" id="download" aria-labelledby="finale-title">
        <div className="finale-folio">The end is where the margin begins · 2026</div>
        <h2 id="finale-title">Keep what<br /><em>keeps you.</em></h2>
        <div className="finale-actions">
          <div className="download-actions">
            <a className="primary-action" href={sourceUrl} target="_blank" rel="noreferrer">
              Explore diple on GitHub <Arrow />
            </a>
            <a className="store-action" href={appStoreUrl} aria-label="diple on the App Store, coming soon">
              <span>App Store</span>
              <strong>Soon</strong>
            </a>
          </div>
          <p>For iPhone, iPad and Mac.<br />Free. Private. Open source. Yours.</p>
        </div>
        <div className="finale-wordmark" aria-hidden="true">diple.</div>
      </section>

      <footer>
        <a className="footer-mark" href="#top">diple.</a>
        <p>Private reading, in public source.</p>
        <div>
          <a href={sourceUrl} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          <a href={appStoreUrl}>App Store · Soon</a>
          <Link href={privacyUrl}>Privacy <Arrow /></Link>
          <a href={mailUrl}>Contact <Arrow /></a>
        </div>
      </footer>
    </main>
  );
}
