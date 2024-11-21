import { mobileMenuReducer } from '@/entities/mobile-menu';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
	mobileMenu: mobileMenuReducer
});

export const mainStore = configureStore({
	reducer: mainReducer
});

export type RootState = ReturnType<typeof mainStore.getState>;
