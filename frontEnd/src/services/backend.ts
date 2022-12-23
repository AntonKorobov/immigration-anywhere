import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import {
  LocationPOSTResponse,
  LocationGETResponse,
  ReviewsPOSTRequest,
  ReviewsPOSTResponse,
  ReviewsGETResponse,
  GeolocationResponse,
  LocationIdGETResponse,
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
    getGeolocation: builder.query<GeolocationResponse, string>({
      query: (payload) => ({
        url: `https://immigration-anywhere-be.up.railway.app/google-maps-api`, //TODO https requests
        method: 'GET',
        params: { access_key: TOKEN_GEOLOCATION, query: payload },
      }),
    }),
    createReview: builder.mutation<ReviewsPOSTResponse, ReviewsPOSTRequest>({
      async queryFn(arg, api, extraOptions, baseQuery) {
        const createLocationResponse = await baseQuery({
          url: `/locations`,
          method: 'POST',
          body: {
            locationName: arg.locationName,
            countryId: arg.countryId,
            latitude: arg.latitude,
            longitude: arg.longitude,
          },
        });
        if (createLocationResponse.error) {
          const getGeolocationIdResponse = await baseQuery({
            url: `https://immigration-anywhere-be.up.railway.app/locations/location`, //TODO https requests
            method: 'GET',
            params: {
              locationName: arg.locationName,
              countryId: arg.countryId,
            },
          });
          const { locationId } = getGeolocationIdResponse.data as LocationIdGETResponse;
          const createReviewResponse = await baseQuery({
            url: `/reviews`,
            method: 'POST',
            body: {
              userName: arg.userName,
              locationId: locationId,
              rating: arg.rating,
              reviewText: arg.reviewText,
              locationName: arg.locationName,
            },
          });
          return createReviewResponse.data
            ? { data: createReviewResponse.data as ReviewsPOSTResponse }
            : { error: createReviewResponse.error as FetchBaseQueryError };
        } else {
          const { locationId } = createLocationResponse.data as LocationPOSTResponse;
          const createReviewResponse = await baseQuery({
            url: `/reviews`,
            method: 'POST',
            body: {
              userName: arg.userName,
              locationId: locationId,
              rating: arg.rating,
              reviewText: arg.reviewText,
              locationName: arg.locationName,
            },
          });
          return createReviewResponse.data
            ? { data: createReviewResponse.data as ReviewsPOSTResponse }
            : { error: createReviewResponse.error as FetchBaseQueryError };
        }
      },
      invalidatesTags: ['MarkerTag'],
    }),
  }),
});

export const {
  useGetLocationsQuery,
  useCreateReviewMutation,
  useGetReviewsQuery,
  useGetGeolocationQuery,
} = backend;
