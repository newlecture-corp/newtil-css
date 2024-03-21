<script setup></script>

# 아이템 (Item)

아이템 컴포넌트는 정보를 표시하거나 사용자와 상호작용을 위한 컴포넌트입니다.

<QuickLinks :componentName="'Item'"/>

## Usage

아이템 컴포넌트는 요소에 `n-item` 클래스를 적용하여 사용할 수 있습니다.
:::raw
<ExampleSection>
<template #h>사용법</template>

  <div class="n-item">item</div>
</ExampleSection>
:::

```html
<div class="n-item">item</div>
```

## Type

`n-item-type:타입` 또는 `n-item:타입` 약어 클래스를 통해 다양한 아이템 타입을 적용할 수 있습니다.
<ExampleSection>
<template #h>아이템 타입</template>

  <div class="display:flex gap:4 flex-direction:column">
    <div class="n-item n-item-type:outline-box">outline-box : 테두리가 있는 박스 스타일</div>
    <div class="n-item n-item-type:shadow">shadow: 그림자 효과를 가진 스타일</div>
    <div class="n-item n-item:underline">underline: 밑줄만 있는 스타일</div>
    <div class="n-item n-item:none">none: 테두리나 그림자 없이 깔끔한 스타일</div>
  </div>
</ExampleSection>

```html
<div class="n-item n-item-type:outline-box">outline-box</div>
<div class="n-item n-item-type:shadow">shadow</div>
<div class="n-item n-item:underline">underline</div>
<div class="n-item n-item:none">none</div>
```

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
      <th class="white-space:nowrap">outline-box</th>
      <td>
        <code>
          n-item-type:outline-box
        </code>
        <br/>
        <code>
          n-item-type:outline
        </code>
      </td>
      <td>
        <code>
          n-item:outline-box
        </code>
        <br/>
        <code>
          n-item:outline
        </code>
      </td>
    </tr>
    <tr>
      <th>shadow</th>
      <td>
        <code>
          n-item-type:shadow
        </code>
      </td>
      <td>
        <code>
          n-item:shadow
        </code>
      </td>
    </tr>
    <tr>
      <th>underline</th>
      <td>
        <code>
          n-item-type:underline
        </code>
      </td>
      <td>
        <code>
          n-item:underline
        </code>
      </td>
    </tr>
    <tr>
      <th>none</th>
      <td>
        <code>
          n-item-type:none
        </code>
      </td>
      <td>
        <code>
          n-item:none
        </code>
      </td>
    </tr>
  </tbody>
</table>

## Overriding

아이템 컴포넌트 변수는 다음과 같습니다:

```css
/* item.css */
.n-item {
  --item-padding: 24px;
  --item-border-radius: 16px;
  --item-border-color: var(--color-base-3);
  --item-background-color: var(--color-base-1);
}
```

### Example

:::raw
<ExampleSection>
<template #h>스타일 재정의 예시</template>

  <div class="n-item example">
    Hello
  </div>
</ExampleSection>
:::

```css
/* root.css */
.n-item {
  --item-border-radius: 0;
}
```

<style>
.n-item.example {
  --item-border-radius: 0;
}
</style>

:::tip
컴포넌트 커스터마이징에 대한 자세한 내용은 [컴포넌트 커스터마이징하기](/guide/getting-started-component#customize-components)에서 확인하실 수 있습니다.
:::

## Example

:::raw
<ExampleSection>
<template #h>활용 예시</template>

  <div class="n-item n-item:shadow p:0 pb:4 bd-radius:0 max-w:5">
    <div>
      <img src="/cafe.jpg" class="h:auto w:100p"/>
    </div>
    <div class="mt:4 px:3">
      <div class="n-font:h2 font-weight:3 color:base-8">Cafe Rland</div>
      <div class="mt:1 font-size:2 color:base-7">
        고소한 원두와 맛있는 샌드위치가 일품인 카페입니다.
      </div>
      <div class="mt:1">
        <span class="icon icon:heart_fill icon-size:2 icon-color:accent-1">
          좋아요
        </span>
        <span class="font-size:1 ml:1">24</span>
      </div>
    </div>
  </div>
</ExampleSection>
:::

```html
<div class="n-item n-item:shadow p:0 pb:4 bd-radius:0 max-w:5">
  <div>
    <img src="/cafe.jpg" class="h:auto w:100p" />
  </div>
  <div class="mt:4 px:3">
    <div class="n-font:h2 font-weight:3 color:base-8">Cafe Rland</div>
    <div class="mt:1 font-size:2 color:base-7">
      고소한 원두와 맛있는 샌드위치가 일품인 카페입니다.
    </div>
    <div class="mt:1">
      <span class="icon icon:heart_fill icon-size:2 icon-color:accent-1">
        좋아요
      </span>
      <span class="font-size:1 ml:1">24</span>
    </div>
  </div>
</div>
```

<QuickLinks :componentName="'Item'"/>
