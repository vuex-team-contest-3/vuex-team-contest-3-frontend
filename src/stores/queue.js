import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { useQueues } from "../service/queue";

export const useQueue = defineStore("queue", () => {
	const store = reactive({
		data: [],
		load: true,
	});

	const GET_QUEUE = async () => {
		store.data = (await useQueues.GET()).data;
		store.load = false;
	};

	const GET_QUEUE_TODAY = async (id) => {
		return (await useQueues.GET_TODAY(id)).data;
	};

	const GET_DATE = async (id, date) => {
		return (await useQueues.GET_DATE(id, date)).data;
	};

	const GET_ONE = async (id) => {
		return (await useQueues.GET_ONE(id)).data;
	};

	const ADD_QUEUE = async (data) => {
		return (await useQueues.CREATE(data)).data;
	};

	const UPDATE_QUEUE = async (id, data) => {
		(await useQueues.UPDATE(id, data)).data;
		return GET_QUEUE();
	};

	const DELETE_QUEUE = async (id) => {
		await useQueues.DELETE(id);
		return GET_QUEUE();
	};

	const QUEUES = computed(() => store.data);
	const LOAD = computed(() => store.load);

	return {
		QUEUES,
		LOAD,
		GET_DATE,
		GET_QUEUE,
		GET_QUEUE_TODAY,
		ADD_QUEUE,
		UPDATE_QUEUE,
		GET_ONE,
		DELETE_QUEUE,
	};
});
