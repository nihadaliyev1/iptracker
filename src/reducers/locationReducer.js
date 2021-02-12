const locationReducer = (state = null, action) => {
  switch (action.type) {
    case "SET_COORDINATES":
      return action.payload;
    default:
      return state;
  }
};
export default locationReducer;
