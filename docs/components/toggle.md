<script setup></script>

# 토글 (Toggle)

토글 컴포넌트는 온/오프 상태를 가지는 작은 컴포넌트입니다.

<QuickLinks :componentName="'Toggle'"/>

## Overview

### Type {#overview-type}

`slide`, `check-box`, `dot`, `outline-box` 타입이 제공됩니다. 자세한 내용을 보려면 [여기](#type)를 클릭하세요.

<div class="n-item d:flex jc:center ai:center gap:4 mt:4">
  <input type="checkbox" class="n-toggle n-toggle-type:toggle"/>
  <input type="checkbox" class="n-toggle n-toggle-type:check-box"/>
  <input type="radio" class="n-toggle n-toggle-type:dot"/>
  <label class="n-toggle n-toggle-type:outline-box">
    Outline
    <input type="checkbox" class="d:none"/>
  </label>
</div>

### Size {#overview-size}

`small`, `medium`, `large` 사이즈가 제공됩니다. 자세한 내용을 보려면 [여기](#size)를 클릭하세요.

#### 슬라이드

<div class="n-item d:flex jc:center gap:4 ai:end my:4">
  <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-size:1"/>
  <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-size:2"/>
  <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-size:3"/>
</div>

#### 체크박스

<div class="n-item d:flex jc:center gap:4 ai:end my:4">
  <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-size:1"/>
  <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-size:2"/>
  <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-size:3"/>
</div>

#### 도트

<div class="n-item d:flex jc:center gap:4 ai:end my:4">
  <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-size:1"/>
  <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-size:2"/>
  <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-size:3"/>
</div>

#### 아웃라인박스

<div class="n-item d:flex jc:center gap:4 ai:end mt:4">
    <label class="n-toggle n-toggle-type:outline-box n-toggle-size:1">
        Small
        <input type="checkbox" class="d:none"/>
    </label>
    <label class="n-toggle n-toggle-type:outline-box n-toggle-size:2">
        Medium
        <input type="checkbox" class="d:none"/>
    </label>
    <label class="n-toggle n-toggle-type:outline-box n-toggle-size:3">
        Large
        <input type="checkbox" class="d:none"/>
    </label>
</div>

### Status {#overview-status}

`disabled` 상태가 제공됩니다. 자세한 내용을 보려면 [여기](#disabled)를 클릭하세요.

<div class="n-item d:flex jc:center ai:center gap:4 mt:4">
  <input type="checkbox" class="n-toggle n-toggle-type:toggle" disabled/>
  <input type="checkbox" class="n-toggle n-toggle-type:check-box" disabled/>
  <input type="radio" class="n-toggle n-toggle-type:dot" disabled/>
  <label class="n-toggle n-toggle-type:outline-box">
    Outline
    <input type="checkbox" class="d:none" disabled/>
  </label>
</div>

### Label {#overview-label}

라벨을 토글의 상단 또는 하단에 위치시킬 수 있습니다. 자세한 내용을 보려면 [여기](#label)를 클릭하세요.

#### Top

<div class="n-item d:flex jc:center gap:6 my:4">
    <label>
        Slide
        <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-label:top"/>
    </label>
    <label>
        Check
        <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-label:top"/>
    </label>
     <label>
        Dot
        <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-label:top"/>
    </label>
</div>

#### Bottom

<div class="n-item d:flex jc:center gap:6 my:4">
    <label>
        Slide
        <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-label:bottom"/>
    </label>
    <label>
        Check
        <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-label:bottom"/>
    </label>
     <label>
        Dot
        <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-label:bottom"/>
    </label>
</div>

## Usage

토글 컴포넌트는 input 요소에 `n-toggle` 클래스를 적용하여 사용할 수 있습니다.

::: raw

<div class="vp-raw">
    <ExampleSection>
        <div class="w:full d:flex jc:center">
            <input type="checkbox" class="n-toggle"/>
        </div>
    </ExampleSection>
</div>
:::

```html
<input type="checkbox" class="n-toggle" />
```

## Type

`n-toggle-type:타입명` 또는 `n-toggle:타입명` 약어 클래스를 사용하여 다양한 토글 스타일을 적용할 수 있습니다.

::: raw

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <div class="w:full d:flex jc:center ai:center gap:4">
            <input type="checkbox" class="n-toggle n-toggle-type:slide"/>
            <input type="checkbox" class="n-toggle n-toggle-type:check-box"/>
            <input type="checkbox" class="n-toggle n-toggle-type:dot"/>
            <label class="n-toggle n-toggle-type:outline-box">
                Outline
                <input type="checkbox" class="d:none"/>
            </label>
        </div>
    </ExampleSection>
</div>
:::

```html
<input type="checkbox" class="n-toggle n-toggle-type:slide" />
<input type="checkbox" class="n-toggle n-toggle-type:check-box" />
<input type="checkbox" class="n-toggle n-toggle-type:dot" />
<label class="n-toggle n-toggle-type:outline-box">
  Outline
  <input type="checkbox" class="d:none" />
</label>
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
      <th>slide</th>
      <td>
        <code>n-toggle-type:slide</code>
      </td>
      <td>
        <code>n-toggle:slide</code>
      </td>
      <td>
        <span class="code">
            .n-toggle { <br/> 
                --toggle-slide-background-color: rgba(var(--rgb-base-10), 0.12); <br/>
                --toggle-slide-background-color-checked: var(--color-main-2); <br/>
                --toggle-slide-circle-color: var(--color-base-1); <br/>
                --toggle-slide-circle-color-checked: var(--color-base-1); <br/>
            }
        </span>
      </td>
    </tr>
    <tr>
      <th>check-box</th>
      <td>
        <code>n-toggle-type:check-box</code> <br/>
        <code>n-toggle-type:check</code>
      </td>
      <td>
        <code>n-toggle:check-box</code> <br/>
        <code>n-toggle:check</code>        
      </td>
      <td>
        <span class="code">
            .n-toggle { <br/> 
                --toggle-check-border-color: var(--color-base-3); <br/>
                --toggle-check-background-color: var(--color-base-1); <br/>
                --toggle-check-background-color-checked: var(--color-main-2); <br/>
            }
        </span>
      </td>
    </tr>
    <tr>
      <th>dot</th>
      <td>
        <code>n-toggle-type:dot</code>
      </td>
      <td>
        <code>n-toggle:dot</code>
      </td>
      <td>
        <span class="code">
            .n-toggle { <br/> 
                --toggle-dot-border-color: var(--color-base-3); <br/>
                --toggle-dot-background-color: var(--color-base-1); <br/>
                --toggle-dot-border-color-checked: var(--color-main-2); <br/>
                --toggle-dot-background-color-checked: var(--color-main-2); <br/>
            }
        </span>
      </td>
    </tr>
    <tr>
      <th>outline-box</th>
      <td>
        <code>n-toggle-type:outline-box</code><br/>
        <code>n-toggle-type:outline</code>
      </td>
      <td>
        <code>n-toggle:outline-box</code><br/>
        <code>n-toggle:outline</code>
      </td>
      <td>
        <span class="code">
          .n-textbox { <br/> 
                --toggle-outline-color: rgba(var(--rgb-base-10), 0.85); <br/> 
                --toggle-outline-background-color: var(--color-base-1); <br/> 
                --toggle-outline-border-color: var(--color-base-3); <br/> 
                --toggle-outline-color-checked: var(--color-base-1); <br/> 
                --toggle-outline-background-color-checked: var(--color-main-2); <br/> 
                --toggle-outline-border-color-checked: transparent; <br/> 
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

## Size

`toggle-size:값` 클래스를 통해 토글 사이즈를 변경할 수 있습니다.

### 슬라이드

<div class="n-item d:flex jc:center gap:4 mt:4">
    <label class="font-size:1 ai:end">
        Small
        <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-size:1"/>
    </label>
    <label class="ai:end">
        Medium
        <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-size:2"/>
    </label>
    <label class="font-size:4 ai:end">
        Large
        <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-size:3"/>
    </label>
</div>

::: details codes

```html
<label>
  Small
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:toggle n-toggle-size:1" />
</label>
<label>
  Medium
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:toggle n-toggle-size:2" />
</label>
<label>
  Large
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:toggle n-toggle-size:3" />
</label>
```

:::

### 체크

<div class="n-item d:flex jc:center gap:4 ai:end mt:4">
    <label class="font-size:1 ai:end">
        Small
        <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-size:1"/>
    </label>
    <label class="ai:end">
        Medium
        <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-size:2"/>
    </label>
    <label class="font-size:4 ai:end">
        Large
        <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-size:3"/>
    </label>
</div>

::: details codes

```html
<label>
  Small
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:check-box n-toggle-size:1" />
</label>
<label>
  Medium
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:check-box n-toggle-size:2" />
</label>
<label>
  Large
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:check-box n-toggle-size:3" />
</label>
```

:::

### 도트

<div class="n-item d:flex jc:center gap:4 ai:end mt:4">
    <label class="font-size:1 ai:end">
        Small
        <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-size:1"/>
    </label>
    <label class="ai:end">
        Medium
        <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-size:2"/>
    </label>
    <label class="font-size:4 ai:end">
        Large
        <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-size:3"/>
    </label>
</div>

::: details codes

```html
<label>
  Small
  <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-size:1" />
</label>
<label>
  Medium
  <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-size:2" />
</label>
<label>
  Large
  <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-size:3" />
</label>
```

:::

### 아웃라인박스

<div class="n-item d:flex jc:center gap:4 ai:end mt:4">
    <label class="n-toggle n-toggle-type:outline-box n-toggle-size:1">
        Small
        <input type="checkbox" class="d:none"/>
    </label>
    <label class="n-toggle n-toggle-type:outline-box n-toggle-size:2">
        Medium
        <input type="checkbox" class="d:none"/>
    </label>
    <label class="n-toggle n-toggle-type:outline-box n-toggle-size:3">
        Large
        <input type="checkbox" class="d:none"/>
    </label>
</div>

::: details codes

```html
<label class="n-toggle n-toggle-type:outline-box n-toggle-size:1">
  Small
  <input type="checkbox" class="d:none" />
</label>
<label class="n-toggle n-toggle-type:outline-box n-toggle-size:2">
  Medium
  <input type="checkbox" class="d:none" />
</label>
<label class="n-toggle n-toggle-type:outline-box n-toggle-size:3">
  Large
  <input type="checkbox" class="d:none" />
</label>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">사이즈</th>
      <th scope="col">클래스</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>
        <code>n-toggle-size:1</code>
      </td>
    </tr>
    <tr>
      <th>2</th>
      <td>
        <code>n-toggle-size:2</code>
      </td>
    </tr>
    <tr>
      <th>3</th>
      <td>
        <code>n-toggle-size:3</code>
      </td>
    </tr>
  </tbody>
</table>

## Disabled

input 태그에 `disabled` 속성을 추가하거나 클래스에 `n-toggle-status:disabled`를 추가하여 토글 컴포넌트에 비활성화 스타일을 적용할 수 있습니다.

<div class="n-item d:flex jc:center ai:center gap:4 mt:4">
  <input type="checkbox" class="n-toggle n-toggle-type:toggle" disabled/>
  <input type="checkbox" class="n-toggle n-toggle-type:check-box" disabled/>
  <input type="radio" class="n-toggle n-toggle-type:dot" disabled/>
  <label class="n-toggle n-toggle-type:outline-box">
    Outline
    <input type="checkbox" class="d:none" disabled/>
  </label>
</div>

```html
<input type="checkbox" class="n-toggle n-toggle-type:toggle" disabled />
<input type="checkbox" class="n-toggle n-toggle-type:check-box" disabled />
<input type="radio" class="n-toggle n-toggle-type:dot" disabled />
<label class="n-toggle n-toggle-type:outline-box">
  Outline
  <input type="checkbox" class="d:none" disabled />
</label>
```

## Label

`n-toggle-label:값` 클래스를 적용하여 라벨을 토글의 상단 또는 하단에 위치시킬 수 있습니다.

### Top

<div class="n-item d:flex jc:center gap:6 my:4">
    <label>
        Slide
        <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-label:top"/>
    </label>
    <label>
        Check
        <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-label:top"/>
    </label>
     <label>
        Dot
        <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-label:top"/>
    </label>
</div>

::: details codes

```html
<label>
  Slide
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:toggle n-toggle-label:top" />
</label>
<label>
  Check
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:check-box n-toggle-label:top" />
</label>
<label>
  Dot
  <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-label:top" />
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
      <td><code>n-toggle-label:top</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

### Bottom

<div class="n-item d:flex jc:center gap:6 my:4">
    <label>
        Slide
        <input type="checkbox" class="n-toggle n-toggle-type:toggle n-toggle-label:bottom"/>
    </label>
    <label>
        Check
        <input type="checkbox" class="n-toggle n-toggle-type:check-box n-toggle-label:bottom"/>
    </label>
     <label>
        Dot
        <input type="radio" class="n-toggle n-toggle-type:dot n-toggle-label:bottom"/>
    </label>
</div>

::: details codes

```html
<label>
  Slide
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:toggle n-toggle-label:bottom" />
</label>
<label>
  Check
  <input
    type="checkbox"
    class="n-toggle n-toggle-type:check-box n-toggle-label:bottom" />
</label>
<label>
  Dot
  <input
    type="radio"
    class="n-toggle n-toggle-type:dot n-toggle-label:bottom" />
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
      <td><code>n-toggle-label:bottom</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Overriding

토글 컴포넌트는 스타일 재정의에 대한 변수를 아래와 같이 제공하고 있습니다.

```css
/* toggle.css */
.n-toggle {
  /* toggle-type:slide */
  --toggle-slide-background-color: rgba(var(--rgb-base-10), 0.12);
  --toggle-slide-checked-background-color: var(--color-main-2);
  --toggle-slide-circle-color: var(--color-base-1);
  --toggle-slide-circle-checked-color: var(--color-base-1);

  /* toggle-type:check */
  --toggle-check-border-color: var(--color-base-3);
  --toggle-check-bagkground-color: var(--color-base-1);
  --toggle-check-checked-background-color: var(--color-main-2);

  /* toggle-type:dot */
  --toggle-dot-border-color: var(--color-base-3);
  --toggle-dot-background-color: var(--color-base-1);
  --toggle-dot-checked-border-color: var(--color-main-2);
  --toggle-dot-checked-background-color: var(--color-main-2);

  /* toggle-type:outline-box */
  --toggle-outline-color: rgba(var(--rgb-base-10), 0.85);
  --toggle-outline-background-color: var(--color-base-1);
  --toggle-outline-border-color: var(--color-base-3);
  --toggle-outline-checked-color: var(--color-base-1);
  --toggle-outline-checked-background-color: var(--color-main-2);
  --toggle-outline-checked-border-color: transparent;
}
```

### Example

<ExampleSection class="my:4">
  <div class="d:flex ai:center gap:4">
    <input type="checkbox" class="n-toggle example n-toggle-type:toggle"/>
    <input type="checkbox" class="n-toggle example n-toggle-type:check-box"/>
    <input type="radio" class="n-toggle example n-toggle-type:dot"/>
    <label class="n-toggle example n-toggle-type:outline-box">
        Outline
        <input type="checkbox" class="d:none"/>
    </label>
  </div>
</ExampleSection>

```html
<input type="checkbox" class="n-toggle n-toggle-type:toggle" />
<input type="checkbox" class="n-toggle n-toggle-type:check-box" />
<input type="radio" class="n-toggle n-toggle-type:dot" />
<label class="n-toggle n-toggle-type:outline-box">
  Outline
  <input type="checkbox" class="d:none" />
</label>
```

```css
/* root.css */
.n-toggle {
  /* toggle:slide */
  --toggle-slide-background-color: #cccccc;
  --toggle-slide-checked-background-color: #f4a423;
  --toggle-slide-circle-color: #f0f0f0;
  --toggle-slide-circle-color-checked: var(--color-base-1);

  /* toggle:check */
  --toggle-check-border-color: #f4a423;
  --toggle-check-bagkground-color: var(--color-base-1);
  --toggle-check-background-color-checked: #f4a423;

  /* n-toggle:dot */
  --toggle-dot-border-color: #cccccc;
  --toggle-dot-background-color: var(--color-base-1);
  --toggle-dot-border-color-checked: #f4a423;
  --toggle-dot-background-color-checked: #f4a423;

  /* toggle:outline-box */
  --toggle-outline-color: #f4a423;
  --toggle-outline-background-color: var(--color-base-1);
  --toggle-outline-border-color: #f4a423;
  --toggle-outline-color-checked: var(--color-base-1);
  --toggle-outline-background-color-checked: #f4a423;
  --toggle-outline-border-color-checked: transparent;
}
```

:::tip
컴포넌트 커스터마이징에 대한 자세한 내용은 [컴포넌트 커스터마이징하기](/guide/getting-started-component#customize-components)에서 확인하실 수 있습니다.
:::

## Example

토글 컴포넌트를 활용한 다양한 예시입니다.

### 슬라이드

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <label class="font-size:2 font-weight:1">
            푸쉬알림
            <input type="checkbox" class="n-toggle n-toggle-size:1"/>
        </label>
    </ExampleSection>
</div>

::: details codes

```html
<label class="font-size:2 font-weight:1">
  푸쉬알림
  <input type="checkbox" class="n-toggle n-toggle-size:1" />
</label>
```

:::

### 체크

<div class="vp-raw">
    <ExampleSection class="mt:4">
        <ul class="d:flex fl-dir:column gap:2">
            <li>
                <label>
                    <input type="checkbox" class="n-toggle n-toggle-type:check-box"/>
                    <span class="font-size:2 font-weight:2 d:flex gap:1">
                        <span>(필수)</span>
                        <span>서비스 이용약관에 동의합니다.</span>
                    </span>
                </label>
            </li>
            <li>
                <label>
                    <input type="checkbox" class="n-toggle n-toggle-type:check-box"/>
                    <span span class="font-size:2 font-weight:2 d:flex gap:1">
                        <span class="color:base-5">(선택)</span>
                        <span>마케팅 정보 수신에 동의합니다.</span>
                    </span>
                </label>
            </li>
        </ul>
    </ExampleSection>
</div>

::: details codes

```html
<ul class="d:flex fl-dir:column gap:2">
  <li>
    <label>
      <input type="checkbox" class="n-toggle n-toggle-type:check-box" />
      <span class="font-size:2 font-weight:2 d:flex gap:1">
        <span>(필수)</span>
        <span>서비스 이용약관에 동의합니다.</span>
      </span>
    </label>
  </li>
  <li>
    <label>
      <input type="checkbox" class="n-toggle n-toggle-type:check-box" />
      <span span class="font-size:2 font-weight:2 d:flex gap:1">
        <span class="color:base-5">(선택)</span>
        <span>마케팅 정보 수신에 동의합니다.</span>
      </span>
    </label>
  </li>
</ul>
```

:::

### 도트

<div class="vp-raw">
    <ExampleSection class="d:flex fl-dir:column ai:center gap:4 mt:4">
        <p class="font-weight:2">가장 좋아하는 동물을 선택해주세요!</p>
        <ul class="w:full d:flex jc:center gap:4">
            <li>
                <label class="font-size:2 font-weight:1">
                    고양이 🐱
                    <input type="radio" class="n-toggle n-toggle-type:dot" name="amimal"/>
                </label>
            </li>
            <li>
                <label class="font-size:2 font-weight:1">
                    강아지 🐶
                    <input type="radio" class="n-toggle n-toggle-type:dot" name="amimal"/>
                </label>
            </li>
            <li>
                <label class="font-size:2 font-weight:1">
                    여우 🦊
                    <input type="radio" class="n-toggle n-toggle-type:dot" name="amimal"/>
                </label>
            </li>
        </ul>
    </ExampleSection>
</div>

::: details codes

```html
<p class="font-weight:2">가장 좋아하는 동물을 선택해주세요!</p>
<ul class="w:full d:flex jc:center gap:4">
  <li>
    <label class="font-size:2 font-weight:1">
      고양이 🐱
      <input type="radio" class="n-toggle n-toggle-type:dot" name="amimal" />
    </label>
  </li>
  <li>
    <label class="font-size:2 font-weight:1">
      강아지 🐶
      <input type="radio" class="n-toggle n-toggle-type:dot" name="amimal" />
    </label>
  </li>
  <li>
    <label class="font-size:2 font-weight:1">
      여우 🦊
      <input type="radio" class="n-toggle n-toggle-type:dot" name="amimal" />
    </label>
  </li>
</ul>
```

:::

### 아웃라인 박스

<div class="vp-raw">
    <ExampleSection class="d:flex fl-dir:column ai:center gap:4 mt:4">
        <p class="n-font:h2">✨ 베스트 강의</p>
        <ul class="w:full d:flex jc:center gap:2">
            <li>
                <label class="n-toggle n-toggle-type:outline-box">
                    실시간
                    <input type="radio" class="d:none" name="category" checked/>
                </label>
            </li>
            <li>
                <label class="n-toggle n-toggle-type:outline-box">
                    일간
                    <input type="radio" class="d:none" name="category"/>
                </label>
            </li>
            <li>
                <label class="n-toggle n-toggle-type:outline-box">
                    월간
                    <input type="radio" class="d:none" name="category"/>
                </label>
            </li>
            <li>
                <label class="n-toggle n-toggle-type:outline-box">
                    주간
                    <input type="radio" class="d:none" name="category"/>
                </label>
            </li>
        </ul>
    </ExampleSection>
</div>

::: details codes

```html
<p class="n-font:h2">✨ 베스트 강의</p>
<ul class="w:full d:flex jc:center gap:2">
  <li>
    <label class="n-toggle n-toggle-type:outline-box">
      실시간
      <input type="radio" class="d:none" name="category" checked />
    </label>
  </li>
  <li>
    <label class="n-toggle n-toggle-type:outline-box">
      일간
      <input type="radio" class="d:none" name="category" />
    </label>
  </li>
  <li>
    <label class="n-toggle n-toggle-type:outline-box">
      월간
      <input type="radio" class="d:none" name="category" />
    </label>
  </li>
  <li>
    <label class="n-toggle n-toggle-type:outline-box">
      주간
      <input type="radio" class="d:none" name="category" />
    </label>
  </li>
</ul>
```

:::

<QuickLinks :componentName="'Toggle'"/>

<style>
    .n-toggle.example{
        /* toggle:slide */
        --toggle-slide-background-color: #CCCCCC;
        --toggle-slide-background-color-checked: #f4a423;
        --toggle-slide-circle-color: #F0F0F0;
        --toggle-slide-circle-color-checked: var(--color-base-1);

        /* toggle:check */
        --toggle-check-border-color: #f4a423;
        --toggle-check-bagkground-color: var(--color-base-1);
        --toggle-check-background-color-checked: #f4a423;

        /* n-toggle:dot */
        --toggle-dot-border-color: #CCCCCC;
        --toggle-dot-background-color: var(--color-base-1);
        --toggle-dot-border-color-checked: #f4a423;
        --toggle-dot-background-color-checked: #f4a423;

        /* toggle:outline-box */
        --toggle-outline-color: #f4a423;
        --toggle-outline-background-color: var(--color-base-1);
        --toggle-outline-border-color: #f4a423;
        --toggle-outline-color-checked: var(--color-base-1);
        --toggle-outline-background-color-checked: #f4a423;
        --toggle-outline-border-color-checked: transparent;
    }
</style>
