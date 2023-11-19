<template>
  <nav>
    <span>Tutorial Vue</span>
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <RouterLink :to="menu.path">{{ menu.name }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const menus = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Equipe", path: "/team" },
];
</script>

<style scoped>
nav {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #cae7e8;
}

ul {
  display: flex;
  list-style: none;
}

ul li {
  padding: 0 5px;
}

ul li a {
  text-decoration: none;
  color: #117177;
}
</style>
