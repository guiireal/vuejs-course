<template>
  <h1>Equipe</h1>
  <div v-for="office in offices" :key="office.id">
    <span>{{ office.first_name }}</span>
    <button @click="officeStore.removeOffice(office.id)">Remover cargo</button>
  </div>
  <div v-for="color in colors" :key="color">
    {{ color }}
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useOfficeStore } from "../store/officeStore";

const officeStore = useOfficeStore();
const { offices, colors } = storeToRefs(officeStore);
</script>

<style scoped></style>
