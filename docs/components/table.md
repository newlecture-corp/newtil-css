<script setup></script>

# 테이블 (Table)

테이블 컴포넌트는 데이터를 표 형식으로 구성된 행과 열에 표시하는 데 사용됩니다.

<QuickLinks :componentName="'Table'"/>

## Overview

### Style {#overview-style}

테이블 컴포넌트는 기본 스타일과 `striped` 타입이 추가적으로 제공됩니다. 자세한 내용을 보려면 [여기](#style)를 클릭하세요.

#### Basic

::: raw

<table class="n-table mt:4 mb:8">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

#### Striped

::: raw

<table class="n-table n-table-style:striped mt:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jerry</td>
      <td>male</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

### Layout {#overview-layout}

테이블 컴포넌트는 `bbs-table` 레이아웃이 제공됩니다. 자세한 내용을 보려면 [여기](#layout)를 클릭하세요.

::: raw

<table class="n-table n-bbs-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

### Size {#overview-size}

테이블 컴포넌트는 셀의 높이와 너비를 단계별로 제공합니다. 자세한 내용을 보려면 [여기](#size)를 클릭하세요.

#### Basic

::: raw

<table class="n-table n-row-height:1 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: raw

<table class="n-table n-row-height:2 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: raw

<table class="n-table n-row-height:3 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

#### BBS

::: raw

<table class="n-table n-bbs-table n-column-width:1 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: raw

<table class="n-table n-bbs-table n-column-width:2 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: raw

<table class="n-table n-bbs-table n-column-width:3 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

### Hover {#overview-hover}

사용자가 데이터를 쉽게 식별할 수 있도록, 특정 행 위로 마우스를 이동할 때 호버 효과를 줄 수 있습니다. 자세한 내용을 보려면 [여기](#hover)를 클릭하세요.

::: raw

<table class="n-table n-table-hover mt:4 mb:8">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

### Border {#overview-borders}

테이블 컴포넌트에 테두리 스타일을 적용할 수 있습니다. 자세한 내용을 보려면 [여기](#border)를 클릭하세요.

#### Basic

::: raw

<table class="n-table n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

#### Bottom

::: raw

<table class="n-table n-table-border:bottom my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

#### Column

::: raw

<table class="n-table n-table-border:column my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

### Border Radius {#overview-border-radius}

테이블 컴포넌트는 모서리 둥글기를 단계별로 제공합니다. 자세한 내용을 보려면 [여기](#border-radius)를 클릭하세요.

::: raw

<table class="n-table n-table-border n-table-border-radius:1 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: raw

<table class="n-table n-table-border n-table-border-radius:2 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: raw

<table class="n-table n-table-border n-table-border-radius:3 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: raw

<table class="n-table n-table-border n-table-border-radius:4 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: raw

<table class="n-table n-table-border n-table-border-radius:5 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

## Usage

테이블 컴포넌트는 요소에 `n-table` 클래스를 적용하여 사용할 수 있습니다.

::: raw

<table class="n-table my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-row-height:1 n-table-border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

## Style

테이블 컴포넌트는 기본 스타일을 포함한 `striped` 스타일을 추가로 제공합니다. `striped` 스타일은 `n-table-style:스타일` 또는 `n-table:스타일` 클래스를 통해 적용할 수 있습니다.

::: raw

<table class="n-table n-table-style:striped mt:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Jerry</td>
      <td>male</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details codes

```html
<table class="n-table n-table-style:striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">약어클래스</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>n-table-style:striped</code></td>
      <td><code>n-table:striped</code></td>
    </tr>
  </tbody>
</table>

## Layout

테이블 컴포넌트는 `bbs-table` 레이아웃을 추가로 제공하며 요소에 `n-bbs-table` 클래스를 적용하여 사용할 수 있습니다.

::: raw

<table class="n-table n-bbs-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details codes

```html
<table class="n-table n-bbs-table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
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
      <td><code>n-bbs-table</code></td>
      <td></td>
    </tr>
  </tbody>
</table>

## Size

### Basic

`n-table`은 `n-row-height:값` 클래스를 통해 테이블의 셀 높이를 변경할 수 있습니다.

::: raw

<table class="n-table n-row-height:1 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-row-height:1 n-table-border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

::: raw

<table class="n-table n-row-height:2 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-row-height:2 n-table-border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

::: raw

<table class="n-table n-row-height:3 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-row-height:3 n-table-border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">사이즈</th>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td><code>n-row-height:1</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --table-row-height-1: 32px; <br/>
            --table-cell-padding-x: 16px; <br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>2</th>
      <td><code>n-row-height:2</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --table-row-height-2: 40px; <br/>
            --table-cell-padding-x: 16px; <br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>3</th>
      <td><code>n-row-height:3</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --table-row-height-3: 48px;<br/>
            --table-cell-padding-x: 16px; <br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

### BBS

`n-bbs-table`은 `n-column-width:값` 클래스를 통해 테이블의 두 번째 컬럼 이후의 컬럼들에 대해 셀 너비를 변경할 수 있습니다.

::: raw

<table class="n-table n-bbs-table n-column-width:1 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-bbs-table n-column-width:1 n-table-border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

::: raw

<table class="n-table n-bbs-table n-column-width:2 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-bbs-table n-column-width:2 n-table-border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

::: raw

<table class="n-table n-bbs-table n-column-width:3 n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-bbs-table n-column-width:3 n-table-border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">사이즈</th>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td><code>n-column-width:1</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --bbs-table-detail-column-width-1: 100px; <br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>2</th>
      <td><code>n-column-width:2</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --bbs-table-detail-column-width-2: 120px; <br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>3</th>
      <td><code>n-column-width:3</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --bbs-table-detail-column-width-3: 140px;<br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

## Hover

`n-table-hover` 클래스를 사용하여 테이블의 데이터를 가리킬 때 해당 행에 호버 효과를 줄 수 있습니다.

::: raw

<table class="n-table n-table-hover mt:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details codes

```html
<table class="n-table n-table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
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
      <td><code>n-table-hover</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --table-background-color-hover: rgba(var(--rgb-base-10), 0.05);<br/>
          }
        </span></td>
    </tr>
  </tbody>
</table>

## Border

`n-table-border`, `n-table-border:bottom`, `n-table-border:column` 클래스를 통해 테두리 스타일을 적용할 수 있습니다.

#### Basic

::: raw

<table class="n-table n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details codes

```html
<table class="n-table n-table-border">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

#### Bottom

::: raw

<table class="n-table n-table-border:bottom my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details codes

```html
<table class="n-table n-table-border:bottom">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

#### Column

::: raw

<table class="n-table n-table-border:column my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details codes

```html
<table class="n-table n-table-border:column">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

## Border Radius

`n-table-border-radius:값` 클래스를 사용하여 단계별 모서리 둥글기를 사용할 수 있습니다.

::: raw

<table class="n-table n-table-border n-table-border-radius:1 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-table-border n-table-border-radius:1">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

::: raw

<table class="n-table n-table-border n-table-border-radius:2 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-table-border n-table-border-radius:2">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

::: raw

<table class="n-table n-table-border n-table-border-radius:3 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-table-border n-table-border-radius:3">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

::: raw

<table class="n-table n-table-border n-table-border-radius:4 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-table-border n-table-border-radius:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

::: raw

<table class="n-table n-table-border n-table-border-radius:5 my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

::: details code

```html
<table class="n-table n-table-border n-table-border-radius:5">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>
```

:::

<table>
  <thead>
    <tr>
      <th scope="col">사이즈</th>
      <th scope="col">클래스</th>
      <th scope="col">변수</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td><code>n-table-border-radius:1</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --table-border-radius-1: 0px;<br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>2</th>
      <td><code>n-table-border-radius:2</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --table-border-radius-2: 4px;<br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>3</th>
      <td><code>n-table-border-radius:3</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --table-border-radius-3: 8px;<br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>4</th>
      <td><code>n-table-border-radius:4</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --table-border-radius-4: 12px;<br/>
          }
        </span>
      </td>
    </tr>
    <tr>
      <th>5</th>
      <td><code>n-table-border-radius:5</code></td>
      <td>
        <span class="code">
          .n-table { <br/> 
            --table-border-radius-5: 16px;<br/>
          }
        </span>
      </td>
    </tr>
  </tbody>
</table>

## Overriding

테이블 컴포넌트는 스타일 재정의에 대한 변수를 아래와 같이 제공하고 있습니다.

```css
/* table.css */
.n-table {
  /* table-cell-size */
  --table-row-height: 40px;
  --table-row-height-1: 32px;
  --table-row-height-2: 40px;
  --table-row-height-3: 48px;
  --table-cell-padding-x: 16px;

  /* table-border-radius */
  --table-border-radius: 16px;
  --table-border-radius-1: 0;
  --table-border-radius-2: 4px;
  --table-border-radius-3: 8px;
  --table-border-radius-4: 12px;
  --table-border-radius-5: 16px;

  /* table-background-color */
  --table-background-color: var(--color-base-1);

  /* table-background-color-hover */
  --table-background-color-hover: rgba(var(--rgb-base-10), 0.05);

  /* thead-background-color */
  --table-thead-background-color: var(--color-base-1);

  /* bbs-table-cell-size */
  --bbs-table-first-column-width: 50px;
  --bbs-table-last-column-width: 100px;

  --bbs-table-detail-column-width: 120px;
  --bbs-table-detail-column-width-1: 100px;
  --bbs-table-detail-column-width-2: 120px;
  --bbs-table-detail-column-width-3: 140px;
}
```

### Example

<br/>

#### Basic

::: raw

<table class="n-table example n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

#### BBS

::: raw

<table class="n-table example n-bbs-table n-table-border my:4">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Gender</th>
      <th scope="col">Last Login</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Tom</td>
      <td>male</td>
      <td>2020-11-01</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Olivia</td>
      <td>female</td>
      <td>2021-03-01</td>
    </tr>
  </tbody>
</table>

:::

```css
/* root.css */
.n-table {
  /* table-cell-size */
  --table-cell-padding-x: 12px;
  --table-row-height-1: 24px;
  --table-row-height-2: 32px;
  --table-row-height-3: 40px;

  /* table-border-radius */
  --table-border-radius: 0px;
  --table-border-radius-1: 4px;
  --table-border-radius-2: 8px;
  --table-border-radius-3: 12px;
  --table-border-radius-4: 16px;
  --table-border-radius-5: 20px;
}

.n-table {
  /* table-cell-size */
  --bbs-table-detail-column-width: 100px;
}
```

:::tip
컴포넌트 커스터마이징에 대한 자세한 내용은 [컴포넌트 커스터마이징하기](/guide/getting-started-component#customize-components)에서 확인하실 수 있습니다.
:::

<QuickLinks :componentName="'Table'"/>

<style>
.n-table.example{
  /* table-cell-size */
  --table-cell-padding-x: 12px;
  --table-row-height-1: 24px;
  --table-row-height-2: 32px;
  --table-row-height-3: 40px;

  /* table-border-radius */
  --table-border-radius: 0px;
  --table-border-radius-1: 4px;
  --table-border-radius-2: 8px;
  --table-border-radius-3: 12px;
  --table-border-radius-4: 16px;
  --table-border-radius-5: 20px;
}

.n-table.example {
  /* table-cell-size */
  --bbs-table-detail-column-width: 100px;
}

</style>
