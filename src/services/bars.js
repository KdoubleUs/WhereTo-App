import api from "./apiConfig";

export const getBars = async () => {
  try {
    const response = await api.get("/bars");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getBar = async (id) => {
  try {
    const response = await api.get(`/bars/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createBar = async (bar) => {
  try {
    const response = await api.post("/bars", bar);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateBar = async (id, bar) => {
  try {
    const response = await api.put(`/bars/${id}`, bar);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteBar = async (id) => {
  try {
    const response = await api.delete(`/bars/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
