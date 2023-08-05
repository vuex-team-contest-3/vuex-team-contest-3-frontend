import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { useServices } from "../service/service";

export const useService = defineStore("service", () => {
	const store = reactive({
		data: [],
		load: false,
	});

	const GET = async () => {
		store.data = (await useServices.GET()).data;
		store.load = false;
	};

	const GET_ONE = async (id) => {
		return (await useServices.GET_ONE(id)).data;
	};

	const ADD = async (data) => {
		try {
			(await useServices.CREATE(data)).data;
			store.data.push(data);
			return GET();
		} catch (error) {
			console.log(error);
		}
	};

	const UPDATE = async (id, data) => {
		console.log(id, data);
		(await useServices.UPDATE(id, data)).data;
		return (await useServices.GET()).data;
	};

	const DELETE = async (id) => {
		try {
			await useServices.DELETE(id);
			return GET();
		} catch (error) {
			console.log(error);
		}
	};

	const CLINICS = computed(() => store.data);
	const LOAD = computed(() => store.load);

	return { CLINICS, LOAD, GET, ADD, UPDATE, GET_ONE, DELETE };
});
