<template>
  <div>
    <h1 ref="title">...</h1>
    <Alert ref="alertRef" />
  </div>
</template>

<script setup>
import { onMounted, provide, ref } from "vue";
import Alert from "../components/Alert.vue";

const title = ref(null);
const alertRef = ref(null);

onMounted(() => {
  title.value.style.color = "blue";
  title.value.innerText = "Página não encontrada!";
});

provide("alert", "Página não encontrada!");
</script>
