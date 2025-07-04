import { fondReducer } from '@/entities/fond/model';
import { mobileMenuReducer } from '@/entities/mobile-menu';
import { userReducer } from '@/entities/user';

import { fondAPI, spheresAPI, userAPI } from '@/shared/api';
import { modalReducer } from '@/shared/ui';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
	mobileMenu: mobileMenuReducer,
	modals: modalReducer,
	user: userReducer,
	fond: fondReducer,
	[userAPI.reducerPath]: userAPI.reducer,
	[spheresAPI.reducerPath]: spheresAPI.reducer,
	[fondAPI.reducerPath]: fondAPI.reducer
});

export const mainStore = configureStore({
	reducer: mainReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(userAPI.middleware, spheresAPI.middleware, fondAPI.middleware)
});

export type RootState = ReturnType<typeof mainStore.getState>;
