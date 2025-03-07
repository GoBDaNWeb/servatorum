import { registerModalReducer } from '@/features/register-modal';

import { mobileMenuReducer } from '@/entities/mobile-menu';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
	mobileMenu: mobileMenuReducer,
	registerModal: registerModalReducer
});

export const mainStore = configureStore({
	reducer: mainReducer
});

export type RootState = ReturnType<typeof mainStore.getState>;
