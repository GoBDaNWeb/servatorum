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
	isFavourites?: boolean;
}

export const FondCard: FC<IFondCardAlert> = ({
	title,
	statusBadge,
	badges,
	img,
	className,
	href,
	isFavourites
}) => {
	const classes = {
		fondCardClass: clsx(s.fondCard, className),
		favorButtonClass: clsx(s.favorButton, {
			[s.favor]: isFavourites
		})
	};

	return (
		<NavLink to={href} className={classes.fondCardClass}>
			<img src={img} alt='fond' />
			<div className={s.fondCardContent}>
				<div className={s.fondCardTop}>
					<div className={s.text}>
						<p>{title}</p>
						<Badge color='purple' size='m'>
							{statusBadge}
						</Badge>
					</div>
					<Button variant='clear' className={classes.favorButtonClass}>
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
