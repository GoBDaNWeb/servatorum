import { FC } from 'react';

import { Button } from '@/shared/ui';

import s from './success-donation.module.scss';

interface ISuccessDonation {
	handleCloseModal: () => void;
}

export const SuccessDonation: FC<ISuccessDonation> = ({ handleCloseModal }) => {
	return (
		<div className={s.successDonation}>
			<img src='/images/check.svg' alt='check' />
			<p className={s.title}>Платеж прошел успешно</p>
			<p className={s.descr}>Мы ценим вашу поддержку</p>
			<Button variant='primary' onClick={handleCloseModal}>
				Продолжить
			</Button>
		</div>
	);
};
