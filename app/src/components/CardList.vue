<template>
  <div class="cardlist-container">Card List</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardList",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cardlist-container {
  flex: 1;
}
</style>
