<template>
  <Navbar v-once />
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
