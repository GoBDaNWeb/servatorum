import { IUser } from '@/shared/types';

export const defaultUserData = (userData: IUser | null) => {
	return {
		last_name: '',
		first_name: '',
		surname: '',
		date_of_birth: '',
		city: '',
		phone: '',
		email: '',
		gender: '',
		spheres: [],
		...userData
	};
};
