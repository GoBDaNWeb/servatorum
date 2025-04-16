import { FC, useState } from 'react';

import clsx from 'clsx';

import { Button, DownOutlineArrowIcon, StarIcon } from '@/shared/ui';

import s from './review-card.module.scss';

interface IReviewCard {
	img: string;
	name: string;
	rating: number;
	text: string;
}

export const ReviewCard: FC<IReviewCard> = ({ img, name, rating, text }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const isLongText = text.length > 400;

	return (
		<div className={s.reviewCard}>
			<div className={s.infoBlock}>
				<img src={img} alt='review' />
				<p className={s.name}>{name}</p>
				<div className={s.rating}>
					{[...new Array(5)].map((_, index) => (
						<div className={clsx(s.icon, { [s.active]: index < rating })} key={index}>
							<StarIcon />
						</div>
					))}
				</div>
			</div>
			<div className={s.textBlock}>
				{isLongText && !isExpanded ? `${text.slice(0, 400)}...` : text}
				{isLongText && !isExpanded && (
					<Button variant='text' color='purple' onClick={() => setIsExpanded(true)}>
						Читать весь отзыв
						<DownOutlineArrowIcon />
					</Button>
				)}
			</div>
		</div>
	);
};
