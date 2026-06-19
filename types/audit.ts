export type LandingNavItem = {
  label: string;
  href: `#${string}`;
};

export type LandingFAQ = {
  question: string;
  answer: string;
};

export type DownloadLink = {
  label: string;
  eyebrow: string;
  href: string;
  platform: "ios" | "android";
};
