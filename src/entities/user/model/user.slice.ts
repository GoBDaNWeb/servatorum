import { formatPhone } from '@/shared/lib';
import { IUser, IUserStore } from '@/shared/types';

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState: IUserStore = {
	tempUser: null,
	userData: null,
	isLoading: false,
	isAuthenticated: false,
	isInitialized: false,
	isProviderAuth: false
};

export const authWithProvider = createAsyncThunk(
	'users/authWithProvider',
	async (provider: 'vk' | 'ya', { rejectWithValue }) => {
		switch (provider) {
			case 'ya':
				try {
					const ya_token = localStorage.getItem('yandex_access_token');
					if (!ya_token) {
						return rejectWithValue('No Yandex token found');
					}
					// Получаем данные пользователя от Яндекса
					const yandexResponse = await fetch('https://login.yandex.ru/info?format=json', {
						headers: { Authorization: `OAuth ${ya_token}` }
					});

					if (!yandexResponse.ok) {
						return rejectWithValue('Failed to fetch user info from Yandex');
					}

					const yandexData = await yandexResponse.json();
					const userYaData = {
						first_name: yandexData.first_name,
						last_name: yandexData.last_name,
						phone: formatPhone(yandexData.default_phone.number, false),
						email: yandexData.default_email,
						gender: yandexData.sex === 'male' ? 'Мужской' : 'Женский'
					};

					// Возвращаем данные пользователя
					return { tempUser: userYaData };
				} catch (e) {
					return rejectWithValue(e);
				}
			default:
				return rejectWithValue('Unsupported provider');
		}
	}
);

const userSlice = createSlice({
	name: 'userSlice',
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<IUser | null>) {
			state.userData = action.payload;
			state.isAuthenticated = !!action.payload;
			state.isInitialized = true;
		},
		setTempUser(state, action: PayloadAction<Partial<IUser> | null>) {
			state.tempUser = action.payload;
		},
		setUserLoading(state, action: PayloadAction<boolean>) {
			state.isLoading = action.payload;
		},
		setUserInitialized(state, action: PayloadAction<boolean>) {
			state.isInitialized = action.payload;
		},
		setProviderLoading(state, action: PayloadAction<boolean>) {
			state.isProviderAuth = action.payload;
		},
		logout(state) {
			state.userData = null;
			state.isAuthenticated = false;
			state.isInitialized = true;
			localStorage.removeItem('access_token');
			localStorage.removeItem('refresh_token');
			localStorage.removeItem('yandex_access_token');
		}
	},
	extraReducers: builder => {
		builder
			.addCase(authWithProvider.pending, state => {
				state.isLoading = true;
			})
			.addCase(authWithProvider.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isProviderAuth = true;
				if (action.payload?.tempUser) {
					state.tempUser = action.payload.tempUser;
				}
			})
			.addCase(authWithProvider.rejected, (state, action) => {
				state.isLoading = false;
				console.error('Yandex auth failed:', action.payload);
			});
	}
});

export const {
	setUser,
	setUserLoading,
	setUserInitialized,
	logout,
	setProviderLoading,
	setTempUser
} = userSlice.actions;
export default userSlice.reducer;
