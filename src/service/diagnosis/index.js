import axios from "../axios.js";

export const useDiagnosises = {
	CREATE: async (data) => await axios.post("diagnosis", data),
	GET: async () => await axios.get("diagnosis"),
	GET_ONE: async (id) => await axios.get(`diagnosis/${id}`),
	UPDATE: async (id, data) => await axios.patch(`diagnosis/${id}`, data),
	DELETE: async (id) => await axios.delete(`diagnosis/${id}`),
};
