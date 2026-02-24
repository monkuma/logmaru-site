import type { Locale } from "../data/site";

export const defaultDescriptions: Record<Locale, string> = {
  en: "LogMaru is a local-first time logging application for Windows. Categorize your work, visualize your activity history, and stay in control of your data.",
  ja: "LogMaru は、Windows向けのローカル完結型時間ログアプリです。作業をカテゴリで整理し、活動履歴を見える化し、データを自分で管理できます。"
};

function ensureTrailingSlash(pathname: string): string {
  if (pathname === "/") {
    return "/";
  }
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

export function normalizeLocalizedPath(pathname: string): string {
  let path = pathname;

  if (path === "/ja" || path === "/en") {
    path = "/";
  } else if (path.startsWith("/ja/")) {
    path = path.slice(3);
  } else if (path.startsWith("/en/")) {
    path = path.slice(3);
  }

  if (!path.startsWith("/")) {
    path = `/${path}`;
  }

  return ensureTrailingSlash(path);
}

export function getLocalizedPath(locale: Locale, basePath: string): string {
  const normalized = ensureTrailingSlash(basePath);

  if (locale === "ja") {
    return normalized === "/" ? "/ja/" : `/ja${normalized}`;
  }

  return normalized;
}

export function getSiteOrigin(siteUrl: string | URL): string {
  return new URL(siteUrl.toString()).origin;
}

export function buildAbsoluteUrl(siteUrl: string | URL, path: string): string {
  return new URL(path, getSiteOrigin(siteUrl)).toString();
}
