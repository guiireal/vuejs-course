<template>
  <div :class="list.selected">
    <span
      v-for="selectedPerson in selectedPeople"
      :key="selectedPerson.id"
      class="card"
    >
      {{ selectedPerson.first_name }}
    </span>
  </div>
  <div v-if="isLoading"><h3>Carregando...</h3></div>
  <div v-else :class="list.people">
    <div v-for="person in people" v-if="!error" :key="person.id">
      <button class="button" @click="redirect(person.id)">
        Ver funcionário
      </button>
      <User
        :person="person"
        :selection="selectedId(person.id)"
        @select="addSelected(person.id)"
      />
    </div>
    <div v-else>{{ error }}</div>
  </div>
  <Teleport to="#alert">
    <Transition>
      <OtherAlert v-if="showAlert" />
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, provide, ref } from "vue";
import { useRouter } from "vue-router";
import { useFetch } from "../composables/useFetch";
import OtherAlert from "./OtherAlert.vue";
import User from "./User.vue";

const router = useRouter();

const showAlert = ref(false);

const idSelecteds = ref([]);
const alert = "Em caso de dúvidas, contate o suporte.";

const {
  data: people,
  error,
  isLoading,
} = useFetch("https://reqres.in/api/users");

const addSelected = (id) => {
  if (selectedId(id)) {
    idSelecteds.value = idSelecteds.value.filter(
      (selectedId) => selectedId !== id
    );
    return;
  }

  showAlert.value = true;

  idSelecteds.value.push(id);
};

const selectedPeople = computed(() => {
  if (!people.value) {
    return [];
  }

  return people.value.filter((person) => selectedId(person.id));
});

const selectedId = (id) => idSelecteds.value.includes(id);

const redirect = (id) => {
  router.push(`/team/${id}`);
};

provide("alert", alert);
</script>

<style module="list">
.people {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

v-enter-active,
v-leave-active {
  transition: opacity 0.5s ease;
}

v-leave-to {
  opacity: 0;
}
</style>
