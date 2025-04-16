import { FC } from 'react';

import { Button, CloseIcon, useModal } from '@/shared/ui';

import s from './bank-card.module.scss';

interface IBankCard {
	title?: string;
	number?: string;
	icon?: string;
	isMain?: boolean;
}

export const BankCard: FC<IBankCard> = ({ title, number, icon, isMain }) => {
	const { open } = useModal();

	const handleOpenDeleteCardModal = () => {
		open('delete-card');
	};

	const handleOpenNewCardModal = () => {
		open('new-card');
	};

	return (
		<div className={s.bankCard}>
			<Button className={s.deleteCard} onClick={handleOpenDeleteCardModal}>
				<CloseIcon />
			</Button>
			<div className={s.top}>
				<div className={s.titleWrapper}>
					<div className={s.icon}>
						<img src={icon || '/images/icons/card-outline-icon.svg'} alt='bank-card' />
					</div>
					<p className={s.title}>{title || 'Новая карта'}</p>
				</div>
			</div>
			<div className={s.bottom}>
				{!title ? (
					<Button variant='primary' className={s.addBtn} onClick={handleOpenNewCardModal}>
						Добавить
					</Button>
				) : null}
				<p className={s.mainCard}>{isMain ? 'Основная карта' : ''}</p>
				<p className={s.number}>{number}</p>
			</div>
		</div>
	);
};
