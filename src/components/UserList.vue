<template>
  <div class="people">
    <div class="profile" v-for="person in people" :key="person.id">
      <h3 style="color: blue" v-if="person.first_name === 'George'">Gerente</h3>
      <h3 style="color: green" v-else-if="person.first_name === 'Rachel'">
        Financeiro
      </h3>
      <h3 style="color: red" v-else>Operacional</h3>
      <img :src="person.avatar" alt="Perfil" />
      <strong>{{ person.first_name }}</strong>
      <span style="font-size: 10px" v-email="person.email"></span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const people = ref([]);

const fetchUsers = async () => {
  const request = await fetch(`https://reqres.in/api/users?page=2`);
  const json = await request.json();

  return json.data;
};

onMounted(async () => {
  people.value = await fetchUsers();
});

const vEmail = {
  created(element, binding) {
    element.style.color = "blue";
    element.innerHTML = `<a href='mailto:${binding.value}'>${binding.value}</a>`;
  },
};
</script>

<style scoped>
.people {
  display: flex;
  flex-wrap: wrap;
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
