<script setup>

</script>

# 아이콘 시작하기

## 소개

`Newtil CSS`는 아이콘과 데코레이션 유틸리티 클래스를 제공합니다.

많은 서비스에서 사용되는 대표적인 아이콘을 제공하며 아이콘을 빠르고 간편하게 적용할 수 있습니다.

<ExampleSection>
<template #h>아이콘 사용하기</template>
  <span class="icon icon:check">확인</span>
</ExampleSection>

```html
<span class="icon icon:check">확인</span>
```

사용할 수 있는 아이콘 목록은 [여기](/icons/list)에서 확인해주세요.

## 아이콘

아이콘은 컨텐츠를 아이콘 모양으로 나타냅니다. 아이콘 유틸리티 클래스는 콘텐츠 요소에 `icon`과 `icon:아이콘_이름`을 함께 사용하여 적용할 수 있습니다.

<ExampleSection>
<template #h>아이콘 예시</template>
  <span class="icon icon:user">사용자</span>
</ExampleSection>

```html
<span class="icon icon:user">사용자</span>
```

## 아이콘 사이즈

아이콘 사이즈를 변경하려면 아이콘 사이즈 유틸리티 클래스 `icon-size:값`을 사용하면 됩니다. 기본 크기는 `icon-size:5`입니다.

<ExampleSection>
<template #h>아이콘 사이즈 예시</template>
  <span class="icon icon:star icon-size:1">즐겨찾기</span>
  <span class="icon icon:star icon-size:2">즐겨찾기</span>
  <span class="icon icon:star icon-size:3">즐겨찾기</span>
  <span class="icon icon:star icon-size:4">즐겨찾기</span>
  <span class="icon icon:star icon-size:5">즐겨찾기</span>
</ExampleSection>

```html
<span class="icon icon:star icon-size:1">즐겨찾기</span>
<span class="icon icon:star icon-size:2">즐겨찾기</span>
<span class="icon icon:star icon-size:3">즐겨찾기</span>
<span class="icon icon:star icon-size:4">즐겨찾기</span>
<span class="icon icon:star icon-size:5">즐겨찾기</span>
```

| 클래스             |
| ------------------ |
| `icon icon-size:1` |
| `icon icon-size:2` |
| `icon icon-size:3` |
| `icon icon-size:4` |
| `icon icon-size:5` |

아이콘 사이즈에 사용되는 변수는 다음과 같습니다:

```css
:root {
  --icon-size-1: 12px;
  --icon-size-2: 16px;
  --icon-size-3: 18px;
  --icon-size-4: 20px;
  --icon-size-5: 24px;
}
```

## 아이콘 색

아이콘 색을 변경하려면 `icon-color:값`을 사용하면 됩니다. 기본 색은 `icon-color:base-9`입니다.

<ExampleSection>
<template #h>아이콘 색 예시</template>
  <span class="icon icon:star icon-color:main-2">즐겨찾기</span>
  <span class="icon icon:star icon-color:sub-1">즐겨찾기</span>
  <span class="icon icon:star icon-color:accent-1">즐겨찾기</span>
  <span class="icon icon:star icon-color:base-2">즐겨찾기</span>
</ExampleSection>

```html
<span class="icon icon:star icon-color:main-2">즐겨찾기</span>
<span class="icon icon:star icon-color:sub-1">즐겨찾기</span>
<span class="icon icon:star icon-color:accent-1">즐겨찾기</span>
<span class="icon icon:star icon-color:base-2">즐겨찾기</span>
```

| 클래스                     |
| -------------------------- |
| `icon icon-color:main-1`   |
| `icon icon-color:main-2`   |
| `icon icon-color:main-3`   |
| `icon icon-color:sub-1`    |
| `icon icon-color:sub-2`    |
| `icon icon-color:sub-3`    |
| `icon icon-color:accent-1` |
| `icon icon-color:accent-2` |
| `icon icon-color:accent-3` |
| `icon icon-color:base-1`   |
| `icon icon-color:base-2`   |
| `icon icon-color:base-3`   |
| `icon icon-color:base-4`   |
| `icon icon-color:base-5`   |
| `icon icon-color:base-6`   |
| `icon icon-color:base-7`   |
| `icon icon-color:base-8`   |
| `icon icon-color:base-9`   |
| `icon icon-color:base-10`  |

