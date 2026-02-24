export type Locale = "en" | "ja";

export const appName = "LogMaru";
export const contactEmail = "support@logmaru.work";
export const githubRepo = "https://github.com/monkuma/LogMaru-releases";
export const githubReleases = `${githubRepo}/releases`;
export const githubIssues = `${githubRepo}/issues`;

export const footerLabels: Record<
  Locale,
  {
    home: string;
    download: string;
    changelog: string;
    privacy: string;
    terms: string;
    contact: string;
  }
> = {
  en: {
    home: "Home",
    download: "Download",
    changelog: "Changelog",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact"
  },
  ja: {
    home: "ホーム",
    download: "ダウンロード",
    changelog: "更新履歴",
    privacy: "プライバシー",
    terms: "利用規約",
    contact: "お問い合わせ"
  }
};
