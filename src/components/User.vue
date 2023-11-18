<template>
  <div>
    <form class="form">
      <label for="name">Nome:</label><br />
      <input type="text" id="name" v-model="user.name" />
      <label for="birthdate">Data Nascimento:</label><br />
      <input type="number" id="birthdate" v-model="user.birthdate" />
    </form>
  </div>
  <p style="text-align: center">{{ user.name }}</p>
</template>

<script setup>
import { reactive, ref } from "vue";

const user = reactive({
  name: "Guilherme",
  birthdate: 0,
  age: 0,
});

const name = ref("Guilherme");
const birthdate = ref(0);
const age = ref(0);

age.value = 10;
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
</style>
