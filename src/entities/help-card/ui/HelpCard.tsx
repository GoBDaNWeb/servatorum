import { FC } from 'react';

import clsx from 'clsx';

import { Badge, Image } from '@/shared/ui';

import s from './help-card.module.scss';

interface IHelpCard {
	img: string;
	title: string;
	isDisabled?: boolean;
}

export const HelpCard: FC<IHelpCard> = ({ img, title, isDisabled }) => {
	const helpCardClass = clsx(s.helpCard, {
		[s.disabled]: isDisabled
	});

	return (
		<div className={helpCardClass}>
			<div className={s.imageBlock}>
				{isDisabled ? (
					<Badge variant='alert' size='m' className={s.badge}>
						В следующем этапе
					</Badge>
				) : null}
				<Image paddingBottom='108%' src={img} alt='help' className={s.image} />
			</div>

			<p>{title}</p>
		</div>
	);
};
