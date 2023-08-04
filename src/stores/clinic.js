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
	};

	const GET_ONE = async (id) => {
		return (await useClinics.GET_ONE(id)).data;
	};

	const ADD_CLINIC = async (data) => {
		try {
			(await useClinics.CREATE(data)).data;
			store.data.push(data);
			return GET_CLINIC();
		} catch (error) {
			console.log(error);
		}
	};

	const UPDATE_CLINIC = async (id, data) => {
		for (const i in store.data) {
			if (store.data[i].id == id) {
				(await useClinics.UPDATE(id, data)).data;
				return GET_CLINIC();
			}
		}
	};

	const DELETE_CLINIC = async (id) => {
		try {
			await useClinics.DELETE(id);
			return GET_CLINIC();
		} catch (error) {
			console.log(error);
		}
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
