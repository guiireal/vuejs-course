<template>
  <div class="alert">
    {{ alert }}
  </div>
</template>

<script setup>
import { inject } from "vue";

const alert = inject("alert");

defineExpose({
  alert,
});
</script>

<style scoped>
.alert {
  font-size: 0.575rem;
  text-align: center;
}
</style>
