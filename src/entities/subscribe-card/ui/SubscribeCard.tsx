import { FC } from 'react';

import clsx from 'clsx';

import { Button, Checkbox, useModal } from '@/shared/ui';

import s from './subscribe-card.module.scss';

interface ISubscribeCard {
	isSubscribed?: boolean;
	className?: string;
	configurable?: boolean;
	isChecked?: boolean;
	date?: string;
	card?: string;
	price?: string;
}

export const SubscribeCard: FC<ISubscribeCard> = ({
	isSubscribed,
	className,
	configurable,
	isChecked,
	date,
	card,
	price
}) => {
	const { open } = useModal();

	const handleOpenChangeSubscribeModal = () => {
		open('change-subscribe');
	};

	const subcribeCardClass = clsx(s.subcribeCard, className, {
		[s.configurable]: configurable,
		[s.disable]: !isChecked && configurable
	});

	return (
		<div className={subcribeCardClass}>
			{configurable ? <Checkbox name='subscribe' isChecked={isChecked} /> : null}
			<div className={s.subscribeInfo}>
				<img src='/images/fond.jpg' alt='fond' />
				<div className={s.text}>
					<p className={s.title}>Четыре лапы</p>
					<p className={s.descr}>Москва</p>
				</div>
			</div>
			{configurable ? (
				<div className={s.content}>
					<p className={s.date}>{isChecked ? date : null}</p>
					<p className={s.card}>
						<img src='/images/icons/mastercard.svg' alt='card' />
						{card}
					</p>
					<p className={s.price}>{price}</p>
				</div>
			) : null}
			{configurable ? (
				<Button
					variant='primary'
					size='xs'
					color='gray'
					className={s.changeBtn}
					onClick={handleOpenChangeSubscribeModal}
				>
					Изменить
				</Button>
			) : (
				<Button variant='primary' size='xs' color={isSubscribed ? 'gray' : 'purple'}>
					{isSubscribed ? 'Вы подписаны' : 'Подписаться'}
				</Button>
			)}
		</div>
	);
};
