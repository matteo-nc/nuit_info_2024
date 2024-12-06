<script setup lang="ts">

import Popup from "../components/Popup.vue";
</script>

<template>
  Home
  <Popup :visible="true" class="left-1/2 top-[200px] bg-gray-300">
    <p>Tototo</p>
    <p>WAWA</p>
  </Popup>

  <Popup :visible="true" class="right-1/2 top-[200px] bg-gray-300">
    <p>Tototo</p>
    <p>WAWA</p>
  </Popup>
</template>

<style scoped>

</style>
