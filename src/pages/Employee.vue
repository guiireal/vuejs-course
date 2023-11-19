<template>
  <div>
    <div v-if="isLoading">Carregando...</div>
    <User v-else :person="person" />
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import User from "../components/User.vue";
import { useFetch } from "../composables/useFetch";

const router = useRoute();

const id = router.params.id;

const { data: person, isLoading } = useFetch(
  `https://reqres.in/api/users/${id}`
);
</script>

<style scoped></style>
