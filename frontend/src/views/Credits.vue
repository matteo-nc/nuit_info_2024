<template>
  <div class="ocean" :style="backgroundStyle" style="height: 110%">
    <div class="button">
      <button @click="changeTheme"><i style="font-size:2rem; color: saddlebrown" class="m-2 bi bi-globe-americas"></i>
      </button>
    </div>
    <img class="imageNous img-delay-2" :src="firstHumanPicture" style="position: absolute; width: 13%; height: 30%" :style="`top: ${this.firstHumanPosition.y - 30}px; left:   ${this.firstHumanPosition.x + 105}px`"/>
    <img class="imageNous img-delay-4" :src="secondHumanPicture" style="position: absolute; width: 13%; height: 30%" :style="`top: ${this.secondHumanPosition.y - 30}px; left:  ${this.secondHumanPosition.x + 105}px`"/>
    <img class="imageNous img-delay-6" :src="thirdHumanPicture" style="position: absolute; width: 13%; height: 30%" :style="`top: ${this.thirdHumanPosition.y - 30}px; left:   ${this.thirdHumanPosition.x + 105}px`"/>
    <img class="imageNous img-delay-1" :src="fourthHumanPicture" style="position: absolute; width: 13%; height: 30%" :style="`top: ${this.fourthHumanPosition.y - 30}px; left:  ${this.fourthHumanPosition.x + 105}px`"/>
    <img class="imageNous img-delay-3" :src="fifthHumanPicture" style="position: absolute; width: 13%; height: 30%" :style="`top: ${this.fifthHumanPosition.y - 30}px; left:   ${this.fifthHumanPosition.x + 105}px`"/>
    <img class="imageNous img-delay-5" :src="sixthHumanPicture" style="position: absolute; width: 13%; height: 30%" :style="`top: ${this.sixthHumanPosition.y - 30}px; left:   ${this.sixthHumanPosition.x + 105}px`"/>
    <img class="imageNous img-delay-7" :src="seventhHumanPicture" style="position: absolute; width: 13%; height: 30%" :style="`top: ${this.seventhHumanPosition.y - 30}px; left: ${this.seventhHumanPosition.x + 105}px`"/>
    <div :class="dolphinContainerClass">
      <div class="containerDauphinHaut">
        <div :class="containerDefinition" class="delay-2">
          <img
            ref="dauphin1"
            src="/src/assets/dolphin.png"
            alt="Dolphin"
            class="dolphin"
          />
        </div>
        <div :class="containerDefinition" class="delay-4">
          <img
            ref="dauphin2"
            src="/src/assets/dolphin.png"
            alt="Dolphin"
            class="dolphin"
          />
        </div>
        <div :class="containerDefinition" class="delay-6">
          <img
            ref="dauphin3"
            src="/src/assets/dolphin.png"
            alt="Dolphin"
            class="dolphin"
          />
        </div>
      </div>
      <div class="containerDauphinBas">
        <div :class="containerDefinition" class="delay-1">
          <img
            ref="dauphin4"
            src="/src/assets/dolphin.png"
            alt="Dolphin"
            class="dolphin"
          />
        </div>
        <div :class="containerDefinition" class="delay-3">
          <img
            ref="dauphin5"
            src="/src/assets/dolphin.png"
            alt="Dolphin"
            class="dolphin"
          />
        </div>
        <div :class="containerDefinition" class="delay-5">
          <img
            ref="dauphin6"
            src="/src/assets/dolphin.png"
            alt="Dolphin"
            class="dolphin"
          />
        </div>
        <div :class="containerDefinition" class="delay-7">
          <img
            ref="dauphin7"
            src="/src/assets/dolphin.png"
            alt="Dolphin"
            class="dolphin"
          />
        </div>
      </div>
    </div>
    <div :class="manContainerClass">
      <div class="containerDauphinHaut">
        <div :class="containerDefinition" class="delay-2">
          <img
            src="/src/assets/man.png"
            alt="Dolphin"
            class="human"
          />
        </div>
        <div :class="containerDefinition" class="delay-4">
          <img
            src="/src/assets/man.png"
            alt="Dolphin"
            class="human"
          />
        </div>
        <div :class="containerDefinition" class="delay-6">
          <img
            src="/src/assets/man.png"
            alt="Dolphin"
            class="human"
          />
        </div>
      </div>
      <div class="containerDauphinBas">
        <div :class="containerDefinition" class="delay-1">
          <img
            src="/src/assets/man.png"
            alt="Dolphin"
            class="human"
          />
        </div>
        <div :class="containerDefinition" class="delay-3">
          <img
            src="/src/assets/man.png"
            alt="Dolphin"
            class="human"
          />
        </div>
        <div :class="containerDefinition" class="delay-5">
          <img
            src="/src/assets/man.png"
            alt="Dolphin"
            class="human"
          />
        </div>
        <div :class="containerDefinition" class="delay-7">
          <img
            src="/src/assets/man.png"
            alt="Dolphin"
            class="human"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      theme: "sea",
      firstHumanPosition: {},
      secondHumanPosition: {},
      thirdHumanPosition: {},
      fourthHumanPosition: {},
      fifthHumanPosition: {},
      sixthHumanPosition: {},
      seventhHumanPosition: {},
    };
  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "sea" ? "earth" : "sea";

    },
  },
  computed: {
    dolphinContainerClass() {
      return this.theme === "sea"
        ? "shown"
        : "hidden"
    },
    manContainerClass() {
      return this.theme === "sea"
        ? "hidden"
        : "shown";
    },
    backgroundStyle() {
      return {
        background: this.theme === "sea"
          ? "linear-gradient(to bottom, #87ceeb, #005f99)"
          : "linear-gradient(to bottom, #f0e68c, #228b22)",
      };
    },
    containerDefinition() {
      return this.theme === "sea"
        ? "container"
        : "containerHuman";
    },
    firstHumanPicture() {
      return this.theme === "sea"
        ? "/src/assets/hafez.png"
        : "/src/assets/hafezSinge.png";
    },
    secondHumanPicture() {
      return this.theme === "sea"
        ? "/src/assets/florian.png"
        : "/src/assets/florianSinge.png";
    },
    thirdHumanPicture() {
      return this.theme === "sea"
        ? "/src/assets/pol.png"
        : "/src/assets/polSinge.png";
    },
    fourthHumanPicture() {
      return this.theme === "sea"
        ? "/src/assets/erwan.png"
        : "/src/assets/erwanSinge.png";
    },
    fifthHumanPicture() {
      return this.theme === "sea"
        ? "/src/assets/matteo.png"
        : "/src/assets/matteoSinge.png";
    },
    sixthHumanPicture() {
      return this.theme === "sea"
        ? "/src/assets/sam.png"
        : "/src/assets/samSinge.png";
    },
    seventhHumanPicture() {
      return this.theme === "sea"
        ? "/src/assets/nathan.png"
        : "/src/assets/nathanSinge.png";
    },
  },
  mounted() {
    this.firstHumanPosition = { x: this.$refs.dauphin1.x, y: this.$refs.dauphin1.y };
    this.secondHumanPosition = { x: this.$refs.dauphin2.x, y: this.$refs.dauphin2.y };
    this.thirdHumanPosition = { x: this.$refs.dauphin3.x, y: this.$refs.dauphin3.y };
    this.fourthHumanPosition = { x: this.$refs.dauphin4.x, y: this.$refs.dauphin4.y };
    this.fifthHumanPosition = { x: this.$refs.dauphin5.x, y: this.$refs.dauphin5.y };
    this.sixthHumanPosition = { x: this.$refs.dauphin6.x, y: this.$refs.dauphin6.y };
    this.seventhHumanPosition = { x: this.$refs.dauphin7.x, y: this.$refs.dauphin7.y };

  }
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
.human {
  width: 100px;
  left: 50%;
  bottom: 40%;
}

