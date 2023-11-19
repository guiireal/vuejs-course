<template>
  <div>
    <h1 class="title">{{ name }}</h1>
    <span v-html="subtitle"></span>
    <span v-text="subtitle"></span>
    <span>{{ subtitle }}</span>
  </div>
</template>

<script setup>
const name = "Guilherme";
const subtitle = "<p style='color: silver'>Tutoriais Vue</p>";
</script>

<style scoped>
.title {
  margin: 0 auto;
  text-align: center;
  color: red;
}
</style>
