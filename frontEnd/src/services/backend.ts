import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  LocationPOSTResponse,
  LocationPOSTRequest,
  LocationGETResponse,
  ReviewsPOSTRequest,
  ReviewsPOSTResponse,
  ReviewsGETResponse,
} from 'types/queryTypes';

export const backend = createApi({
  reducerPath: 'backend',
  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),
  endpoints: (builder) => ({
    createLocation: builder.mutation<LocationPOSTResponse, LocationPOSTRequest>({
      query: (payload) => ({
        url: `/location`,
        method: 'POST',
        body: payload,
      }),
    }),
    getLocations: builder.query<LocationGETResponse[], void>({
      query: (payload) => ({
        url: `/locations`,
        method: 'GET',
        body: payload,
      }),
    }),
    createReview: builder.mutation<ReviewsPOSTResponse, ReviewsPOSTRequest>({
      query: (payload) => ({
        url: `/reviews`,
        method: 'POST',
        body: payload,
      }),
    }),
    getReviews: builder.query<ReviewsGETResponse, void>({
      query: (payload) => ({
        url: `/reviews`,
        method: 'GET',
        body: payload,
      }),
    }),
  }),
});

export const {
  useCreateLocationMutation,
  useGetLocationsQuery,
  useCreateReviewMutation,
  useGetReviewsQuery,
} = backend;
