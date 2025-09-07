# z-index

[z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index) 속성에 대한 유틸리티입니다.

위치가 지정된([positioned](https://developer.mozilla.org/en-US/docs/Web/CSS/position)) 요소와 그 자손, 혹은 <code>flex</code> 및 <code>grid</code> 아이템의 z축에서의 순서를 지정합니다. 겹치는 요소가 있다면 <code>z-index</code> 값이 큰 요소가 <code>z-index</code> 값이 작은 요소를 덮습니다.

<table>
  <thead>
    <tr>
      <th scope="col">클래스</th>
      <th scope="col">약어 클래스</th>
      <th scope="col">속성</th>
    </tr>
  </thead>
  <tbody>
  <tr>
    <td><code>z-index:1</code></td>
    <td><code>zi:1</code></td>
    <td><span class="code">z-index: var(--z-index-1) !important;</span> <span class="c:weak">/* 1 */</span></td>
  </tr>
  <tr>
    <td><code>z-index:2</code></td>
    <td><code>zi:2</code></td>
    <td><span class="code">z-index: var(--z-index-2) !important;</span> <span class="c:weak">/* 200 */</span></td>
  </tr>
  <tr>
    <td><code>z-index:3</code></td>
    <td><code>zi:3</code></td>
    <td><span class="code">z-index: var(--z-index-3) !important;</span> <span class="c:weak">/* 500 */</span></td>
  </tr>
  <tr>
    <td><code>z-index:4</code></td>
    <td><code>zi:4</code></td>
    <td><span class="code">z-index: var(--z-index-4) !important;</span> <span class="c:weak">/* 1000 */</span></td>
  </tr>
  <tr>
    <td><code>z-index:5</code></td>
    <td><code>zi:5</code></td>
    <td><span class="code">z-index: var(--z-index-5) !important;</span> <span class="c:weak">/* 2000 */</span></td>
  </tr>

  </tbody>

</table>

기본 순서값 `var(--z-index)` 설정과 관련된 내용은 [여기](/guide/css-variable-list.html#z-index)를 참고해주세요.