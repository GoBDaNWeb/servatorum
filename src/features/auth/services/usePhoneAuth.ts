import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUser } from '@/entities/user';

import { useVerifyCodeMutation } from '@/shared/api';
import { notify } from '@/shared/lib';
import { IUser } from '@/shared/types';

export const usePhoneAuth = (
	phone: string,
	code: string,
	closeModal: () => void,
	nextStep: () => void
) => {
	const [verifyCode] = useVerifyCodeMutation();
	const [isLoading, setIsLoading] = useState(false);
	const dispatch = useDispatch();

	const handleSetUser = (user: IUser) => {
		dispatch(setUser(user));
	};

	const verify = async () => {
		setIsLoading(true);
		try {
			const { data, error } = await verifyCode({
				code,
				phone
			});
			if (data) {
				if (data.user) {
					handleSetUser(data.user);
					if (data.access_token) {
						localStorage.setItem('access_token', data.access_token);
					}
					if (data.refresh_token) {
						localStorage.setItem('refresh_token', data.refresh_token);
					}
					closeModal();
				} else {
					nextStep();
				}
			} else if (error) {
				if (
					'data' in error &&
					error.data &&
					typeof error.data === 'object' &&
					'detail' in error.data
				) {
					notify((error.data as any).detail, 'error');
				} else {
					notify('Произошла ошибка', 'error');
				}
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return { verify, isLoading };
};
