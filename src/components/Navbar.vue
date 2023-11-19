<template>
  <nav>
    <span>Tutorial Vue</span>
    <ul>
      <li v-for="menu in menus" :key="menu.id">
        <a :href="menu.link">{{ menu.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const menus = [
  { id: 1, name: "Home", link: "#" },
  { id: 2, name: "Sobre", link: "#" },
  { id: 3, name: "Login", link: "#" },
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
