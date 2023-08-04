import { reactive, ref, computed } from "vue";
import { defineStore } from "pinia";
import { useAuth } from "../service/auth";

export const useUser = defineStore("user", () => {
	const store = reactive({
		data: {},
		load: false,
	});

	const GET = () => {};

	const LOGIN_ADMIN = async (data) => {
		try {
			return (await useAuth.LOGIN_ADMIN(data)).data;
		} catch (error) {
			console.log(error);
		}
	};

	const LOGIN_DOCTOR = async (data) => {
		try {
			console.log(data);
			return (await useAuth.LOGIN_DOCTOR(data)).data;
		} catch (error) {
			console.log(error);
		}
	};

	const LOGIN_USER = (name, phone) => {};

	const REGISTER_USER = (data) => {};

	const USER = computed(() => store.data);
	const LOAD = computed(() => store.load);

	return { LOGIN_ADMIN, REGISTER_USER, LOAD, USER, LOGIN_DOCTOR };
});
