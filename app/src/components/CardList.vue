<template>
  <div class="flex-container">
    <div class="flex-item" v-for="column in columns" v-bind:key="column.id">
      <ul class="mdc-list">
        <li
          class="mdc-list-item menu-item"
          v-for="item in column.items"
          v-bind:key="item.id"
        >
          <span class="mdc-list-item__ripple"></span>
          <span class="mdc-list-item__text flex-container">
            <span class="flex-item">
              <img :src="require('../assets/images/' + item.image)" />
            </span>
            <span class="flex-item">
              {{ item.text }}
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import data from "../data/data.json";

export default defineComponent({
  name: "CardList",
  data() {
    return { columns: data.columns };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.flex-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.flex-item {
  padding-right: 15px;
}

img {
  width: 56px;
  height: 56px;
}

.menu-item {
  border-radius: 6px;
  width: 240px;
  box-shadow: 0 3px 5px gray;
  margin: 25px;
}

.menu-item:hover {
  box-shadow: 0 7px 15px 1px gray;
}
</style>
