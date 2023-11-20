import { useStorage } from "@vueuse/core";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useLoginStore = defineStore("loginStore", () => {
  const loggedUser = ref("");

  const authUser = (name) => {
    loggedUser.value = name;
    useStorage("userStorage", name);
  };

  const isLogged = computed(() => loggedUser.value !== "");

  return {
    loggedUser,
    authUser,
    isLogged,
  };
});
