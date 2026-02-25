import type { Locale } from "../data/site";

export const defaultDescriptions: Record<Locale, string> = {
  en: "LogMaru is a desktop app for Windows that automatically records your activity and shows where your time went. Your data stays on your PC.",
  ja: "LogMaruは、作業を自動で記録し、時間の使い方を見える化するWindows向けデスクトップアプリです。データはすべてPC内に保存されます。"
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
