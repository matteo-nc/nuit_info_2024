<script setup lang="ts">
import {QuestionModel} from "../game.model.ts";
import Reponse from "./Reponse.vue";

defineProps<{
  question: QuestionModel
}>();


</script>

<template>
  <div class="flex flex-col gap-5 items-center mt-10">
    <h1 class="text-3xl">{{question.label()}}</h1>

    <div v-for="(answer) in question.answers()" class="flex flex-col gap-5">
      <Reponse :answer="answer" :question="question" />
    </div>
  </div>



</template>

<style scoped>

</style>