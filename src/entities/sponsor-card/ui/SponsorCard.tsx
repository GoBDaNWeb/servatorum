import { FC } from 'react';

import { LogoGray } from '@/shared/ui';

import s from './sponsor-card.module.scss';

interface ISponsorCard {
	img?: string;
	title: string;
	subTitle: string;
}

export const SponsorCard: FC<ISponsorCard> = ({ img, title, subTitle }) => {
	return (
		<div className={s.sponsorCard}>
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
