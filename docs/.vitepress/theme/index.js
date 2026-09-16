// VitePress 커스텀 테마 — 유일한 진입점.
// 문서 페이지의 <Demo> 는 여기서 등록한다. 유틸리티 CSS 는 커밋된 소스(css/style.css)를 그대로 쓴다.
import DefaultTheme from 'vitepress/theme';
import '../../../css/style.css';
import './style.css';
import Demo from './components/Demo.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo);
  },
};
