import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { useClients } from "../service/client";

export const useClient = defineStore("client", () => {
	const store = reactive({ data: [], load: true });

	const GET_CLIENT = async () => {
		store.data = (await useClients.GET()).data;
		store.load = false;
	};

	const GET_ONE = async (id) => {
		await useClients.GET_ONE(id);
	};

	const ADD_CLIENT = (data) => {
		console.log(data);
		store.data.push(data);
	};

	const UPDATE_CLIENT = (id, data) => {
		for (const i in store.data) {
			if (store.data[i].id == id) {
				store.data[i] = data;
			}
		}
	};

	const DELETE_CLIENT = (id) => {
		store.data = store.data.filter((i) => i.id != id);
	};

	const CLIENTS = computed(() => store.data);
	const LOAD = computed(() => store.load);

	return {
		CLIENTS,
		LOAD,
		GET_CLIENT,
		ADD_CLIENT,
		UPDATE_CLIENT,
		GET_ONE,
		DELETE_CLIENT,
	};
});
