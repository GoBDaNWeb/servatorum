import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { IUpdateUserRequest, IUser, IVerifyData, VerifyRequest } from '../types';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const baseQuery = fetchBaseQuery({
	baseUrl: `${API_URL}/users/`,
	prepareHeaders: headers => {
		const accessToken = localStorage.getItem('access_token');
		const refreshToken = localStorage.getItem('refresh_token');
		if (accessToken) {
			headers.set('Authorization', `Bearer ${accessToken}`);
			headers.set('Cookie', `refresh_token=${refreshToken}`);
		}
		if (refreshToken) {
			// headers: {
			// 	"": auth,
			//   },
		}
		headers.set('Content-Type', 'application/json');
		return headers;
	}
});

const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
	let result = await baseQuery(args, api, extraOptions);

	// if (result.error?.status === 401) {
	// 	// Попытка обновить токен
	// 	const refreshToken = localStorage.getItem('refresh_token');
	// 	const refreshResult = await baseQuery(
	// 		{
	// 			url: 'token/refresh',
	// 			method: 'POST',
	// 			body: { refresh_token: refreshToken }
	// 		},
	// 		api,
	// 		extraOptions
	// 	);

	// 	if (refreshResult.data) {
	// 		// Сохраняем новый токен
	// 		//@ts-ignore
	// 		localStorage.setItem('access_token', refreshResult.data.access_token);
	// 		// Повторяем оригинальный запрос
	// 		result = await baseQuery(args, api, extraOptions);
	// 	} else {
	// 		// Не удалось обновить - разлогиниваем
	// 		localStorage.removeItem('access_token');
	// 		localStorage.removeItem('refresh_token');
	// 		// window.location.href = '/login';
	// 	}
	// }

	return result;
};
export const userAPI = createApi({
	reducerPath: 'userAPI',

	baseQuery: baseQueryWithReauth,
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
		}),
		updateUser: build.mutation<IUser, IUpdateUserRequest>({
			query: ({ body, id }) => ({
				url: `patch_user/${id}`,
				method: 'PATCH',
				body
			})
		}),
		getUser: build.query<IUser, number>({
			query: id => ({
				url: `get_user/${id}`,
				method: 'GET'
			})
		}),
		deleteUser: build.mutation<IVerifyData, number>({
			query: id => ({
				url: `delete_user/${id}`,
				method: 'DELETE'
			})
		})
	})
});

export const {
	useCreateUserMutation,
	useRequestCodeMutation,
	useVerifyCodeMutation,
	useUpdateUserMutation,
	useGetUserQuery,
	useDeleteUserMutation
} = userAPI;
