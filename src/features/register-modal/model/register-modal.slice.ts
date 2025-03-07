import { createSlice } from '@reduxjs/toolkit';

type RegisterInfoType = {
	phone: string;
	userType: string;
	userDirection: string;
};

interface IMenuState {
	isOpen: boolean;
	registerInfo: RegisterInfoType;
}
const initialState: IMenuState = {
	isOpen: false,
	registerInfo: {
		phone: '',
		userType: '',
		userDirection: ''
	}
};

const registerModalSlice = createSlice({
	name: 'registerModalSlice',
	initialState,
	reducers: {
		setOpenModal(state, action) {
			state.isOpen = action.payload;
		},
		setPhone(state, action) {
			state.registerInfo.phone = action.payload;
		},
		setUserType(state, action) {
			state.registerInfo.userType = action.payload;
		},
		setUserDirection(state, action) {
			state.registerInfo.userDirection = action.payload;
		},
		clearRegisterInfo(state) {
			state.registerInfo.phone = '';
			state.registerInfo.userType = '';
			state.registerInfo.userDirection = '';
		}
	}
});

export const { setOpenModal, setPhone, setUserType, setUserDirection, clearRegisterInfo } =
	registerModalSlice.actions;
export default registerModalSlice.reducer;
