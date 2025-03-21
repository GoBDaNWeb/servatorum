import { documentsModalReducer } from '@/features/documents-modal';
import { donationModalReducer } from '@/features/donation-modal';
import { registerModalReducer } from '@/features/register-modal';
import { supportFondModalReducer } from '@/features/support-fond-modal';

import { mobileMenuReducer } from '@/entities/mobile-menu';

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const mainReducer = combineReducers({
	mobileMenu: mobileMenuReducer,
	registerModal: registerModalReducer,
	documentsModal: documentsModalReducer,
	donationModal: donationModalReducer,
	supportFondModal: supportFondModalReducer
});

export const mainStore = configureStore({
	reducer: mainReducer
});

export type RootState = ReturnType<typeof mainStore.getState>;
