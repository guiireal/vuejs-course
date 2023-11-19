<template>
  <div class="profile">
    <img :src="person.avatar" alt="Perfil" />
    <strong>{{ person.firstName }}</strong>
    <span>{{ person.email }}</span>
  </div>
</template>

<script setup>
defineProps({
  person: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      email: "",
      firstName: "",
      lastName: "",
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