.container {
  width: 350px;
  height: 350px;
  position: relative;
  border-radius: 50%;
  animation: rot 3s forwards;
  box-sizing: content-box;
  opacity: 0;
  transition: opacity 0s ease-out;
}

.imageNous {
  transition: opacity 0s ease-out;
  animation: img 3s forwards;
  opacity: 0;
}

.containerHuman {
  width: 350px;
  height: 350px;
  position: relative;
  border-radius: 50%;
  box-sizing: content-box;
  opacity: 0;
  transition: opacity 0s ease-out;
  animation: transit 3s forwards;
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

.shown {
  z-index: 1; /* Visible au-dessus */
  pointer-events: auto;
  transition: opacity 0.5s ease-in-out;
}

.hidden {
  opacity: 0;
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

.img-delay-1 {
  animation-delay: -1.5s;
}

.img-delay-2 {
  animation-delay: 1.5s;
}

.img-delay-3 {
  animation-delay: 4.5s;
}

.img-delay-4 {
  animation-delay: 7.5s;
}

.img-delay-5 {
  animation-delay: 10.5s;
}

.img-delay-6 {
  animation-delay: 13.5s;
}

.img-delay-7 {
  animation-delay: 16.5s;
}

/* Animation de rotation */
@keyframes rot {
  0% {
    transform: rotate(-45deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: rotate(135deg);
    opacity: 0;
  }
}

@keyframes img {
  0% {
    opacity: 0; /* Caché au début */
  }
  10% {
    opacity: 0; /* Visible au début de l'animation */
  }
  90% {
    opacity: 0 /* Visible presque tout le long */
  }
  100% {
    opacity: 1; /* Caché à la fin */
  }
}

@keyframes transit {
  0% {
    transform: translate(0, 0);
    opacity: 0; /* Caché au début */
  }
  10% {
    opacity: 1; /* Visible au début de l'animation */
  }

  50% {
    transform: translate(150px, -150px);
    opacity: 1; /* Visible presque tout le long */
  }

  90% {
    opacity: 1; /* Visible presque tout le long */
  }
  100% {
    transform: translate(300px, 0px);
    opacity: 0; /* Caché à la fin */
  }
}
</style>
