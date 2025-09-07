<script setup></script>

# 페이저 (Pager)

페이저 컴포넌트는 나누어진 콘텐츠를 찾아가기 위한 링크를 나타내는 컴포넌트입니다.

<QuickLinks :componentName="'pager'"/>

## Usage

페이저 컴포넌트는 `ul` 요소에 `n-pager` 클래스를 적용하고, 활성화된 페이지를 `li` 요소에 `active` 클래스를 추가하여 나타냅니다. 페이지 번호는 내부 `<button>` 또는 `<a> `요소로 나타낼 수 있습니다.

:::raw
<ExampleSection>

<ul class="n-pager">
  <li class="active"><a>1</a></li>
  <li><a>2</a></li>
  <li><a>3</a></li>
</ul>
</ExampleSection>
:::

```html
<ul class="n-pager">
  <li class="active"><a>1</a></li>
  <li><a>2</a></li>
  <li><a>3</a></li>
</ul>
```

`n-pager`와 함께 `n-page` 클래스를 사용하여 페이지네이션을 `ul`, `li` 요소로 구성하지 않고 다른 요소를 사용하는 방법도 있습니다.

:::raw
<ExampleSection>

<div class="n-pager">
  <button class="n-page active">1</button>
  <button class="n-page">2</button>
  <button class="n-page">3</button>
</div>
</ExampleSection>
:::

```html
<div class="n-pager">
  <button class="n-page active">1</button>
  <button class="n-page">2</button>
  <button class="n-page">3</button>
</div>
```

## Disabled

`li` 요소 또는 `n-page` 클래스에 `disabled` 클래스를 추가하여 페이지네이션 컴포넌트에 비활성화 스타일을 적용할 수 있습니다.

:::raw
<ExampleSection class="flex-direction:column align-items:center gap:4">

<ul class="n-pager">
  <li class="disabled">
    <a>1</a>
  </li>
  <li>
    <a>2</a>
  </li>
  <li>
    <a>3</a>
  </li>
</ul>

<div class="n-pager">
  <button class="n-page disabled">
    1
  </button>
  <button class="n-page">
    2
  </button>
  <button class="n-page">
    3
  </button>
</div>
</ExampleSection>
:::

```html
<ul class="n-pager">
  <li class="disabled">
    <a>1</a>
  </li>
  <li>
    <a>2</a>
  </li>
  <li>
    <a>3</a>
  </li>
</ul>

<div class="n-pager">
  <button class="n-page disabled">1</button>
  <button class="n-page">2</button>
  <button class="n-page">3</button>
</div>
```

<QuickLinks :componentName="'Pager'"/>
