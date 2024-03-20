# 익스펜더 (Expander)

익스펜더 컴포넌트는 컨텐츠를 펼치거나 숨길 수 있는 UI 요소입니다.

<QuickLinks :componentName="'Expander'"/>

## Usage

익스펜더 컴포넌트는 요소에 `n-expander` 클래스를 적용하고, `h1`, `input` 요소를 사용하여 다음 문서 구조를 따릅니다:

:::raw
<ExampleSection class="d:block">
<template #h="예시"/>

  <section class="n-expander">
    <h1>
      <input type="checkbox"/>
      expander title
    </h1>
    <div>
      <div class="px:2 py3">exapnder content</div>
    </div>
  </section>
</ExampleSection>
:::

```html
<section class="n-expander">
  <h1>
    <input type="checkbox" />
    expander title
  </h1>
  <div>
    <div class="px:2 py3">exapnder content</div>
  </div>
</section>
```

`n-expander-title`, `n-expander-trigger`, `n-expander-content` 클래스를 사용하여 원하는 요소로 사용하는 방법도 있습니다.

:::raw
<ExampleSection class="d:block">
<template #h="예시"/>

  <div class="n-expander">
    <div class="n-expander-title">
      <input type="checkbox" class="n-expander-trigger" />
      expander title
    </div>
    <div class="n-expander-content px:2">exapnder content</div>
  </div>
</ExampleSection>
:::

```html
<div class="n-expander">
  <div class="n-expander-title">
    <input type="checkbox" class="n-expander-trigger" />
    expander title
  </div>
  <div class="n-expander-content px:2">exapnder content</div>
</div>
```

## Overriding

익스펜더 컴포넌트의 변수는 다음과 같습니다:

```css
.n-expander {
  --expander-background-color: var(--color-base-1);
  --expander-border-radius: 0px;
  --expander-border: none;

  --expander-title-padding: 16px 8px;

  /* 우측 icon */
  --expander-icon-top: 16px;
  --expander-icon-right: 16px;
  --expander-icon-size: 16px;
  --expander-icon-transform-active: translateY(-30%) rotate(180deg);
}
```
