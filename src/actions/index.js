import axios from "axios";
export const setCoordinates = (ip) => {
  return async (dispatch) => {
    const response = await axios.get("https://geo.ipify.org/api/v1", {
      params: {
        apiKey: "at_7X3KxnKWZszJ0OsfJ9dK1kEaLUGsZ",
        ipAddress: ip,
      },
    });
    dispatch({ type: "SET_COORDINATES", payload: response.data });
  };
};

export const addLoader = () => {
  return {
    type: "ADD_LOADER",
  };
};
export const removeLoader = () => {
  return {
    type: "REMOVE_LOADER",
  };
};
