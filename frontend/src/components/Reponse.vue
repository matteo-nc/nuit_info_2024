<script setup lang="ts">
defineProps<{
  visible: boolean
}>();


</script>

<template>
  <div :open="visible" class="max-w-md overflow-auto p-10 gap-4 sm:gap-8 md:gap-16 rounded-xl border-2 border-black mx-auto" v-on:click="br-">
    {{ reponse }}
  </div>
</template>

<style scoped>

</style>