<template>
  <View>
    <template #header>
      <TheHeader>
        <template v-slot="{ message, showMessage }">
          <p class="title">{{ message }}</p>
          <button @click="showMessage">Clique aqui</button>
        </template>
      </TheHeader>
    </template>
    <RouterView />
    <template #footer>Footer</template>
  </View>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import View from "./components/View.vue";
</script>
