<template>
  <div>
    <div v-if="isLoading">Carregando...</div>
    <User v-else :person="person" />
    <select v-model="officeSelected">
      <option disabled value="">Selecione o cargo</option>
      <option v-for="office in offices" :value="office" :key="office">
        {{ office }}
      </option>
    </select>
    <div>
      <button
        :class="[button, buttonLogin]"
        @click="loginStore.authUser(person.first_name)"
      >
        Logar
      </button>
    </div>
    <div>
      <button @click="getColors">Buscar cores</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import User from "../components/User.vue";
import { useFetch } from "../composables/useFetch";
import { useLoginStore } from "../store/loginStore";
import { useOfficeStore } from "../store/officeStore";

const officeStore = useOfficeStore();
const loginStore = useLoginStore();

const { addOffice, getColors } = officeStore;

const router = useRoute();

const officeSelected = ref("");
const buttonLogin = ref("button-login");
const button = ref("button");

const offices = ["Desenvolvedor", "Designer", "Gerente de Projetos", "Diretor"];

const id = router.params.id;

const { data: person, isLoading } = useFetch(
  `https://reqres.in/api/users/${id}`
);

watch(officeSelected, (newOffice) => {
  const { id, first_name } = person.value;
  const employee = { id, first_name, office: newOffice };
  addOffice(employee);
});
</script>

<style scoped>
.button-login {
  background: #57bf3e;
}
</style>
