import { FC } from 'react';

import clsx from 'clsx';

import { Button } from '@/shared/ui';

import s from './subscribe-card.module.scss';

interface ISubscribeCard {
	isSubscribed?: boolean;
	className?: string;
}

export const SubscribeCard: FC<ISubscribeCard> = ({ isSubscribed, className }) => {
	const subcribeCardClass = clsx(s.subcribeCard, className);

	return (
		<div className={subcribeCardClass}>
			<div className={s.subscribeInfo}>
				<img src='/images/fond.jpg' alt='fond' />
				<div className={s.text}>
					<p className={s.title}>Четыре лапы</p>
					<p className={s.descr}>Москва</p>
				</div>
			</div>
			<Button variant='primary' size='xs' color={isSubscribed ? 'gray' : 'purple'}>
				{isSubscribed ? 'Вы подписаны' : 'Подписаться'}
			</Button>
		</div>
	);
};
