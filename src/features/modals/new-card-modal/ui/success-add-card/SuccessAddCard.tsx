import { FC } from 'react';

import { Button } from '@/shared/ui';

import s from './success-add-card.module.scss';

interface ISuccessAddCard {
	handleCloseModal: () => void;
}

export const SuccessAddCard: FC<ISuccessAddCard> = ({ handleCloseModal }) => {
	return (
		<div className={s.successAddCard}>
			<p className={s.title}>Карту успешно добавлена</p>
			<p className={s.descr}>
				Управлять вашими картами вы можете в своем профиле в раделе “Мои карты”
			</p>
			<Button variant='primary' onClick={handleCloseModal}>
				Хорошо
			</Button>
		</div>
	);
};
