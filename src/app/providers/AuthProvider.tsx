import { FC, PropsWithChildren, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { AppDispatch } from '@/app/stores';

import { useVkAuth, useYandexAuthRTK } from '@/features/auth';

import { setUser, setUserInitialized, setUserLoading } from '@/entities/user';

import { useGetUserQuery } from '@/shared/api';
import { decodeJWT } from '@/shared/lib';

import * as VKID from '@vkid/sdk';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
	VKID.Config.init({
		app: 53997716,
		redirectUrl: import.meta.env.VITE_API_REDIRECT_URL
	});
	const dispatch = useDispatch<AppDispatch>();

	const token = localStorage.getItem('access_token');
	const { authenticateWithYandex } = useYandexAuthRTK();
	const { authenticateWithVk } = useVkAuth();
	const jwt = decodeJWT(token);

	const { data, isLoading, isError } = useGetUserQuery(jwt?.user_id as number, {
		skip: !jwt
	});

	useEffect(() => {
		dispatch(setUserLoading(isLoading));
		if (data) {
			dispatch(setUser(data));
		}
		if (isError) {
			dispatch(setUser(null));
		}
		if (!isLoading && !data) dispatch(setUserInitialized(true));
	}, [data, isLoading, isError, dispatch]);

	useEffect(() => {
		authenticateWithYandex();
		authenticateWithVk();
	}, []);

	return children;
};
