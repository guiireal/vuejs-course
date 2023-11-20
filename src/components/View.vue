<template>
  <Teleport to="body">
    <Navbar v-once />
  </Teleport>
  <header>
    <slot name="header" />
  </header>

  <main>
    <slot />
  </main>
  <footer>
    <slot name="footer" />
  </footer>
</template>

<script setup></script>
