import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ISpehe } from '../types';

const API_URL = import.meta.env.VITE_API_BASE_URL;
const API_SPHERE_URL = `${API_URL}/sphere/`;

export const spheresAPI = createApi({
	reducerPath: 'spheresAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: `${API_SPHERE_URL}`,
		prepareHeaders: headers => {
			headers.set('Content-Type', 'application/json');
			return headers;
		}
	}),
	endpoints: build => ({
		getSpheres: build.query<ISpehe[], void>({
			query: () => ({
				url: 'spheres',
				method: 'GET'
			})
		})
	})
});

export const { useGetSpheresQuery } = spheresAPI;
