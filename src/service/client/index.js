import axios from "../axios.js";

export const useClients = {
	CREATE: async (data) => await axios.post("client", { ...data }),
	GET: async () => await axios.get("client"),
	GET_ONE: async (id) => await axios.get(`client/${id}`),
	UPDATE: async (id, data) => await axios.patch(`client/${id}`, { ...data }),
	DELETE: async (id) => await axios.delete(`client/${id}`, { ...data }),
};
