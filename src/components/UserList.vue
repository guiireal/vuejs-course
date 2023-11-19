<template>
  <div class="people">
    <User v-for="person in people" :key="person.id" :person="person" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import User from "./User.vue";

const people = ref([]);

const fetchUsers = async () => {
  const request = await fetch(`https://reqres.in/api/users?page=2`);
  const json = await request.json();

  return json.data;
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
