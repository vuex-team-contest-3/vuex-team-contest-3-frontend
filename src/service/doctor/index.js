import axios from "../axios.js";

export const useDoctors = {
	CREATE: async (formData) => await axios.post("doctor", formData),
	GET: async () => await axios.get("doctor"),
	GET_ONE: async (id) => await axios.get(`doctor/${id}`),
	UPDATE: async (id, formData) => await axios.patch(`doctor/${id}`, formData),
	DELETE: async (id) => await axios.delete(`doctor/${id}`),
};
