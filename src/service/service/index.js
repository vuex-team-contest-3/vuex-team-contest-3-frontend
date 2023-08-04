import axios from "../axios.js";

export const useServices = {
	CREATE: async (data) => await axios.post("service", { ...data }),
	GET: async () => await axios.get("service"),
	GET_ONE: async (id) => await axios.get(`service/${id}`),
	UPDATE: async (id, data) => await axios.patch(`service/${id}`, data),
	DELETE: async (id) => await axios.delete(`service/${id}`),
};
