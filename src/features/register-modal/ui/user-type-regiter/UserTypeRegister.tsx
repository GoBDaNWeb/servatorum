import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/shared/ui';

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
				<Button className={s.userTypeBtn} variant='clear' onClick={() => handleSetUserType('user')}>
					<div className={s.typeBtnLeft}>
						<img src='/images/icons/user-icon.svg' alt='user' />
						<p>Пользователь</p>
					</div>
					<img src='/images/icons/next-arrow.svg' alt='arrow' />
				</Button>
				<Button className={s.userTypeBtn} variant='clear' onClick={() => handleSetUserType('fond')}>
					<div className={s.typeBtnLeft}>
						<img src='/images/icons/fond-icon.svg' alt='fond' />
						<p>Фонд</p>
					</div>
					<img src='/images/icons/next-arrow.svg' alt='arrow' />
				</Button>
				<Button
					className={s.userTypeBtn}
					variant='clear'
					onClick={() => handleSetUserType('company')}
				>
					<div className={s.typeBtnLeft}>
						<img src='/images/icons/company-icon.svg' alt='company' />
						<p>Компания</p>
					</div>
					<img src='/images/icons/next-arrow.svg' alt='arrow' />
				</Button>
			</div>
		</div>
	);
};
