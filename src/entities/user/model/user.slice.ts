import { IUser, IUserStore } from '@/shared/types';

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: IUserStore = {
	userData: null
};

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUser | null>) {
			state.userData = action.payload;
		}
	}
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
