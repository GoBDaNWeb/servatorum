import { FC } from 'react';
// import { FC, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

// import { useDispatch } from 'react-redux';
// import { setFond } from '@/entities/fond';
// import { useCreateFondMutation } from '@/shared/api/fond';
import { formatPhone } from '@/shared/lib';
// import { IFond } from '@/shared/types';
// import { Button, Checkbox, Photo } from '@/shared/ui';
import { Button } from '@/shared/ui';

import {
	AdminNameForm,
	CompanyDataForm,
	FondContactsForm,
	FondRequisitesForm
} from '../data-forms';

// import { AdminNameForm } from './admin-name-form';
import s from './org-data-register.module.scss';

interface IUserDataRegister {
	nextStep: () => void;
	phoneValue: string;
	title: string;
}

// export const OrgDataRegister: FC<IUserDataRegister> = ({ nextStep, phoneValue, title }) => {
export const OrgDataRegister: FC<IUserDataRegister> = ({ phoneValue, title }) => {
	// const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

	// const [createFond] = useCreateFondMutation();
	// const dispatch = useDispatch();

	const { handleSubmit, control } = useForm<FieldValues>({
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
	});

	// const handleSetFond = (fond: IFond) => {
	// 	dispatch(setFond(fond));
	// };

	const handleCreateFond = async (data: FieldValues) => {
		try {
			// const { data: fondData } = await createFond(data);
			console.log('data', data);
			// if (fondData) {
			// 	// nextStep();
			// 	// handleSetFond(fondData);
			// } else {
			// }
		} catch (e) {
			console.error('Ошибка при регистрации', e);
		}
	};

	const onSubmit: SubmitHandler<FieldValues> = data => {
		handleCreateFond(data);

		// console.log('res', res);
		// nextStep();
		console.log(data);
	};

	// useEffect(() => {
	// 	const { unsubscribe } = watch(value => {
	// 		const emptyValues = Object.values(value).filter(val => {
	// 			return val.length === 0;
	// 		});
	// 		if (emptyValues) {
	// 			if (!emptyValues.length) {
	// 				setButtonIsDisabled(false);
	// 			} else {
	// 				setButtonIsDisabled(true);
	// 			}
	// 		}
	// 	});
	// 	return () => unsubscribe();
	// }, [watch]);

	return (
		<div className={s.orgDataRegister}>
			<p className={s.title}>{title}</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={s.inputs}>
					<AdminNameForm control={control} />
					<CompanyDataForm control={control} />
					<FondRequisitesForm control={control} />
					<FondContactsForm control={control} />
				</div>
				{/* <Photo className={s.photoSelect} title='Изменить логотип' /> */}
				{/* <Checkbox name='phoneCheck'>
					Я соглашаюсь на обработку{' '}
					<a href='#' target='_blank'>
						Персональных данных
					</a>
				</Checkbox> */}
				<Button
					type='submit'
					variant='primary'
					className={s.submitBtn}
					// isDisabled={buttonIsDisabled}
				>
					Продолжить
				</Button>
			</form>
		</div>
	);
};
