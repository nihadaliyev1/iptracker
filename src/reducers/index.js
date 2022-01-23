import { combineReducers } from "redux";
import locationReducer from "./locationReducer";
import LoaderReducer from "./LoaderReducer";

const reducers = combineReducers({
  location: locationReducer,
  loading: LoaderReducer,
});

export default reducers;
