import { IModal } from '@/shared/types';

import { createSlice } from '@reduxjs/toolkit';

const initialState: IModal = {
	isOpen: false
};

const documentsModalSlice = createSlice({
	name: 'documentsModalSlice',
	initialState,
	reducers: {
		setOpenModal(state, action) {
			state.isOpen = action.payload;
		}
	}
});

export const { setOpenModal } = documentsModalSlice.actions;
export default documentsModalSlice.reducer;
