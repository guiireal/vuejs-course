<template>
  <div>
    <h1 class="title">{{ name }}</h1>
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { useFetch } from "../composables/useFetch";

const name = computed(() => {
  if (!data.value) {
    return "";
  }

  return `${data.value.first_name} ${data.value.last_name}`;
});

const { data } = useFetch("https://reqres.in/api/users/3");
</script>

<style scoped>
.title {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>
