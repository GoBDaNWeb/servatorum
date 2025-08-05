import { Control, FieldValues } from 'react-hook-form';

import { formatPhone } from '@/shared/lib';
import { UserDirection, UserType } from '@/shared/types';

import {
	AdminNameForm,
	CompanyDataForm,
	FondContactsForm,
	FondRequisitesForm
} from '../ui/data-forms';

export const useFormConfig = (
	type: UserType,
	phoneValue: string,
	control: Control<FieldValues>,
	userDirection?: UserDirection
): any => {
	const formConfig = {
		user: {
			fields: [],
			defaultValues: {
				first_name: '',
				surname: '',
				last_name: '',
				city: '',
				gender: 'Мужской',
				date_of_birth: '',
				phone: formatPhone(phoneValue, false),
				email: '',
				role: userDirection,
				profile_picture: ''
			}
		},
		fond: {
			fields: [
				<AdminNameForm control={control} />,
				<CompanyDataForm control={control} />,
				<FondRequisitesForm control={control} />,
				<FondContactsForm control={control} />
			],
			defaultValues: {
				administrator_name: '',
				administrator_surname: '',
				administrator_lastname: '',
				name: '',
				description: '',
				address: '',
				phone: formatPhone(phoneValue, false),
				email: '',
				site: '',
				logo: '',
				inn: '',
				kpp: '',
				account_name: '',
				bank_account: '',
				cor_account: '',
				bik: ''
			}
		},
		company: {
			fields: [],
			defaultValues: {
				administrator_name: '',
				administrator_surname: '',
				administrator_lastname: '',
				name: '',
				description: '',
				address: '',
				phone: formatPhone(phoneValue, false),
				email: '',
				site: '',
				logo: '',
				inn: '',
				kpp: '',
				account_name: '',
				bank_account: '',
				cor_account: '',
				bik: ''
			}
		}
	};

	return formConfig[type as keyof typeof formConfig] || formConfig.user;
};
