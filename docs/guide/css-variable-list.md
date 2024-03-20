<script setup>


const fontSizes = [12, 14, 16, 18, 20, 22, 26, 32, 56]
const overridedSizes = [12, 14, 16, 18, 20, 22, 24, 26, 28]

</script>

# CSS 변수 목록

유틸리티와 컴포넌트에서 사용되는 CSS 변수 목록과 해당 변수들을 오버라이딩하는 방법을 설명합니다.

## Overview

`newtil-css`에서 사용되는 모든 전역 변수는 다음을 확인하세요:
::: details 변수 목록

```css
:root {
  /* color */
  --color-main-1: #99c842;
  --color-main-2: #85b132;
  --color-main-3: #759d2a;

  --rgb-main-1: 153, 200, 66;
  --rgb-main-2: 133, 177, 50;
  --rgb-main-3: 117, 157, 42;

  --color-sub-1: #339af0;
  --color-sub-2: #228be6;
  --color-sub-3: #1c7ed6;

  --rgb-sub-1: 51, 154, 240;
  --rgb-sub-2: 34, 139, 230;
  --rgb-sub-3: 28, 126, 214;

  --color-accent-1: #ff6b6b;
  --color-accent-2: #fa5252;
  --color-accent-3: #f03e3e;

  --rgb-accent-1: 255, 107, 107;
  --rgb-accent-2: 250, 82, 82;
  --rgb-accent-3: 240, 62, 62;

  --color-base-1: #ffffff;
  --color-base-2: #e4e7ea;
  --color-base-3: #dee2e6;
  --color-base-4: #ced4da;
  --color-base-5: #adb5bd;
  --color-base-6: #868e96;
  --color-base-7: #495057;
  --color-base-8: #343a40;
  --color-base-9: #1a1c20;
  --color-base-10: #000000;

  --rgb-base-1: 255, 255, 255;
  --rgb-base-2: 228, 231, 234;
  --rgb-base-3: 222, 226, 230;
  --rgb-base-4: 206, 212, 218;
  --rgb-base-5: 173, 181, 189;
  --rgb-base-6: 134, 142, 150;
  --rgb-base-7: 73, 80, 87;
  --rgb-base-8: 52, 58, 64;
  --rgb-base-9: 26, 28, 32;
  --rgb-base-10: 0, 0, 0;

  /* gap */
  --gap-0: 0px;
  --gap-1: 4px;
  --gap-2: 8px;
  --gap-3: 12px;
  --gap-4: 16px;
  --gap-5: 20px;
  --gap-6: 24px;
  --gap-7: 28px;
  --gap-8: 32px;
  --gap-9: 36px;
  --gap-10: 40px;
  --gap-full: 9999px;

  /* width */
  --width-0: 0px;
  --width-1: 50px;
  --width-2: 100px;
  --width-3: 150px;
  --width-4: 200px;
  --width-5: 250px;
  --width-6: 300px;
  --width-7: 350px;
  --width-8: 400px;
  --width-9: 450px;
  --width-10: 500px;
  --width-percent-1: 10%;
  --width-percent-2: 20%;
  --width-percent-3: 30%;
  --width-percent-4: 40%;
  --width-percent-5: 50%;
  --width-percent-6: 60%;
  --width-percent-7: 70%;
  --width-percent-8: 80%;
  --width-percent-9: 90%;
  --width-percent-10: 100%;

  /* height */
  --height-0: 0px;
  --height-1: 50px;
  --height-2: 100px;
  --height-3: 150px;
  --height-4: 200px;
  --height-5: 250px;
  --height-6: 300px;
  --height-7: 350px;
  --height-8: 400px;
  --height-9: 450px;
  --height-10: 500px;
  --height-percent-1: 10%;
  --height-percent-2: 20%;
  --height-percent-3: 30%;
  --height-percent-4: 40%;
  --height-percent-5: 50%;
  --height-percent-6: 60%;
  --height-percent-7: 70%;
  --height-percent-8: 80%;
  --height-percent-9: 90%;
  --height-percent-10: 100%;

  /* border */
  --border-color: var(--color-base-3);

  --border-width-1: 1px;
  --border-width-2: 2px;
  --border-width-3: 3px;

  --border-radius-0: 0;
  --border-radius-1: 4px;
  --border-radius-2: 8px;
  --border-radius-3: 12px;
  --border-radius-4: 16px;
  --border-radius-full: 9999px;

  /* font-size */
  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  --font-size-5: 20px;
  --font-size-6: 22px;
  --font-size-7: 26px;
  --font-size-8: 32px;
  --font-size-9: 56px;

  /* font-weight */
  --font-weight-1: 400;
  --font-weight-2: 500;
  --font-weight-3: 700;

  /* opacity */
  --opacity-0: 0;
  --opacity-1: 0.1;
  --opacity-2: 0.18;
  --opacity-3: 0.3;
  --opacity-4: 0.45;
  --opacity-5: 0.5;
  --opacity-6: 0.57;
  --opacity-7: 0.7;
  --opacity-8: 0.8;
  --opacity-9: 0.9;
  --opacity-10: 1;

  /* order */
  --order-1: -1;
  --order-2: 2;
  --order-3: 3;
  --order-4: 4;
  --order-5: 5;

  /* box-shadow */
  --box-shadow-1: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.05);
  --box-shadow-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.01);
  --box-shadow-3: 0px 3px 4px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.01);
  --box-shadow-4: 0px 6px 8px -2px rgba(0, 0, 0, 0.08), 0px 2px 3px -2px rgba(0, 0, 0, 0.01);
  --box-shadow-5: 0px 8px 12px -2px rgba(0, 0, 0, 0.08), 0px 3px 4px -3px rgba(0, 0, 0, 0.01);
  --box-shadow-6: 0px 16px 20px -4px rgba(0, 0, 0, 0.08), 0px 6px 8px -5px rgba(0, 0, 0, 0.01);
  --box-shadow-7: 0px 20px 40px -9px rgba(0, 0, 0, 0.17);

  /* z-index */
  --z-index-1: 1;
  --z-index-2: 200;
  --z-index-3: 500;
  --z-index-4: 1000;
  --z-index-5: 2000;

  /* icon */
  --icon-size-1: 12px;
  --icon-size-2: 16px;
  --icon-size-3: 18px;
  --icon-size-4: 20px;
  --icon-size-5: 24px;
  --icon-color: var(--color-base-9);

  /* deco */
  --deco-size-1: 12px;
  --deco-size-2: 16px;
  --deco-size-3: 18px;
  --deco-size-4: 20px;
  --deco-size-5: 24px;
  --deco-color: var(--color-base-9);

  /* position */
  --left-1: 0;
  --left-2: 100px;
  --left-3: 200px;
  --left-4: 300px;
  --left-5: 400px;
  --left-6: 500px;
  --left-7: 600px;
  --left-8: 700px;
  --left-9: 800px;
  --left-10: 900px;
  --left-percent-1: 10%;
  --left-percent-2: 20%;
  --left-percent-3: 30%;
  --left-percent-4: 40%;
  --left-percent-5: 50%;
  --left-percent-6: 60%;
  --left-percent-7: 70%;
  --left-percent-8: 80%;
  --left-percent-9: 90%;
  --left-percent-10: 100%;

  --top-1: 0;
  --top-2: 100px;
  --top-3: 200px;
  --top-4: 300px;
  --top-5: 400px;
  --top-6: 500px;
  --top-7: 600px;
  --top-8: 700px;
  --top-9: 800px;
  --top-10: 900px;
  --top-percent-1: 10%;
  --top-percent-2: 20%;
  --top-percent-3: 30%;
  --top-percent-4: 40%;
  --top-percent-5: 50%;
  --top-percent-6: 60%;
  --top-percent-7: 70%;
  --top-percent-8: 80%;
  --top-percent-9: 90%;
  --top-percent-10: 100%;

  --right-1: 0;
  --right-2: 100px;
  --right-3: 200px;
  --right-4: 300px;
  --right-5: 400px;
  --right-6: 500px;
  --right-7: 600px;
  --right-8: 700px;
  --right-9: 800px;
  --right-10: 900px;
  --right-percent-1: 10%;
  --right-percent-2: 20%;
  --right-percent-3: 30%;
  --right-percent-4: 40%;
  --right-percent-5: 50%;
  --right-percent-6: 60%;
  --right-percent-7: 70%;
  --right-percent-8: 80%;
  --right-percent-9: 90%;
  --right-percent-10: 100%;

  --bottom-1: 0;
  --bottom-2: 100px;
  --bottom-3: 200px;
  --bottom-4: 300px;
  --bottom-5: 400px;
  --bottom-6: 500px;
  --bottom-7: 600px;
  --bottom-8: 700px;
  --bottom-9: 800px;
  --bottom-10: 900px;
  --bottom-percent-1: 10%;
  --bottom-percent-2: 20%;
  --bottom-percent-3: 30%;
  --bottom-percent-4: 40%;
  --bottom-percent-5: 50%;
  --bottom-percent-6: 60%;
  --bottom-percent-7: 70%;
  --bottom-percent-8: 80%;
  --bottom-percent-9: 90%;
  --bottom-percent-10: 100%;
}
```

