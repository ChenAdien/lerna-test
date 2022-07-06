<script setup lang="ts">
import { ref, defineComponent } from "vue";
import { buttonProps } from "./button";
defineProps(buttonProps);
const num = ref<number>(1);
function click() {
  num.value += 1;
}
console.log(222);
</script>
<template>
  <div>
    <div>{{ num }}</div>
    <button class="red" @click="click">
      {{ content }}
    </button>
  </div>
</template>
<style lang="scss">
.red {
  color: var(--base-color);
}
</style>
