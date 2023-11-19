import { createApp } from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import router from "./router";

const app = createApp(App);

app.component("Navbar", Navbar);

app.directive("email", {
  created(element, binding) {
    element.style.color = "blue";
    element.innerHTML = `<a href='mailto:${binding.value}'>${binding.value}</a>`;
  },
});

app.use(router);
app.mount("#app");
