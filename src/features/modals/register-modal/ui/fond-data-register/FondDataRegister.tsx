import { FC } from 'react';
// import { FC, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { setFond } from '@/entities/fond';

import { useCreateFondMutation } from '@/shared/api/fond';
import { formatPhone } from '@/shared/lib';
import { IFond } from '@/shared/types';
// import { Button, Checkbox, Photo } from '@/shared/ui';
import { Button } from '@/shared/ui';

// import { AdminNameForm } from './admin-name-form';
import { CompanyDataForm } from './company-data-form';
import { FondContactsForm } from './fond-contacts-form';
import s from './fond-data-register.module.scss';
import { FondRequisitesForm } from './fond-requisites-form';

interface IUserDataRegister {
	nextStep: () => void;
	phoneValue: string;
}

export const FondDataRegister: FC<IUserDataRegister> = ({ nextStep, phoneValue }) => {
	// const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

	const [createFond] = useCreateFondMutation();
	const dispatch = useDispatch();

	const { handleSubmit, control } = useForm<FieldValues>({
		defaultValues: {
			// firstName: '',
			// middleName: '',
			// lastName: '',
			// fondName: '',
			// fondInfo: '',
			// accountName: '',
			// inn: '',
			// kpp: '',
			// accountNumber: '',
			// ks: '',
			// bik: '',
			// legalAddress: '',
			// phone: phoneValue,
			// email: '',
			// site: ''

			name: '',
			description: '',
			logo: '',
			photo: '',
			inn: '',
			bik: '',
			cor_account: '',
			address: '',
			address_reg: '',
			phone: formatPhone(phoneValue, false),
			phone_helpdesk: ''
		}
	});

	const handleSetFond = (fond: IFond) => {
		dispatch(setFond(fond));
	};

	const handleCreateFond = async (data: FieldValues) => {
		try {
			const { data: fondData } = await createFond(data);

			if (fondData) {
				nextStep();
				handleSetFond(fondData);
			} else {
			}
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
		<div className={s.fondDataRegister}>
			<p className={s.title}>Данные фонда</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={s.inputs}>
					{/* <AdminNameForm control={control} /> */}
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
