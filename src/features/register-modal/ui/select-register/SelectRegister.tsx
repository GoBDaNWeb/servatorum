import { FC } from 'react';

import { Button } from '@/shared/ui';

import s from './select-register.module.scss';

interface ISelectRegister {
	closeModal: () => void;
	nextStep: () => void;
}

export const SelectRegister: FC<ISelectRegister> = ({ closeModal, nextStep }) => {
	return (
		<div className={s.selectRegister}>
			<img src='/images/logo.svg' alt='logo' />
			<div className={s.btns}>
				<Button onClick={nextStep} variant='primary'>
					Войти
				</Button>
				<Button onClick={closeModal}>Продолжить без регистрации</Button>
			</div>
		</div>
	);
};
