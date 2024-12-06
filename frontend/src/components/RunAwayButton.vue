<script>
export default {
  name: 'run-away-button',
  props: {
    text: {
      type: String,
      default: 'FUYEZ'
    }
  },
  data() {
    return {
      button: null,
      dynamicMovementData: {
        position: 'relative',
        transition: 'all 0.2s',
        top: '2rem',
        left: '2rem',

      }
    };
  },
  methods: {
    handleMouseMove(event) {
      const buttonElement = this.$refs.button;
      if (!buttonElement) {
        return;
      }

      let buttonBorder = buttonElement.getBoundingClientRect();
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      let cursorInByRight = mouseX - buttonBorder.right + 2;
      let cursorInByLeft = buttonBorder.left - mouseX + 2;
      let cursorInByTop = buttonBorder.top - mouseY + 2;
      let cursorInByBottom = mouseY - buttonBorder.bottom + 2;

      if (cursorInByRight < 0 && cursorInByLeft < 0 && cursorInByTop < 0 && cursorInByBottom < 0) {
        if (cursorInByBottom + cursorInByRight < cursorInByLeft + cursorInByTop) {
          this.dynamicMovementData.top = `${buttonBorder.top + 30 - cursorInByTop - cursorInByBottom}px`;
          this.dynamicMovementData.left = `${buttonBorder.left + 30 - cursorInByLeft - cursorInByRight}px`;
        } else {
          this.dynamicMovementData.top  = `${buttonBorder.top - 30 + cursorInByTop - cursorInByBottom}px`;
          this.dynamicMovementData.left = `${buttonBorder.left - 30 + cursorInByLeft - cursorInByRight}px`;
        }
      }
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.handleMouseMove);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }
};
</script>

<template>
  <button ref="button" :style="dynamicMovementData" class="border rounded-lg border-gray-900 bg-gray-500 p-2" @click="() => {console.log('ouiiiiiiiiiiiiii')}">
    {{ text }}
  </button>
</template>
