<template>
  <Navbar v-once />
  <header>
    <TheHeader />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
</script>
