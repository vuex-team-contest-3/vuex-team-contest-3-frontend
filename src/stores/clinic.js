import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { useClinics } from "../service/clinic";

export const useClinic = defineStore("clinic", () => {
	const store = reactive({
		data: [],
		load: true,
	});

	const GET_CLINIC = async () => {
		store.data = (await useClinics.GET()).data;
		store.load = false;
		console.log(store.data);
	};

	const GET_ONE = (id) => {
		return store.data.filter((i) => i.id == id)[0];
	};

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

	const DELETE_CLINIC = (id) => {
		store.data = store.data.filter((i) => i.id != id);
	};

	const CLINICS = computed(() => store.data);
	const LOAD = computed(() => store.load);

	return {
		CLINICS,
		LOAD,
		GET_CLINIC,
		ADD_CLINIC,
		UPDATE_CLINIC,
		GET_ONE,
		DELETE_CLINIC,
	};
});
