import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDiagnosis = defineStore("diagnosis", () => {
	const store = reactive({
		data: [
			{ id: 1690788022057, name: "Tish o'g'rig'i" },
			{ id: 1690788022059, name: "Plomba" },
		],
		load: false,
	});

	const GET = () => {};

	const GET_ONE = (id) => {
		return store.data.filter((i) => i.id == id)[0];
	};

	const ADD = (data) => {
		console.log(data);
		store.data.push(data);
	};

	const UPDATE = (id, data) => {
		for (const i in store.data) {
			if (store.data[i].id == id) {
				store.data[i] = data;
			}
		}
	};

	const DELETE = (id) => {
		store.data = store.data.filter((i) => i.id != id);
	};

	const DIAGNOSIS = computed(() => store.data);
	const LOAD = computed(() => store.load);

	return { DIAGNOSIS, LOAD, GET, ADD, UPDATE, GET_ONE, DELETE };
});
