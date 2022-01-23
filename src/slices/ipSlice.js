import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const ipSlice = createSlice({
  name: "ip",
  initialState,
  reducers: {
    setIp(_, action) {
      return action.payload;
    },
  },
});

export const { setIp } = ipSlice.actions;

export default ipSlice.reducer;
