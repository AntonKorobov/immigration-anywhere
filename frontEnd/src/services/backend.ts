import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import {
  LocationPOSTResponse,
  LocationPOSTRequest,
  LocationGETResponse,
  ReviewsPOSTRequest,
  ReviewsPOSTResponse,
  ReviewsGETResponse,
  GeolocationResponse,
} from 'types/queryTypes';

const BASE_URL = 'https://immigration-anywhere-be.up.railway.app/';
const TOKEN_GEOLOCATION = '0a9c79faa8fbc7666193eeacc8c004a7';

export const backend = createApi({
  reducerPath: 'backend',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    mode: 'cors',
  }),
  tagTypes: ['MarkerTag'],
  endpoints: (builder) => ({
    getLocations: builder.query<LocationGETResponse[], void>({
      query: (payload) => ({
        url: `/locations`,
        method: 'GET',
        body: payload,
      }),
      providesTags: ['MarkerTag'],
    }),
    getReviews: builder.query<ReviewsGETResponse[], string>({
      query: (payload) => ({
        url: `/reviews/${payload}`,
        method: 'GET',
      }),
      providesTags: ['MarkerTag'],
    }),
    createReview: builder.mutation<ReviewsPOSTResponse, ReviewsPOSTRequest>({
      async queryFn(arg, api, extraOptions, fetchWithBQ) {
        //!!!
        const createLocationResponse = await fetchWithBQ({
          url: `/locations`,
          method: 'POST',
          body: arg,
        });
        if (createLocationResponse.error) {
          const getGeolocationIdResponse = await fetchWithBQ({
            url: `https://immigration-anywhere-be.up.railway.app/locations/location`, //TODO https requests
            method: 'GET',
            params: {
              locationName: arg.locationName,
              countryId: arg.countryId,
            },
          });
          const createReviewResponse = await fetchWithBQ({
            url: `/reviews`,
            method: 'POST',
            body: arg,
          });
          return createReviewResponse.data;
        } else if (!createLocationResponse.error) {
          const createReviewResponse = await fetchWithBQ({
            url: `/reviews`,
            method: 'POST',
            body: arg,
          });
          return createReviewResponse.data;
        }
      },
      invalidatesTags: ['MarkerTag'],
    }),
    // createLocation: builder.mutation<LocationPOSTResponse, LocationPOSTRequest>({
    //   query: (payload) => ({
    //     url: `/locations`,
    //     method: 'POST',
    //     body: payload,
    //   }),
    // }),
    // createReview: builder.mutation<ReviewsPOSTResponse, ReviewsPOSTRequest>({
    //   query: (payload) => ({
    //     url: `/reviews`,
    //     method: 'POST',
    //     body: payload,
    //   }),
    //   invalidatesTags: ['MarkerTag'],
    // }),
    // getGeolocation: builder.query<GeolocationResponse, string>({
    //   query: (payload) => ({
    //     url: `https://immigration-anywhere-be.up.railway.app/google-maps-api`, //TODO https requests
    //     method: 'GET',
    //     params: { access_key: TOKEN_GEOLOCATION, query: payload },
    //   }),
    // }),
    // getGeolocationId: builder.query<
    //   { locationId: string },
    //   { locationName: string; countryId: string }
    // >({
    //   query: (payload) => ({
    //     url: `https://immigration-anywhere-be.up.railway.app/locations/location`, //TODO https requests
    //     method: 'GET',
    //     params: { locationName: payload.locationName, countryId: payload.countryId },
    //   }),
    // }),
  }),
});

export const {
  // useCreateLocationMutation,
  useGetLocationsQuery,
  useCreateReviewMutation,
  useGetReviewsQuery,
  // useGetGeolocationQuery,
  // useGetGeolocationIdQuery,
} = backend;
