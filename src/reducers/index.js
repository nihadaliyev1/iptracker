import ipReducer from "../slices/ipSlice";
import { geoApi } from "../actions";

const reducers = {
  [geoApi.reducerPath]: geoApi.reducer,
  ip: ipReducer,
};

export default reducers;
