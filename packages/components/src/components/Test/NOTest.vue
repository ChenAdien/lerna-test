<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  content: {
    type: String,
    default: '点击',
  },
})
const num = ref(1)
function add() {
  num.value += 1
}
</script>
<template>
  <div>
    <div class="test-flag">{{ num }}</div>
    <button @click="add">{{ content }}</button>
  </div>
</template>
<style scoped lang="scss">
.test-flag {
  color: red;
}
</style>
