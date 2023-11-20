<template>
  <div>
    <h1 ref="title">...</h1>
    <Alert ref="alertRef" />
    <button @click="showMessage">Chamar alerta</button>
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
  console.log(title.value.theAlert);
});

const showMessage = () => {
  alertRef.value.callAlert();
};

provide("alert", "Página não encontrada!");
</script>
