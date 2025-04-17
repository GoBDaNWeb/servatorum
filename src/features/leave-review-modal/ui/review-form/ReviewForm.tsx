import { FC, useEffect, useState } from 'react';

import clsx from 'clsx';

import { Button, StarIcon, Textarea, useModal } from '@/shared/ui';

import s from './review-form.module.scss';

interface IReviewForm {
	nextStep: () => void;
}

export const ReviewForm: FC<IReviewForm> = ({ nextStep }) => {
	const [starIndex, setStarIndex] = useState(0);
	const [hoverStarIndex, setHoverStarIndex] = useState(0);

	const { currentModal } = useModal();

	const handleSetStarIndex = (index: number) => {
		setStarIndex(index);
	};
	const handleSetHoverStarIndex = (index: number) => {
		setHoverStarIndex(index);
	};

	useEffect(() => {
		setStarIndex(0);
		setHoverStarIndex(0);
	}, [currentModal]);

	return (
		<div className={s.content}>
			<p className={s.title}>Оставить отзыв</p>
			<p className={s.subtitle}>Ваш отзывы поможет другим определиться с выбором</p>
			<div className={s.selectRating}>
				<p className={s.ratingTitle}>Поставьте оценку</p>
				<div className={s.rating} onMouseLeave={() => handleSetHoverStarIndex(0)}>
					{[...new Array(5)].map((_, index) => {
						const starClass = clsx(s.star, {
							[s.active]: starIndex >= index,
							[s.hover]: hoverStarIndex >= index
						});
						return (
							<Button
								key={index}
								variant='clear'
								className={starClass}
								onClick={() => handleSetStarIndex(index)}
								onMouseEnter={() => handleSetHoverStarIndex(index)}
							>
								<StarIcon />
							</Button>
						);
					})}
				</div>
			</div>
			<form>
				<p className={s.formTitle}>
					Опишите плюсы и минусы <span>*</span>
				</p>
				<Textarea placeholder='Напишите' height={328} />
				<Button variant='primary' size='s' onClick={nextStep}>
					Опубликовать
				</Button>
			</form>
		</div>
	);
};
