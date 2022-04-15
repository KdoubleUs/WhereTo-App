import api from "./apiConfig";

export const createRestaurant = async restaurant => {
  try {
    const response = await api.post("/restaurants", restaurant);
    return response.data;
  } catch (error) {
    throw error;
  }
};
