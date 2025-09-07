<script setup>
import { ref, computed } from "vue";

const ITEM_COUNT = 4;

const layoutList = [
  {
    name: "Bar List",
    class: "n-bar-list",
  },
  {
    name: "Card List",
    class: "n-card-list",
  },
  {
    name: "Tile List",
    class: "n-tile-list",
  },
  {
    name: "Tag List",
    class: "n-tag-list",
  },
];

const selectedLayout = ref(layoutList[0].class);

const itemTypeList = [
  {
    name: "Outline Box",
    class: "n-list-item-type:outline-box",
  },
  {
    name: "Outline None",
    class: "n-list-item-type:outline-none",
  },
  {
    name: "Shadow",
    class: "n-list-item-type:shadow",
  },
  {
    name: "Underline",
    class: "n-list-item-type:underline",
  },
];

const selectedItemType = ref(itemTypeList[0].class);

const itemBorderRadiusList = [
  {
    name: "0",
    class: "n-list-item-border-radius:0",
  },
  {
    name: "1",
    class: "n-list-item-border-radius:1",
  },
  {
    name: "2",
    class: "n-list-item-border-radius:2",
  },
  {
    name: "3",
    class: "n-list-item-border-radius:3",
  },
  {
    name: "4",
    class: "n-list-item-border-radius:4",
  },
  {
    name: "5",
    class: "n-list-item-border-radius:5",
  },
  {
    name: "full",
    class: "n-list-item-border-radius:full",
  },
];

const selectedItemBorderRadius = ref(itemBorderRadiusList[4].class);

const itemPaddingList = [
  {
    name: "0",
    class: "n-list-item-padding:0",
  },
  {
    name: "1",
    class: "n-list-item-padding:1",
  },
  {
    name: "2",
    class: "n-list-item-padding:2",
  },
  {
    name: "3",
    class: "n-list-item-padding:3",
  },
  {
    name: "4",
    class: "n-list-item-padding:4",
  },
];

const selectedItemPadding = ref(itemPaddingList[3].class);

const className = computed(() => {
  return `n-list ${selectedLayout.value} ${selectedItemType.value} ${selectedItemBorderRadius.value} ${selectedItemPadding.value}`;
});
</script>

<template>
  <section class="overview">
    <div class="overview-controller">
      <div class="select">
        <label>
          <span class="font-weight:2">레이아웃</span>
          <span class="pos:relative w:100p">
            <select v-model="selectedLayout" name="layout">
              <option
                v-for="option of layoutList"
                :key="option.name"
                :value="option.class"
              >
                {{ option.name }}
              </option>
            </select>
            <span
              class="icon icon:caret_down_bold icon-size:3 icon-color:base-4 pos:absolute"
              style="right: 12px; top: 4px"
            ></span>
          </span>
        </label>
      </div>
      <div class="select">
        <label>
          <span class="font-weight:2">아이템 타입</span>
          <span class="pos:relative w:100p">
            <select v-model="selectedItemType" name="item-type">
              <option
                v-for="option of itemTypeList"
                :key="option.name"
                :value="option.class"
              >
                {{ option.name }}
              </option>
            </select>
            <span
              class="icon icon:caret_down_bold icon-size:3 icon-color:base-4 pos:absolute"
              style="right: 12px; top: 4px"
            ></span>
          </span>
        </label>
      </div>
      <div class="select">
        <label>
          <span class="font-weight:2">아이템 모서리 둥글기 레벨</span>
          <span class="pos:relative w:100p">
            <select
              v-model="selectedItemBorderRadius"
              name="item-border-radius"
            >
              <option
                v-for="option of itemBorderRadiusList"
                :key="option.name"
                :value="option.class"
              >
                {{ option.name }}
              </option>
            </select>
            <span
              class="icon icon:caret_down_bold icon-size:3 icon-color:base-4 pos:absolute"
              style="right: 12px; top: 4px"
            ></span>
          </span>
        </label>
      </div>

      <div class="select">
        <label>
          <span class="font-weight:2">아이템 패딩 레벨</span>
          <span class="pos:relative w:100p">
            <select v-model="selectedItemPadding" name="item-padding">
              <option
                v-for="option of itemPaddingList"
                :key="option.name"
                :value="option.class"
              >
                {{ option.name }}
              </option>
            </select>
            <span
              class="icon icon:caret_down_bold icon-size:3 icon-color:base-4 pos:absolute"
              style="right: 12px; top: 4px"
            ></span>
          </span>
        </label>
      </div>
    </div>

    <div class="overview-example">
      <ul :class="className">
        <li v-for="(_, index) of ITEM_COUNT">item - {{ index + 1 }}</li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.overview {
  display: flex;
  flex-direction: column;

  border-radius: 0.5rem;
  border: 1px solid #dee2e6;
  background-color: #f8f9fa;
}

.overview-controller {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  gap: 16px;

  padding: 16px;
  background-color: var(--color-base-1);
  border-bottom: 1px solid var(--color-base-3);
}

.overview-example {
  flex-grow: 1;
  padding: 16px;
}

.select label {
  display: flex;
  flex-direction: column;
}
.select span {
  font-weight: 500;
  font-size: 14px;
  margin-top: 4px;
}
.select select {
  position: relative;
  width: 100%;
  height: 36px;
  padding-left: 12px;
  padding-right: 32px;
  border-radius: 8px;
  border: 1px solid var(--color-base-4);
}
</style>
