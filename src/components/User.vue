<template>
  <div class="profile">
    <img :src="person.avatar" alt="Perfil" />
    <strong>{{ person.first_name }}</strong>
    <span>{{ person.email }}</span>
    <button class="button" @click="sendEmit(person.id)">Selecionar</button>
  </div>
</template>

<script setup>
const emit = defineEmits(["select"]);

const sendEmit = (id) => {
  emit("select", id);
};

defineProps({
  person: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      avatar: "",
    }),
  },
});
</script>

<style scoped>
.button {
  margin: 5px auto;
  padding: 5px;
  display: block;
  background-color: darkcyan;
  border-radius: 5px;
  border-style: none;
  cursor: pointer;
  color: white;
}

button:disabled,
button[disabled] {
  border: 1px solid #999;
  background-color: #ccc;
  color: #666;
  cursor: default;
}

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
