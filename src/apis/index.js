import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const geoApi = createApi({
  reducerPath: "geoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://geo.ipify.org/api/v1",
  }),
  tagTypes: ["Coordinate"],
  endpoints: (build) => ({
    setCoordinates: build.query({
      query: (ip) => ({
        url: "",
        method: "GET",
        params: {
          apiKey: process.env.REACT_APP_API_KEY,
          ipAddress: ip,
        },
      }),
    }),
  }),
});

export const { useSetCoordinatesQuery } = geoApi;
