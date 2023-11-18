<template>
  <Navbar />
  <header>
    <TheHeader />
  </header>

  <main>
    <User />
  </main>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import User from "./components/User.vue";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Verdana, Geneva, Tahoma, sans-serif;
}

header {
  line-height: 1.5;
}
</style>
