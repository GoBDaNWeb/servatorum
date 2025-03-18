import { IModal } from '@/shared/types';

import { createSlice } from '@reduxjs/toolkit';

type DonationInfoType = {
	paymentMethod: 'card' | 'sberpay';
	price: string;
};

interface IDonationModal extends IModal {
	donationInfo: DonationInfoType;
}

const initialState: IDonationModal = {
	isOpen: false,
	donationInfo: {
		paymentMethod: 'card',
		price: '350'
	}
};

const donationModalSlice = createSlice({
	name: 'donationModalSlice',
	initialState,
	reducers: {
		setOpenModal(state, action) {
			state.isOpen = action.payload;
		},
		setPrice(state, action) {
			state.donationInfo.price = action.payload;
		},
		setPaymentMethod(state, action) {
			state.donationInfo.paymentMethod = action.payload;
		},
		clearDonationInfo(state) {
			state.donationInfo.price = '350';
			state.donationInfo.paymentMethod = 'card';
		}
	}
});

export const { setOpenModal, setPrice, setPaymentMethod, clearDonationInfo } =
	donationModalSlice.actions;
export default donationModalSlice.reducer;
