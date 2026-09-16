/** One place for the handful of facts the whole site repeats. */
export const site = {
  name: "diple.",
  version: "1.1",
  title: "diple. — Read in one room. Write in the other.",
  description:
    "A reader and a notebook in one app. EPUB, PDF and saved articles on one side, your notes, journal and tasks on the other. No account, no ads, nothing to subscribe to.",
  sourceUrl: "https://github.com/outsideness-x/diple",
  mailUrl: "mailto:outsidenessx@gmail.com",
  /** No storefront in the path: Apple sends the reader to their own country's listing. */
  appStoreUrl: "https://apps.apple.com/app/id6806528966" as string | null,
} as const;

export const appStoreHref = site.appStoreUrl ?? "/#download";

/** Spread onto any button that leads to the listing: it leaves the site, so it opens away. */
export const appStoreLink = site.appStoreUrl
  ? { href: site.appStoreUrl, target: "_blank", rel: "noreferrer" }
  : { href: "/#download" };
