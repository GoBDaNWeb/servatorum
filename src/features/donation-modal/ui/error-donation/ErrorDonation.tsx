import { FC } from 'react';

import { Button } from '@/shared/ui';

import s from './error-donation.module.scss';

interface IErrorDonation {
	handleRepeatPayment: () => void;
}

export const ErrorDonation: FC<IErrorDonation> = ({ handleRepeatPayment }) => {
	return (
		<div className={s.errorDonation}>
			<img src='/images/error.svg' alt='error' />
			<p className={s.title}>Платеж прошел успешно</p>
			<p className={s.descr}>Мы ценим вашу поддержку</p>
			<Button variant='primary' onClick={handleRepeatPayment}>
				<img src='/images/icons/repeat-icon.svg' alt='repeat' />
				Повторить
			</Button>
		</div>
	);
};
