<script setup lang="ts">
import {QuestionModel} from "../game.model.ts";
import Reponse from "./Reponse.vue";
import {ref} from "vue";

defineProps<{
  question: QuestionModel
}>();
const emit = defineEmits<{(e: 'resetQuestions') : void}>();

const reset = ref(false);

const showReloadQuestions = ref(false);
const selectedQuestion = ref<Map<number, boolean>>(new Map());

const afficherBouton = () => {
  showReloadQuestions.value = true;
}

const resetQuestion = () => {
  showReloadQuestions.value = false;
  selectedQuestion.value = new Map();

  // Déclenche le reset
  reset.value = true;
  setTimeout(() => {
    reset.value = false;
  }, 0);

  emit("resetQuestions");
};




</script>

<template>
  <div class="flex flex-col gap-5 items-center mt-10">
    <h1 class="text-3xl">{{question.label()}}</h1>

    <div v-for="(answer) in question.answers()" class="flex flex-col gap-5">
      <Reponse
          :answer="answer"
          :question="question"
          :reset="reset"
          @on-answer-selected="afficherBouton"
      />
    </div>
  </div>

  <button v-on:click="resetQuestion" v-if="showReloadQuestions" class="bg-blue-500 rounded-xl p-5 m-5 text-white">
    Suivant
  </button>





</template>

<style scoped>

</style>
