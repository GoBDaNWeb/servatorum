import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IFond } from '../types';

// const API_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = 'http://217.171.146.249:8000';

export const fondAPI = createApi({
	reducerPath: 'fondAPI',

	baseQuery: fetchBaseQuery({
		baseUrl: `${API_URL}/foundation/`,
		prepareHeaders: headers => {
			headers.set('Content-Type', 'application/json');
			return headers;
		}
	}),
	endpoints: build => ({
		createFond: build.mutation<IFond, any>({
			query: body => ({
				url: 'create_foundation',
				method: 'POST',
				body
			})
		})
	})
});

export const { useCreateFondMutation } = fondAPI;
