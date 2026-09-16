import type { Metadata } from "next";
import { site } from "../site";
import { Masthead } from "../components/Masthead";
import { Footer } from "../components/Footer";
import { ArrowUpRightGlyph } from "../components/glyphs";
import "../landing.css";
import "./privacy.css";

const sourceUrl = site.sourceUrl;
const mailUrl = site.mailUrl;

export const metadata: Metadata = {
  title: "Privacy & legal — diple.",
  description:
    "How diple handles books, notes, reading activity, iCloud sync and personal data.",
};

function Arrow() {
  return <ArrowUpRightGlyph />;
}

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="legal-section" id={id}>
      <p className="legal-section-label">{title}</p>
      <div>{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Masthead />
      <main className="legal-page" id="top">
      <section className="legal-hero wrap">
        <p className="kicker">Private by architecture</p>
        <h1 className="display">Your reading belongs to you.</h1>
        <div className="legal-hero-meta">
          <p className="lede">
            diple does not collect, sell or profile personal data. This page
            explains what stays on your device, what may pass through your own
            iCloud account, and the limits of the software.
          </p>
          <span>Last updated · August 2, 2026</span>
        </div>
      </section>

      <div className="legal-layout wrap">
        <aside className="legal-index" aria-label="On this page">
          <p>On this page</p>
          <a href="#collection">Data collection</a>
          <a href="#storage">Storage &amp; iCloud</a>
          <a href="#access">Files &amp; permissions</a>
          <a href="#control">Retention &amp; control</a>
          <a href="#security">Security</a>
          <a href="#source">Open source</a>
          <a href="#disclaimer">Disclaimer</a>
          <a href="#contact">Contact</a>
        </aside>

        <article className="legal-content">
          <LegalSection id="collection" title="01 / Data collection">
            <h2>No account. No tracking. No developer database.</h2>
            <p>
              diple does not collect, transmit to the developer, sell, rent or
              share personal data. The developer does not operate a backend
              server for diple and does not maintain a database containing user
              information or user-created content.
            </p>
            <p>diple does not use:</p>
            <ul>
              <li>advertising services or cross-app tracking;</li>
              <li>tracking identifiers or user profiling;</li>
              <li>third-party analytics or crash-reporting SDKs;</li>
              <li>marketing data collection.</li>
            </ul>
            <h3>Accounts</h3>
            <p>
              diple does not require a separate account and does not request or
              store names, email addresses, passwords, phone numbers or other
              account credentials. Apple may require an Apple Account when you
              choose iCloud synchronization; that account is managed by Apple
              and is not accessible to the developer.
            </p>
            <h3>Analytics and diagnostics</h3>
            <p>
              diple includes no independent analytics, telemetry or
              crash-reporting service. Apple may collect limited diagnostic,
              performance, crash or App Store information according to your
              Apple privacy and analytics settings. Information collected by
              Apple is processed under Apple&apos;s own policies and is not used by
              diple to profile or track you.
            </p>
          </LegalSection>

          <LegalSection id="storage" title="02 / Storage & iCloud">
            <h2>Your library lives in places you control.</h2>
            <p>
              Books, reading progress, bookmarks, notes, preferences and other
              user-created content are stored locally on your device. diple
              does not transmit this content to a developer-operated server or
              use it for advertising, analytics, tracking, profiling or marketing.
            </p>
            <h3>iCloud synchronization</h3>
            <p>
              When enabled, iCloud synchronizes supported app data between
              devices connected to the same Apple Account. The service is
              provided and managed by Apple; availability depends on your
              account, settings, storage and network connection.
            </p>
            <p>
              Synchronized information is associated with your Apple Account
              and handled according to Apple&apos;s privacy policy and iCloud terms.
              The developer does not operate a separate sync server. You can
              control diple&apos;s iCloud access in system settings.
            </p>
          </LegalSection>

          <LegalSection id="access" title="03 / Files & permissions">
            <h2>Only what you choose to open.</h2>
            <p>
              diple accesses books, documents, folders and other files only
              when you explicitly select or import them. Imported content is
              used solely for reading, library management and note-taking, and
              is not uploaded to a server operated by the developer.
            </p>
            <p>
              File or folder permissions are requested only for a
              user-initiated import, open, save or export action. diple does not
              use these permissions to scan unrelated files. Permissions can be
              reviewed or changed in the privacy and security settings on iOS
              or macOS.
            </p>
            <p>
              You are responsible for having the right to access and use any
              content you import into diple.
            </p>
          </LegalSection>

          <LegalSection id="control" title="04 / Retention & control">
            <h2>There is no server-side profile to retain.</h2>
            <p>
              Because diple maintains no user accounts and stores no personal
              information on a developer-operated server, the developer has no
              server-side account data to retain or delete. You can remove
              locally stored content from within diple.
            </p>
            <p>
              Uninstalling the app removes it from the device but may not remove
              data previously synchronized through iCloud. That data can be
              managed through diple, your Apple Account or the relevant iCloud
              settings. You are responsible for maintaining appropriate backups
              of books, notes and other important content.
            </p>
            <h3>Children&apos;s privacy</h3>
            <p>
              diple does not knowingly collect personal information from
              children or any other users and does not create age-based profiles.
            </p>
            <h3>Data sales and sharing</h3>
            <p>
              diple does not sell personal information or share it with
              advertisers, data brokers, analytics providers, marketing
              services or other third parties.
            </p>
          </LegalSection>

          <LegalSection id="security" title="05 / Security & changes">
            <h2>Less collection means less exposure.</h2>
            <p>
              diple reduces privacy and security risk by avoiding unnecessary
              data collection and keeping content on your device or in services
              you control, such as your personal iCloud account. No method of
              electronic storage or synchronization is completely secure; you
              should protect your devices and Apple Account and keep backups of
              important content.
            </p>
            <p>
              This policy may change when diple&apos;s functionality or
              data-handling practices change. Updates will be published with a
              revised “Last updated” date.
            </p>
          </LegalSection>

          <LegalSection id="source" title="06 / Open source">
            <h2>Trust should be inspectable.</h2>
            <p>
              diple is open-source software. Its public source can be inspected
              to understand how the app works, review privacy-related behavior,
              report bugs or security issues, suggest improvements and
              contribute to the project. The source is distributed under the
              license included in the repository; third-party components remain
              subject to their own licenses and notices.
            </p>
            <p>
              Public source improves transparency, but does not by itself
              guarantee that every distributed build has been independently
              reproduced or verified. Official builds are distributed through
              the Apple App Store and any other channel explicitly identified by
              the developer.
            </p>
            <a className="legal-link" href={sourceUrl} target="_blank" rel="noreferrer">
              Inspect the source on GitHub <Arrow />
            </a>
          </LegalSection>

          <LegalSection id="disclaimer" title="07 / Disclaimer">
            <h2>Software, with honest limits.</h2>
            <p>
              diple is provided “as is” and “as available”, without warranties
              of any kind, to the extent permitted by applicable law. The
              developer is not responsible for the loss of imported books,
              notes, reading progress, bookmarks, settings or other user-created
              content. Keep appropriate backups of anything important.
            </p>
            <p>
              diple is not affiliated with, endorsed by or sponsored by Apple
              Inc. Apple, macOS, iOS, iCloud, Apple Account and App Store are
              trademarks of Apple Inc., registered in the United States and
              other countries and regions.
            </p>
          </LegalSection>

          <LegalSection id="contact" title="08 / Contact">
            <h2>Questions, support or security reports.</h2>
            <p>
              Email the developer directly, or open an issue on GitHub. Please
              do not put private, sensitive, personal or confidential
              information in a public issue.
            </p>
            <div className="legal-actions">
              <a className="legal-link" href={mailUrl}>Email the developer <Arrow /></a>
              <a className="legal-link" href={sourceUrl} target="_blank" rel="noreferrer">
                Open GitHub <Arrow />
              </a>
            </div>
          </LegalSection>
        </article>
      </div>

      </main>
      <Footer />
    </>
  );
}
