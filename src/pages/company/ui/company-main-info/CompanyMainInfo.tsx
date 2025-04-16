import { useState } from 'react';

import { ReviewCard } from '@/entities/review-card';

import {
	Button,
	CirclePlusIcon,
	DownOutlineArrowIcon,
	Image,
	StarIcon,
	useModal
} from '@/shared/ui';

import { reviews } from '../../config';

import s from './company-main-ifno.module.scss';

export const CompanyMainInfo = () => {
	const [reviewsList, setReviewsList] = useState(reviews.slice(0, 2));

	const { open } = useModal();

	const handleShowAllReviews = () => {
		setReviewsList(reviews);
	};

	const handleOpenLeaveReviewModal = () => {
		open('leave-review');
	};

	return (
		<div className={s.companyMainInfo}>
			<div className={s.companyMainInfoContent}>
				<div className={s.imageBlock}>
					<div className='sticky-block'>
						<Image className={s.image} src='/images/fond.jpg' alt='company' isGradient />
					</div>
				</div>
				<div className={s.contentBlock}>
					<h3>ОАО “Ортопедические товары”</h3>
					<p className={s.dateSince}>На Servatorum с января 2023</p>
					<div className={s.info}>
						<div className={s.infoItem}>
							<p className={s.title}>Рейтинг</p>
							<p className={s.value}>
								<StarIcon />
								4,5
							</p>
						</div>
						<div className={s.infoItem}>
							<p className={s.title}>Оказано услуг</p>
							<p className={s.value}>0</p>
						</div>
						<div className={s.infoItem}>
							<p className={s.title}>Пожертвований</p>
							<p className={s.value}>92 421 ₽</p>
						</div>
						<div className={s.infoItem}>
							<p className={s.title}>Оценок</p>
							<p className={s.value}>20</p>
						</div>
					</div>
					<p className={s.descr}>
						Наш благотворительный фонд "Помощь животным" посвящен заботе и поддержке кошек и собак.
						Мы стремимся создать лучшую жизнь для бездомных животных и помочь им найти любящие и
						заботливые дома. В "Помощь животным" мы предлагаем широкий спектр услуг и программ,
						включая пристройство, медицинскую помощь, реабилитацию и социализацию бездомных кошек и
						собак.
					</p>
				</div>
			</div>
			<div className={s.reviews}>
				<div className={s.top}>
					<p className={s.title}>Отзывы (12)</p>
					<Button variant='primary' onClick={handleOpenLeaveReviewModal}>
						<CirclePlusIcon />
						Добавить отзыв
					</Button>
				</div>
				<div className={s.reviewList}>
					{
						// TODO: Заменить key={index} когда будет апи
						reviewsList.map((review, index) => (
							<ReviewCard
								key={index}
								img={review.img}
								name={review.name}
								rating={review.rating}
								text={review.text}
							/>
						))
					}
				</div>
				{reviewsList.length !== reviews.length ? (
					<Button
						variant='text'
						color='purple'
						onClick={handleShowAllReviews}
						className={s.loadMorebtn}
					>
						<DownOutlineArrowIcon />
						Развернуть все {reviews.length}
					</Button>
				) : null}
			</div>
		</div>
	);
};
