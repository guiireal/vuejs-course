<template>
  <div class="selected">
    <span
      v-for="selectedPerson in selectedPeople"
      :key="selectedPerson.id"
      class="card"
    >
      {{ selectedPerson.first_name }}
    </span>
  </div>
  <div class="people">
    <User
      v-for="person in people"
      :key="person.id"
      :person="person"
      @select="addSelected(person.id)"
      :selection="selectedId(person.id)"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watchEffect } from "vue";
import User from "./User.vue";

const people = ref([]);
const idSelecteds = ref([]);
const selectedPeople = ref([]);

const fetchUsers = async () => {
  const request = await fetch(`https://reqres.in/api/users`);
  const json = await request.json();

  return json.data;
};

const addSelected = (id) => {
  if (selectedId(id)) {
    idSelecteds.value = idSelecteds.value.filter(
      (selectedId) => selectedId !== id
    );
    return;
  }
  idSelecteds.value.push(id);
};

onMounted(async () => {
  people.value = await fetchUsers();
});

watchEffect(() => {
  selectedPeople.value = people.value.filter((person) => selectedId(person.id));
});

const selectedId = (id) => idSelecteds.value.includes(id);
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

.selected {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.selected > span {
  background: #6fd6d6;
  padding: 5px;
  font-size: 0.785rem;
  border-radius: 5px;
}
</style>
