# scroll-none

scroll 속성에 대한 유틸리티입니다.

<code>scroll-bar</code>가 문서 상에 보이지 않도록 설정합니다.

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
  <td><code>.scroll-none::-webkit-scrollbar</code></td>
  <td class="blank">-</td>
  <td><span class="code">display: none;</span></td>
</tr>
<tr>
  <td><code>.scroll-none</code></td>
  <td class="blank">-</td>
  <td>
    <span class="code">-ms-overflow-style: none;</span> <span style="color:#bbb">/* IE and Edge */</span><br>
    <span class="code">scrollbar-width: none;</span> <span style="color:#bbb">/* Firefox */</span>
  </td>
</tr>

  </tbody>

</table>