/** One place for the handful of facts the whole site repeats. */
export const site = {
  name: "diple.",
  version: "1.1",
  title: "diple. — Read in one room. Write in the other.",
  description:
    "A reader and a notebook in one app. EPUB, PDF and saved articles on one side, your notes, journal and tasks on the other. No account, no ads, nothing to subscribe to.",
  sourceUrl: "https://github.com/outsideness-x/diple",
  mailUrl: "mailto:outsidenessx@gmail.com",
  /** The listing is not public yet; set this string and every button becomes a real link. */
  appStoreUrl: null as string | null,
} as const;

export const appStoreHref = site.appStoreUrl ?? "/#download";
