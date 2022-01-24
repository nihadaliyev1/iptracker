import { geoApi } from "../apis";

const reducers = {
  [geoApi.reducerPath]: geoApi.reducer,
};

export default reducers;
