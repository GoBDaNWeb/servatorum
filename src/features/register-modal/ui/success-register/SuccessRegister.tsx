import { FC } from 'react';

import { Button } from '@/shared/ui';

import s from './success-register.module.scss';

interface ISuccessRegister {
	closeModal: () => void;
}

export const SuccessRegister: FC<ISuccessRegister> = ({ closeModal }) => {
	return (
		<div className={s.successRegister}>
			<div className={s.textWrapper}>
				<img src='/images/icons/logo.svg' alt='logo' />
				<p className={s.title}>Ваша заявка на регистрацию отправлена на модерацию</p>
				<p className={s.descr}>
					В течении 24 часов с вами свяжется администратор приложения Servatorum, для верификации
					данных
				</p>
			</div>

			<Button variant='primary' onClick={closeModal}>
				Хорошо
			</Button>
		</div>
	);
};
