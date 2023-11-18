<template>
  <div>
    <form class="form">
      <label for="name">Nome:</label><br />
      <input type="text" id="name" v-model="name" />
      <label for="birthdate">Data Nascimento:</label><br />
      <input type="number" id="birthdate" v-model="birthdate" />
    </form>
  </div>
  <button class="button" @click="calculateAge">Calcular idade</button>
  <p style="text-align: center">
    {{ name }} nasceu em {{ birthdate }} e tem {{ age }} anos
  </p>
  <button class="button" @click="calculateAgeWithParam(2)">+2 anos</button>
</template>

<script setup>
import { ref } from "vue";

const name = ref("Guilherme");
const birthdate = ref(0);
const age = ref(0);

function calculateAge() {
  age.value = new Date().getFullYear() - birthdate.value;
}

function calculateAgeWithParam(param) {
  age.value = age.value + param;
}
</script>

<style scoped>
.form {
  margin: 0 auto;
  padding: 5px;
  width: 200px;
  background-color: darkcyan;
}

.form label {
  color: white;
}

.button {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background-color: darkcyan;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
  color: white;
}

.button:hover {
  background-color: rgb(102, 147, 147);
}
</style>