아이콘 색에 사용되는 변수는 다음과 같습니다:

```css
:root {
  --icon-color: var(--color-base-9);
}
```

테마 색에 자세한 내용은 [여기](/guide/css-variable-list.html#theme-color)를 참고해주세요


## 커스텀 아이콘 사용하기

`--icon` 변수를 재정의하여 커스텀 아이콘을 사용하실 수 있습니다.

```css
:root {
  --icon: none;
}
```

다음은 `--icon` 변수를 재정의하여 커스텀 아이콘을 사용하는 예시입니다:
<ExampleSection>

<div class="custom">
  <button class="icon">커스텀 아이콘</button>
</div>
</ExampleSection>

```html
<div class="custom">
  <button class="icon">커스텀 아이콘</button>
</div>
```

```css
.custom {
  /* 프로젝트에 존재하는 icon 파일 경로 또는 인코딩된 값을 넣어주세요 */
  --icon: url("/arrow_up.svg");
}
```

<style scope>
  .custom {
      --icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23000000' viewBox='0 0 256 256'%3E%3Cpath d='M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z'%3E%3C/path%3E%3C/svg%3E");
  }
</style>

## 데코레이션

데코레이션은 컨텐츠를 꾸며주는 역할을 합니다. `deco` 클래스와 함께 아이콘의 모양을 나타내는 `icon:아이콘_이름`을 사용하여 적용할 수 있습니다.

<ExampleSection>
<template #h>데코레이션 사용하기</template>
  <button class="deco icon:check">확인</button>
</ExampleSection>

```html
<span class="deco icon:check">확인</span>
```

## 데코레이션 위치

데코레이션은 기본적으로 좌측에 위치하지만, `deco-position:값` 또는 `deco-pos:값` 클래스로 데코레이션의 위치를 간편하게 옮길 수 있습니다.

<ExampleSection>
<template #h>데코레이션 위치</template>
  <button class="deco deco-position:right icon:trash">삭제</button>
</ExampleSection>

```html
<button class="deco deco-position:right icon:trash">삭제</button>
```

| 클래스                     | 약어클래스            |         |
| -------------------------- | --------------------- | ------- |
| `deco deco-position:left`  | `deco deco-pos:left`  | default |
| `deco deco-position:right` | `deco deco-pos:right` |         |

## 데코레이션 사이즈

데코 사이즈를 변경하려면 데코 사이즈 유틸리티 클래스 `deco-size:값`을 사용하면됩니다. 기본 크기는 `deco-size:5`입니다.

<ExampleSection>
<template #h>데코레이션 사이즈 예시</template>
  <button class="deco deco-size:1 icon:check">확인</button>
  <button class="deco deco-size:2 icon:check">확인</button>
  <button class="deco deco-size:3 icon:check">확인</button>
  <button class="deco deco-size:4 icon:check">확인</button>
  <button class="deco deco-size:5 icon:check">확인</button>
</ExampleSection>

```html
<button class="deco deco-size:1 icon:check">확인</button>
<button class="deco deco-size:2 icon:check">확인</button>
<button class="deco deco-size:3 icon:check">확인</button>
<button class="deco deco-size:4 icon:check">확인</button>
<button class="deco deco-size:5 icon:check">확인</button>
```

| 클래스             |
| ------------------ |
| `deco deco-size:1` |
| `deco deco-size:2` |
| `deco deco-size:3` |
| `deco deco-size:4` |
| `deco deco-size:5` |

데코레이션 사이즈에 사용되는 변수는 다음과 같습니다:

```css
:root {
  --deco-size-1: 12px;
  --deco-size-2: 16px;
  --deco-size-3: 18px;
  --deco-size-4: 20px;
  --deco-size-5: 24px;
}
```

## 데코레이션 색

데코레이션의 색을 변경하려면 `deco-color:값`을 사용하면 됩니다. 기본 색은 `deco-color:base-9`입니다.

<ExampleSection>
<template #h>데코레이션 색 예시</template>
  <button class="deco deco-color:main-1 icon:check">확인</button>
  <button class="deco deco-color:accent-1 icon:check">확인</button>
  <button class="deco deco-color:base-5 icon:check">확인</button>
</ExampleSection>

```html
<button class="deco deco-color:main-1 icon:check">확인</button>
<button class="deco deco-color:accent-1 icon:check">확인</button>
<button class="deco deco-color:base-5 icon:check">확인</button>
```

| 클래스                     |
| -------------------------- |
| `deco deco-color:main-1`   |
| `deco deco-color:main-2`   |
| `deco deco-color:main-3`   |
| `deco deco-color:sub-1`    |
| `deco deco-color:sub-2`    |
| `deco deco-color:sub-3`    |
| `deco deco-color:accent-1` |
| `deco deco-color:accent-2` |
| `deco deco-color:accent-3` |
| `deco deco-color:base-1`   |
| `deco deco-color:base-2`   |
| `deco deco-color:base-3`   |
| `deco deco-color:base-4`   |
| `deco deco-color:base-5`   |
| `deco deco-color:base-6`   |
| `deco deco-color:base-7`   |
| `deco deco-color:base-8`   |
| `deco deco-color:base-9`   |
| `deco deco-color:base-10`  |

데코레이션 색에 사용되는 변수는 다음과 같습니다:

```css
:root {
  --deco-color: var(--color-base-9);
}
```

## 데코레이션 간격

컨텐츠와 데코레이션의 간격 설정이 필요할 때는 `deco-margin-방향:값` 또는 `deco-방향:값`으로 설정할 수 있습니다. 간격은 [`gap`](/guide/css-variable-list.html#theme-color)과 일치합니다.

<ExampleSection>
<template #h>데코레이션 간격 예시</template>
    <button class="deco deco-margin-left:5 deco-pos:right icon:chats">채팅</button>
</ExampleSection>

```html
<button class="deco deco-margin-left:5 deco-pos:right icon:chats">채팅</button>
```

| 클래스                      | 약어클래스        |         |
| --------------------------- | ----------------- | ------- |
| `deco deco-margin-right:0`  | `deco deco-mr:0`  |         |
| `deco deco-margin-right:1`  | `deco deco-mr:1`  |         |
| `deco deco-margin-right:2`  | `deco deco-mr:2`  | default |
| `deco deco-margin-right:3`  | `deco deco-mr:3`  |         |
| `deco deco-margin-right:4`  | `deco deco-mr:4`  |         |
| `deco deco-margin-right:5`  | `deco deco-mr:5`  |         |
| `deco deco-margin-right:6`  | `deco deco-mr:6`  |         |
| `deco deco-margin-right:7`  | `deco deco-mr:7`  |         |
| `deco deco-margin-right:8`  | `deco deco-mr:8`  |         |
| `deco deco-margin-right:9`  | `deco deco-mr:9`  |         |
| `deco deco-margin-right:10` | `deco deco-mr:10` |         |
| `deco deco-margin-left:0`   | `deco deco-ml:0`  |         |
| `deco deco-margin-left:1`   | `deco deco-ml:1`  |         |
| `deco deco-margin-left:2`   | `deco deco-ml:2`  |         |
| `deco deco-margin-left:3`   | `deco deco-ml:3`  |         |
| `deco deco-margin-left:4`   | `deco deco-ml:4`  |         |
| `deco deco-margin-left:5`   | `deco deco-ml:5`  |         |
| `deco deco-margin-left:6`   | `deco deco-ml:6`  |         |
| `deco deco-margin-left:7`   | `deco deco-ml:7`  |         |
| `deco deco-margin-left:8`   | `deco deco-ml:8`  |         |
| `deco deco-margin-left:9`   | `deco deco-ml:9`  |         |
| `deco deco-margin-left:10`  | `deco deco-ml:10` |         |
