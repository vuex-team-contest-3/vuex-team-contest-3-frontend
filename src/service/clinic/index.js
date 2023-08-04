import axios from "../axios.js";

export const useClinics = {
	CREATE: async (data) => await axios.post("clinic", { ...data }),
	GET: async () => await axios.get("clinic"),
	GET_ONE: async (id) => await axios.get(`clinic/${id}`),
	UPDATE: async (id, data) => await axios.patch(`clinic/${id}`, { ...data }),
	DELETE: async (id) => await axios.delete(`clinic/${id}`),
};
