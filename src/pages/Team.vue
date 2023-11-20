<template>
  <h1>Equipe</h1>
  <div v-for="office in offices" :key="office.id">
    <span>{{ office.first_name }}</span>
    <button @click="officeStore.removeOffice(office.id)">Remover cargo</button>
  </div>
  <div v-for="color in colors" :key="color">
    {{ color }} <button @click="changeColor(color)">Mudar cor</button>
  </div>
  <div class="panel"></div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useOfficeStore } from "../store/officeStore";

const colorSelected = ref("#fff");
const officeStore = useOfficeStore();
const { offices, colors } = storeToRefs(officeStore);

const changeColor = (color) => {
  colorSelected.value = color;
};
</script>

<style scoped>
.panel {
  width: 70px;
  height: 30px;
  border: 1px solid;
  background: v-bind(colorSelected);
}
</style>
