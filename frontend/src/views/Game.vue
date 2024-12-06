<script setup lang="ts">

import Question from "../components/Question.vue";
import {QuestionModel} from "../game.model.ts";
import {ref} from "vue";

const question = ref<QuestionModel>(null);

const reset = ref(false);

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}



const reinitialiserQuestion = () => {
  let questions = [
    new QuestionModel('Pourquoi ?')
      .withAnswer({labelA: '1', labelB: '2'})
      .withAnswer({labelA: '2', labelB: '3'})
      .withRightAnswer(1)
    ,
    new QuestionModel('Pourquoi 2 ?')
      .withAnswer({labelA: '1', labelB: '2'})
      .withAnswer({labelA: '2', labelB: '3'})
      .withRightAnswer(1)
    ,
  ];
  question.value = questions[getRandomInt(questions.length)];
}

reinitialiserQuestion();



</script>

<template>
  <Question :question='question' @reset-questions="reinitialiserQuestion">
  </Question>
</template>

<style scoped>

</style>
