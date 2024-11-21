import { createSlice } from '@reduxjs/toolkit';

interface IMenuState {
	isOpen: boolean;
}
const initialState: IMenuState = {
	isOpen: false
};

const mobileMenuSlice = createSlice({
	name: 'mobileMenuSlice',
	initialState,
	reducers: {
		setOpenMenu(state, action) {
			state.isOpen = action.payload;
		}
	}
});

export const { setOpenMenu } = mobileMenuSlice.actions;
export default mobileMenuSlice.reducer;
