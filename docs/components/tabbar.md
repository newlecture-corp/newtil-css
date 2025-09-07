<script setup></script>

# 탭바 (Tabbar)

탭바 컴포넌트는 다양한 콘텐으 영역 또는 뷰 사이를 전환할 수 있게 해주는 컴포넌트입니다.

<QuickLinks :componentName="'Tabbar'"/>

## Usage

1. `ul` 요소에 `n-tabbar` 클래스를 적용합니다.
2. 각 탭은 `li` 요소로 나타내며, 탭 내부에는 `button` 또는 `a` 요소를 사용하여 탭의 제목을 나타냅니다.
3. 현재 활성화된 탭은 `li` 요소에 active 클래스를 추가하여 표시합니다.

:::raw
<ExampleSection class="background-color:base-1">
<template #h>예시</template>

  <ul class="n-tabbar">
    <li class="active"><button>All</button></li>
    <li><button>Chat</button></li>
    <li><button>Users</button></li>
  </ul>
</ExampleSection>
:::

```html
<ul class="n-tabbar">
  <li class="active"><button>All</button></li>
  <li><button>Chat</button></li>
  <li><button>Users</button></li>
</ul>
```

또는 링크를 사용하는 경우:

```html
<ul class="n-tabbar">
  <li class="active"><a>All</a></li>
  <li><a>Chat</a></li>
  <li><a>Users</a></li>
</ul>
```

`n-tabbar`와 함께 `n-tab` 클래스를 사용하여 탭바 문서 구조를 따르지 않고 사용하는 방법도 있습니다.
:::raw
<ExampleSection class="background-color:base-1">
<template #h>예시</template>

  <div class="n-tabbar">
    <div class="n-tab active">All</div>
    <div class="n-tab">Chat</div>
    <div class="n-tab">Users</div>
  </div>
</ExampleSection>
:::

```html
<div class="n-tabbar">
  <div class="n-tab active">All</div>
  <div class="n-tab">Chat</div>
  <div class="n-tab">Users</div>
</div>
```

## Type

`n-tabbar-type:타입` 또는 `n-tabbar:타입` 약어 클래스를 통해 다양한 탭바 타입을 적용할 수 있습니다.
:::raw
<ExampleSection class="flex-direction:column align-items:center gap:8 background-color:base-1">
<template #h>예시</template>

  <ul class="n-tabbar n-tabbar-type:underline">
    <li class="active"><button>All</button></li>
    <li><button>Chat</button></li>
    <li><button>Users</button></li>
  </ul>

  <ul class="n-tabbar n-tabbar-type:outline">
    <li class="active"><button>All</button></li>
    <li><button>Chat</button></li>
    <li><button>Users</button></li>
  </ul>
</ExampleSection>
:::

```html
<ul class="n-tabbar n-tabbar-type:underline">
  <li class="active"><button>All</button></li>
  <li><button>Chat</button></li>
  <li><button>Users</button></li>
</ul>

<ul class="n-tabbar n-tabbar-type:outline">
  <li class="active"><button>All</button></li>
  <li><button>Chat</button></li>
  <li><button>Users</button></li>
</ul>
```

## Tab Position

`n-tabbar` 클래스와 함께 `n-tab-poistion:값` 또는 `n-tab-pos:값` 약어 클래스를 통해 tab의 위치를 조정할 수 있습니다.
:::raw
<ExampleSection class="flex-direction:column align-items:center gap:8 background-color:base-1">
<template #h>disabled 예시</template>

  <ul class="n-tabbar n-tab-position:center">
    <li class="active"><button>All</button></li>
    <li><button>Chat</button></li>
    <li><button>Users</button></li>
  </ul>

  <ul class="n-tabbar n-tab-position:left">
    <li class="active"><button>All</button></li>
    <li><button>Chat</button></li>
    <li><button>Users</button></li>
  </ul>

  <ul class="n-tabbar n-tab-position:right">
    <li class="active"><button>All</button></li>
    <li><button>Chat</button></li>
    <li><button>Users</button></li>
  </ul>
</ExampleSection>
:::

```html
<ul class="n-tabbar n-tab-position:center">
  <li class="active"><button>All</button></li>
  <li><button>Chat</button></li>
  <li><button>Users</button></li>
</ul>

<ul class="n-tabbar n-tab-position:left">
  <li class="active"><button>All</button></li>
  <li><button>Chat</button></li>
  <li><button>Users</button></li>
</ul>

<ul class="n-tabbar n-tab-position:right">
  <li class="active"><button>All</button></li>
  <li><button>Chat</button></li>
  <li><button>Users</button></li>
</ul>
```

## Tab Grow

`n-tabbar` 클래스와 함께 `n-tab-grow` 클래스를 사용하여 tab의 grow를 변경할 수 있습니다.
:::raw
<ExampleSection class="flex-direction:column align-items:center gap:8 background-color:base-1">
<template #h>disabled 예시</template>

  <ul class="n-tabbar n-tab-grow">
    <li class="active"><button>All</button></li>
    <li><button>Chat</button></li>
    <li><button>Users</button></li>
  </ul>

  <div class="n-tabbar n-tab-grow">
    <div class="n-tab active">All</div>
    <div class="n-tab">Chat</div>
    <div class="n-tab">Users</div>
  </div>
</ExampleSection>
:::

```html
<ul class="n-tabbar n-tab-grow">
  <li class="active"><button>All</button></li>
  <li><button>Chat</button></li>
  <li><button>Users</button></li>
</ul>

<div class="n-tabbar n-tab-grow">
  <div class="n-tab active">All</div>
  <div class="n-tab">Chat</div>
  <div class="n-tab">Users</div>
</div>
```

## Disabled

`li` 요소 또는 `n-tab` 클래스에 `disabled` 클래스를 추가하여 탭바 컴포넌트에 비활성화 스타일을 적용할 수 있습니다.

:::raw
<ExampleSection class="flex-direction:column align-items:center gap:8 background-color:base-1">
<template #h>disabled 예시</template>

  <ul class="n-tabbar">
    <li class="disabled"><button>All</button></li>
    <li><button>Chat</button></li>
    <li><button>Users</button></li>
  </ul>

  <div class="n-tabbar">
    <div class="n-tab disabled">All</div>
    <div class="n-tab">Chat</div>
    <div class="n-tab">Users</div>
  </div>
</ExampleSection>
:::

```html
<ul class="n-tabbar">
  <li class="disabled"><button>1</button></li>
  <li><button>2</button></li>
  <li><button>3</button></li>
</ul>

<div class="n-tabbar">
  <div class="n-tab disabled">1</div>
  <div class="n-tab">2</div>
  <div class="n-tab">3</div>
</div>
```

## Overriding

탭바 컴포넌트는 스타일 재정의에 대한 변수를 아래와 같이 제공하고 있습니다

```css
.n-tabbar {
  --tabbar-border-width: 0 0 1px 0;
  --tabbar-border-style: solid;
  --tabbar-border-color: var(--color-base-3);
  --tabbar-border-color-active: var(--color-main-2);

  --tab-color-active: var(--color-main-2);
}
```

<QuickLinks :componentName="'Tabbar'"/>
