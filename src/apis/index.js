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
          apiKey: "at_7X3KxnKWZszJ0OsfJ9dK1kEaLUGsZ",
          ipAddress: ip,
        },
      }),
    }),
  }),
});

export const { useSetCoordinatesQuery } = geoApi;
