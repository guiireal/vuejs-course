<template>
  <div>
    <h1 v-if="isLogged" class="title">Bem vindo(a) {{ loggedUser }}</h1>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useLoginStore } from "../store/loginStore";

const loginStore = useLoginStore();
const { loggedUser, isLogged } = storeToRefs(loginStore);
</script>

<style scoped>
.title {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>
