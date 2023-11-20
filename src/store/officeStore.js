import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useOfficeStore = defineStore("officeStore", () => {
  const offices = ref([]);
  const palletes = ref([]);

  const addOffice = (employee) => {
    offices.value = offices.value.filter((office) => office.id !== employee.id);
    offices.value.push(employee);
  };

  const removeOffice = (id) => {
    offices.value = offices.value.filter((office) => office.id !== id);
  };

  const getColors = async () => {
    const response = await fetch("https://reqres.in/api/unknown");
    palletes.value = (await response.json()).data;
  };

  const totalOffices = computed(() => offices.value.length);
  const colors = computed(() => palletes.value.map((pallete) => pallete.color));

  return {
    offices,
    addOffice,
    removeOffice,
    totalOffices,
    getColors,
    colors,
  };
});
