<script lang="ts" setup>
import { ref } from "vue";
defineProps({
  text: { type: String, default: "1" },
});
</script>
<template>
  <div>
    {{ text }}
  </div>
</template>
<style lang="scss"></style>