:::

## border-color

변수 `var(--border-color)`는 테두리의 기본 색상을 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [border](../utility/border/border.md)

### Default

다음의 테두리 스타일이 기본 제공됩니다.

<ExampleSection>
<template #h>기본 스타일</template>
  <div class="border bg-color:base-1 border-radius:2 padding:5">Hello world</div>
</ExampleSection>

```html{1}
<div class="border border-radius:2 ...">
  Hello World
</div>
```

```css
:root {
  --border-color: var(--color-base-3); /* #dee2e6 */
}
```

테마 색상 `var(--color-base-3)` 에 대한 내용은 [여기](#theme-color)를 참고해주세요.

### Overriding

다음과 같이 기본 테두리 색상을 재정의할 수 있습니다.

<ExampleSection>
<template #h>기본 스타일</template>
	<div class="border border-color:main-1 bg-color:base-1 border-radius:2 padding:5">
		Hello World
	</div>
</ExampleSection>

```html{1}
<div class="border border-radius:2 ...">
	Hello World
</div>
```

```css
/* root.css */
:root {
  --border-color: var(--color-base-3); /* #dee2e6 */ /* [!code --] */
  --border-color: var(--color-main-3); /* #759d2a */ /* [!code ++] */
}
```

## border-radius

변수 `border-radius`는 테두리의 둥글기를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [border-radius](../utility/border/border-radius.md)

### Default

`4px` 간격으로 다섯 단계의 둥글기와 원 모양의 둥글기가 기본 제공됩니다.

<ExampleSection>
    <div class="d:flex jc:center flex-wrap:wrap gap:3">
        <div 
            v-for="i in 5" 
            class="color:base-10 border border-color:main-1 bg-color:base-1 h:2 w:2 d:flex ai:center jc:center " 
            :class="`border-radius:${i-1}`" > 
                {{ i-1 }} 
        </div>
        <div class="color:base-10 border border-color:main-1 border-radius:full bg-color:base-1 h:2 w:2 d:flex ai:center jc:center">
            full
        </div>
    </div>
</ExampleSection>

```html
<div class="border-radius:0 ...">0</div>
<div class="border-radius:1 ...">1</div>
<div class="border-radius:2 ...">2</div>
<div class="border-radius:3 ...">3</div>
<div class="border-radius:4 ...">4</div>
<div class="border-radius:full ...">full</div>
```

```css
:root {
  --border-radius-0: 0;
  --border-radius-1: 4px;
  --border-radius-2: 8px;
  --border-radius-3: 12px;
  --border-radius-4: 16px;
  --border-radius-full: 9999px;
}
```

### Overriding

다음과 같이 둥글기의 단계를 재정의할 수 있습니다.

<ExampleSection>
    <div class="d:flex flex-wrap:wrap gap:3">
        <div 
            v-for="i in 5" 
            class="color:base-10 border border-color:main-1 bg-color:base-1 h:2 w:2 d:flex ai:center jc:center " 
            :style="`border-radius:${2 * i}px`" > 
                {{ i-1 }} 
        </div>
    </div>
</ExampleSection>

```html
<div class="border-radius:0 ...">0</div>
<div class="border-radius:1 ...">1</div>
<div class="border-radius:2 ...">2</div>
<div class="border-radius:3 ...">3</div>
<div class="border-radius:4 ...">4</div>
```

```css
:root {
  --border-radius-0: 0;
  --border-radius-1: 4px; /* [!code --] */
  --border-radius-2: 8px; /* [!code --] */
  --border-radius-3: 12px; /* [!code --] */
  --border-radius-4: 16px; /* [!code --] */
  --border-radius-1: 2px; /* [!code ++] */
  --border-radius-2: 4px; /* [!code ++] */
  --border-radius-3: 6px; /* [!code ++] */
  --border-radius-4: 8px; /* [!code ++] */
  --border-radius-full: 9999px;
}
```

## border-width

변수 `border-width`는 테두리의 너비를 정의하는 데 사용되며, 다음의 유틸리티에서 사용되고 있습니다.

- [border-width](../utility/border/border-width.md)

### Default

`1px` 간격으로 세 단계의 너비가 기본 제공됩니다.

<ExampleSection>
    <div class="d:flex gap:3">
        <div v-for="i in 3" class="h:2 w:2 d:flex ai:center jc:center color:base-10 bg-color:base-1 border border-radius:2 border-color:main-1" :class="`border-width:${i}`" > {{ i }} </div>
    </div>
</ExampleSection>

```html{2,5,8}
<div class="d:flex gap:3">
    <div class="border border-radius:2 border-color:main-1 border-width:1 ...">
        1
    </div>
    <div class="border border-radius:2 border-color:main-1 border-width:2 ...">
        2
    </div>
    <div class="border border-radius:2 border-color:main-1 border-width:3 ...">
        3
    </div>
</div>
```

```css
:root {
  --border-width-1: 1px;
  --border-width-2: 2px;
  --border-width-3: 3px;
}
```

### Overriding

다음과 같이 단계를 추가할 수 있습니다.

<ExampleSection>
    <div class="d:flex gap:3">
        <div 
            v-for="i in 3" 
            class="h:2 w:2 d:flex ai:center jc:center color:base-10 border-radius:2 bg-color:base-1" 
            :style="`border:solid ${i+3}px #99c842`" >
            {{ i + 3 }} 
        </div>
    </div>
</ExampleSection>

```html{2,5,8}
<div class="d:flex gap:3">
    <div class="border border-radius:2 border-color:main-1 border-width:4 ...">
        4
    </div>
    <div class="border border-radius:2 border-color:main-1 border-width:5 ...">
        5
    </div>
    <div class="border border-radius:2 border-color:main-1 border-width:6 ...">
        6
    </div>
</div>
```

```css
:root {
  /* ... */
  --border-width-4: 4px; /* [!code ++] */
  --border-width-5: 5px; /* [!code ++] */
  --border-width-6: 6px; /* [!code ++] */
}
```

## box-shadow

변수 `box-shadow`는 박스의 기본 그림자 스타일를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [box-shadow](../utility/box-shadow.md)

### Default

일곱 종류의 그림자 스타일이 기본 제공됩니다.

<ExampleSection>
	<div class="d:flex jc:center flex-wrap:wrap gap:10">
		<div 
			v-for="i in 7"
			class="h:2 w:2 border border-color:main-1 border-radius:2 bg-color:base-1 d:flex ai:center jc:center"
			:class="`box-shadow:${i}`">
			{{ i }}
		</div>
	</div>
</ExampleSection>

```html{2,5,8,12}
<div class="d:flex flex-wrap:wrap gap:10">
	<div class="box-shadow:1 ...">
		1
	</div>
	<div class="box-shadow:2 ...">
		2
	</div>
	<div class="box-shadow:3 ...">
		3
	</div>
	<!-- ... -->
	<div class="box-shadow:7 ...">
		7
	</div>
</div>
```

```css
:root {
  --box-shadow-1: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.05);
  --box-shadow-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.01);
  --box-shadow-3: 0px 3px 4px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.01);
  --box-shadow-4: 0px 6px 8px -2px rgba(0, 0, 0, 0.08), 0px 2px 3px -2px rgba(0, 0, 0, 0.01);
  --box-shadow-5: 0px 8px 12px -2px rgba(0, 0, 0, 0.08), 0px 3px 4px -3px rgba(0, 0, 0, 0.01);
  --box-shadow-6: 0px 16px 20px -4px rgba(0, 0, 0, 0.08), 0px 6px 8px -5px rgba(0, 0, 0, 0.01);
  --box-shadow-7: 0px 20px 40px -9px rgba(0, 0, 0, 0.17);
}
```

### Overriding

다음과 같이 기본 그림자 스타일을 재정의할 수 있습니다.

<ExampleSection>
	<div class="d:flex jc:center flex-wrap:wrap gap:10">
		<div 
			v-for="i in 7"
			class="h:2 w:2 border border-color:main-1 border-radius:2 bg-color:base-1 d:flex ai:center jc:center"
			:style="`box-shadow:${i}px ${i + 1}px ${i + 2}px 0.1px rgba(0, 0, 0, ${i * 0.1})`">
			{{ i }}
		</div>
	</div>
</ExampleSection>

```html{2,5,8,12}
<div class="d:flex flex-wrap:wrap gap:10">
	<div class="box-shadow:1 ...">
		1
	</div>
	<div class="box-shadow:2 ...">
		2
	</div>
	<div class="box-shadow:3 ...">
		3
	</div>
	<!-- ... -->
	<div class="box-shadow:7 ...">
		7
	</div>
</div>
```

```css
/* root.css */
:root {
  --box-shadow-1: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.05); /* [!code --] */
  --box-shadow-2: 0px 1px 2px 0px rgba(0, 0, 0, 0.08), 0px 1px 1px -0.5px rgba(0, 0, 0, 0.01); /* [!code --] */
  --box-shadow-3: 0px 3px 4px 0px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.01); /* [!code --] */
  --box-shadow-4: 0px 6px 8px -2px rgba(0, 0, 0, 0.08), 0px 2px 3px -2px rgba(0, 0, 0, 0.01); /* [!code --] */
  --box-shadow-5: 0px 8px 12px -2px rgba(0, 0, 0, 0.08), 0px 3px 4px -3px rgba(0, 0, 0, 0.01); /* [!code --] */
  --box-shadow-6: 0px 16px 20px -4px rgba(0, 0, 0, 0.08), 0px 6px 8px -5px rgba(0, 0, 0, 0.01); /* [!code --] */
  --box-shadow-7: 0px 20px 40px -9px rgba(0, 0, 0, 0.17); /* [!code --] */
  --box-shadow-1: 1px 2px 3px 0.1px rgba(0, 0, 0, 0.1); /* [!code ++] */
  --box-shadow-2: 2px 3px 4px 0.1px rgba(0, 0, 0, 0.2); /* [!code ++] */
  --box-shadow-3: 3px 4px 5px 0.1px rgba(0, 0, 0, 0.3); /* [!code ++] */
  --box-shadow-4: 4px 5px 6px 0.1px rgba(0, 0, 0, 0.4); /* [!code ++] */
  --box-shadow-5: 5px 6px 7px 0.1px rgba(0, 0, 0, 0.5); /* [!code ++] */
  --box-shadow-6: 6px 7px 8px 0.1px rgba(0, 0, 0, 0.6); /* [!code ++] */
  --box-shadow-7: 7px 8px 9px 0.1px rgba(0, 0, 0, 0.7); /* [!code ++] */
}
```

## font-size

변수 `var(--font-size)`는 폰트의 기본 크기를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [font-size](../utility/font/font-size.md)

### Default

아홉 단계의 폰트 크기가 기본 제공됩니다.

<ExampleSection>
<div class="w:100p">
    <p class="mt:0">이 문장은 폰트 크기 <code>16px</code>로 작성되었습니다.</p>
    <div v-for="size, index of fontSizes"
        :class="`font-size:${index+1}`">
        {{ index+1 }} - Hello World! ({{ size }}px)
    </div>
</div>
</ExampleSection>

```html
<p class="font-size:1">Hello World!</p>
<p class="font-size:2">Hello World!</p>
<p class="font-size:3">Hello World!</p>
<!-- ... -->
<p class="font-size:9">Hello World!</p>
```

```css
:root {
  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  --font-size-5: 20px;
  --font-size-6: 22px;
  --font-size-7: 26px;
  --font-size-8: 32px;
  --font-size-9: 56px;
}
```

### Overriding

다음과 같이 기본 폰트 크기를 재정의할 수 있습니다.

<ExampleSection>
<div class="w:100p">
    <p class="mt:0">이 문장은 폰트 크기 <code>16px</code>로 작성되었습니다.</p>
    <div v-for="size, index of overridedSizes"
        :style="`font-size:${size}px`">
        {{ index+1 }} - Hello World! ({{ size }}px)
    </div>
</div>
</ExampleSection>

```html
<p class="font-size:1">Hello World!</p>
<p class="font-size:2">Hello World!</p>
<p class="font-size:3">Hello World!</p>
<!-- ... -->
<p class="font-size:9">Hello World!</p>
```

```css
:root {
  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 18px;
  --font-size-5: 20px;
  --font-size-6: 22px;
  --font-size-7: 26px; /* [!code --] */
  --font-size-8: 32px; /* [!code --] */
  --font-size-9: 56px; /* [!code --] */
  --font-size-7: 24px; /* [!code ++] */
  --font-size-8: 26px; /* [!code ++] */
  --font-size-9: 28px; /* [!code ++] */
}
```

## font-weight

변수 `var(--font-weight)`는 폰트의 기본 두께를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [font-weight](../utility/font/font-weight.md)

### Default

세 단계의 폰트 두께가 기본 제공됩니다.

<ExampleSection>
<div class="w:100p">
    <div v-for="weight, index of [400, 500, 700]"
        :class="`font-weight:${index+1}`">
        {{ index+1 }} - Hello World! ({{ weight }})
    </div>
</div>
</ExampleSection>

```html
<div class="font-weight:1">Hello World!</div>
<div class="font-weight:2">Hello World!</div>
<div class="font-weight:3">Hello World!</div>
```

```css
:root {
  --font-weight-1: 400;
  --font-weight-2: 500;
  --font-weight-3: 700;
}
```

### Overriding

다음과 같이 기본 폰트 두께를 재정의할 수 있습니다.

<ExampleSection>
<div class="w:100p">
    <div v-for="weight, index of [300, 500, 700]"
        :style="`font-weight:${weight}`">
        {{ index+1 }} - Hello World! ({{ weight }})
    </div>
</div>
</ExampleSection>

```html
<div class="font-weight:1">Hello World!</div>
<div class="font-weight:2">Hello World!</div>
<div class="font-weight:3">Hello World!</div>
```

```css
:root {
  --font-weight-1: 400; /* [!code --] */
  --font-weight-1: 300; /* [!code ++] */
  --font-weight-2: 500;
  --font-weight-3: 700;
}
```

## gap

변수 `var(--gap)`은 간격 및 크기를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

| gap-\*                                                                          | margin-\*                                                                                | padding-\*                                                                                  | text-\*                                                                            |
| ------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | --- |
| <span class="white-space:nowrap">[gap](../utility/gap/gap)</span>               | <span class="white-space:nowrap">[margin](../utility/margin/margin)</span>               | <span class="white-space:nowrap">[padding](../utility/padding/padding)</span>               | <span class="white-space:nowrap">[text-indent](../utility/text/text-indent)</span> |
| <span class="white-space:nowrap">[column-gap](../utility/gap/column-gap)</span> | <span class="white-space:nowrap">[margin-top](../utility/margin/margin-top)</span>       | <span class="white-space:nowrap">[padding-top](../utility/padding/padding-top)</span>       |                                                                                    |
| <span class="white-space:nowrap">[row-gap](../utility/gap/row-gap)</span>       | <span class="white-space:nowrap">[margin-right](../utility/margin/margin-right)</span>   | <span class="white-space:nowrap">[padding-right](../utility/padding/padding-right)</span>   |                                                                                    |
|                                                                                 | <span class="white-space:nowrap">[margin-bottom](../utility/margin/margin-bottom)</span> | <span class="white-space:nowrap">[padding-bottom](../utility/padding/padding-bottom)</span> |                                                                                    |
|                                                                                 | <span class="white-space:nowrap">[margin-left](../utility/margin/margin-left)</span>     | <span class="white-space:nowrap">[padding-left](../utility/padding/padding-left)</span>     |                                                                                    |     |
|                                                                                 | <span class="white-space:nowrap">[margin-x](../utility/margin/margin-x)</span>           | <span class="white-space:nowrap">[padding-x](../utility/padding/padding-x)</span>           |                                                                                    |     |
|                                                                                 | <span class="white-space:nowrap">[margin-y](../utility/margin/margin-y)</span>           | <span class="white-space:nowrap">[padding-y](../utility/padding/padding-y)</span>           |                                                                                    |     |

<span class="white-space:nowrap"></span>

### Default

열 단계의 간격이 기본 제공됩니다.

<ExampleSection>
<div class="w:full">
    <div v-for="i in 10" 
        class="d:flex mt:2">
        <div :class="`d:flex gap:${i} bg bg-color:base-1 border-radius:2 color:base-1`">
            <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center">{{i}}</div>
            <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
        </div>
    </div>
</div>
</ExampleSection>

```html{1,5,9,14}
<div class="d:flex gap:1">
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
</div>
<div class="d:flex gap:2">
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
</div>
<div class="d:flex gap:3">
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
</div>
<!-- ... -->
<div class="d:flex gap:10">
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
</div>
```

```css
:root {
  --gap-0: 0px;
  --gap-1: 4px;
  --gap-2: 8px;
  --gap-3: 12px;
  --gap-4: 16px;
  --gap-5: 20px;
  --gap-6: 24px;
  --gap-7: 28px;
  --gap-8: 32px;
  --gap-9: 36px;
  --gap-10: 40px;
  --gap-full: 9999px;
}
```

### Overriding

다음과 같이 단계를 추가할 수 있습니다.

<ExampleSection>
<div class="w:full">
    <div v-for="i in 10" 
        class="d:flex mt:2">
        <div class="color:base-1 bg bg-color:base-1 border-radius:2 d:flex"
            :style="`gap: ${4 * i + 40}px`">
            <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center">{{i + 10}}</div>
            <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
        </div>
    </div>
</div>
</ExampleSection>

```html{1,5,9,14}
<div class="d:flex gap:11">
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
</div>
<div class="d:flex gap:12">
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
</div>
<div class="d:flex gap:13">
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
</div>
<!-- ... -->
<div class="d:flex gap:20">
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
    <div class="bg-color:main-1 border-radius:2 w:1 h:1 d:flex ai:center jc:center"></div>
</div>
```

```css
:root {
  /* ... */
  --gap-11: 44px; /* [!code ++] */
  --gap-12: 48px; /* [!code ++] */
  --gap-13: 52px; /* [!code ++] */
  --gap-14: 56px; /* [!code ++] */
  --gap-15: 60px; /* [!code ++] */
  --gap-16: 64px; /* [!code ++] */
  --gap-17: 68px; /* [!code ++] */
  --gap-18: 72px; /* [!code ++] */
  --gap-19: 76px; /* [!code ++] */
  --gap-20: 80px; /* [!code ++] */
}
```

## height

변수 `height`, `height-percent`는 요소의 높이를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [height](../utility/height/height)
- [max-height](../utility/height/max-height)
- [min-height](../utility/height/min-height)

### Default

열 단계의 고정 크기와 퍼센트가 기본 제공됩니다.

```css
:root {
  --height-0: 0px;
  --height-1: 50px;
  --height-2: 100px;
  --height-3: 150px;
  --height-4: 200px;
  --height-5: 250px;
  --height-6: 300px;
  --height-7: 350px;
  --height-8: 400px;
  --height-9: 450px;
  --height-10: 500px;
  --height-percent-1: 10%;
  --height-percent-2: 20%;
  --height-percent-3: 30%;
  --height-percent-4: 40%;
  --height-percent-5: 50%;
  --height-percent-6: 60%;
  --height-percent-7: 70%;
  --height-percent-8: 80%;
  --height-percent-9: 90%;
  --height-percent-10: 100%;
}
```

### Overriding

다음과 같이 크기를 재정의할 수 있습니다.

```css
:root {
  --height-0: 0px; /* [!code --] */
  --height-1: 50px; /* [!code --] */
  --height-2: 100px; /* [!code --] */
  --height-0: 32px; /* [!code ++] */
  --height-1: 48x; /* [!code ++] */
  --height-2: 64px; /* [!code ++] */
}
```

## opacity

변수 `var(--opacity)`는 요소의 불투명도를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [opacity](../utility/opacity.md)

### Default

열 단계의 불투명도가 기본 제공됩니다.

<ExampleSection>
<div class="w:full d:flex flex-wrap:wrap gap:2">
    <div v-for="i in 10"
        class="color:base-1 border-radius:2 bg-color:main-1 w:1 h:1 d:flex ai:center jc:center"
        :class="`opacity:${i}`">
        {{ i }}
    </div>
</div>
</ExampleSection>

```html
<div class="opacity:1 ...">1</div>
<div class="opacity:2 ...">2</div>
<div class="opacity:3 ...">3</div>
<!-- ... -->
<div class="opacity:10 ...">10</div>
```

```css
:root {
  --opacity-0: 0;
  --opacity-1: 0.1;
  --opacity-2: 0.18;
  --opacity-3: 0.3;
  --opacity-4: 0.45;
  --opacity-5: 0.5;
  --opacity-6: 0.57;
  --opacity-7: 0.7;
  --opacity-8: 0.8;
  --opacity-9: 0.9;
  --opacity-10: 1;
}
```

### Overriding

다음과 같이 기본 불투명도 설정을 재정의할 수 있습니다.

<ExampleSection>
<div class="w:full d:flex flex-wrap:wrap gap:2">
    <div v-for="i in 10"
        class="color:base-1 border-radius:2 bg-color:main-1 w:1 h:1 d:flex ai:center jc:center"
        :style="`opacity:${0.5 + i * 0.05}`">
        {{ i }}
    </div>
</div>
</ExampleSection>

```html
<div class="opacity:1 ...">1</div>
<div class="opacity:2 ...">2</div>
<div class="opacity:3 ...">3</div>
<!-- ... -->
<div class="opacity:10 ...">10</div>
```

```css
:root {
  --opacity-0: 0; /* [!code --] */
  --opacity-1: 0.1; /* [!code --] */
  --opacity-2: 0.18; /* [!code --] */
  /* ... */ /* [!code --] */
  --opacity-9: 0.9; /* [!code --] */
  --opacity-0: 0.5; /* [!code ++] */
  --opacity-1: 0.55; /* [!code ++] */
  --opacity-2: 0.6; /* [!code ++] */
  /* ... */ /* [!code ++] */
  --opacity-9: 0.95; /* [!code ++] */
  --opacity-10: 1;
}
```

## order

변수 `var(--order)`는 요소의 배치 순서를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [order](../utility/order.md)

### Default

다섯 단계의 순서값이 기본 제공됩니다.

<ExampleSection>
<div class="d:flex gap:2 of:auto" ref="container">
    <div v-for="o, index of [1,4,2,5,3]"
        class="color:base-10 border border-color:main-1 border-radius:2 bg-color:base-1 w:1 h:1 d:flex ai:center jc:center"
        :class="`order:${o}`">
        {{ index+1 }}
    </div>
</div>
</ExampleSection>

```html
<div class="order:1 ...">1</div>
<div class="order:4 ...">2</div>
<div class="order:2 ...">3</div>
<div class="order:5 ...">4</div>
<div class="order:3 ...">5</div>
```

```css
:root {
  --order-1: -1;
  --order-2: 2;
  --order-3: 3;
  --order-4: 4;
  --order-5: 5;
}
```

### Overriding

다음과 같이 단계를 추가할 수 있습니다.

<ExampleSection>
<div class="d:flex gap:2 of:auto" ref="container">
    <div v-for="o, index of [1, 5, 2, 6, 3, 7, 4, 8]"
        class="color:base-10 border border-color:main-1 border-radius:2 bg-color:base-1 w:1 h:1 d:flex ai:center jc:center"
        :style="`order:${o}`">
        {{ index+1 }}
    </div>
</div>
</ExampleSection>

```html
<div class="order:1 ...">1</div>
<div class="order:5 ...">2</div>
<div class="order:2 ...">3</div>
<div class="order:6 ...">4</div>
<div class="order:3 ...">5</div>
<div class="order:7 ...">6</div>
<div class="order:4 ...">7</div>
<div class="order:8 ...">8</div>
```

```css
:root {
  /* ... */
  --order-6: 6; /* [!code ++] */
  --order-7: 7; /* [!code ++] */
  --order-8: 8; /* [!code ++] */
}
```

## theme color

`Newtil CSS`는 ─ `main`, `sub`, `accent`, `base` ─ 네 가지 테마 색상를 제공하며 다음의 유틸리티에서 활용되고 있습니다:

- [background-color](../utility/background/background-color.md)
- [border-color](../utility/border/border-color.md)
- [font-color](../utility/color.md)

### Default

<br/>

#### main

주요 색을 나타냅니다.
<ExampleSection>
<template #h>메인 색상</template>

<div class="d:flex">
  <div v-for="item of Array.from({length: 3}, (v, i) => i + 1)" class="h:1 w:1" :class="`d:flex ai:center jc:center color:base-1 bg-color:main-${item}`" > {{ item }} </div>
</div>
</ExampleSection>

```html
<div class="d:flex">
  <div class="bg-color:main-1 color:base-1 ...">1</div>
  <div class="bg-color:main-2 color:base-1 ...">2</div>
  <div class="bg-color:main-3 color:base-1 ...">3</div>
</div>
```

```css
:root {
  --color-main-1: #99c842;
  --color-main-2: #85b132;
  --color-main-3: #759d2a;

  --rgb-main-1: 153, 200, 66;
  --rgb-main-2: 133, 177, 50;
  --rgb-main-3: 117, 157, 42;
}
```

#### sub

주요 색을 보조하는 색을 나타냅니다.

<ExampleSection>
<template #h>보조 색상</template>
<div class="d:flex">
  <div v-for="item of Array.from({length: 3}, (v, i) => i + 1)" class="h:1 w:1" :class="`d:flex ai:center jc:center color:base-1 bg-color:sub-${item}`" > {{ item }} </div>
</div>
</ExampleSection>

```html
<div class="d:flex">
  <div class="bg-color:sub-1 color:base-1 ...">1</div>
  <div class="bg-color:sub-2 color:base-1 ...">2</div>
  <div class="bg-color:sub-3 color:base-1 ...">3</div>
</div>
```

```css
:root {
  --color-sub-1: #339af0;
  --color-sub-2: #228be6;
  --color-sub-3: #1c7ed6;

  --rgb-sub-1: 51, 154, 240;
  --rgb-sub-2: 34, 139, 230;
  --rgb-sub-3: 28, 126, 214;
}
```

#### accent

경고, 오류 등 강조하는 색을 나타냅니다.

<ExampleSection>
<template #h>강조 색상</template>
<div class="d:flex">
  <div v-for="item of Array.from({length: 3}, (v, i) => i + 1)" class="h:1 w:1" :class="`d:flex ai:center jc:center color:base-1 bg-color:accent-${item}`" > {{ item }} </div>
</div>
</ExampleSection>

```html
<div class="d:flex">
  <div class="bg-color:accent-1 color:base-1 ...">1</div>
  <div class="bg-color:accent-2 color:base-1 ...">2</div>
  <div class="bg-color:accent-3 color:base-1 ...">3</div>
</div>
```

```css
:root {
  --color-accent-1: #ff6b6b;
  --color-accent-2: #fa5252;
  --color-accent-3: #f03e3e;

  --rgb-accent-1: 255, 107, 107;
  --rgb-accent-2: 250, 82, 82;
  --rgb-accent-3: 240, 62, 62;
}
```

#### base

중립적인 색입니다.

<ExampleSection>
<template #h>중립 색상</template>
<div class="d:flex of-x:auto">
  <div v-for="item of Array.from({length: 10}, (v, i) => i + 1)" class="h:1 w:1" :class="`d:flex ai:center jc:center color:base-1 bg-color:base-${item}`" > {{ item }} </div>
</div>
</ExampleSection>

```html
<div class="d:flex">
  <div class="bg-color:base-1 color:base-1 ...">1</div>
  <div class="bg-color:base-2 color:base-1 ...">2</div>
  <div class="bg-color:base-3 color:base-1 ...">3</div>
  <!-- ... -->
  <div class="bg-color:base-10 color:base-1 ...">10</div>
</div>
```

```css
:root {
  --color-base-1: #ffffff;
  --color-base-2: #e4e7ea;
  --color-base-3: #dee2e6;
  --color-base-4: #ced4da;
  --color-base-5: #adb5bd;
  --color-base-6: #868e96;
  --color-base-7: #495057;
  --color-base-8: #343a40;
  --color-base-9: #1a1c20;
  --color-base-10: #000000;

  --rgb-base-1: 255, 255, 255;
  --rgb-base-2: 228, 231, 234;
  --rgb-base-3: 222, 226, 230;
  --rgb-base-4: 206, 212, 218;
  --rgb-base-5: 173, 181, 189;
  --rgb-base-6: 134, 142, 150;
  --rgb-base-7: 73, 80, 87;
  --rgb-base-8: 52, 58, 64;
  --rgb-base-9: 26, 28, 32;
  --rgb-base-10: 0, 0, 0;
}
```

### Overriding

다음과 같이 테마 색상을 재정의할 수 있습니다.

<ExampleSection>
<template #h>색상 재정의</template>
<div class="d:flex">
  <div class="h:1 w:1 d:flex ai:center jc:center color:base-1" style="background-color: #FFDD54">
    1
  </div>
  <div class="h:1 w:1 d:flex ai:center jc:center color:base-1" style="background-color: #FFD322">
    2
  </div>
  <div class="h:1 w:1 d:flex ai:center jc:center color:base-1" style="background-color: #F0C000">
    3
  </div>
</div>
</ExampleSection>

```html
<div class="d:flex">
  <div class="bg-color:main-1 color:base-1 ...">1</div>
  <div class="bg-color:main-2 color:base-1 ...">2</div>
  <div class="bg-color:main-3 color:base-1 ...">3</div>
</div>
```

```css
:root {
  --color-main-1: #99c842; /* [!code --] */
  --color-main-2: #85b132; /* [!code --] */
  --color-main-3: #759d2a; /* [!code --] */
  --color-main-1: #ffdd54; /* [!code ++] */
  --color-main-2: #ffd322; /* [!code ++] */
  --color-main-3: #f0c000; /* [!code ++] */

  --rgb-main-1: 153, 200, 66; /* [!code --] */
  --rgb-main-2: 133, 177, 50; /* [!code --] */
  --rgb-main-3: 117, 157, 42; /* [!code --] */
  --rgb-main-1: 255, 221, 84; /* [!code ++] */
  --rgb-main-2: 255, 211, 34; /* [!code ++] */
  --rgb-main-3: 240, 192, 0; /* [!code ++] */
}
```

## top, right, bottom, left

변수 `top`, `top-percent`, `right`, `right-percent`, `bottom`, `bottom-percent`, `left`, `left-percent`는 요소의 위치를 지정하는데 사용하며, 다음의 유틸리티에서 활용되고 있습니다:

- [top](../utility/position/top.md)
- [right](../utility/position/right.md)
- [bottom](../utility/position/bottom.md)
- [left](../utility/position/left.md)

::: details 모두보기

```css
:root {
  --left-1: 0;
  --left-2: 100px;
  --left-3: 200px;
  --left-4: 300px;
  --left-5: 400px;
  --left-6: 500px;
  --left-7: 600px;
  --left-8: 700px;
  --left-9: 800px;
  --left-10: 900px;
  --left-percent-1: 10%;
  --left-percent-2: 20%;
  --left-percent-3: 30%;
  --left-percent-4: 40%;
  --left-percent-5: 50%;
  --left-percent-6: 60%;
  --left-percent-7: 70%;
  --left-percent-8: 80%;
  --left-percent-9: 90%;
  --left-percent-10: 100%;

  --top-1: 0;
  --top-2: 100px;
  --top-3: 200px;
  --top-4: 300px;
  --top-5: 400px;
  --top-6: 500px;
  --top-7: 600px;
  --top-8: 700px;
  --top-9: 800px;
  --top-10: 900px;
  --top-percent-1: 10%;
  --top-percent-2: 20%;
  --top-percent-3: 30%;
  --top-percent-4: 40%;
  --top-percent-5: 50%;
  --top-percent-6: 60%;
  --top-percent-7: 70%;
  --top-percent-8: 80%;
  --top-percent-9: 90%;
  --top-percent-10: 100%;

  --right-1: 0;
  --right-2: 100px;
  --right-3: 200px;
  --right-4: 300px;
  --right-5: 400px;
  --right-6: 500px;
  --right-7: 600px;
  --right-8: 700px;
  --right-9: 800px;
  --right-10: 900px;
  --right-percent-1: 10%;
  --right-percent-2: 20%;
  --right-percent-3: 30%;
  --right-percent-4: 40%;
  --right-percent-5: 50%;
  --right-percent-6: 60%;
  --right-percent-7: 70%;
  --right-percent-8: 80%;
  --right-percent-9: 90%;
  --right-percent-10: 100%;

  --bottom-1: 0;
  --bottom-2: 100px;
  --bottom-3: 200px;
  --bottom-4: 300px;
  --bottom-5: 400px;
  --bottom-6: 500px;
  --bottom-7: 600px;
  --bottom-8: 700px;
  --bottom-9: 800px;
  --bottom-10: 900px;
  --bottom-percent-1: 10%;
  --bottom-percent-2: 20%;
  --bottom-percent-3: 30%;
  --bottom-percent-4: 40%;
  --bottom-percent-5: 50%;
  --bottom-percent-6: 60%;
  --bottom-percent-7: 70%;
  --bottom-percent-8: 80%;
  --bottom-percent-9: 90%;
  --bottom-percent-10: 100%;
}
```

:::

### Overriding

다음과 같이 위치를 재정의할 수 있습니다.

```css
:root {
  --top-1: 4px; /* [!code ++] */
  --top-2: 8px; /* [!code ++] */
}
```

## width

변수 `width`, `width-percent`는 요소의 너비를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [width](../utility/width/width)
- [max-width](../utility/width/max-width)
- [min-width](../utility/width/min-width)

### Default

열 단계의 고정 크기와 퍼센트가 기본 제공됩니다.

```css
:root {
  --width-0: 0px;
  --width-1: 50px;
  --width-2: 100px;
  --width-3: 150px;
  --width-4: 200px;
  --width-5: 250px;
  --width-6: 300px;
  --width-7: 350px;
  --width-8: 400px;
  --width-9: 450px;
  --width-10: 500px;
  --width-percent-1: 10%;
  --width-percent-2: 20%;
  --width-percent-3: 30%;
  --width-percent-4: 40%;
  --width-percent-5: 50%;
  --width-percent-6: 60%;
  --width-percent-7: 70%;
  --width-percent-8: 80%;
  --width-percent-9: 90%;
  --width-percent-10: 100%;
}
```

### Overriding

다음과 같이 크기를 재정의할 수 있습니다.

```css
:root {
  --width-0: 0px; /* [!code --] */
  --width-1: 50px; /* [!code --] */
  --width-2: 100px; /* [!code --] */
  --width-0: 32px; /* [!code ++] */
  --width-1: 48x; /* [!code ++] */
  --width-2: 64px; /* [!code ++] */
}
```

## z-index

변수 `var(--z-index)`는 z축에서의 우선순위를 정의하는 데 사용되며, 다음의 유틸리티에서 활용되고 있습니다:

- [z-index](../utility/z-index.md)

### Default

다섯 단계의 순서값이 기본 제공됩니다.

<ExampleSection>
<div class="w:100p d:flex jc:center of:auto">
    <div v-for="i in 5"
        class="color:base-10 border border-color:main-1 border-radius:2 bg-color:base-1 w:1 h:1 d:flex ai:center jc:center box"
        :style="`z-index:${6-i}`">
        {{ 6-i }}
    </div>
</div>
</ExampleSection>

```html
<div class="z-index:5 ...">5</div>
<div class="z-index:4 ...">4</div>
<div class="z-index:3 ...">3</div>
<div class="z-index:2 ...">2</div>
<div class="z-index:1 ...">1</div>
```

```css
:root {
  --z-index-1: 1;
  --z-index-2: 200;
  --z-index-3: 500;
  --z-index-4: 1000;
  --z-index-5: 2000;
}
```

### Overriding

다음과 같이 단계를 재정의하거나 추가할 수 있습니다.

<ExampleSection>
<div class="w:100p d:flex jc:center of:auto">
    <div v-for="i in [1, 2, 3, 7, 6, 5, 4]"
        class="color:base-10 border border-color:main-1 border-radius:2 bg-color:base-1 w:1 h:1 d:flex ai:center jc:center box"
        :style="`z-index:${i}`">
        {{ i }}
    </div>
</div>
</ExampleSection>

```html
<div class="z-index:1 ...">1</div>
<div class="z-index:2 ...">2</div>
<div class="z-index:3 ...">3</div>
<div class="z-index:7 ...">7</div>
<div class="z-index:6 ...">6</div>
<div class="z-index:5 ...">5</div>
<div class="z-index:4 ...">4</div>
```

```css
:root {
  --z-index-1: 1;
  --z-index-2: 200;
  --z-index-3: 500;
  --z-index-4: 1000; /* [!code --] */
  --z-index-5: 2000; /* [!code --] */
  --z-index-4: 800; /* [!code ++] */
  --z-index-5: 1000; /* [!code ++] */
  --z-index-6: 1200; /* [!code ++] */
  --z-index-7: 2000; /* [!code ++] */
}
```

<style scoped>
    .box {
        margin-right: -8px;
    }
    .box:not(:first-child) {
        margin-left: -8px;
    }
</style>

<style scoped>
    .bg {
        background: repeating-linear-gradient(135deg, var(--vp-c-brand-1) 0, var(--vp-c-brand-1) 10%, transparent 0, transparent 50%);
        background-size: 7.1px 7.1px;
    }
</style>
