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
	const [isLoadText, setLoadText] = useState(false);
	const [visibleText, setVisibletext] = useState(text.slice(0, 400));

	const handleShowText = () => {
		setVisibletext(text);
		setLoadText(true);
	};

	return (
		<div className={s.reviewCard}>
			<div className={s.infoBlock}>
				<img src={img} alt='review' />
				<p className={s.name}>{name}</p>
				<div className={s.rating}>
					{[...new Array(5)].map((_, index) => {
						const iconClass = clsx(s.icon, {
							[s.active]: index < rating
						});
						return (
							<div className={iconClass}>
								<StarIcon key={index} />
							</div>
						);
					})}
				</div>
			</div>
			<div className={s.textBlock}>
				{text.length > 400 && !isLoadText ? `${visibleText}...` : text}
				{text.length > 400 && !isLoadText ? (
					<Button variant='text' color='purple' onClick={handleShowText}>
						Читать весь отзыв
						<DownOutlineArrowIcon />
					</Button>
				) : null}
			</div>
		</div>
	);
};
