import { FC } from 'react';

import clsx from 'clsx';

import { LogoGray } from '@/shared/ui';

import s from './sponsor-card.module.scss';

interface ISponsorCard {
	img?: string;
	title: string;
	subTitle: string;
	className?: string;
}

export const SponsorCard: FC<ISponsorCard> = ({ img, title, subTitle, className }) => {
	const sponsorCardClass = clsx(s.sponsorCard, className);

	return (
		<div className={sponsorCardClass}>
			{img ? (
				<img src={img} alt='sponsor' />
			) : (
				<div className={s.imageWrapper}>
					<LogoGray />
				</div>
			)}

			<div className={s.sponsorContent}>
				<p className={s.title}>{title}</p>
				<p className={s.subTitle}>{subTitle}</p>
			</div>
		</div>
	);
};
