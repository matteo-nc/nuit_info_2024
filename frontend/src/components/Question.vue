<script setup lang="ts">
defineProps<{
  visible: boolean
}>();
</script>

<template>
  <div :open="visible" class="w-1/2 max-w-md overflow-auto p-5 rounded-xl border-2 border-black mx-auto">
    {{ questions }}
  </div>
</template>

<style scoped>

</style>