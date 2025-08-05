import queryString from 'query-string';

import * as VKID from '@vkid/sdk';

export const useVkAuth = () => {
	const handleAuth = async () => {
		try {
			const { code, device_id } = queryString.parse(location.search);
			if (code && device_id) {
				if (typeof code !== 'string' || typeof device_id !== 'string') {
					console.error('Invalid code or device_id parameters');
					return;
				}

				const authResponse = await VKID.Auth.exchangeCode(code, device_id);
				console.log('Auth response:', authResponse);

				const userInfo = await VKID.Auth.userInfo(authResponse.access_token);
				console.log('User info:', userInfo);
				if (userInfo) {
					const cleanUrl = window.location.origin + window.location.pathname;
					window.history.replaceState({}, document.title, cleanUrl);
				}
			}
		} catch (error) {
			console.error('Authentication failed:', error);
		}
	};

	return {
		authenticateWithVk: handleAuth
	};
};
