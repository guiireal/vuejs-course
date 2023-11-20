<template>
  <div class="profile">
    <img :src="person.avatar" alt="Perfil" />
    <strong>{{ person.first_name }}</strong>
    <span>{{ person.email }}</span>
    <button class="button" @click="sendEmit(person.id)">
      {{ !selection ? "Selecionar" : "Desmarcar" }}
    </button>
    <Alert />
  </div>
</template>

<script setup>
import Alert from "./Alert.vue";

const emit = defineEmits(["select"]);

const sendEmit = (id) => {
  emit("select", id);
};

defineProps({
  person: {
    type: Object,
    required: true,
  },
  selection: Boolean,
});
</script>

<style scoped>
.profile {
  width: 150px;
  text-align: center;
}

.profile img {
  margin: 0 auto;
  width: 80px;
  display: block;
  padding: 5px;
  border-radius: 10px;
}

.profile span {
  display: block;
  font-size: 0.75rem;
}
</style>
