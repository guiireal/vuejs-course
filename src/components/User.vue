<template>
  <form class="form">
    <label for="id">Código do usuário:</label><br />
    <input type="number" id="id" v-model="id" />
  </form>

  <div class="profile">
    <img :src="person.avatar" alt="Perfil" />
    <strong>{{ fullName }}</strong>
    <span>{{ person.email }}</span>
  </div>
</template>

<script setup>
import { computed, ref, watch, watchEffect } from "vue";

const person = ref({});
const id = ref(0);

const fullName = computed(
  () => `${person.value.first_name} ${person.value.last_name}`
);

const fetchUser = async (id) => {
  const request = await fetch(`https://reqres.in/api/users/${id}`);
  const json = await request.json();

  return json.data;
};

// Executará assim que o valor de id for alterado
watch(id, (value) => {
  if (value < 0) {
    alert("Código inválido!");
    id.value = 0;
  }
});

// Executará imediatamente
watchEffect(async () => {
  if (id.value >= 0) {
    person.value = await fetchUser(id.value || 1);
  }
});
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

button:disabled,
button[disabled] {
  border: 1px solid #999;
  background-color: #ccc;
  color: #666;
  cursor: default;
}

.profile {
  width: 150px;
  text-align: center;
}

.profile img {
  margin: 0 auto;
  width: 80px;
  display: block;
  padding: 5px;
  border-radius: 10px;
}

.profile span {
  display: block;
  font-size: 0.75rem;
}
</style>
