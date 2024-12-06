<script setup lang="ts">
import { ref, watch } from "vue";
import { Answer, QuestionModel } from "../game.model.ts";

// Props
const props = defineProps<{
  answer: Answer;
  question: QuestionModel;
  selected: boolean;
  reset: boolean;
}>();

const emit = defineEmits<{ (e: "on-answer-selected"): void }>();

// Couleur de la div
const currentColor = ref("");

// Fonction pour changer la couleur
const onClicked = () => {
  if (props.question.closed()) {
    return;
  }

  currentColor.value = props.question.select(props.answer.id)
      ? "bg-green-900"
      : "bg-red-900";

  setTimeout(() => emit("on-answer-selected"), 1000);
};

// Observer les changements de `reset` pour réinitialiser la couleur
watch(
    () => props.reset,
    (newValue) => {
      if (newValue) {
        currentColor.value = "bg-white"; // Réinitialise la couleur
      }
    }
);
</script>

<template>
  <a href="#">
    <div
        :class="[currentColor, 'flex flex-row justify-between w-96 px-5 py-10 rounded-xl border-2 border-black hover:border-green-500']"
        @click="onClicked"
    >
      <span>{{ answer.labelA }}</span>
      <span>{{ answer.labelB }}</span>
    </div>
  </a>

</template>