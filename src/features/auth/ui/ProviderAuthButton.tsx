import { FC, ReactNode } from 'react';

import { Button } from '@/shared/ui';

import { authUrl } from '../services/yandexAuth';

import * as VKID from '@vkid/sdk';

interface IProviderAuthButton {
	children: ReactNode;
	provider: 'ya' | 'vk';
}

export const ProviderAuthButton: FC<IProviderAuthButton> = ({ children, provider }) => {
	const handleVkAuth = async () => {
		try {
			await VKID.Auth.login();
		} catch (err) {
			console.error('VK Auth Error:', err); // Смотрите сюда для диагностики
		}
	};

	return (
		<>
			{provider === 'vk' ? (
				<Button onClick={handleVkAuth}>{children}</Button>
			) : (
				<Button href={authUrl} isLink>
					{children}
				</Button>
			)}
		</>
	);
};
