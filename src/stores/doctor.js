import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { useDoctors } from "@/service/doctor";

export const useDoctor = defineStore("doctor", () => {
  const store = reactive({
    data: [],
    load: false,
  });

  const GET = async () => {
    store.data = (await useDoctors.GET()).data;
    store.load = false;
  };

  const GET_ONE = async (id) => {
    return (await useDoctors.GET_ONE(id)).data;
  };

  const ADD = async (data) => {
    try {
      (await useDoctors.CREATE(data)).data;
      store.data.push(data);
      return GET();
    } catch (error) {
      console.log(error);
    }
  };

  const UPDATE = async (id, data) => {
    console.log(id, data);
    (await useDoctors.UPDATE(id, data)).data;
    return (await useDoctors.GET()).data;
  };

  const DELETE = async (id) => {
    try {
      await useDoctors.DELETE(id);
      return GET();
    } catch (error) {
      console.log(error);
    }
  };

  const DOCTORS = computed(() => store.data);
  const LOAD = computed(() => store.load);

  return { DOCTORS, LOAD, GET, ADD, UPDATE, GET_ONE, DELETE };
});
