<template>
  <div class="ocean" :style="backgroundStyle">
    <div class="button">
      <button @click="changeTheme"><i style="font-size:2rem; color: saddlebrown" class="m-2 bi bi-globe-americas"></i></button>
    </div>
    <!-- Dauphin -->
    <img
      :src="characterImage"
      alt="Dolphin"
      class="dolphin"
    />
  </div>
</template>

<script>

export default {
  data() {
    return {
      theme: "sea",
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "sea" ? "earth" : "sea";
    },
  },
  computed: {
    characterImage() {
      return this.theme === "sea"
        ? '/src/assets/dolphin.png'
        : '/src/assets/man.png';
    },
    backgroundStyle() {
      return {
        background: this.theme === "sea"
          ? "linear-gradient(to bottom, #87ceeb, #005f99)"
          : "linear-gradient(to bottom, #f0e68c, #228b22)",
      };
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
/* Container principal pour l'océan */
.ocean {
  width: 100%;
  height: 100vh;
  background: linear-gradient(to bottom, #87ceeb, #005f99); /* Couleurs ciel et océan */
  overflow: hidden;
  position: relative;
}


.dolphin {
  width: 100px;
  position: absolute;
  left: 50%;
  bottom: 40%;
  animation: rotate 2s infinite cubic-bezier(0, .5, .5, 1);
}


</style>
