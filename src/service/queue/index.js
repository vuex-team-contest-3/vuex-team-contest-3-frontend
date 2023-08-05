import axios from "../axios.js";

export const useQueues = {
  CREATE: async (data) => await axios.post("queue", data),
  CHECK: async (data) => await axios.post("queue/check", data),
  GET: async () => await axios.get("queue"),
  GET_TODAY: async (id) => await axios.get(`queue/today/${id}`),
  GET_ONE: async (id) => await axios.get(`queue/${id}`),
  UPDATE: async (id, formData) => await axios.patch(`queue/${id}`, formData),
  DELETE: async (id) => await axios.delete(`queue/${id}`),
};
