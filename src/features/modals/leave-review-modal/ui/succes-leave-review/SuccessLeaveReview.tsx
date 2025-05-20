import { FC } from 'react';

import { Button } from '@/shared/ui';

import s from './succes-leave-review.module.scss';

interface ISuccessLeaveReview {
	handleCloseModal: () => void;
}

export const SuccessLeaveReview: FC<ISuccessLeaveReview> = ({ handleCloseModal }) => {
	return (
		<div className={s.successLeaveReview}>
			<img src='/images/check.svg' alt='check' />
			<p className={s.title}>Спасибо что рассказали!</p>
			<p className={s.descr}>Ваши отзывы помогают другим определиться с выбором.</p>
			<Button variant='primary' onClick={handleCloseModal}>
				Продолжить
			</Button>
		</div>
	);
};
