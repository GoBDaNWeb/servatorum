import { FC } from 'react';

import { Button } from '@/shared/ui';

import s from './success-support.module.scss';

interface ISuccessSupport {
	handleCloseModal: () => void;
}

export const SuccessSupport: FC<ISuccessSupport> = ({ handleCloseModal }) => {
	return (
		<div className={s.successSupport}>
			<img src='/images/check.svg' alt='check' />
			<p className={s.title}>Спасибо за обращение!</p>
			<p className={s.descr}>Ответ вы получите на почту указанную в профиле</p>
			<Button variant='primary' onClick={handleCloseModal}>
				Готово
			</Button>
		</div>
	);
};
