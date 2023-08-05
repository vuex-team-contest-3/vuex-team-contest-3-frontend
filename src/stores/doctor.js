import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { useDoctors } from "../service/doctor";

export const useDoctor = defineStore("doctor", () => {
  const store = reactive({
    data: [],
    load: true,
  });

  const GET_DOCTOR = async () => {
    store.data = (await useDoctors.GET()).data;
    store.load = false;
  };

  const GET_ONE = async (id) => {
    return (await useDoctors.GET_ONE(id)).data;
  };

  const ADD_DOCTOR = async (data) => {
    (await useDoctors.CREATE(data)).data;
    store.data.push(data);
    return GET_DOCTOR();
  };

  const UPDATE_DOCTOR = async (id, data) => {
    for (const i in store.data) {
      if (store.data[i].id == id) {
        (await useDoctors.UPDATE(id, data)).data;
        return GET_DOCTOR();
      }
    }
  };

  const DELETE_DOCTOR = async (id) => {
    try {
      await useDoctors.DELETE(id);
      return GET_DOCTOR();
    } catch (error) {
      console.log(error);
    }
  };

  const DOCTORS = computed(() => store.data);
  const LOAD = computed(() => store.load);

  return {
    DOCTORS,
    LOAD,
    GET_DOCTOR,
    ADD_DOCTOR,
    UPDATE_DOCTOR,
    GET_ONE,
    DELETE_DOCTOR,
  };
});
