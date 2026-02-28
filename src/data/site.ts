export type Locale = "en" | "ja";

export const appName = "LogMaru";
export const authorName = "monkuma";
export const authorGithub = "https://github.com/monkuma";
export const authorBioEn =
  "monkuma is an independent software developer and the creator of this project. He maintains and develops all features, fixes, and updates.";
export const authorBioJa =
  "monkuma はこのプロジェクトの制作者である個人開発者です。機能追加、修正、アップデートのすべてを継続して開発しています。";
export const contactEmail = "support@logmaru.work";
export const githubRepo = "https://github.com/monkuma/LogMaru-releases";
export const githubReleases = `${githubRepo}/releases`;
export const githubIssues = `${githubRepo}/issues`;

export const footerLabels: Record<
  Locale,
  {
    home: string;
    about: string;
    download: string;
    changelog: string;
    privacy: string;
    terms: string;
    contact: string;
  }
> = {
  en: {
    home: "Home",
    about: "About",
    download: "Download",
    changelog: "Changelog",
    privacy: "Privacy",
    terms: "Terms",
    contact: "Contact"
  },
  ja: {
    home: "ホーム",
    about: "About",
    download: "ダウンロード",
    changelog: "更新履歴",
    privacy: "プライバシー",
    terms: "利用規約",
    contact: "お問い合わせ"
  }
};
