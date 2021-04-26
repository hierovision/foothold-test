<template>
  <div class="app-container">
    <CardList v-if="showCardList" />
    <!-- FAB to open cardlist -->
    <button
      class="cardlist-fab mdc-fab"
      aria-label="Expand menu"
      v-on:click="toggleMenu"
    >
      <div class="mdc-fab__ripple"></div>
      <span class="mdc-fab__icon material-icons">add</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CardList from "./components/CardList.vue";

export default defineComponent({
  name: "App",
  components: {
    CardList,
  },
  data() {
    return { showCardList: false };
  },
  methods: {
    toggleMenu() {
      this.showCardList = !this.showCardList;
    },
  },
});
</script>

<style lang="scss">
.app-container {
  min-height: 600px;
  min-width: 800px;
}

.cardlist-fab {
  position: absolute;
  right: 16px;
  bottom: 16px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
