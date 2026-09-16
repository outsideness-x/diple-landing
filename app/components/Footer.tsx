import Link from "next/link";
import { appStoreHref, site } from "../site";
import { HeartGlyph } from "./glyphs";
import { Mark } from "./Mark";

export function Footer() {
  return (
    <footer className="colophon">
      <div className="wrap">
        <div className="colophon-grid">
          <div>
            <Link className="wordmark" href="/" aria-label="diple, home">
              <Mark id="footer-mark" />
              <span aria-hidden="true">diple.</span>
            </Link>
            <p className="colophon-lede">
              A reader and a notebook in one app, for iPhone, iPad and Mac. Free, open source, and
              built so that the reading stays yours.
            </p>
          </div>

          <div>
            <h3>The app</h3>
            <ul>
              <li>
                <Link href="/#read">Reading</Link>
              </li>
              <li>
                <Link href="/#write">Notes</Link>
              </li>
              <li>
                <Link href="/#return">Highlights</Link>
              </li>
              <li>
                <Link href="/#mac">On the Mac</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Source</h3>
            <ul>
              <li>
                <a href={site.sourceUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={`${site.sourceUrl}/blob/main/LICENSE`} target="_blank" rel="noreferrer">
                  MIT licence
                </a>
              </li>
              <li>
                <a href={`${site.sourceUrl}/issues`} target="_blank" rel="noreferrer">
                  Report an issue
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Elsewhere</h3>
            <ul>
              <li>
                <Link href={appStoreHref}>App Store</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy &amp; legal</Link>
              </li>
              <li>
                <a href={site.mailUrl}>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* The same signature the app prints at the foot of Settings. */}
        <div className="colophon-sign">
          <HeartGlyph />
          <p>designed and created by chemical pink.</p>
          <span>diple. version {site.version}</span>
        </div>

        <div className="colophon-legal">
          <span>© 2026 Aliaksei Krauchanka. Open source under the MIT licence.</span>
          <span>
            Literata, Mynerve and Caveat are used under the SIL Open Font Licence. Passages quoted
            from public-domain editions.
          </span>
        </div>
      </div>
    </footer>
  );
}
