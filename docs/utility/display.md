# display

[display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) 속성에 대한 유틸리티입니다.

요소가 웹 페이지에서 어떻게 표현될지 결정합니다. 요소가 [블록 레벨](https://developer.mozilla.org/en-US/docs/Glossary/Block-level_content)로 처리될지, [인라인 레벨](https://developer.mozilla.org/en-US/docs/Glossary/Inline-level_content)로 처리될지를 지정할 수 있습니다. 또한, [<code>flow layout</code>](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout), [<code>flex</code>](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout), [<code>grid</code>](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout) 등 자식 요소에 적용될 레이아웃의 유형을 결정합니다.

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
      <td><code>display:block</code></td>
      <td><code>d:block</code></td>
      <td>
        <span class="code">
          display: block !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:inline-block</code></td>
      <td><code>d:inline-block</code></td>
      <td>
        <span class="code">
          display: inline-block !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:inline</code></td>
      <td><code>d:inline</code></td>
      <td>
        <span class="code">
          display: inline !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:contents</code></td>
      <td><code>d:contents</code></td>
      <td>
        <span class="code">
          display: contents !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:run-in</code></td>
      <td><code>d:run-in</code></td>
      <td>
        <span class="code">
          display: run-in !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:flex</code></td>
      <td><code>d:flex</code></td>
      <td>
        <span class="code">
          display: flex !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:inline-flex</code></td>
      <td><code>d:inline-flex</code></td>
      <td>
        <span class="code">
          display: inline-flex !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:grid</code></td>
      <td><code>d:grid</code></td>
      <td>
        <span class="code">
          display: grid !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:inline-grid</code></td>
      <td><code>d:inline-grid</code></td>
      <td>
        <span class="code">
          display: inline-grid !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:flow-root</code></td>
      <td><code>d:flow-root</code></td>
      <td>
        <span class="code">
          display: flow-root !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:table</code></td>
      <td><code>d:table</code></td>
      <td>
        <span class="code">
          display: table !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:inline-table</code></td>
      <td><code>d:inline-table</code></td>
      <td>
        <span class="code">
          display: inline-table !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:table-caption</code></td>
      <td><code>d:table-caption</code></td>
      <td>
        <span class="code">
          display: table-caption !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:table-header-group</code></td>
      <td><code>d:table-header-group</code></td>
      <td>
        <span class="code">
          display: table-header-group !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:table-footer-group</code></td>
      <td><code>d:table-footer-group</code></td>
      <td>
        <span class="code">
          display: table-footer-group !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:table-column</code></td>
      <td><code>d:table-column</code></td>
      <td>
        <span class="code">
          display: table-column !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:table-column-group</code></td>
      <td><code>d:table-column-group</code></td>
      <td>
        <span class="code">
          display: table-column-group !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:table-cell</code></td>
      <td><code>d:table-cell</code></td>
      <td>
        <span class="code">
          display: table-cell !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:table-row</code></td>
      <td><code>d:table-row</code></td>
      <td>
        <span class="code">
          display: table-row !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:table-row-group</code></td>
      <td><code>d:table-row-group</code></td>
      <td>
        <span class="code">
          display: table-row-group !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:inline-table</code></td>
      <td><code>d:inline-table</code></td>
      <td>
        <span class="code">
          display: inline-table !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:list-item</code></td>
      <td><code>d:list-item</code></td>
      <td>
        <span class="code">
          display: list-item !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:unset</code></td>
      <td><code>d:unset</code></td>
      <td>
        <span class="code">
          display: unset !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:inherit</code></td>
      <td><code>d:inherit</code></td>
      <td>
        <span class="code">
          display: inherit !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:initial</code></td>
      <td><code>d:initial</code></td>
      <td>
        <span class="code">
          display: initial !important;
        </span>
      </td>
    </tr>
    <tr>
      <td><code>display:none</code></td>
      <td><code>d:none</code></td>
      <td>
        <span class="code">
          display: none !important;
        </span>
      </td>
    </tr>
  </tbody>
</table>
