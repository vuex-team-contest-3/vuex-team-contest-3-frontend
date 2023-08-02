import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";

export const useClinic = defineStore("clinic", () => {
	const store = reactive({
		data: [
			{
				id: 1690788022057,
				name: "Najot Talim",
				address: "Chilonzor",
				phone: "8870380006",
			},
			{
				id: 1690788022059,
				name: "MedPLus",
				address: "Yunusobod 20-daha",
				phone: "999076566",
			},
		],
		load: false,
	});

	const GET_CLINIC = () => {};

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
