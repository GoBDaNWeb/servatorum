import { IFond, IFondStore } from '@/shared/types';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IFondStore = {
	fondData: null
};

const fondSlice = createSlice({
	name: 'fondSlice',
	initialState,
	reducers: {
		setFond(state, action: PayloadAction<IFond | null>) {
			state.fondData = action.payload;
		}
	}
});

export const { setFond } = fondSlice.actions;
export default fondSlice.reducer;
