import { mobileMenuReducer } from '@/entities/mobile-menu';

import { modalReducer } from '@/shared/ui';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
	mobileMenu: mobileMenuReducer,
	modals: modalReducer
});

export const mainStore = configureStore({
	reducer: mainReducer
});

export type RootState = ReturnType<typeof mainStore.getState>;
