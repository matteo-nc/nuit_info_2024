<script setup lang="ts">

import Question from "../components/Question.vue";
import {QuestionModel} from "../game.model.ts";
import {ref} from "vue";
import RunAwayInput from "@/components/RunAwayInput.vue";
import RunAwayButton from "@/components/RunAwayButton.vue";

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

const shuffle = () => {
  let questions = [
    new QuestionModel("Sélectionnez les mots qui ont une similitude")
      .withAnswer({labelA: 'sang', labelB: 'courant marins'})
      .withAnswer({labelA: 'sang', labelB: 'vagues'})
      .withRightAnswer(0)
    ,
    new QuestionModel('Sélectionnez les mots qui ont une similitude')
      .withAnswer({labelA: 'cellule corp humain', labelB: 'biodiversité'})
      .withAnswer({labelA: 'iceberg', labelB: 'crâne'})
      .withRightAnswer(0)
    ,
    new QuestionModel('Sélectionnez les mots qui ont une similitude')
      .withAnswer({labelA: 'Jambes', labelB: 'vagues'})
      .withAnswer({labelA: 'jambes', labelB: 'courant marins'})
      .withRightAnswer(0)
    ,
    new QuestionModel('Sélectionnez les mots qui ont une similitude')
      .withAnswer({labelA: 'Phytoplanctons', labelB: 'poumons'})
      .withAnswer({labelA: 'intestins', labelB: 'phytoplanctons'})
      .withRightAnswer(0)
    ,
    new QuestionModel('Sélectionnez les mots qui ont une similitude')
      .withAnswer({labelA: 'cerveau', labelB: 'abysses'})
      .withAnswer({labelA: 'cerveau', labelB: 'iceberg'})
      .withRightAnswer(0)
    ,
  ];
  return questions[getRandomInt(questions.length)];

}

const question = ref<QuestionModel>(shuffle());




const reinitialiserQuestion = () => {

  question.value = shuffle();
}



</script>

<template>
  <Question :question='question' @reset-questions="reinitialiserQuestion">
  </Question>

  <div>
    Tu veux un indice ?
    <RunAwayInput placeholder="Met A1B2C3 si tu peux" />
    <RunAwayButton text="Donne moi l'indice !" />
  </div>
</template>

<style scoped>

</style>
