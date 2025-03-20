// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import Link from '/components/demo/Link.vue';
// import Link from ''
import ComponentQuickLinks from '/components/demo/ComponentQuickLinks.vue';
import ExampleSection from '/components/demo/ExampleSection.vue';
import "../.././css/utils.css";
import "../.././css/components.css";

import './style.css';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    //vitepress.dev/guide/extending-default-theme#registering-global-components
    https: app.component('Link', Link);
    https: app.component('QuickLinks', ComponentQuickLinks);
    https: app.component('ExampleSection', ExampleSection);
  }
} satisfies Theme;
