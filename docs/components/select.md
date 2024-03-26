# 셀렉트 (Select)

셀렉트 컴포넌트는 옵션 메뉴를 제공하는 요소입니다.

<QuickLinks :componentName="'Select'"/>

## Usage
셀렉트 컴포넌트는 `select`, `option` 요소를 감싼 래퍼 요소에 `n-select` 클래스를 적용하여 사용할 수 있습니다.
:::raw
<ExampleSection>

<div class="n-select">
  <select name="pets" id="pet-select">
    <option value="">Please choose an option</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
  </select>
</div>
</ExampleSection>
:::

```html
<div class="n-select">
  <select name="pets" id="pet-select">
    <option value="">Please choose an option</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
  </select>
</div>
```

### Dropdown과 함께 사용하기

드롭다운 컴포넌트와 함께 사용하여 옵션 메뉴를 커스텀하게 사용할 수 있습니다.

:::raw
<ExampleSection>

<div class="n-dropdown w:100p">
  <div class="n-select">Please choose an option</div>
  <ul class="active position:relative z-index:1">
    <li><button>Dog</button></li>
    <li><button>Cat</button></li>
    <li><button>Hamster</button></li>
  </ul>
</div>
</ExampleSection>
:::

```html
<div class="n-dropdown">
  <div class="n-select">Please choose an option</div>
  <ul class="active position:relative z-index:1">
    <li><button>Dog</button></li>
    <li><button>Cat</button></li>
    <li><button>Hamster</button></li>
  </ul>
</div>
```

## Overriding
셀렉트 컴포넌트는 스타일 재정의에 대한 변수를 아래와 같이 제공하고 있습니다.
```css
.n-select {
  --select-height: 36px;
  --select-padding: 0 12px;
  --select-border-color: var(--color-base-3);
  --select-border-radius: 6px;
  --select-background-color: var(--color-base-1);

  /* 우측 icon */
  --select-icon: url("/icon/caret_up_down.svg");
  --select-icon-top: 10px;
  --select-icon-right: 14px;
  --select-icon-size: 14px;
  --select-icon-transform-active: translateY(-30%) rotate(180deg);
}
```


<QuickLinks :componentName="'Select'"/>
