const LoaderReducer = (state = null, action) => {
  switch (action.type) {
    case "ADD_LOADER":
      return true;
    case "REMOVE_LOADER":
      return false;
    default:
      return state;
  }
};

export default LoaderReducer;
