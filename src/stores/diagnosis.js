import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { useDiagnosises } from "@/service/diagnosis";

export const useDiagnosis = defineStore("diagnosis", () => {
	const store = reactive({
		data: [],
		load: true,
	});

	const GET = async () => {
		store.data = (await useDiagnosises.GET()).data;
		store.load = false;
	};

	const GET_ONE = async (id) => {
		return (await useDiagnosises.GET_ONE(id)).data;
	};

	const ADD = async (data) => {
		(await useDiagnosises.CREATE(data)).data;
		store.data.push(data);
		return GET();
	};

	const UPDATE = async (id, data) => {
		for (const i in store.data) {
			if (store.data[i].id == id) {
				(await useDiagnosises.UPDATE(id, data)).data;
				return GET();
			}
		}
	};

	const DELETE = async (id) => {
		try {
			await useDiagnosises.DELETE(id);
			return GET();
		} catch (error) {
			console.log(error);
		}
	};

	const DIAGNOSIS = computed(() => store.data);
	const LOAD = computed(() => store.load);

	return {
		DIAGNOSIS,
		LOAD,
		GET,
		ADD,
		UPDATE,
		GET_ONE,
		DELETE,
	};
});
