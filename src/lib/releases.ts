import { getCollection } from "astro:content";
import { githubReleases, type Locale } from "../data/site";

export interface ReleaseInfo {
  lang: Locale;
  version: string;
  date: Date;
  fileSize: string;
  sha256: string;
  assetName: string;
}

export async function getLatestRelease(locale: Locale): Promise<ReleaseInfo> {
  const entries = await getCollection("changelog", ({ data }) => data.lang === locale);
  const [latest] = entries.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  if (!latest) {
    throw new Error(`No changelog entries found for locale: ${locale}`);
  }

  return {
    lang: latest.data.lang,
    version: latest.data.version,
    date: latest.data.date,
    fileSize: latest.data.fileSize,
    sha256: latest.data.sha256,
    assetName: latest.data.assetName
  };
}

export function getReleaseDownloadUrl(assetName: string): string {
  return `${githubReleases}/latest/download/${assetName}`;
}
