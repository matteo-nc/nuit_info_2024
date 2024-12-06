<script setup lang="ts">

</script>

<template>
  <header class="bg-blue-500 w-full">
    <nav class="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 md:gap-16 p-5">
      <RouterLink class="hover:bg-cyan-300 p-2 sm:p-3 md:p-5 rounded flex items-center gap-2" to="/">
        <img src="../assets/principe.svg" class="logo w-10 h-10 inline" alt="Accueil logo"/>
        <p class="text-white">Accueil</p>
      </RouterLink>

      <RouterLink class="hover:bg-cyan-300 p-2 sm:p-3 md:p-5 rounded flex items-center gap-2" to="/test">
        <img src="../assets/game.svg" class="logo w-10 h-10 inline" alt="Testez-vous logo"/>
        <p class="text-white">Testez-vous</p>
      </RouterLink>

      <RouterLink class="hover:bg-cyan-300 p-2 sm:p-3 md:p-5 rounded flex items-center gap-2" to="/credits">
        <img src="../assets/contact.svg" class="logo w-10 h-10 inline" alt="Crédits logo"/>
        <p class="text-white">Crédits</p>
      </RouterLink>

      <RouterLink class="hover:bg-cyan-300 p-2 sm:p-3 md:p-5 rounded flex items-center gap-2" to="/video">
        <p class="text-white">Vidéo</p>
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>

</style>
