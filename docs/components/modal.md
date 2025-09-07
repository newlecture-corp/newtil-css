<script setup>
import ModalDomExample from "./demo/ModalDomExample.vue";
</script>

# 모달 (Modal)

모달 컴포넌트는 사용자에게 중요한 정보를 표시하거나 사용자 입력을 요구할 때 사용하는 컴포넌트입니다.

<QuickLinks :componentName="'Modal'"/>

## Usage

모달 컴포넌트는 요소에 `n-modal` 클래스를 적용하여 사용할 수 있습니다.
:::raw
<ExampleSection>

<section class="n-modal example" tabindex="-1">
  <h1 class="n-font:h3 font-weight:3">모달 예시</h1>

  <div class="mt:8 text-a:center">Hello World</div>

  <div class="d:flex fl-direction:column gap:2 mt:8 w:5">
    <button type="button" class="n-btn n-btn-size:3">확인</button>
    <button type="button" class="n-btn n-btn:void n-btn-size:3">닫기</button>
  </div>
</section>
</ExampleSection>
:::

```html
<section class="n-modal" tabindex="-1">
  <h1 class="n-font:h3 font-weight:3">모달 예시</h1>

  <div class="mt:8 text-a:center">Hello World</div>

  <div class="d:flex fl-direction:column gap:2 mt:8">
    <button type="button" class="n-btn n-btn-size:3">확인</button>
    <button type="button" class="n-btn n-btn:void n-btn-size:3">닫기</button>
  </div>
</section>
```

모달 컴포넌트에 사용되는 변수는 다음과 같습니다:

```css
.n-modal {
  --modal-border-radius: 16px;
  --modal-border: none;
  --modal-box-shadow: rgba(0, 0, 0, 0.08) 0 16px 20px -4px, rgba(0, 0, 0, 0.03) 0
      8px 8px -4px;
  --modal-z-index: 1200;
}
```

:::tip
컴포넌트 커스터마이징에 대한 자세한 내용은 [컴포넌트 커스터마이징하기](/guide/getting-started-component#customize-components)에서 확인하실 수 있습니다.
:::

## Interactive Modal Example

JavaScript DOM과 CSS 애니메이션을 활용하여 인터랙티브한 모달 컴포넌트를 만들 수 있습니다. 다음은 간단한 예시입니다:

:::raw
<ExampleSection>
<ModalDomExample/>
</ExampleSection>
:::

::: details codes

```html
<!-- HTML -->
<button id="modal-btn" type="button" class="n-btn">모달 열기</button>

<section id="modal" class="n-modal d:none" tabindex="-1">
  <h1 class="n-font:subtitle text-align:center">반가워요! 👋</h1>
  <div class="mt:4">
    <button id="close-btn" type="button" class="n-btn w:5">닫기</button>
  </div>
</section>
<div id="modal-backdrop" class="backdrop d:none"></div>
```

```js
// JavaScript
window.addEventListener('load', function () {
  const openButton = document.getElementById('modal-btn');
  const closeButton = document.getElementById('close-btn');
  const modal = document.getElementById('modal');
  const modalBackdrop = document.getElementById('modal-backdrop');

  openButton.addEventListener('click', function () {
    modal.classList.remove('d:none');
    modalBackdrop.classList.remove('d:none');
    modal.classList.add('modal-fade-in');
  });

  closeButton.addEventListener('click', function () {
    modal.classList.replace('modal-fade-in', 'modal-fade-out');

    setTimeout(() => {
      modal.classList.add('d:none');
      modalBackdrop.classList.add('d:none');
      modal.classList.remove('modal-fade-out');
    }, 130);
  });
});
```

```css
/* CSS */
.n-modal {
  transition: transform 0.13s, opacity 0.13s;
}

.modal-fade-in {
  animation: modal-fade-in 0.13s forwards;
}

.modal-fade-out {
  animation: modal-fade-out 0.13s forwards;
}

@keyframes modal-fade-in {
  from {
    opacity: 0;
    transform: translate(50%, -48%) scale(0.97);
  }
  to {
    opacity: 1;
    transform: translate(50%, -50%) scale(1);
  }
}

@keyframes modal-fade-out {
  from {
    opacity: 1;
    transform: translate(50%, -50%) scale(1);
  }
  to {
    opacity: 0;
    transform: translate(50%, -48%) scale(0.97);
  }
}

.backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.2);
}
```

:::

## Example

모달 컴포넌트를 활용한 다양한 예시입니다.

:::raw
<ExampleSection>

<section class="n-modal example" tabindex="-1">
  <h1 class="n-font:h3 font-weight:3">신청 안내</h1>

  <form >
    <div class="my:5">
      <label>
        이름
        <input type="text" class="n-textbox n-textbox-label:top w:5" />
      </label>
    </div>
    <div class="my:5">
      <label>
        이메일
        <input type="text" class="n-textbox n-textbox-label:top w:5" />
      </label>
    </div>
    <div class="d:flex jc:flex-end gap:2 mt:8">
      <button type="button" class="n-btn n-btn:outline">취소</button>
      <button type="button" class="n-btn">신청</button>
    </div>
  </form>
</section>
</ExampleSection>
:::

::: details codes

```html
<section class="n-modal" tabindex="-1">
  <h1 class="n-font:h3 font-weight:3">신청 안내</h1>
  <form>
    <div class="my:5">
      <label>
        이름
        <input type="text" class="n-textbox n-textbox-label:top w:5" />
      </label>
    </div>
    <div class="my:5">
      <label>
        이메일
        <input type="text" class="n-textbox n-textbox-label:top w:5" />
      </label>
    </div>
    <div class="d:flex jc:flex-end gap:2 mt:8">
      <button type="button" class="n-btn n-btn:outline">취소</button>
      <button type="submit" class="n-btn">신청</button>
    </div>
  </form>
</section>
```

:::

<QuickLinks :componentName="'Modal'"/>

<style>
.n-modal {
  padding-top: 16px;
  padding-right: 24px;
  padding-left: 24px;
  padding-right: 16px;
}

.n-modal.example {
  position: relative;
  top: 0;
  right: 0;
  transform: translate(0, 0);
  z-index:0;
}

.backdrop {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 1000;
}
</style>
