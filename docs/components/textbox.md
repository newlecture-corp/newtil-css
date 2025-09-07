<script setup></script>

# 텍스트 박스 (Textbox)

텍스트 박스 컴포넌트는 주로 사용자로부터 텍스트를 입력받기 위해 사용됩니다.

<QuickLinks :componentName="'Textbox'"/>

## Overview

### Type {#overview-type}

`outline`, `underline` 타입이 제공되며, `underline`의 경우 `텍스트 입력이 가능한 input` 태그에 한하여 제공됩니다. 자세한 내용을 보려면 [여기](#type)를 클릭하세요.

#### Input

<div class="n-item d:flex fl-dir:column jc:center gap:4 my:4">
    <label>
        OutlineType
        <input type="text" class="n-textbox n-textbox-label:top" placeholder="placeholder"/>
    </label>
    <label>
        UnderlineType
        <input type="text" class="n-textbox n-textbox:underline n-textbox-label:top" placeholder="placeholder"/>
    </label>
</div>

#### Textarea

<div class="n-item d:flex jc:center mt:4">
    <label>
        OutlineType
        <textarea type="text" class="n-textbox n-textbox-label:top" placeholder="placeholder"></textarea>
    </label>
</div>

### Status {#overview-status}

`focus`, `success`, `warning`, `disabled` 상태가 제공됩니다. 자세한 내용을 보려면 [여기](#status)를 클릭하세요.

#### Focus

<div class="n-item d:flex fl-dir:column jc:center gap:4 my:4">
    <label>
        OutlineType
        <input type="text" class="n-textbox n-textbox-label:top n-textbox-status:focus" placeholder="placeholder"/>
    </label>
    <label>
        UnderlineType
        <input type="text" class="n-textbox n-textbox:underline n-textbox-label:top n-textbox-status:focus" placeholder="placeholder"/>
    </label>
</div>

<div class="n-item d:flex jc:center my:4">
    <label>
        OutlineType
        <textarea type="text" class="n-textbox n-textbox-label:top n-textbox-status:focus" placeholder="placeholder"></textarea>
    </label>
</div>

#### Success

<div class="n-item d:flex fl-dir:column jc:center gap:4 my:4">
    <label>
        OutlineType
        <input type="text" class="n-textbox n-textbox-label:top n-textbox-status:success" placeholder="placeholder"/>
    </label>
    <label>
        UnderlineType
        <input type="text" class="n-textbox n-textbox:underline n-textbox-label:top n-textbox-status:success" placeholder="placeholder"/>
    </label>
</div>

<div class="n-item d:flex jc:center my:4">
    <label>
        OutlineType
        <textarea type="text" class="n-textbox n-textbox-label:top n-textbox-status:success" placeholder="placeholder"></textarea>
    </label>
</div>

#### Warning

<div class="n-item d:flex fl-dir:column jc:center gap:4 my:4">
    <label>
        OutlineType
        <input type="text" class="n-textbox n-textbox-label:top n-textbox-status:warning" placeholder="placeholder"/>
    </label>
    <label>
        UnderlineType
        <input type="text" class="n-textbox n-textbox:underline n-textbox-label:top n-textbox-status:warning" placeholder="placeholder"/>
    </label>
</div>

<div class="n-item d:flex jc:center my:4">
    <label>
        OutlineType
        <textarea type="text" class="n-textbox n-textbox-label:top n-textbox-status:warning" placeholder="placeholder"></textarea>
    </label>
</div>

#### Disabled

<div class="n-item d:flex fl-dir:column jc:center gap:4 my:4">
    <label>
        OutlineType
        <input type="text" class="n-textbox n-textbox-label:top" placeholder="placeholder" disabled/>
    </label>
    <label>
        UnderlineType
        <input type="text" class="n-textbox n-textbox:underline n-textbox-label:top" placeholder="placeholder" disabled/>
    </label>
</div>

<div class="n-item d:flex jc:center mt:4">
    <label>
        OutlineType
        <textarea type="text" class="n-textbox n-textbox-label:top" placeholder="placeholder" disabled></textarea>
    </label>
</div>

### Label {#overview-label}

라벨을 텍스트박스의 상단 또는 하단에 위치시킬 수 있습니다. 자세한 내용을 보려면 [여기](#label)를 클릭하세요.

#### Top

<div class="n-item d:flex fl-dir:column jc:center gap:4 my:4">
    <label>
        OutlineType
        <input type="text" class="n-textbox n-textbox-label:top" placeholder="placeholder"/>
    </label>
    <label>
        UnderlineType
        <input type="text" class="n-textbox n-textbox:underline n-textbox-label:top" placeholder="placeholder"/>
    </label>
</div>

<div class="n-item d:flex jc:center my:4">
    <label>
        OutlineType
        <textarea type="text" class="n-textbox n-textbox-label:top" placeholder="placeholder"></textarea>
    </label>
</div>

#### Bottom

<div class="n-item d:flex fl-dir:column jc:center gap:4 my:4">
    <label>
        OutlineType
        <input type="text" class="n-textbox n-textbox-label:bottom" placeholder="placeholder"/>
    </label>
    <label>
        UnderlineType
        <input type="text" class="n-textbox n-textbox:underline n-textbox-label:bottom" placeholder="placeholder"/>
    </label>
</div>

<div class="n-item d:flex jc:center mt:4">
    <label>
        OutlineType
        <textarea type="text" class="n-textbox n-textbox-label:bottom" placeholder="placeholder"></textarea>
    </label>
</div>

## Usage

텍스트 박스 컴포넌트는 `텍스트 입력이 가능한 input` 태그 또는 `textarea` 태그에 `n-textbox` 클래스를 적용하여 사용할 수 있습니다.
<br/> 또한, 텍스트 박스의 크기를 조정하려면 유틸 클래스의 `resize`속성을 사용할 수 있습니다. 자세한 내용은 [여기](../utility/resize.md)를 참고해주세요.

### Input

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:100p d:flex jc:center">
            <input type="text" class="n-textbox" placeholder="Basic Textbox"/>
        </div>
    </ExampleSection>
</div>
:::

```html
<input type="text" class="n-textbox" placeholder="Basic Textbox" />
```

### Textarea

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:100p d:flex jc:center">
            <textarea type="text" class="n-textbox" placeholder="Basic Textbox"></textarea>
        </div>
    </ExampleSection>
</div>
:::

```html
<textarea type="text" class="n-textbox" placeholder="Basic Textbox"></textarea>
```

## Type

텍스트 박스 컴포넌트는 기본적으로 `outline` 스타일이 적용되며, `input` 태그에는 추가로 `underline` 스타일을 제공합니다.
`input` 태그에 `n-textbox-type:타입명` 또는 `n-textbox:타입명`과 같은 약어 클래스를 사용하여 텍스트 박스에 원하는 스타일을 적용할 수 있습니다.

### Input

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4 d:flex fl-dir:column jc:center gap:4">
        <div class="w:100p">
            <input type="text" class="n-textbox n-textbox-type:outline" placeholder="Outline Textbox"/>
        </div>
        <div class="w:100p d:flex jc:center">
            <input type="text" class="n-textbox n-textbox-type:underline" placeholder="Underline Textbox"/>
        </div>
    </ExampleSection>
</div>
:::

```html
<input
  type="text"
  class="n-textbox n-textbox-type:outline"
  placeholder="Outline Textbox" />
<input
  type="text"
  class="n-textbox n-textbox-type:underline"
  placeholder="Underline Textbox" />
```

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
        <code>n-textbox-type:outline</code>
      </td>
      <td>
        <code>n-textbox:outline</code>
      </td>
      <td>
      </td>
    </tr>
    <tr>
      <th>underline</th>
      <td>
        <code>n-textbox-type:underline</code>
      </td>
      <td>
        <code>n-textbox:underline</code>
      </td>
      <td>
        <span class="code">
          .n-textbox { <br/> 
            --textbox-underline-border-width: 1.6px; <br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Textarea

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <textarea type="text" class="n-textbox n-textbox-type:outline" placeholder="Outline Textbox"></textarea>
    </ExampleSection>
</div>
:::

```html
<textarea
  type="text"
  class="n-textbox n-textbox-type:outline"
  placeholder="Outline Textbox"></textarea>
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
      <th>outline</th>
      <td>
        <code>n-textbox-type:outline</code>
      </td>
      <td>
        <code>n-textbox:outline</code>
      </td>
    </tr>
  </tbody>
</table>

## Status

입력된 텍스트의 유효성에 따라 `focus`, `success`, `warning`, `disabled` 상태를 적용할 수 있으며, `input 태그`와 `textarea 태그` 모두 동일하게 적용됩니다.

### Focus

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4 d:flex fl-dir:column jc:center gap:4">
        <div class="w:100p">
            <input type="text" class="n-textbox n-textbox-type:outline n-textbox-status:focus" placeholder="Outline Focus"/>
        </div>
        <div class="w:100p d:flex jc:center">
            <input type="text" class="n-textbox n-textbox-type:underline n-textbox-status:focus" placeholder="Underline Focus"/>
        </div>
    </ExampleSection>
    <ExampleSection class="mt:4">
        <textarea type="text" class="n-textbox n-textbox-type:outline n-textbox-status:focus" placeholder="Outline Focus"></textarea>
    </ExampleSection>
</div>
:::

::: details codes

```html
<input
  type="text"
  class="n-textbox n-textbox-type:outline n-textbox-status:focus"
  placeholder="Outline Focus" />
<input
  type="text"
  class="n-textbox n-textbox-type:underline n-textbox-status:focus"
  placeholder="Underline Focus" />
<textarea
  type="text"
  class="n-textbox n-textbox-type:outline n-textbox-status:focus"
  placeholder="Outline Focus"></textarea>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>n-textbox-status:success</code></td>
      <td>
        <span class="code">
          .n-textbox { <br/> 
            --textbox-border-color-focus: var(--color-sub-2);<br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Success

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4 d:flex fl-dir:column jc:center gap:4">
        <div class="w:100p">
            <input type="text" class="n-textbox n-textbox-type:outline n-textbox-status:success" placeholder="Outline Success"/>
        </div>
        <div class="w:100p d:flex jc:center">
            <input type="text" class="n-textbox n-textbox-type:underline n-textbox-status:success" placeholder="Underline Success"/>
        </div>
    </ExampleSection>
    <ExampleSection class="mt:4">
        <textarea type="text" class="n-textbox n-textbox-type:outline n-textbox-status:success" placeholder="Outline Success"></textarea>
    </ExampleSection>
</div>
:::

::: details codes

```html
<input
  type="text"
  class="n-textbox n-textbox-type:outline n-textbox-status:success"
  placeholder="Outline Success" />
<input
  type="text"
  class="n-textbox n-textbox-type:underline n-textbox-status:success"
  placeholder="Underline Success" />
<textarea
  type="text"
  class="n-textbox n-textbox-type:outline n-textbox-status:success"
  placeholder="Outline Success"></textarea>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>n-textbox-status:success</code></td>
      <td>
        <span class="code">
          .n-textbox { <br/> 
            --textbox-border-color-success: #37b24d; <br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Warning

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4 d:flex fl-dir:column jc:center gap:4">
        <div class="w:100p">
            <input type="text" class="n-textbox n-textbox-type:outline n-textbox-status:warning" placeholder="Outline Warning"/>
        </div>
        <div class="w:100p d:flex jc:center">
            <input type="text" class="n-textbox n-textbox-type:underline n-textbox-status:warning" placeholder="Underline Warning"/>
        </div>
    </ExampleSection>
    <ExampleSection class="mt:4">
        <textarea type="text" class="n-textbox n-textbox-type:outline n-textbox-status:warning" placeholder="Outline Warning"></textarea>
    </ExampleSection>
</div>
:::

::: details codes

```html
<input
  type="text"
  class="n-textbox n-textbox-type:outline n-textbox-status:warning"
  placeholder="Outline Warning" />
<input
  type="text"
  class="n-textbox n-textbox-type:underline n-textbox-status:warning"
  placeholder="Underline Warning" />
<textarea
  type="text"
  class="n-textbox n-textbox-type:outline n-textbox-status:warning"
  placeholder="Outline Warning"></textarea>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>n-textbox-status:warning</code></td>
      <td>
        <span class="code">
          .n-textbox { <br/> 
            --textbox-color-warning: var(--color-accent-1);<br/>
            --textbox-border-color-warning: var(--color-accent-1);<br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

### Disabled

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4 d:flex fl-dir:column jc:center gap:4">
        <div class="w:100p">
            <input type="text" class="n-textbox n-textbox-type:outline n-textbox-status:disabled" placeholder="Outline Disabled"/>
        </div>
        <div class="w:100p d:flex jc:center">
            <input type="text" class="n-textbox n-textbox-type:underline n-textbox-status:disabled" placeholder="Underline Disabled"/>
        </div>
    </ExampleSection>
    <ExampleSection class="mt:4">
        <textarea type="text" class="n-textbox n-textbox-type:outline n-textbox-status:disabled" placeholder="Outline Disabled"></textarea>
    </ExampleSection>
</div>
:::

::: details codes

```html
<input
  type="text"
  class="n-textbox n-textbox-type:outline n-textbox-status:disabled"
  placeholder="Outline Disabled" />
<input
  type="text"
  class="n-textbox n-textbox-type:underline n-textbox-status:disabled"
  placeholder="Underline Disabled" />
<textarea
  type="text"
  class="n-textbox n-textbox-type:outline n-textbox-status:disabled"
  placeholder="Outline Disabled"></textarea>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>n-textbox-status:disabled</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Label

`n-textbox-label:값` 클래스를 적용하여 라벨을 텍스트 박스의 상단 또는 하단에 위치시킬 수 있습니다.

### Top

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4 d:flex fl-dir:column jc:center gap:4">
        <div class="w:100p">
            <label>
                label
                <input type="text" class="n-textbox n-textbox-type:outline
                n-textbox-label:top" placeholder="Placeholder"/>
            </label>
        </div>
        <div class="w:100p d:flex jc:center">
            <label>
                label
                <input type="text" class="n-textbox n-textbox-type:underline
                n-textbox-label:top" placeholder="Placeholder"/>
            </label>    
        </div>
    </ExampleSection>
    <ExampleSection class="mt:4">
        <label>
            label
            <textarea type="text" class="n-textbox n-textbox-type:outline
            n-textbox-label:top" placeholder="Placeholder"></textarea>
        </label>
    </ExampleSection>
</div>
:::

::: details codes

```html
<label>
  label
  <input
    type="text"
    class="n-textbox n-textbox-type:outline
    n-textbox-label:top"
    placeholder="Placeholder" />
</label>
<label>
  label
  <input
    type="text"
    class="n-textbox n-textbox-type:underline
    n-textbox-label:top"
    placeholder="Placeholder" />
</label>
<label>
  label
  <textarea
    type="text"
    class="n-textbox n-textbox-type:outline
    n-textbox-label:top"
    placeholder="Placeholder"></textarea>
</label>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>n-textbox-label:top</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

### Bottom

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4 d:flex fl-dir:column jc:center gap:4">
        <div class="w:100p">
            <label>
                label
                <input type="text" class="n-textbox n-textbox-type:outline
                n-textbox-label:bottom" placeholder="Placeholder"/>
            </label>
        </div>
        <div class="w:100p d:flex jc:center">
            <label>
                label
                <input type="text" class="n-textbox n-textbox-type:underline
                n-textbox-label:bottom" placeholder="Placeholder"/>
            </label>    
        </div>
    </ExampleSection>
    <ExampleSection class="mt:4">
        <label>
            label
            <textarea type="text" class="n-textbox n-textbox-type:outline
            n-textbox-label:bottom" placeholder="Placeholder"></textarea>
        </label>
    </ExampleSection>
</div>
:::

::: details codes

```html
<label>
  label
  <input
    type="text"
    class="n-textbox n-textbox-type:outline
    n-textbox-label:bottom"
    placeholder="Placeholder" />
</label>
<label>
  label
  <input
    type="text"
    class="n-textbox n-textbox-type:underline
    n-textbox-label:bottom"
    placeholder="Placeholder" />
</label>
<label>
  label
  <textarea
    type="text"
    class="n-textbox n-textbox-type:outline
    n-textbox-label:bottom"
    placeholder="Placeholder"></textarea>
</label>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>n-textbox-label:bottom</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Overriding

텍스트 박스 컴포넌트는 스타일 재정의에 대한 변수를 아래와 같이 제공하고 있습니다.

```css
/* textbox.css */
.n-textbox {
  /* textbox-size */
  --textbox-padding-x: 12px;
  --textbox-input-height: 36px;
  --textbox-textarea-min-height: 58px;
  
  /* textbox-border-color */
  --textbox-border-color: var(--color-base-3);
  
  /* textbox-border-radius */
  --textbox-border-radius: 6px;

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
  <div class="d:flex ai:center fl-dir:column gap:4 w:100p">
    <label>
      Default
      <input type="text" class="n-textbox n-textbox-label:top" placeholder="Default Textbox" style="border-color: #000000;"/>
    </label>
    <label>
        Focus
        <input type="text" class="n-textbox n-textbox-label:top" placeholder="Outline Textbox" style="padding-left:14px; padding-right:14px; height:40px; border-radius:12px; border-color:#3b82f680;"/>
    </label>
    <label>
        Success
        <input type="text" class="n-textbox n-textbox:underline n-textbox-label:top" placeholder="Underline Textbox" style="padding-left:14px; padding-right:14px; height:40px; border-color:#06b6d4; border-width:1px;"/>
    </label>
    <label>
        Warning
        <textarea type="text" class="n-textbox n-textbox-label:top" placeholder="Outline Textbox" style="padding-left:14px; padding-right:14px; min-height:80px; border-radius:12px; border-color:#f97316; color:#f97316;"></textarea>
    </label>
  </div>
</ExampleSection>

```html
<label>
  Default
  <input
    type="text"
    class="n-textbox n-textbox-label:top"
    placeholder="Outline Textbox" />
</label>
<label>
  Focus
  <input
    type="text"
    class="n-textbox n-textbox-status:focus n-textbox-label:top"
    placeholder="Outline Textbox" />
</label>
<label>
  Success
  <input
    type="text"
    class="n-textbox n-textbox:underline  n-textbox-status:success n-textbox-label:top"
    placeholder="Underline Textbox" />
</label>
<label>
  Warning
  <textarea
    type="text"
    class="n-textbox n-textbox-status:warning n-textbox-label:top"
    placeholder="Outline Textbox"></textarea>
</label>
```

```css
/* root.css */
.n-textbox {
  /* textbox-size */
  --textbox-padding-x: 14px;
  --textbox-input-height: 40px;
  --textbox-textarea-min-height: 80px;

  /* textbox-border-color */
  --textbox-border-color: var(--color-base-10);

  /* textbox-border-radius */
  --textbox-border-radius: 12px;

  /* textbox-border-width */
  --textbox-underline-border-width: 1px;

  /* textbox-status:focus */
  --textbox-border-color-focus: #3b82f680;

  /* textbox-status:success */
  --textbox-border-color-success: #06b6d4;

  /* textbox-status:warning */
  --textbox-color-warning: #f97316;
  --textbox-border-color-warning: #f97316;
}
```

:::tip
컴포넌트 커스터마이징에 대한 자세한 내용은 [컴포넌트 커스터마이징하기](/guide/getting-started-component#customize-components)에서 확인하실 수 있습니다.
:::

## Example

<div class="vp-raw">
    <ExampleSection class="d:flex fl-dir:column gap:4 my:4">
        <header class="d:flex jc:center">
            <h1 class="d:none">회원가입</h1>
            <div>
                <a href="/newtil-css" class="d:flex fl-dir:column ai:center">
                    <img src="/logo.png" width="50px" height="50px">
                    <span class="n-font:h3">Newtil CSS</span>
                </a>
            </div>
        </header>
        <form class="w:100p d:flex fl-dir:column ai:center gap:4">
            <label>
                아이디
                <input type="text" class="n-textbox n-textbox-label:top" placeholder="email@newtil.com"/>
            </label>
            <label>
                비밀번호
                <input type="password" class="n-textbox n-textbox-label:top" placeholder="비밀번호를 입력해주세요"/>
            </label>
            <label>
                newtilCSS를 알게 된 경로를 자세히 작성해주세요!
                <textarea class="n-textbox n-textbox-label:top" placeholder="newtilCSS를 알게 된 경로를 자세히 작성해주세요!"></textarea>
            </label>
            <span>
                <button type="button" class="n-btn">제출하기</button>
            </span>
        </form>
    </ExampleSection>
</div>

::: details codes

```html
<header class="d:flex jc:center">
  <h1 class="d:none">회원가입</h1>
  <div>
    <a href="/newtil-css" class="d:flex fl-dir:column ai:center">
      <img src="/logo.png" width="50px" height="50px" />
      <span class="n-font:h3">Newtil CSS</span>
    </a>
  </div>
</header>
<form class="w:100p d:flex fl-dir:column ai:center gap:4">
  <label>
    아이디
    <input
      type="text"
      class="n-textbox n-textbox-label:top"
      placeholder="email@newtil.com" />
  </label>
  <label>
    비밀번호
    <input
      type="password"
      class="n-textbox n-textbox-label:top"
      placeholder="비밀번호를 입력해주세요" />
  </label>
  <label>
    newtilCSS를 알게 된 경로를 자세히 작성해주세요!
    <textarea
      class="n-textbox n-textbox-label:top"
      placeholder="newtilCSS를 알게 된 경로를 자세히 작성해주세요!"></textarea>
  </label>
  <span>
    <button class="n-btn">제출하기</button>
  </span>
</form>
```

:::

<QuickLinks :componentName="'Textbox'"/>
