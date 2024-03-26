<script setup></script>

<template>
  <div class="component-list d:flex flex-wrap:wrap jc:space-around gap:4">
    <!-- Button -->
    <section class="n-item">
      <a href="../components/button">
        <h1>Button</h1>
        <div class="d:flex ai:center jc:center">
          <button class="n-btn n-btn-type:filled n-btn:3">Click</button>
        </div>
      </a>
    </section>

    <!-- Container -->
    <section class="n-item">
      <a href="../components/container">
        <h1>Container</h1>
        <div class="bg-color:base-2 border">
          <div class="container bg-color:base-1 h:100p mx:auto"></div>
        </div>
      </a>
    </section>

    <!-- Drawer -->
    <section class="n-item">
      <a href="../components/drawer">
        <h1>Drawer</h1>
        <div class="bg-color:base-3 border of:hidden">
          <div class="bg-color:base-1 w:1 h:100p box-shadow:5"></div>
        </div>
      </a>
    </section>

    <!-- Dropdown -->
    <section class="n-item">
      <a href="../components/dropdown">
        <h1>Dropdown</h1>
        <div class="n-dropdown d:flex ai:center z-index:1">
          <div class="n-dropdown-list active mt:0 w:100p">
            <div class="n-dropdown-item">Lorem</div>
            <div class="n-dropdown-item">Ipsum</div>
            <div class="n-dropdown-item">Dolor</div>
          </div>
        </div>
      </a>
    </section>

    <section class="n-item">
      <a href="../components/expander">
        <h1>Expander</h1>

        <div class="mt:10">
          <section class="n-expander bd bd-radius:2">
            <h1>
              <input type="checkbox" />
              expander
            </h1>
            <div>
              <div class="px:2 py3">content</div>
            </div>
          </section>
        </div>
      </a>
    </section>

    <!-- Font -->
    <section class="n-item">
      <a href="../components/font">
        <h1>Font</h1>
        <div class="fonts">
          <h1 class="n-font n-font:title text-align:left">This is Title.</h1>
          <h2 class="n-font n-font:subtitle text-align:left">
            This is Subtitle.
          </h2>
          <h1 class="n-font n-font:h1 text-align:left">This is h1.</h1>
          <h2 class="n-font n-font:h2 text-align:left">This is h2.</h2>
          <h3 class="n-font n-font:h3 text-align:left">This is h3.</h3>
        </div>
      </a>
    </section>

    <!-- Form -->
    <section class="n-item">
      <a href="../components/form">
        <h1>Form</h1>
        <form class="n-form p:4">
          <div class="fl-dir:column">
            <label class="as:start">label</label>
            <input type="text" class="w:full" />
          </div>
          <div class="fl-dir:column mt:2">
            <label class="as:start">label</label>
            <input type="text" class="w:full" />
          </div>
        </form>
      </a>
    </section>

    <!-- Item -->
    <section class="n-item">
      <a href="../components/item">
        <h1>Item</h1>
        <div class="n-item"></div>
      </a>
    </section>

    <!-- List -->
    <section class="n-item">
      <a href="../components/list">
        <h1>List</h1>
        <ul class="n-list n-list-item-border-radius:3 n-list-item-p:2 gap:2">
          <li class="text-align:center"></li>
          <li class="text-align:center"></li>
          <li class="text-align:center"></li>
          <li class="text-align:center"></li>
        </ul>
      </a>
    </section>

    <!-- Modal -->
    <section class="n-item">
      <a href="../components/modal">
        <h1>Modal</h1>
        <div
          class="n-modal d:flex fl-dir:column border w:full h:fit-content pos:relative zi:1"
        >
          <h1 class="text-align:center mt:2 font-weight:2">Title</h1>
          <p class="word-break:break-all mt:2">Lorem ipsum dolor sit amet.</p>
          <div class="mt:4">
            <button class="n-btn n-btn-size:1 w:100p">close</button>
          </div>
          <div class="pos:absolute" style="top: 4px; right: 8px">
            <button type="button" class="btn p:0">
              <span class="icon icon:x icon-size:2">Close</span>
            </button>
          </div>
        </div>
      </a>
    </section>

    <!-- Pager -->
    <section class="n-item">
      <a href="../components/pager">
        <h1>Pager</h1>
        <ul class="n-pager jc:center">
          <li class="active"><span>1</span></li>
          <li><span>2</span></li>
          <li><span>3</span></li>
        </ul>
      </a>
    </section>

    <!-- Panel -->
    <section class="n-item">
      <a href="../components/panel">
        <h1>Panel</h1>
        <div class="border d:flex fl-dir:column font-size:1">
          <div class="top-panel text-align:center bg-color:base-4"></div>
          <div class="fl-grow:1 d:flex">
            <div class="side-panel bg-color:base-2"></div>
            <div></div>
          </div>
        </div>
      </a>
    </section>

    <!-- Progress -->
    <section class="n-item">
      <a href="../components/progress">
        <h1>Progress</h1>
        <div class="d:flex ai:center">
          <div class="n-progress" role="progressbar">
            <div style="width: 25%"></div>
          </div>
        </div>
      </a>
    </section>

    <!-- Progress -->
    <section class="n-item">
      <a href="../components/select">
        <h1>Select</h1>
        <div class="d:flex ai:center">
          <div class="n-select">
            <select name="pets" id="pet-select">
              <option value="">select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </a>
    </section>

    <!-- Table -->
    <section class="n-item">
      <a href="../components/table">
        <h1>Table</h1>
        <table class="n-table n-table-bd n-cell-h:1 font-size:1">
          <thead>
            <tr>
              <th>...</th>
              <th>...</th>
              <th>...</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in 4">
              <th>...</th>
              <td>...</td>
              <td>...</td>
              <td>...</td>
            </tr>
          </tbody>
        </table>
      </a>
    </section>

    <!-- Textbox -->
    <section class="n-item">
      <a href="../components/textbox">
        <h1>Text Box</h1>
        <div>
          <label class="d:flex flex-direction:column ai:start">
            input
            <input type="text" class="n-textbox" />
          </label>
          <label
            class="d:flex flex-direction:column ai:start mt:3"
            style="gap: 6px"
          >
            textarea
            <textarea class="n-textbox"></textarea>
          </label>
        </div>
      </a>
    </section>

    <!-- Toggle -->
    <section class="n-item">
      <a href="../components/toggle">
        <h1>Toggle</h1>
        <div class="d:flex fl-dir:column ai:center jc:center">
          <label class="">
            <input class="n-toggle n-toggle-size:3" type="checkbox" />
          </label>
          <label class="">
            <input
              class="n-toggle n-toggle-size:3 mt:2"
              type="checkbox"
              checked
            />
          </label>
        </div>
      </a>
    </section>

    <section class="n-item suggest-component">
      <a
        href="https://github.com/newlecture-corp/newtil-css/issues/new?assignees=&labels=feature&projects=&template=%EA%B8%B0%EB%8A%A5-%EC%9A%94%EC%B2%AD.md&title=feature%3A+"
        target="_blank"
      >
        <h1 class="font-size:2">컴포넌트 추가 제안하기</h1>
        <div class="d:flex ai:center jc:center">
          <div class="border border-radius:4 w:fit-content p:5 plus">
            <span class="icon icon:plus"></span>
          </div>
        </div>
      </a>
    </section>
  </div>
</template>

<style scoped>
/* item */
.component-list > .n-item {
  width: 218px;
  height: 250px;

  flex-shrink: 0;

  transition: box-shadow 0.2s;
  cursor: pointer;
}

.component-list > .n-item:hover {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.component-list > .n-item > a {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
}

/* title */
.component-list > .n-item > a > h1 {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
}

.component-list > .n-item > a > :nth-child(2) {
  width: 100%;
  height: 100%;

  margin-top: 16px;
}

/* font */
.fonts {
  white-space: nowrap;
  transform: scale(0.8);
  transform-origin: top;
}

/* container */
.container {
  width: 80%;
}

/* modal */
.n-modal {
  position: relative;
  top: 0;
  right: 0;
  transform: translate(0, 0);
}

/* panel */
.top-panel {
  height: 20%;
}

.n-table > thead > tr,
.n-table > tbody > tr {
  height: 32px;
}

.side-panel {
  width: 25%;
  height: 100%;
}

.suggest-component {
  background-color: rgba(var(--rgb-base-2), 0.15);
}

.suggest-component .plus {
  background-color: #fff;
  /* background-color: rgba(var(--rgb-base-2), 0.2); */
}
</style>
