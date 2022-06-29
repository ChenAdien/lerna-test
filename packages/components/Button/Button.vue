<script lang="ts" setup>
import { ref } from 'vue'
const content = ref<number>(1)
function click() {
  content.value += 1
}
</script>
<template>
  <button @click="click" class="red">{{ content }}</button>
</template>
<style lang="scss">
.red {
  color: red;
}
</style>
