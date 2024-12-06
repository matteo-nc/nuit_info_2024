<script setup lang="ts">
defineProps<{
  visible: boolean
}>();
</script>

<template>
  <Questions :open='visible' class='overflow-auto p-10 rounded-xl border-2 border-black'>
    { questions }
  </Questions>
</template>

<style scoped>

</style>