<script setup>
</script>

# 폰트 (Font)

폰트 컴포넌트는 제목을 나타낼 수 있는 컴포넌트입니다.

<QuickLinks :componentName="'Font'"/>

## Usage

폰트 컴포넌트는 요소에 `n-font:타입` 클래스를 적용하여 사용할 수 있습니다.

<ExampleSection>
  <div class="n-font n-font:title">Title</div>
</ExampleSection>

```html
<div class="n-font n-font:title">Title</div>
```

## Type

<ExampleSection class="fl-dir:column">
  <div class="n-font n-font:title">Title</div>
  <div class="n-font n-font:subtitle">Sub title</div>
  <div class="n-font n-font:h1">Heading 1</div>
  <div class="n-font n-font:h2">Heading 2</div>
  <div class="n-font n-font:h3">Heading 3</div>
</ExampleSection>

<table>
  <thead>
    <tr>
      <th scope="col">타입</th>
      <th scope="col">클래스</th>
      <th scope="col">약어 클래스</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">title</th>
      <td>
        <code>n-font:title</code>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">subtitle</th>
      <td>
        <code>n-font:subtitle</code>
      </td>
      <td>-</td>
    </tr>
    <tr>
      <th scope="row">heading-1</th>
      <td>
        <code>n-font:heading-1</code>
      </td>
      <td>
        <code>n-font:heading</code>
        <br />
        <code>n-font:h1</code>
      </td>
    </tr>
    <tr>
      <th scope="row">heading-2</th>
      <td>
        <code>n-font:heading-2</code>
      </td>
      <td>
        <code>n-font:h2</code>
      </td>
    </tr>
    <tr>
      <th scope="row">heading-3</th>
      <td>
        <code>n-font:heading-3</code>
      </td>
      <td>
        <code>n-font:h3</code>
      </td>
    </tr>
  </tbody>
</table>

## Responsive

화면 너비에 따라 폰트 사이즈가 달라집니다.

<ExampleSection class="fl-dir:column">
  <div class="n-font n-font:title">Title</div>
  <div class="n-font n-font:subtitle">Sub title</div>
  <div class="n-font n-font:h1">Heading 1</div>
  <div class="n-font n-font:h2">Heading 2</div>
  <div class="n-font n-font:h3">Heading 3</div>
</ExampleSection>

<table>
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">default</th>
      <th scope="col">min-width: 768px</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <th scope="row">title</th>
      <td>
        <span>30px</span>
      </td>
      <td>
        <span>32px</span>
      </td>
    </tr>
    <tr>
      <th scope="row">subtitle</th>
      <td>
        <span>18px</span>
      </td>
      <td>
        <span>20px</span>
      </td>
    </tr>
    <tr>
      <th scope="row">heading-1</th>
      <td>
        <span>24px</span>
      </td>
      <td>
        <span>26px</span>
      </td>
    </tr>
    <tr>
      <th scope="row">heading-2</th>
      <td>
        <span>20px</span>
      </td>
      <td>
        <span>22px</span>
      </td>
    </tr>
    <tr>
      <th scope="row">heading-3</th>
      <td>
        <span>16px</span>
      </td>
      <td>
        <span>18px</span>
      </td>
    </tr>
  </tbody>
</table>


## Overriding

폰트 컴포넌트는 스타일 재정의에 대한 변수를 아래와 같이 제공하고 있습니다.

```css
/* font.css */
.n-font {
  /* title */
  --font-title-font-size: 30px;
  --font-title-font-weight: 700;
  --font-title-line-height: 150%;
  --font-title-letter-spacing: -0.02em;

  /* subtitle */
  --font-subtitle-font-size: 18px;
  --font-subtitle-font-weight: 500;
  --font-subtitle-line-height: 150%;
  --font-subtitle-letter-spacing: -0.02em;

  /* heading-1 */
  --font-heading-1-font-size: 24px;
  --font-heading-1-font-weight: 500;
  --font-heading-1-line-height: 150%;
  --font-heading-1-letter-spacing: -0.02em;

  /* heading-2 */
  --font-heading-2-font-size: 20px;
  --font-heading-2-font-weight: 500;
  --font-heading-2-line-height: 150%;
  --font-heading-2-letter-spacing: -0.02em;

  /* heading-3 */
  --font-heading-3-font-size: 16px;
  --font-heading-3-font-weight: 500;
  --font-heading-3-line-height: 150%;
  --font-heading-3-letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .n-font{
    --font-title-font-size: 32px;
    --font-subtitle-font-size: 20px;
    --font-heading-1-font-size: 26px;
    --font-heading-2-font-size: 22px;
    --font-heading-3-font-size: 18px;
  }
}

```

### Example

<ExampleSection class="fl-dir:column my:4">
  <div class="n-font n-font:title" style="font-size:36px; font-weight:800;">Title</div>
  <div class="n-font n-font:subtitle" style="font-size:24px; font-weight:600;">Sub title</div>
  <div class="n-font n-font:h1" style="font-size:30px; font-weight:600;">Heading 1</div>
  <div class="n-font n-font:h2" style="font-size:26px; font-weight:600;">Heading 2</div>
  <div class="n-font n-font:h3" style="font-size:22px; font-weight:600;">Heading 3</div>
</ExampleSection>

```css
/* root.css */
.n-font {
  /* title */
  --font-title-font-size: 36px;
  --font-title-font-weight: 800;

  /* subtitle */
  --font-subtitle-font-size: 24px;
  --font-subtitle-font-weight: 600;

  /* heading-1 */
  --font-heading-1-font-size: 30px;
  --font-heading-1-font-weight: 600;

  /* heading-2 */
  --font-heading-2-font-size: 26px;
  --font-heading-2-font-weight: 600;

  /* heading-3 */
  --font-heading-3-font-size: 22px;
  --font-heading-3-font-weight: 600;
}

@media (min-width: 768px) {
  .n-font{
    /* .... */
  }
}
```

:::tip
컴포넌트 스타일 재정의에 대한 자세한 내용은 [스타일 재정의하기](/guide/customizing)에서 확인하실 수 있습니다.
:::

<QuickLinks :componentName="'Font'"/>
