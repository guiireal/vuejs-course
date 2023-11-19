<template>
  <Navbar v-once />
  <header>
    <TheHeader />
  </header>

  <main>
    <UserList />
  </main>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import UserList from "./components/UserList.vue";
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
