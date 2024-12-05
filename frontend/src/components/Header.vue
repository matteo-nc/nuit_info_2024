<script setup lang="ts">

</script>

<template>
  <header class="bg-blue-500 w-full">
    <nav class="flex flex-row items-center gap-16">
        <RouterLink class="hover:bg-cyan-300 p-5" to="/">
          <span class="flex flex-row items-center gap-2">
            <img src="../assets/principe.svg" class="logo size-10 inline" alt="Vite logo" />
            <p>Accueil</p>
          </span>
        </RouterLink>
      <RouterLink class="hover:bg-cyan-300 p-5" to="/test">
        <span class="flex flex-row items-center gap-2">
            <img src="../assets/game.svg" class="logo size-10 inline" alt="Vite logo" />
            <p>Testez-vous</p>
        </span>
      </RouterLink>
      <RouterLink class="hover:bg-cyan-300 p-5" to="/credits">
        <span class="flex flex-row items-center gap-2">
            <img src="../assets/contact.svg" class="logo size-10 inline" alt="Vite logo" />
            <p>Crédits</p>
        </span>
      </RouterLink>
    </nav>
  </header>
</template>

<style scoped>

</style>