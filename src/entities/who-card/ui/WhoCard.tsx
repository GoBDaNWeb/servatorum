import { FC } from 'react';

import clsx from 'clsx';

import { Badge, Button, Image } from '@/shared/ui';

import s from './who-card.module.scss';

interface IWhoCard {
	img: string;
	title: string;
	isDisabled: boolean;
	btnTitle: string;
}

export const WhoCard: FC<IWhoCard> = ({ img, title, isDisabled = false, btnTitle }) => {
	const whoCardClass = clsx(s.whoCard, {
		[s.disabled]: isDisabled
	});

	return (
		<div className={whoCardClass}>
			<div className={s.imageBlock}>
				<Image paddingBottom='70%' src={img} alt='who' className={s.image} />
				{isDisabled ? (
					<Badge variant='alert' size='l' className={s.badge}>
						В следующем этапе
					</Badge>
				) : null}
			</div>
			<div className={s.whoCardContent}>
				<p>{title}</p>
				{!isDisabled ? (
					<Button variant='primary' size='sm'>
						{btnTitle}
					</Button>
				) : null}
			</div>
		</div>
	);
};
