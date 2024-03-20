<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  function toggleDrawerHandler(event) {
    const targetSelector = event.currentTarget.getAttribute("data-n-target");
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) targetEl.classList.toggle("active");
  }

  function initDrawer() {
    const drawerTriggerElList = document.querySelectorAll(
      '[data-n-toggle="drawer"]'
    );

    drawerTriggerElList.forEach((el) => {
      el.addEventListener("click", toggleDrawerHandler);
    });
  }

  initDrawer();
})
</script>

# 드로어 (Drawer)

드로어 컴포넌트는 화면의 가장자리에서 슬라이드되어 나오는 패널 컴포넌트입니다.

<QuickLinks :componentName="'Drawer'"/>

## Usage

드로어 컴포넌트는 요소에 `n-drawer` 클래스를 적용하여 사용할 수 있습니다.

<ExampleSection>
  <button data-n-toggle="drawer" data-n-target="#drawer" class="n-btn">여기를 눌러보세요</button>
  <div id="drawer" class="n-drawer">
    <div class="p:2">Hello World</div>
  </div>
</ExampleSection>

```html
<div class="n-drawer">
  <div class="p:2">Hello World</div>
</div>
```

클래스 `n-drawer`와 함께 `active` 클래스를 적용하여 화면에 드로어 컴포넌트를 나타낼 수 있습니다.

```html{1}
<div class="n-drawer active">
  <div class="p:2">Hello World</div>
</div>
```

## Position

`n-drawer` 클래스와 함께 `n-drawer-position:left` 또는 `n-drawer-position:right`로 드로어의 위치를 정할 수 있습니다. 기본은 `right`입니다.

<ExampleSection>
  <button data-n-toggle="drawer" data-n-target="#drawer-position" class="n-btn">여기를 눌러보세요</button>
  <div id="drawer-position" class="n-drawer n-drawer-position:left">
    <div class="p:2">Hello World</div>
  </div>
</ExampleSection>

```html
<div class="n-drawer n-drawer-position:left">
  <div class="p:2">Hello World</div>
</div>
```

| 클래스                             | 약어클래스                    |
| ---------------------------------- | ----------------------------- |
| `n-drawer n-drawer-position:right` | `n-drawer n-drawer-pos:right` |
| `n-drawer n-drawer-position:left`  | `n-drawer n-drawer-pos:left`  |

## Interactive Drawer Example

JavaScript DOM을 활용하여 인터랙티브한 드로어 컴포넌트를 만들 수 있습니다. 다음은 간단한 예시입니다:

```html
<button data-n-toggle="drawer" data-n-target="#drawer" class="n-btn">
  여기를 눌러보세요
</button>
<div id="drawer" class="n-drawer">
  <div class="p:2">Hello World</div>
</div>
```

```js
window.addEventListener("load", function () {
  initDrawer();

  function toggleDrawerHandler(event) {
    const targetSelector = event.currentTarget.getAttribute("data-n-target");
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) targetEl.classList.toggle("active");
  }

  function initDrawer() {
    const drawerTriggerElList = document.querySelectorAll(
      '[data-n-toggle="drawer"]'
    );

    drawerTriggerElList.forEach((el) => {
      el.addEventListener("click", toggleDrawerHandler);
    });
  }
});
```

## Overriding

드로어 컴포넌트의 변수는 다음과 같습니다:

```css
.n-drawer {
  --drawer-width: 288px;
  --drawer-background-color: var(--color-base-1);

  --drawer-z-index: 1200;
}
```

<QuickLinks :componentName="'Drawer'"/>
