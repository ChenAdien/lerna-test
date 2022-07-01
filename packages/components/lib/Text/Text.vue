<script lang="ts" setup>
import { ref } from 'vue'
defineProps({
  text: String,
})
</script>
<template>
  <div>
    {{ text }}
  </div>
</template>
<style lang="scss"></style>
