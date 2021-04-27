<template>
  <div class="app-container">
    <div class="cardlist-container">
      <transition name="fade">
        <CardList v-if="showCardList" />
      </transition>
    </div>
    <!-- FAB to open cardlist -->
    <button
      class="cardlist-fab mdc-fab"
      :class="{ 'cardlist-fab-active': showCardList }"
      aria-label="Expand menu"
      v-on:click="toggleMenu"
    >
      <div class="mdc-fab__ripple"></div>
      <span
        class="mdc-fab__icon material-icons cardlist-fab-icon"
        :class="{ 'cardlist-fab-icon-active': showCardList }"
        >{{ showCardList ? "close" : "add" }}</span
      >
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
  min-height: 537px;
  width: 630px;
  display: flex;
  flex-direction: column;
}

.cardlist-container {
  flex: 1;
}

.cardlist-fab {
  width: 56px;
  height: 56px;
  align-self: flex-end;
  background-color: #63e5cd;
  transition: all 0.25s linear;
}

.cardlist-fab-active {
  background-color: #0f2e40;
}

.mdc-fab:not(:disabled) .cardlist-fab-icon {
  color: #0f2e40;
  font-size: 42px;
  font-weight: bold;
}

.mdc-fab:not(:disabled) .cardlist-fab-icon-active {
  color: #63e5cd;
  font-size: 32px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
