import { FC } from 'react';

import clsx from 'clsx';

import { Badge, Button, StarIcon } from '@/shared/ui';

import s from './fond-card.module.scss';

interface IFondCard {
	className?: string;
	title: string;
	statusBadge: string;
	badges: string[];
	img: string;
}

export const FondCard: FC<IFondCard> = ({ title, statusBadge, badges, img, className }) => {
	const fondCardClass = clsx(s.fondCard, className);

	return (
		<div className={fondCardClass}>
			<div className={s.fondCardTop}>
				<div className={s.fondCardTopContent}>
					<img src={img} alt='fond' />
					<div className={s.text}>
						<Badge color='purple'>{statusBadge}</Badge>
						<p>{title}</p>
					</div>
				</div>
				<Button variant='clear'>
					<StarIcon />
				</Button>
			</div>
			<div className={s.fondCardBottom}>
				{badges.map(badge => (
					<Badge key={badge}>{badge}</Badge>
				))}
			</div>
		</div>
	);
};
