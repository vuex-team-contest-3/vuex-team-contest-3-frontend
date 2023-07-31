import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";

export const useClinic = defineStore("clinic", () => {
	const store = reactive({
		data: [],
		load: false,
	});

	const GET_CLINIC = () => {};

	const ADD_CLINIC = (data) => {
		console.log(data);
		store.data.push(data);
	};

	const UPDATE_CLINIC = (id, data) => {
		for (const i in store.data) {
			if (store.data[i].id == id) {
				store.data[i] = data;
			}
		}
	};

	const CLINICS = computed(() => store.data);
	const LOAD = computed(() => store.load);

	return { CLINICS, LOAD, GET_CLINIC, ADD_CLINIC, UPDATE_CLINIC };
});
