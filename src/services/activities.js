import api from "./apiConfig";

export const getActivities = async () => {
  try {
    const response = await api.get("/activities");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getActivity = async (id) => {
  try {
    const response = await api.get(`/activities/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createActivity = async (activity) => {
  try {
    const response = await api.post("/activities", activity);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateActivity = async (id, activity) => {
  try {
    const response = await api.put(`/activities/${id}`, activity);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteActivity = async (id) => {
  try {
    const response = await api.delete(`/activities/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
