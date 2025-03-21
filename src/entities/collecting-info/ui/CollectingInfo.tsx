import { FC, ReactElement } from 'react';

import { Button, Image, LinkIcon, StarIcon } from '@/shared/ui';

import s from './collecting-info.module.scss';

interface ICollectingInfo {
	donationInfo: ReactElement;
	openDonationModal: () => void;
}

export const CollectingInfo: FC<ICollectingInfo> = ({ donationInfo, openDonationModal }) => {
	return (
		<div className={s.collectingInfo}>
			<div className={s.collectingInfoTop}>
				<p>ID 24124</p>
				<div className={s.features}>
					<Button variant='clear'>
						<LinkIcon />
					</Button>
					<Button variant='clear'>
						<StarIcon />
					</Button>
				</div>
			</div>
			<div className={s.collectingInfoCenter}>
				<div className={s.fond}>
					<Image src='/images/fond.jpg' alt='photo' isGradient className={s.image} />

					<div className={s.fondInfo}>
						<span>Фонд</span>
						<p>Четыре лапы</p>
					</div>
				</div>
				{donationInfo}
				<Button variant='primary' onClick={openDonationModal}>
					Помочь
				</Button>
				<div className={s.time}>
					<img src='/images/icons/clock-gold.svg' alt='' />
					<span>31 день</span>
					<p>до завершения</p>
				</div>
			</div>
		</div>
	);
};
