import axios from "../axios.js";

export const useDoctors = {
	CREATE: async (data) => await axios.post("doctor", { ...data }),
	GET: async () => await axios.get("doctor"),
	GET_ONE: async (id) => await axios.get(`doctor/${id}`),
	UPDATE: async (id, data) => await axios.patch(`doctor/${id}`, { ...data }),
	DELETE: async (id) => await axios.delete(`doctor/${id}`),
};
