import { FC } from 'react';

import clsx from 'clsx';

import { cropText } from '@/shared/lib';

import s from './requets-alert-card.module.scss';

interface IRequetsAlertCard {
	className?: string;
	order: string;
	title: string;
	date: string;
	descr: string;
	img: string;
}

export const RequestAlertCard: FC<IRequetsAlertCard> = ({
	order,
	title,
	date,
	descr,
	img,
	className
}) => {
	const requestCardClass = clsx(s.requetsAlertCard, className);
	return (
		<div className={requestCardClass}>
			<div className={s.requetsCardTop}>
				<div className={s.text}>
					<p>{order}</p>
					<span>{date}</span>
				</div>
				<div className={s.status}>
					<img src='/images/icons/success.svg' alt='success' />
					Опубликован
				</div>
			</div>
			<div className={s.requetsCardBottom}>
				<div className={s.text}>
					<p>{cropText(title, 25)}</p>
					<p>{cropText(descr, 85)}</p>
				</div>
				<img src={img} alt='request' />
			</div>
		</div>
	);
};
