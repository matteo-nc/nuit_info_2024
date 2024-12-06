<script>
  import Popup from "@/components/Popup.vue";

  export default {
    name: 'home',
    components: {Popup},
    props: {
      msg: {
      type: String,
      required: true
      }
    },
    data() {
      return {
        humain: null,
        ocean: null,
        switch: null,
        humainVisible: true,
        info: 'Cliquez sur une partie du corps pour en savoir plus',
        humainStyle: {
          position: 'relative',
          height: '60rem',
          width: '42rem',
        },
        oceanStyle: {
          position: 'relative',
          height: '60rem',
          width: '42rem',
        }
      };
    },
    methods: {
      toggleOcean() {
        const switchElement = this.$refs.switch;
        if (!switchElement) {
          return;
        }

        let checked = switchElement.checked;
        this.humainVisible = !checked;
      },
      getInfo() {
        const infos = [
          {img: 'sang', desc: 'Le sang comme le peuvent les courrants marin, permettent le transport des nutriments nécessaires à la vie' },
          {img: 'cellules', desc: 'Les cellules étant très nombreuses et diverses peuvent être comparées à la biodiversité des océans' },
          {img: 'jambes', desc: "Les jambes et les vagues s'adaptent au différents terrains" },
          {img: 'poumons', desc: "Les poumons tout comme les phytoplanctons permettent de respirer" },
          {img: 'cerveau', desc: "Le cerveau et les abysses sont des endroits mystérieux et inexplorés" },
        ];

        let randomIndex = Math.floor(Math.random() * infos.length);

        this.info = infos[randomIndex].desc;
      }
    },
  };
</script>

<template>
  Home
  <label class="inline-flex items-center cursor-pointer">
    <input ref="switch" type="checkbox" value="" class="sr-only peer" @change="toggleOcean">
    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Mode Océan</span>
  </label>
  <div v-if="humainVisible"  ref="humain" class="mx-auto" :style="humainStyle">
    <img alt="peauHumain" src="../../public/fondHumain.png" class="object-cover absolute inset-0 w-full h-full z-0" @click="getInfo">
    <img alt="veines" src="../../public/veines.png" class="object-cover absolute inset-0 w-full h-full z-10" @click="getInfo">
    <img alt="poumonhumain" src="../../public/poumonsHumain.png" class=" object-cover absolute inset-0 w-full h-full z-20" @click="getInfo">
    <img alt="coeurhumain" src="../../public/coeurHumain.png" class=" object-cover absolute inset-0 w-full h-full z-30" @click="getInfo">
  </div>

  <div v-else ref="ocean" class="relative mx-auto" :style="oceanStyle">
    <img alt="peauocean" src="../../public/fondOcean.png" class="object-cover absolute inset-0 w-full h-full z-0" @click="getInfo">
    <img alt="veines" src="../../public/veines.png" class="object-cover absolute inset-0 w-full h-full z-10" @click="getInfo">
    <img alt="poumonsOcean" src="../../public/poumonsOcean.png" class="object-cover absolute inset-0 w-full h-full z-20" @click="getInfo">
    <img alt="coeurOcean" src="../../public/coeurOcean.png" class="object-cover absolute inset-0 w-full h-full z-30" @click="getInfo">
  </div>

  <!-- Premier popup -->
  <Popup :visible="true" class="left-1/2 top-[200px] bg-gray-300">
    <p class="text-balance">{{ info }}</p>
  </Popup>
</template>

<style scoped>

</style>
