<script setup lang="ts">

import Question from "./Question.vue";
import Reponse from "./Reponse.vue";
</script>

<template>
  <Question :visible="true" class="top-[200px] bg-gray-300 m-20">
  </Question>
  <Reponse :visible="true" class="top-[200px] bg-gray-300 m-5">
  </Reponse>

  <Reponse :visible="true" class="top-[200px] bg-gray-300 m-5">
  </Reponse>

  <Reponse :visible="true" class="top-[200px] bg-gray-300 m-5">
  </Reponse>
</template>

<style scoped>

</style>