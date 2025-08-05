import { useDispatch } from 'react-redux';

import queryString from 'query-string';

import { setProviderLoading, setTempUser } from '@/entities/user';

import { useAuthenticateWithYandexMutation } from '@/shared/api';
import { notify } from '@/shared/lib';
import { useModal } from '@/shared/ui';

export const useYandexAuthRTK = () => {
	const { open } = useModal();

	const dispatch = useDispatch();
	const [authenticateWithYandex, { isLoading, error }] = useAuthenticateWithYandexMutation();

	const handleAuthenticateWithYandex = async () => {
		try {
			const { access_token } = queryString.parse(location.hash);
			if (access_token) {
				localStorage.setItem('yandex_access_token', access_token as string);
				const result = await authenticateWithYandex().unwrap();
				open('register');

				dispatch(setTempUser(result.tempUser));
				dispatch(setProviderLoading(true));
				return result;
			}
		} catch (error) {
			console.error('Yandex authentication failed:', error);
			notify('Ошибка авторизации через Яндекс', 'error');
			throw error;
		}
	};

	const clearYandexAuth = () => {
		localStorage.removeItem('yandex_access_token');
		dispatch(setTempUser(null));
		dispatch(setProviderLoading(false));
	};

	return {
		authenticateWithYandex: handleAuthenticateWithYandex,
		clearYandexAuth,
		isLoading,
		error
	};
};
