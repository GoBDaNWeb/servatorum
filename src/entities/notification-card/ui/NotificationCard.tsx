import { FC } from 'react';

import clsx from 'clsx';

import { Button, CloseIcon } from '@/shared/ui';

import s from './notification-card.module.scss';

interface INotificationCard {
	date: string;
	title: string;
	descr: string;
	isRead: boolean;
}

export const NotificationCard: FC<INotificationCard> = ({ date, title, descr, isRead }) => {
	const notificationCardClass = clsx(s.notificationCard, {
		[s.active]: !isRead
	});

	return (
		<div className={notificationCardClass}>
			<p className={s.date}>{date}</p>
			<div className={s.text}>
				<p className={s.title}>{title}</p>
				<p className={s.descr}>{descr}</p>
			</div>
			<p className={s.type}>{isRead ? 'Прочитано' : 'Не прочитано'}</p>
			<Button variant='square' size='xs' className={s.deleteBtn} ariaLabel='Удалить уведомление'>
				<CloseIcon />
			</Button>
		</div>
	);
};
