<script>
export default {
  name: 'run-away-input',
  props: {
    placeholder: {
      type: String,
      default: 'TKT Bro'
    }
  },
  data() {
    return {
      input: null,
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
      const inputElement = this.$refs.input;
      if (!inputElement) {
        return;
      }

      let inputBorder = inputElement.getBoundingClientRect();
      let mouseX = event.clientX;
      let mouseY = event.clientY;

      let cursorInByRight = mouseX - inputBorder.right + 5;
      let cursorInByLeft = inputBorder.left - mouseX + 5;
      let cursorInByTop = inputBorder.top - mouseY + 5;
      let cursorInByBottom = mouseY - inputBorder.bottom + 5;

      if (cursorInByRight < 0 && cursorInByLeft < 0 && cursorInByTop < 0 && cursorInByBottom < 0) {
        this.dynamicMovementData.position = 'absolute';
        if (cursorInByBottom + cursorInByRight < cursorInByLeft + cursorInByTop) {
          this.dynamicMovementData.top = `${inputBorder.top + 30 - cursorInByTop - cursorInByBottom}px`;
          this.dynamicMovementData.left = `${inputBorder.left + 30 - cursorInByLeft - cursorInByRight}px`;
        } else {
          this.dynamicMovementData.top  = `${inputBorder.top - 30 + cursorInByTop - cursorInByBottom}px`;
          this.dynamicMovementData.left = `${inputBorder.left - 30 + cursorInByLeft - cursorInByRight}px`;
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
  <input ref="input" :style="dynamicMovementData" :placeholder="placeholder" class="border-4 rounded-lg focus:border-blue-500 focus:outline-none p-2 w-1/5" tabindex="-1" />
</template>
