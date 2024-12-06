<script setup lang="ts">

</script>

<template>
  <div class="ocean">
      <!-- Dauphin -->
      <img
        src="/src/assets/dolphin.png"
        alt="Dolphin"   
        class="dolphin"
      />
  </div>
</template>

<style scoped>
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
  animation: rotate 2s infinite cubic-bezier(0,.5,.5,1);  
}


</style>
