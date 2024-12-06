<template>
  <div class="ocean":style="backgroundStyle">
    <div class="button">
      <button @click="changeTheme"><i style="font-size:2rem; color: saddlebrown" class="m-2 bi bi-globe-americas"></i></button>
    </div>
    <div class="containerDauphinHaut">
      <div class="container delay-2">
        <img
          src="/src/assets/dolphin.png"
          alt="Dolphin"   
          class="dolphin"
        />
      </div>
      <div class="container delay-4">
        <img
          src="/src/assets/dolphin.png"
          alt="Dolphin"   
          class="dolphin"
        />
      </div>
      <div class="container delay-6">
        <img
          src="/src/assets/dolphin.png"
          alt="Dolphin"   
          class="dolphin"
        />
      </div>
    </div>
    <div class="containerDauphinBas">
      <div class="container delay-1">
        <img
          src="/src/assets/dolphin.png"
          alt="Dolphin"   
          class="dolphin"
        />
      </div>
      <div class="container delay-3">
        <img
          src="/src/assets/dolphin.png"
          alt="Dolphin"   
          class="dolphin"
        />
      </div>
      <div class="container delay-5">
        <img
          src="/src/assets/dolphin.png"
          alt="Dolphin"   
          class="dolphin"
        />
      </div>
      <div class="container delay-7">
        <img
          src="/src/assets/dolphin.png"
          alt="Dolphin"   
          class="dolphin"
        />
      </div>
    </div>
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
  align-items: center;
}

.dolphin {
  width: 100px;
  left: 50%;
  bottom: 40%;
}

.container {
  width: 350px;
  height: 350px;
  position: relative;
  border-radius: 50%;
  animation: rot 3s;
  box-sizing: content-box;
}

.containerDauphinHaut {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 3%;
}

.containerDauphinBas {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-bottom: 10%;
}

.delay-1 {
  animation-delay: 0s;
}
.delay-2 {
  animation-delay: 3s;
}
.delay-3 {
  animation-delay: 6s;
}
.delay-4 {
  animation-delay: 9s;
}
.delay-5 {
  animation-delay: 12s;
}
.delay-6 {
  animation-delay: 15s;
}
.delay-7 {
  animation-delay: 18s;
}

/* Animation de rotation */
@keyframes rot {
  0% {
    transform: rotate(-45deg);
    opacity: 0; /* Caché au début */
  }
  10% {
    opacity: 1; /* Visible au début de l'animation */
  }
  90% {
    opacity: 1; /* Visible presque tout le long */
  }
  100% {
    transform: rotate(135deg);
    opacity: 0; /* Caché à la fin */
  }
}
</style>
