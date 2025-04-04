import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import { Badge, Button, StarIcon } from '@/shared/ui';

import s from './fond-card.module.scss';

interface IFondCardAlert {
	className?: string;
	title: string;
	statusBadge: string;
	badges: string[];
	img: string;
	href: string;
}

export const FondCard: FC<IFondCardAlert> = ({
	title,
	statusBadge,
	badges,
	img,
	className,
	href
}) => {
	const fondCardClass = clsx(s.fondCard, className);

	return (
		<NavLink to={href} className={fondCardClass}>
			<img src={img} alt='fond' />
			<div className={s.fondCardContent}>
				<div className={s.fondCardTop}>
					<div className={s.text}>
						<p>{title}</p>
						<Badge color='purple' size='m'>
							{statusBadge}
						</Badge>
					</div>
					<Button variant='clear' className={s.favorButton}>
						<StarIcon />
					</Button>
				</div>
				<div className={s.fondCardBottom}>
					{badges.map(badge => (
						<Badge key={badge} size='m'>
							{badge}
						</Badge>
					))}
				</div>
			</div>
		</NavLink>
	);
};
