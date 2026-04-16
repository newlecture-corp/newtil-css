import { defineConfig } from "vitepress";
import path from "path";

const BASE_PATH = "/newtil-css/";

export default defineConfig({
  ignoreDeadLinks: true,
  base: BASE_PATH,
  title: "Newtil CSS",
  description: "실제 CSS 속성명 기반 유틸리티 CSS + Design Tokens",
  appearance: true,
  lang: "ko",
  head: [
    ["link", { rel: "icon", href: `${BASE_PATH}favicon.ico` }],
  ],

  vite: {
    resolve: {
      alias: {
        "@newtil/css": path.resolve(__dirname, "../../css/style.css"),
      },
    },
  },

  themeConfig: {
    logo: { src: "/logo.png", width: 24, height: 24 },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/newlecture-corp/newtil-css",
      },
    ],

    search: {
      provider: "local",
    },

    nav: [
      { text: "홈", link: "/" },
      { text: "가이드", link: "/guide/getting-started" },
    ],

    sidebar: [
      {
        text: "가이드",
        base: "/guide",
        items: [
          { text: "시작하기", link: "/getting-started" },
          { text: "Utility 클래스", link: "/utility-classes" },
          { text: "Design Tokens", link: "/design-tokens" },
          { text: "반응형 & 상호작용", link: "/responsive" },
          { text: "다크모드", link: "/dark-mode" },
          { text: "JIT 설정 (Production)", link: "/jit-setup" },
        ],
      },
    ],

    outline: {
      label: "목차",
    },

    footer: {
      copyright: "Copyright © 2026 newlecture",
    },
  },
});
