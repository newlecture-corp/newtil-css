# Pseudo 상태 (hover, focus, active, ...)

## 지원 상태

| Prefix | CSS pseudo | 용도 |
|--------|-----------|------|
| `hover:` | `:hover` | 마우스 오버 |
| `focus:` | `:focus` | 포커스 (탭/클릭) |
| `focus-visible:` | `:focus-visible` | 키보드 포커스만 (마우스 클릭 제외) |
| `focus-within:` | `:focus-within` | 자식이 포커스될 때 |
| `active:` | `:active` | 클릭/터치 누르는 중 |
| `disabled:` | `:disabled` | 비활성 상태 |
| `checked:` | `:checked` | 체크박스/라디오 체크됨 |
| `visited:` | `:visited` | 방문한 링크 |

## 사용 예시

### 버튼

```html
<button class="
  bg:primary c:on-primary p:4 bdr:3
  hover:bg:primary-hover
  active:bg:primary-active
  focus:outline-style:solid focus:outline-width:2 focus:outline-color:focus-ring
  disabled:opacity:50 disabled:cursor:not-allowed
  transition:default
">
  Interactive Button
</button>
```

### Input

```html
<input
  type="text"
  class="
    p:3 border-width:1 bds:solid bdc:border bdr:2 bg:surface c:text
    focus:bdc:primary focus:outline-style:solid focus:outline-width:2 focus:outline-color:focus-ring
    transition:default
  "
  placeholder="Type here"
/>
```

### Transform on hover

```html
<div class="bg:primary-subtle p:5 bdr:3 hover:scale:110 hover:rotate:45 transition:default cursor:pointer">
  Hover me
</div>
```

## 반응형 × Pseudo 조합

```html
<div class="bg:danger md:bg:secondary hover:bg:success md:hover:bg:warning">
  모바일: 빨강 (hover→초록)
  태블릿+: 파랑 (hover→노랑)
</div>
```

prefix 순서: `breakpoint:pseudo:property:value`.
