<script setup lang="ts">

import Question from "./Question.vue";
import {QuestionModel} from "../game.model.ts";

let questions = [
    new QuestionModel('Pourquoi ?')
        .withAnswer({labelA: '1', labelB: '2'})
        .withAnswer({labelA: '2', labelB: '3'})
        .withRightAnswer(1)

];

let question = questions[0];
</script>

<template>
  <Question :question='question'>
  </Question>
</template>

<style scoped>

</style>