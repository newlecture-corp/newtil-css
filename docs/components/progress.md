<script setup></script>

# 프로그레스 (Progress)

프로그레스 컴포넌트는 어느 작업의 완료 정도를 나타내는 컴포넌트입니다.

<QuickLinks :componentName="'Progress'"/>

## Overview

### Color {#overview-color}

`main`, `sub`, `accent`, `base` 색상이 제공됩니다. 자세한 내용을 보려면 [여기](#color)를 클릭하세요.

<div class="n-item d:flex fl-dir:column gap:4 mt:4">
  <div class="n-progress" role="progressbar">
    <div style="width: 25%"></div>
  </div>
  <div class="n-progress n-progress-color:sub" role="progressbar">
    <div style="width: 25%"></div>
  </div>
  <div class="n-progress n-progress-color:accent" role="progressbar">
    <div style="width: 25%"></div>
  </div>
  <div class="n-progress n-progress-color:base" role="progressbar">
    <div style="width: 25%"></div>
  </div>
</div>

## Usage

프로그레스 컴포넌트는 요소에 `n-progress` 클래스를 적용하고, 내부에 `div` 요소를 추가하여 진행 상태를 나타내는 너비를 설정합니다.

너비는 `style` 속성을 사용하여 설정할 수 있습니다.

<ExampleSection>
  <div class="n-progress" role="progressbar">
    <div style="width: 25%"></div>
  </div>
</ExampleSection>

```html
<div class="n-progress" role="progressbar">
  <div style="width: 25%"></div>
</div>
```

## Color

`n-progress-color:색상` 클래스를 통해 프로그레스의 색을 변경할 수 있습니다.

<ExampleSection class="flex-direction:column gap:4">
  <div class="n-progress n-progress-color:main" role="progressbar">
    <div style="width: 33%"></div>
  </div>
  <div class="n-progress n-progress-color:sub" role="progressbar">
    <div style="width: 33%"></div>
  </div>
  <div class="n-progress n-progress-color:accent" role="progressbar">
    <div style="width: 33%"></div>
  </div>
  <div class="n-progress n-progress-color:base" role="progressbar">
    <div style="width: 33%"></div>
  </div>
</ExampleSection>

```html
<div class="n-progress n-progress-color:main" role="progressbar">
  <div style="width: 33%"></div>
</div>
<div class="n-progress n-progress-color:sub" role="progressbar">
  <div style="width: 33%"></div>
</div>
<div class="n-progress n-progress-color:accent" role="progressbar">
  <div style="width: 33%"></div>
</div>
<div class="n-progress n-progress-color:base" role="progressbar">
  <div style="width: 33%"></div>
</div>
```

<table>
  <thead>
    <tr>
      <th scope="col">색상</th>
      <th scope="col">클래스</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>main</th>
      <td>
        <code>n-progress-color:main</code>
      </td>
    </tr>
    <tr>
      <th>sub</th>
      <td>
        <code>n-progress-color:sub</code>
      </td>
    </tr>
    <tr>
      <th>accent</th>
      <td>
        <code>n-progress-color:accent</code>
      </td>
    </tr>
    <tr>
      <th>base</th>
      <td>
        <code>n-progress-color:base</code>
      </td>
    </tr>
  </tbody>
</table>

## Overriding

프로그레스 컴포넌트의 변수는 다음과 같습니다:

```css
/* progress.css */
.n-progress {
  --progress-height: 6px;
  --progress-border-radius: 999px;
  --progress-background-color: rgba(var(--rgb-base-6), 0.2);

  --progressbar-color-main: var(--color-main-1);
  --progressbar-color-sub: var(--color-sub-1);
  --progressbar-color-accent: var(--color-accent-1);
  --progressbar-color-base: var(--color-base-6);
}
```

### Example

<ExampleSection>
<div class="n-item example w:100p">
  <div class="n-progress" role="progressbar">
    <div style="width: 33%"></div>
  </div>
</div>
</ExampleSection>

```html
<div class="n-item">
  <div class="n-progress" role="progressbar">
    <div style="width: 33%"></div>
  </div>
</div>
```

```css
/* root.css */
.n-item .n-progress {
  --progress-height: 10px;
  --progress-background-color: #f1f3f5;
  --progressbar-color-main: #a5d8ff;
}
```

<style>
.n-item.example .n-progress {
  --progress-height: 10px;
  --progress-background-color: #f1f3f5;
  --progressbar-color-main: #a5d8ff;
}
</style>

:::tip
컴포넌트 커스터마이징에 대한 자세한 내용은 [컴포넌트 커스터마이징하기](/guide/getting-started-component#customize-components)에서 확인하실 수 있습니다.
:::

<QuickLinks :componentName="'Progress'"/>
