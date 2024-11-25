import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ruznamce.kadimelifba.com/", // replace this with your deployed domain
  author: "kadimelifba",
  profile: "https://kadimelifba.com/",
  desc: "KadimElifba sahifesinin ruznamçesidir.",
  title: "Ruznamçe",
  ogImage: "topkapi_sarayi.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  // editPost: {
  //   url: "https://github.com/kadimelifba/ruznamce/edit/main/src/content/blog",
  //   text: "Tashih Talebi",
  //   appendFilePath: true,
  // },
};

export const LOCALE = {
  lang: "tr", // html lang code. Set this empty and default will be "en"
  langTag: ["tr-TR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "X",
    href: "https://x.com/KadimElifba",
    linkTitle: `${SITE.title} - X`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@kadimelifba",
    linkTitle: `${SITE.title} - YouTube`,
    active: true,
  },
  {
    name: "Github",
    href: "https://github.com/kadimelifba",
    linkTitle: ` ${SITE.title} - Github`,
    active: true,
  },
  {
    name: "ePostagâh",
    href: "https://ihbar.kadimelifba.com/",
    linkTitle: `${SITE.title} ihbar hattı`,
    active: true,
  },
  // {
  //   name: "Facebook",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Facebook`,
  //   active: true,
  // },
  // {
  //   name: "Instagram",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Instagram`,
  //   active: true,
  // },
  // {
  //   name: "LinkedIn",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - LinkedIn`,
  //   active: true,
  // },
  // {
  //   name: "Twitch",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Twitch`,
  //   active: false,
  // },
  // {
  //   name: "WhatsApp",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - WhatsApp`,
  //   active: false,
  // },
  // {
  //   name: "Snapchat",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Snapchat`,
  //   active: false,
  // },
  // {
  //   name: "Pinterest",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Pinterest`,
  //   active: false,
  // },
  // {
  //   name: "TikTok",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - TikTok`,
  //   active: false,
  // },
  // {
  //   name: "CodePen",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - CodePen`,
  //   active: false,
  // },
  // {
  //   name: "Discord",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Discord`,
  //   active: false,
  // },
  // {
  //   name: "GitLab",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - GitLab`,
  //   active: false,
  // },
  // {
  //   name: "Reddit",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Reddit`,
  //   active: false,
  // },
  // {
  //   name: "Skype",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Skype`,
  //   active: false,
  // },
  // {
  //   name: "Steam",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Steam`,
  //   active: false,
  // },
  // {
  //   name: "Telegram",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Telegram`,
  //   active: false,
  // },
  // {
  //   name: "Mastodon",
  //   href: "https://kadimelifba.com/",
  //   linkTitle: `${SITE.title} - Mastodon`,
  //   active: false,
  // },
];
