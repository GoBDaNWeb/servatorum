import { FC } from 'react';

import clsx from 'clsx';

import { Badge, Button, StarIcon } from '@/shared/ui';

import s from './fond-card-alert.module.scss';

interface IFondCardAlert {
	className?: string;
	title: string;
	statusBadge: string;
	badges: string[];
	img: string;
}

export const FondCardAlert: FC<IFondCardAlert> = ({
	title,
	statusBadge,
	badges,
	img,
	className
}) => {
	const fondCardClass = clsx(s.fondCardAlert, className);

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
