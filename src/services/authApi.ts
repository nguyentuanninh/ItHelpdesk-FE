import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SD_BASE_URL } from '../utils/SD';

export const authApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: SD_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Ticket'],
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (userCredential) => ({
        url: `Auth/login`,
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: userCredential,
      }),
    }),
  }),
});

export const { useLoginUserMutation } = authApi;
export default authApi;
