import { IModal } from '@/shared/types';

import { createSlice } from '@reduxjs/toolkit';

const initialState: IModal = {
	isOpen: false
};

const subscribeModalSlice = createSlice({
	name: 'subscribeModalSlice',
	initialState,
	reducers: {
		setOpenModal(state, action) {
			state.isOpen = action.payload;
		}
	}
});

export const { setOpenModal } = subscribeModalSlice.actions;
export default subscribeModalSlice.reducer;
