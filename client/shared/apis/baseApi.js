import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/",
});

const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  tagTypes: ['Apps', 'User', 'Components'],
  endpoints: () => ({})
});

export default baseApi;
