<script setup lang="ts">
import { ref } from "vue";
import {Answer, QuestionModel} from "../game.model.ts";

const props = defineProps<{answer:Answer, question:QuestionModel}>();

// Couleur de la div
const currentColor = ref("bg-white");


// Fonction pour changer la couleur
const onClicked = () => {
  if(props.question.closed()){
    return;
  }

  if(props.question.select(props.answer.id)){
    currentColor.value = currentColor.value === "bg-white" ? "bg-green-900" : "bg-white";
  } else {
    currentColor.value = currentColor.value === "bg-white" ? "bg-red-900" : "bg-white";
  }

};



</script>

<template>
  <div
      :class="[currentColor, 'flex flex-row justify-between w-96 px-5 py-10 rounded-xl border-2 border-black']"
      @click="onClicked"
  >
    <span>
      {{answer.labelA}}
    </span>
    <span>
      {{answer.labelB}}
    </span>
  </div>
</template>

<style scoped>

</style>