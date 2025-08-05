import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { formatPhone } from '@/shared/lib';
import { IUser } from '@/shared/types';

export interface YandexUserData {
	first_name: string;
	last_name: string;
	default_phone: {
		number: string;
	};
	default_email: string;
	sex: 'male' | 'female';
}

export interface YandexAuthResult {
	tempUser: Partial<IUser>;
}

export const yandexAPI = createApi({
	reducerPath: 'yandexAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://login.yandex.ru/',
		prepareHeaders: headers => {
			headers.set('Content-Type', 'application/json');
			return headers;
		}
	}),
	endpoints: builder => ({
		getYandexUserInfo: builder.query<YandexUserData, string>({
			query: token => ({
				url: 'info',
				params: { format: 'json' },
				headers: {
					Authorization: `OAuth ${token}`
				}
			}),
			transformResponse: (response: YandexUserData) => response
		}),
		authenticateWithYandex: builder.mutation<YandexAuthResult, void>({
			queryFn: async (_, __, ___, baseQuery) => {
				const ya_token = localStorage.getItem('yandex_access_token');

				if (!ya_token) {
					return { error: { status: 401, data: 'No Yandex token found' } };
				}

				try {
					const userInfoResult = await baseQuery({
						url: 'info',
						params: { format: 'json' },
						headers: {
							Authorization: `OAuth ${ya_token}`
						}
					});

					if (userInfoResult.error) {
						return { error: userInfoResult.error };
					}
					const cleanUrl = window.location.origin + window.location.pathname;
					window.history.replaceState({}, document.title, cleanUrl);

					const yandexData = userInfoResult.data as YandexUserData;

					const userYaData: Partial<IUser> = {
						first_name: yandexData.first_name,
						last_name: yandexData.last_name,
						phone: formatPhone(yandexData.default_phone.number, false),
						email: yandexData.default_email,
						gender: yandexData.sex === 'male' ? 'Мужской' : 'Женский'
					};

					return { data: { tempUser: userYaData } };
				} catch (error) {
					return { error: { status: 500, data: 'Yandex authentication failed' } };
				}
			}
		})
	})
});

export const { useGetYandexUserInfoQuery, useAuthenticateWithYandexMutation } = yandexAPI;
