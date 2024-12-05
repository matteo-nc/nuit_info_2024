<script setup lang="ts">
  defineProps<{
    visible: boolean
  }>();
</script>

<template>
  <dialog :open='visible' class='overflow-auto p-10 rounded-xl border-2 border-black'>
    <slot></slot>
  </dialog>
</template>

<style scoped>

</style>