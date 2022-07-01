<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import { buttonProps } from './button.ts'
defineProps(buttonProps)
const num = ref<number>(1)
function click() {
  num.value += 1
}
</script>
<template>
  <div>
    <div>{{ num }}</div>
    <button @click="click" class="red">{{ content }}</button>
  </div>
</template>
<style lang="scss">
.red {
  color: red;
}
</style>
