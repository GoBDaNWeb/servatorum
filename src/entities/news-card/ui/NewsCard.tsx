import { FC } from 'react';

import clsx from 'clsx';

import { Button, Image } from '@/shared/ui';

import s from './news-card.module.scss';

interface INewsCard {
	className?: string;
	img: string;
	date: string;
	title: string;
	views: string;
	href: string;
}

export const NewsCard: FC<INewsCard> = ({ className, img, date, title, views, href }) => {
	const newsCardClass = clsx(s.newsCard, className);
	return (
		<a className={newsCardClass} href={href}>
			<Image paddingBottom='51%' src={img} alt='news' className={s.image} />
			<div className={s.newsCardContent}>
				<span>{date}</span>
				<p>{title}</p>
				<div className={s.newsCardContentInfo}>
					<div className={s.views}>
						<img src='/images/icons/eye.svg' alt='eye' />
						<span>{views}</span>
					</div>
					<Button variant='clear'>
						<img src='/images/icons/link.svg' alt='eye' />
					</Button>
				</div>
			</div>
		</a>
	);
};
