<template>
  <div class="people">
    <User
      v-for="person in people"
      :key="person.id"
      :person="person"
      @select="addSelected(person.id)"
    />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import User from "./User.vue";

const people = ref([]);
const idSelecteds = ref([]);

const fetchUsers = async () => {
  const request = await fetch(`https://reqres.in/api/users`);
  const json = await request.json();

  return json.data;
};

const addSelected = (id) => {
  idSelecteds.value.push(id);
  console.log(idSelecteds.value);
};

onMounted(async () => {
  people.value = await fetchUsers();
});
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
