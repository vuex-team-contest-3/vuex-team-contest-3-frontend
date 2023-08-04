import axios from "../axios.js";

export const useAuth = {
	LOGIN_ADMIN: async (data) => await axios.post("admin/login", { ...data }),
	LOGIN_DOCTOR: async (data) => await axios.post("doctor/login", { ...data }),
	LOGIN_USER: async (data) => await axios.post("user/login", { ...data }),
	REGISTER_USER: async (data) => await axios.post("user/login", { ...data }),
};
