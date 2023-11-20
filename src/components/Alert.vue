<template>
  <div class="alert">
    {{ theAlert }}
  </div>
</template>

<script setup>
import { inject } from "vue";

const theAlert = inject("alert");

const callAlert = () => {
  alert("Alerta!");
};

defineExpose({
  theAlert,
  callAlert,
});
</script>

<style scoped>
.alert {
  font-size: 0.575rem;
  text-align: center;
}
</style>
