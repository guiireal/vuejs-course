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

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Verdana, Verdana, Geneva, Tahoma, sans-serif;
}

header {
  line-height: 1.5;
}

[color-scheme="dark"] {
  background-color: #333;
  color: #fff;
}

[color-scheme="light"] {
  background-color: pink;
  color: #333;
}
</style>
