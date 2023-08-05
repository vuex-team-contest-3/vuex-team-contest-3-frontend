import axios from "../axios.js";

export const useDoctors = {
<<<<<<< HEAD
	CREATE: async (data) => await axios.post("doctor", { ...data }),
	GET: async () => await axios.get("doctor"),
	GET_ONE: async (id) => await axios.get(`doctor/${id}`),
	UPDATE: async (id, data) => await axios.patch(`doctor/${id}`, { ...data }),
	DELETE: async (id) => await axios.delete(`doctor/${id}`),
=======
  CREATE: async (formData) => await axios.post("doctor", formData),
  GET: async () => await axios.get("doctor"),
  GET_ONE: async (id) => await axios.get(`doctor/${id}`),
  UPDATE: async (id, formData) => await axios.patch(`doctor/${id}`, formData),
  DELETE: async (id) => await axios.delete(`doctor/${id}`),
>>>>>>> 8d46eb3dc9e87b9b18a2dc92c5f0b27fdeaca920
};
