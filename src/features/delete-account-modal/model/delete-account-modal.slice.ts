import { IModal } from '@/shared/types';

import { createSlice } from '@reduxjs/toolkit';

const initialState: IModal = {
	isOpen: false
};

const deleteAccountModalSlice = createSlice({
	name: 'deleteAccountModalSlice',
	initialState,
	reducers: {
		setOpenModal(state, action) {
			state.isOpen = action.payload;
		}
	}
});

export const { setOpenModal } = deleteAccountModalSlice.actions;
export default deleteAccountModalSlice.reducer;
