import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const backend = createApi({
  reducerPath: 'backend',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: () => ({}),
});
