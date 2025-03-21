import { IModal } from '@/shared/types';

import { createSlice } from '@reduxjs/toolkit';

const initialState: IModal = {
	isOpen: false
};

const supportFondModalSlice = createSlice({
	name: 'supportFondModalSlice',
	initialState,
	reducers: {
		setOpenModal(state, action) {
			state.isOpen = action.payload;
		}
	}
});

export const { setOpenModal } = supportFondModalSlice.actions;
export default supportFondModalSlice.reducer;
