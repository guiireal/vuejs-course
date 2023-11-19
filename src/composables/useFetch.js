import { onBeforeMount, ref } from "vue";

export function useFetch(url) {
  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(true);

  const fetchData = async () => {
    try {
      const request = await fetch(url);
      const json = await request.json();

      data.value = json.data;
    } catch (err) {
      error.value = "Erro ao obter as informações!";
    } finally {
      isLoading.value = false;
    }
  };

  onBeforeMount(async () => {
    await fetchData();
  });

  return {
    data,
    error,
    isLoading,
  };
}
