export const YANDEX_CLIENT_ID = import.meta.env.VITE_API_YA_CLIENT_ID || '';
export const VK_CLIENT_ID = import.meta.env.VITE_API_VK_CLIENT_ID || '';
export const YANDEX_REDIRECT_URI = import.meta.env.VITE_API_REDIRECT_URL || window.location.origin;
export const authUrl = `https://oauth.yandex.ru/authorize?response_type=token&client_id=${YANDEX_CLIENT_ID}&redirect_uri=${encodeURIComponent(YANDEX_REDIRECT_URI)}`;
