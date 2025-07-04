import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUser, IVerifyData, VerifyRequest } from '../types';

// const API_URL = import.meta.env.VITE_API_BASE_URL;
const API_URL = 'http://217.171.146.249:8000';

export const userAPI = createApi({
	reducerPath: 'userAPI',

	baseQuery: fetchBaseQuery({
		baseUrl: `${API_URL}/users/`,
		prepareHeaders: headers => {
			headers.set('Content-Type', 'application/json');
			return headers;
		}
	}),
	endpoints: build => ({
		createUser: build.mutation<IVerifyData, IUser>({
			query: body => ({
				url: 'create_user',
				method: 'POST',
				body
			})
		}),
		requestCode: build.mutation<{ success: boolean }, { phone: string }>({
			query: body => ({
				url: 'request_code',
				method: 'POST',
				body
			})
		}),
		verifyCode: build.mutation<IVerifyData, VerifyRequest>({
			query: body => ({
				url: 'verify_code',
				method: 'POST',
				body
			})
		})
	})
});

export const { useCreateUserMutation, useRequestCodeMutation, useVerifyCodeMutation } = userAPI;
