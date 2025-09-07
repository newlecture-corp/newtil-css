<script setup>
const formTypes = [
  {
    text: 'Outline-box',
    status: 'outline-box',
  },
  {
    text: 'Shadow',
    status: 'shadow',
  },
  {
    text: 'Underline',
    status: 'underline',
  },
  {
    text: 'Outline-none',
    status: 'outline-none',
  },
]

const textboxStatus = [
  {
    text: 'Focus',
    status: 'focus',
    value: '|',
  },
  {
    text: 'Success',
    status: 'success',
    value: '홍길동',
  },
  {
    text: 'Warning',
    status: 'warning',
    value: '홍&#*$',
  },
  {
    text: 'Disabled',
    status: 'disabled',
    value: '',
  },
]
</script>

# 폼 (Form)

Form 컴포넌트는 사용자의 데이터를 응답받기 위한 컴포넌트입니다. [Textbox](./textbox), [Toggle](./toggle) 컴포넌트 등 다양한 입력 도구를 사용하여 폼을 구성할 수 있습니다.

<QuickLinks :componentName="'Form'"/>

## Overview

### Type {#overview-type}

`outline-box`, `shadow`, `underline`, `outline-none` 타입이 제공됩니다. 자세한 내용을 보려면 [여기](#type)를 클릭하세요.

<ExampleSection class="flex-wrap:wrap gap:4 jc:space-around">
  <section v-for="typ of formTypes">
    <h4>{{ typ.text }}</h4>
    <form class="n-form my:2" :class="`n-form-type:${typ.status}`">
      <div>
        <label>
          <span>label</span>
          <input type="text" placeholder="placeholder"/>
        </label>
      </div>
      <div>
        <label>
          <span>label</span>
          <input type="text" placeholder="placeholder"/>
        </label>
      </div>
    </form>
  </section>
</ExampleSection>

### Responsive Layout {#overview-responseve-layout}

화면 크기에 따라 `label`의 위치를 조정할 수 있습니다. 자세한 내용을 보려면 [여기](#responsive-layout)를 클릭하세요.

<ExampleSection class="gap:4 jc:space-around">
  <section>
    <h4>Top</h4>
    <form class="n-form my:2">
      <div>
        <label>
          <span>label</span>
          <input type="text" placeholder="placeholder"/>
        </label>
      </div>
      <div>
        <label>
          <span>label</span>
          <input type="text" placeholder="placeholder"/>
        </label>
      </div>
    </form>
  </section>

  <section>
    <h4>Left</h4>
    <form class="n-form my:2">
      <div>
        <label class="flex-direction:row">
          <span class="white-space:nowrap as:center">label</span>
          <input type="text" placeholder="placeholder"/>
        </label>
      </div>
      <div>
        <label class="flex-direction:row">
          <span class="white-space:nowrap as:center">label</span>
          <input type="text" placeholder="placeholder"/>
        </label>
      </div>
    </form>
  </section>
</ExampleSection>

### Field TextBox Type {#overview-field-text-type}

`outline`, `underline` 타입이 제공됩니다. 자세한 내용을 보려면 [여기](#field-textbox-type)를 클릭하세요.

<ExampleSection class="gap:4 jc:space-around">
  <section>
    <h4>Outline</h4>
    <form class="n-form my:2">
      <div>
        <label>
          <span>label</span>
          <input type="text" placeholder="placeholder"/>
        </label>
      </div>
    </form>
  </section>

  <section>
    <h4>Underline</h4>
    <form class="n-form n-field-textbox:underline my:2">
      <div>
        <label>
          <span>label</span>
          <input type="text" placeholder="placeholder"/>
        </label>
      </div>
    </form>
  </section>
</ExampleSection>

### Field TextBox Status {#overview-field-textbox-status}

`focus`, `success`, `warning`, `disabled` 상태가 제공됩니다. 자세한 내용을 보려면 [여기](#field-textbox-status)를 클릭하세요.

<ExampleSection class="flex-wrap:wrap gap:4 jc:space-around">
  <section v-for="item of textboxStatus">
    <h4>{{ item.text }}</h4>
    <form class="n-form my:2">
      <div>
        <label>
          <span>label</span>
          <input type="text" placeholder="placeholder" :class="`n-field-textbox-status:${item.status}`"
          :value="`${item.value}`"/>
        </label>
      </div>
    </form>
  </section>
</ExampleSection>

## Usage

Form 컴포넌트는 `form` 태그에 `n-form` 클래스를 적용하여 사용할 수 있습니다.

<ExampleSection class="mt:4">
  <form class="n-form">
    <div>
      <label>
        <span>label</span>
        <input type="text" placeholder="placeholder"/>
      </label>
    </div>
  </form>
</ExampleSection>

```html{1}
<form class="n-form">
  <div>
    <label>
      <span>label</span>
      <input type="text" placeholder="placeholder" />
    </label>
  </div>
</form>
```

::: warning notice

Form 컴포넌트를 사용하기 위해서는 다음의 구조를 따라야 합니다. `html` 코드 예시를 참고하여 적용해보세요.

1. 하나의 필드는 `<div>`태그로 감쌉니다.
2. `<label>` 요소가 `<input>` 혹은 `<textarea>` 요소를 포함하는 경우\* 필드 제목을 `<span>` 태그로 감쌉니다.<br> \*[Nesting](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#:~:text=Alternatively%2C%20you%20can%20nest%20the%20%3Cinput%3E%20directly%20inside%20the%20%3Clabel%3E%2C%20in%20which%20case%20the%20for%20and%20id%20attributes%20are%20not%20needed%20because%20the%20association%20is%20implicit%3A)

:::

## Type

Form 컴포넌트에는 기본적으로 `outlin` 스타일이 적용됩니다.

`form` 태그에 `n-form-type:타입명` 또는 약어 클래스 `n-form:타입명`를 사용하여 원하는 스타일을 적용할 수 있습니다.

<ExampleSection class="flex-wrap:wrap gap:4 jc:space-around">
  <section v-for="typ of ['outline-box', 'shadow', 'underline', 'outline-none']">
    <form class="n-form row-gap:4" :class="`n-form-type:${typ}`">
      <div>
        <label>
          <span>type</span>
          <input type="text" placeholder="placeholder" :value="`${typ}`"/>
        </label>
      </div>
      <div>
        <label>
          <span>label</span>
          <input type="text" placeholder="placeholder"/>
        </label>
      </div>
    </form>
  </section>
</ExampleSection>

::: details codes

```html{1,15,29,43}
<form class="n-form n-form-type:outline-box">
  <div>
    <label>
      <span>type</span>
      <input type="text" placeholder="placeholder"/>
    </label>
  </div>
  <div>
    <label>
      <span>label</span>
      <input type="text" placeholder="placeholder" />
    </label>
  </div>
</form>
<form class="n-form n-form-type:shadow">
  <div>
    <label>
      <span>type</span>
      <input type="text" placeholder="placeholder"/>
    </label>
  </div>
  <div>
    <label>
      <span>label</span>
      <input type="text" placeholder="placeholder" />
    </label>
  </div>
</form>
<form class="n-form n-form-type:underline">
  <div>
    <label>
      <span>type</span>
      <input type="text" placeholder="placeholder"/>
    </label>
  </div>
  <div>
    <label>
      <span>label</span>
      <input type="text" placeholder="placeholder" />
    </label>
  </div>
</form>
<form class="n-form n-form-type:outline-none">
  <div>
    <label>
      <span>type</span>
      <input type="text" placeholder="placeholder"/>
    </label>
  </div>
  <div>
    <label>
      <span>label</span>
      <input type="text" placeholder="placeholder" />
    </label>
  </div>
</form>
```

:::

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
      <th>outline-box</th>
      <td>
        <code>n-form-type:outline-box</code>
      </td>
      <td>
        <code>n-form-type:outline</code><br/><code>n-form:outline-box</code><br><code>n-form:outline</code>
      </td>
    </tr>
    <tr>
      <th>shadow</th>
      <td>
        <code>n-form-type:shadow</code>
      </td>
      <td>
        <code>n-form-type:shadow</code><br/><code>n-form:shadow</code>
      </td>
    </tr>
    <tr>
      <th>underline</th>
      <td>
        <code>n-form-type:underline</code>
      </td>
      <td>
        <code>n-form-type:underline</code><br/><code>n-form:underline</code>
      </td>
    </tr>
    <tr>
      <th>outline-none</th>
      <td>
        <code>n-form-type:outline-none</code>
      </td>
      <td>
        <code>n-form-type:outline-none</code><br/><code>n-form:outline-none</code>
      </td>
    </tr>
  </tbody>
</table>

## Responsive Layout

기본적으로 필드의 제목이 상단, 컨텐츠가 하단에 위치하며, 화면의 크기에 따라 필드의 레이아웃을 달리할 수 있습니다.

`*bp:n-field-label-position:위치` 또는 약어 클래스 `bp:n-field-label:위치`를 사용하여 라벨의 위치를 변경할 수 있습니다. <br>
<span class="c:weak">\*bp: breakpoint (md, lg)</span>

<ExampleSection class="gap:4 jc:space-around">
  <form class="n-form">
    <div>
      <label>
        <span>position</span>
        <input type="text" placeholder="placeholder" value="top"/>
      </label>
    </div>
    <div>
      <label>
        <span>label</span>
        <input type="text" placeholder="placeholder"/>
      </label>
    </div>
  </form>

  <form class="n-form">
    <div>
      <label class="flex-direction:row">
        <span class="white-space:nowrap as:center">position</span>
        <input type="text" placeholder="placeholder" value="left"/>
      </label>
    </div>
    <div>
      <label class="flex-direction:row">
        <span class="white-space:nowrap as:center">label</span>
        <input type="text" placeholder="placeholder"/>
      </label>
    </div>
  </form>
</ExampleSection>

::: details codes

```html{1,17}
<form class="n-form n-field-label-position:top">
  <div>
    <label>
      <span>position</span>
      <input type="text" placeholder="placeholder"/>
    </label>
  </div>
  <div>
    <label>
      <span>label</span>
      <input type="text" placeholder="placeholder"/>
    </label>
  </div>
</form>

<!-- 화면 크기가 md 이상일 때 label이 왼쪽에 위치합니다 -->
<form class="n-form md:n-field-label-position:left">
  <div>
    <label>
      <span>position</span>
      <input type="text" placeholder="placeholder"/>
    </label>
  </div>
  <div>
    <label>
      <span>label</span>
      <input type="text" placeholder="placeholder"/>
    </label>
  </div>
</form>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">위치</th>
      <th scope="col">클래스</th>
      <th scope="col">약어 클래스</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>top</th>
      <td>
        <code>n-field-label-position:top</code>
      </td>
      <td>
        <code>n-field-label:top</code>
      </td>
    </tr>
    <tr>
      <th>left</th>
      <td>
        <code>bp:n-field-label-position:left</code>
      </td>
      <td>
        <code>bp:n-field-label:left</code>
      </td>
    </tr>
  </tbody>
</table>

## Field TextBox Type

필드의 텍스트박스 타입에는 기본적으로 `outline` 스타일이 적용됩니다.

`n-field-textbox-type:타입명` 또는 약어 클래스 `n-field-textbox:타입명`을 사용하여 텍스트박스의 타입을 변경할 수 있습니다.

<ExampleSection class="gap:4 jc:space-around">
  <form class="n-form">
    <div>
      <label>
        <span>type</span>
        <input type="text" placeholder="placeholder" value="outline"/>
      </label>
    </div>
  </form>

  <form class="n-form n-field-textbox:underline">
    <div>
      <label>
        <span>type</span>
        <input type="text" placeholder="placeholder" value="underline"/>
      </label>
    </div>
  </form>
</ExampleSection>

::: details codes

```html
<form class="n-form">
  <div>
    <label>
      <span>type</span>
      <input type="text" placeholder="placeholder" />
    </label>
  </div>
</form>

<form class="n-form n-field-textbox:underline">
  <div>
    <label>
      <span>type</span>
      <input type="text" placeholder="placeholder" />
    </label>
  </div>
</form>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">타입</th>
      <th scope="col">클래스</th>
      <th scope="col">약어 클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>outline</th>
      <td>
        <code>n-field-textbox-type:outline</code>
      </td>
      <td>
        <code>n-field-textbox:outline</code>
      </td>
      <td></td>
    </tr>
    <tr>
      <th>underline</th>
      <td>
        <code>n-field-textbox-type:underline</code>
      </td>
      <td>
        <code>n-field-textbox:underline</code>
      </td>
      <td>
        <span class="code">
          .n-form { <br/> 
            --textbox-underline-border-width: 1.6px;<br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

::: tip
더 높은 유연성을 가진 `Textbox` 컴포넌트를 사용할 수도 있습니다. 자세한 내용은 [여기](./textbox)를 참고해주세요.
:::

## Field TextBox Status

필드 텍스트박스의 상태로 `focus`, `success`, `warning`, `disabled`가 제공됩니다.

텍스트 입력 `input` 혹은 `textarea`에 `n-field-textbox-status:상태명` 클래스를 사용하여 텍스트박스의 상태를 변경할 수 있습니다.

<ExampleSection class="flex-wrap:wrap gap:4 jc:space-around">
  <section v-for="item of textboxStatus">
    <form class="n-form">
      <div>
        <label>
          <span>{{ item.status }}</span>
          <input type="text" placeholder="placeholder" :class="`n-field-textbox-status:${item.status}`"
          :value="`${item.value}`"/>
        </label>
      </div>
    </form>
  </section>
</ExampleSection>

::: details codes

```html{5,14,23,32}
<form class="n-form">
  <div>
    <label>
      <span>focus</span>
      <input type="text" placeholder="placeholder" class="n-field-textbox-status:focus"/>
    </label>
  </div>
</form>

<form class="n-form">
  <div>
    <label>
      <span>success</span>
      <input type="text" placeholder="placeholder" class="n-field-textbox-status:success"/>
    </label>
  </div>
</form>

<form class="n-form">
  <div>
    <label>
      <span>warning</span>
      <input type="text" placeholder="placeholder" class="n-field-textbox-status:warning"/>
    </label>
  </div>
</form>

<form class="n-form">
  <div>
    <label>
      <span>disabled</span>
      <input type="text" placeholder="placeholder" class="n-field-textbox-status:disabled"/>
    </label>
  </div>
</form>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">상태</th>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>focus</th>
      <td>
        <code>n-field-textbox-status:focus</code>
      </td>
      <td>
        <span class="code">
          .n-form { <br/> 
            --textbox-focus-border-color: var(--color-sub-2); <br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>success</th>
      <td>
        <code>n-field-textbox-status:success</code>
      </td>
      <td>
        <span class="code">
          .n-form { <br/> 
            --textbox-success-border-color: #37b24d; <br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>warning</th>
      <td>
        <code>n-field-textbox-status:warning</code>
      </td>
      <td>
        <span class="code">
          .n-form { <br/> 
            --textbox-warning-color: var(--color-accent-1); <br/>
            --textbox-warning-border-color: var(--color-accent-1); <br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>disabled</th>
      <td>
        <code>n-field-textbox-status:disabled</code>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

::: tip
더 높은 유연성을 가진 `Textbox` 컴포넌트를 사용할 수도 있습니다. 자세한 내용은 [여기](./textbox)를 참고해주세요.
:::

## Overriding

Form 컴포넌트는 스타일 재정의에 대한 변수를 아래와 같이 제공하고 있습니다.

```css
/* form.css */
.n-form {
  /* form style */
  --form-border-radius: 16px;
  --form-padding: 24px;

  /* textbox style */
  /* textbox-size */
  --textbox-padding-x: 12px;
  --textbox-input-height: 36px;
  --textbox-textarea-min-height: 58px;

  /* textbox-border-radius */
  --textbox-border-radius: 6px;

  /* textbox-border-color */
  --textbox-border-color: var(--color-base-3);

  /* textbox-border-width */
  --textbox-underline-border-width: 1.6px;

  /* textbox-status:focus */
  --textbox-border-color-focus: var(--color-sub-2);

  /* textbox-status:success */
  --textbox-border-color-success: #37b24d;

  /* textbox-status:warning */
  --textbox-color-warning: var(--color-accent-1);
  --textbox-border-color-warning: var(--color-accent-1);
}
```

### Example

<ExampleSection class="my:4">
  <form class="n-form border-radius:0 p:10">
    <div>
      <label>
        <span>이름</span>
        <input type="text" placeholder="이름을 입력해주세요"/>
      </label>
    </div>
    <div>
      <label>
        <span>취미</span>
        <input type="text" placeholder="취미을 입력해주세요"/>
      </label>
    </div>
    <div>
      <label>
        <span>국적</span>
        <input type="text" placeholder="국적을 입력해주세요"/>
      </label>
    </div>
  </form>
</ExampleSection>

::: details codes

```html
<form class="n-form">
  <div>
    <label>
      <span>이름</span>
      <input type="text" placeholder="이름을 입력해주세요" />
    </label>
  </div>
  <div>
    <label>
      <span>취미</span>
      <input type="text" placeholder="취미을 입력해주세요" />
    </label>
  </div>
  <div>
    <label>
      <span>국적</span>
      <input type="text" placeholder="국적을 입력해주세요" />
    </label>
  </div>
</form>
```

:::

```css
/* root.css */
.n-form {
  --form-border-radius: 0px;
  --form-padding: 40px;

  /* ... */
}
```

::: info
필드의 `Textbox` 스타일 재정의 예시는 [여기](./textbox#overriding)를 참고해주세요.

단, `Form` 컴포넌트의 필드 스타일을 재정의하려는 경우 `.n-textbox`가 아닌 `.n-form`의 변수를 조작해야 합니다.
:::

:::tip
컴포넌트 커스터마이징에 대한 자세한 내용은 [컴포넌트 커스터마이징하기](/guide/getting-started-component#customize-components)에서 확인하실 수 있습니다.
:::

## Example

::: raw

<ExampleSection>
  <form class="n-form">
    <h1 class="n-font:h3 font-weight:3">✏️ 리뷰 작성</h1>
    <div>
      <label>
        <span>작성자명</span>
        <input type="text" placeholder="작성자명을 입력해주세요"/>
      </label>
    </div>
    <div>
      <label>
        <span>리뷰 제목</span>
        <input type="text" placeholder="리뷰 제목을 입력해주세요"/>
      </label>
    </div>
    <div>
      <label>
        <span>리뷰 내용</span>
        <textarea placeholder="리뷰 내용을 300자 이내로 입력해주세요"></textarea>
      </label>
    </div>
    <div>
      <div>만족도</div>
      <div class="d:flex gap:4">
        <label class="flex-direction:row ai:center gap:3">
          <input type="radio" name="satisfaction" class="n-toggle n-toggle:dot"/>
          <span>1</span>
        </label>
        <label class="flex-direction:row ai:center gap:3">
          <input type="radio" name="satisfaction" class="n-toggle n-toggle:dot"/>
          <span>2</span>
        </label>
        <label class="flex-direction:row ai:center gap:3">
          <input type="radio" name="satisfaction" class="n-toggle n-toggle:dot"/>
          <span>3</span>
        </label>
        <label class="flex-direction:row ai:center gap:3">
          <input type="radio" name="satisfaction" class="n-toggle n-toggle:dot"/>
          <span>4</span>
        </label>
        <label class="flex-direction:row ai:center gap:3">
          <input type="radio" name="satisfaction" class="n-toggle n-toggle:dot" checked/>
          <span>5</span>
        </label>
      </div>
    </div>
    <div>
      <label>
        <span>리뷰 공개 여부</span>
        <input type="checkbox" class="n-toggle"/>
      </label>
    </div>
    <div>
      <button @click.prevent class="n-btn">등록하기</button>
    </div>
  </form>
</ExampleSection>

:::

::: details codes

```html
<form class="n-form">
  <h1 class="n-font:h3 font-weight:3">✏️ 리뷰 작성</h1>
  <div>
    <label>
      <span>작성자명</span>
      <input type="text" placeholder="작성자명을 입력해주세요" />
    </label>
  </div>
  <div>
    <label>
      <span>리뷰 제목</span>
      <input type="text" placeholder="리뷰 제목을 입력해주세요" />
    </label>
  </div>
  <div>
    <label>
      <span>리뷰 내용</span>
      <textarea placeholder="리뷰 내용을 300자 이내로 입력해주세요"></textarea>
    </label>
  </div>
  <div>
    <div>만족도</div>
    <fieldset class="d:flex gap:4">
      <label class="flex-direction:row ai:center gap:3">
        <input type="radio" name="satisfaction" class="n-toggle n-toggle:dot" />
        <span>1</span>
      </label>
      <label class="flex-direction:row ai:center gap:3">
        <input type="radio" name="satisfaction" class="n-toggle n-toggle:dot" />
        <span>2</span>
      </label>
      <label class="flex-direction:row ai:center gap:3">
        <input type="radio" name="satisfaction" class="n-toggle n-toggle:dot" />
        <span>3</span>
      </label>
      <label class="flex-direction:row ai:center gap:3">
        <input type="radio" name="satisfaction" class="n-toggle n-toggle:dot" />
        <span>4</span>
      </label>
      <label class="flex-direction:row ai:center gap:3">
        <input
          type="radio"
          name="satisfaction"
          class="n-toggle n-toggle:dot"
          checked />
        <span>5</span>
      </label>
    </fieldset>
  </div>
  <div>
    <label>
      <span>리뷰 공개 여부</span>
      <input type="checkbox" class="n-toggle" />
    </label>
  </div>
  <div>
    <button class="n-btn">등록하기</button>
  </div>
</form>
```

:::

<QuickLinks :componentName="'Form'"/>
