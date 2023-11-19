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
  <div v-if="isLoading"><h3>Carregando...</h3></div>
  <div v-else class="people">
    <User
      v-if="!error"
      v-for="person in people"
      :key="person.id"
      :person="person"
      @select="addSelected(person.id)"
      :selection="selectedId(person.id)"
    />
    <div v-else>{{ error }}</div>
  </div>
</template>

<script setup>
import { computed, provide, ref } from "vue";
import { useFetch } from "../composables/useFetch";
import User from "./User.vue";

const idSelecteds = ref([]);
const alert = "Em caso de dúvidas, contate o suporte.";

const {
  data: people,
  error,
  isLoading,
} = useFetch("https://reqres.in/api/users?delay=1");

const addSelected = (id) => {
  if (selectedId(id)) {
    idSelecteds.value = idSelecteds.value.filter(
      (selectedId) => selectedId !== id
    );
    return;
  }
  idSelecteds.value.push(id);
};

const selectedPeople = computed(() => {
  if (!people.value) {
    return [];
  }

  return people.value.filter((person) => selectedId(person.id));
});

const selectedId = (id) => idSelecteds.value.includes(id);

provide("alert", alert);
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
