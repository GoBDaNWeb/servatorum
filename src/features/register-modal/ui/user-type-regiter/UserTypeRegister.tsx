import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { TypeButton } from '@/shared/ui';

import { setUserType } from '../../model';

import s from './user-type-register.module.scss';

interface IUserTypeRegister {
	nextStep: () => void;
}

export const UserTypeRegister: FC<IUserTypeRegister> = ({ nextStep }) => {
	const dispatch = useDispatch();

	const handleSetUserType = (type: 'user' | 'fond' | 'company') => {
		dispatch(setUserType(type));
		nextStep();
	};

	return (
		<div className={s.userTypeRegister}>
			<img src='/images/icons/logo.svg' alt='logo' />
			<p className={s.title}>Кем вы являетесь?</p>
			<div className={s.userTypeList}>
				<TypeButton
					title='Пользователь'
					img='/images/icons/user-icon.svg'
					onClick={() => handleSetUserType('user')}
				/>
				<TypeButton
					title='Фонд'
					img='/images/icons/fond-icon.svg'
					onClick={() => handleSetUserType('fond')}
				/>
				<TypeButton
					title='Компания'
					img='/images/icons/company-icon.svg'
					onClick={() => handleSetUserType('company')}
				/>
			</div>
		</div>
	);
};
