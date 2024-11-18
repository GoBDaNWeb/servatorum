import { FC } from 'react';

import clsx from 'clsx';

import { cropText } from '@/shared/lib';

import s from './requets-card.module.scss';

interface IRequetsCard {
	className?: string;
	order: string;
	title: string;
	date: string;
	descr: string;
	img: string;
}

export const RequetsCard: FC<IRequetsCard> = ({ order, title, date, descr, img, className }) => {
	const requestCardClass = clsx(s.requetsCard, className);
	return (
		<div className={requestCardClass}>
			<div className={s.requetsCardTop}>
				<div className={s.text}>
					<p>{order}</p>
					<span>{date}</span>
				</div>
				<div className={s.status}>
					<img src='/images/success.svg' alt='success' />
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
