import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import s from './collecting-swiper.module.scss';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { CollectingCard } from '@/entities/collecting-card';

import { PATH_PAGE } from '@/shared/config';
import { Button, Swiper } from '@/shared/ui';

interface ICollectingSwiper {
	title: string;
	titleSize?: 'm' | 'l';
	hasLinkBtn?: boolean;
	donationInfo: ReactElement;
	openDonationModal: () => void;
}

export const CollectingSwiper: FC<ICollectingSwiper> = ({
	title,
	titleSize = 'm',
	hasLinkBtn,
	donationInfo,
	openDonationModal
}) => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);

	const prev = useRef<HTMLDivElement>(null);
	const next = useRef<HTMLDivElement>(null);

	const navigate = useNavigate();

	useEffect(() => {
		if (swiper && prev.current && next.current) {
			swiper.navigation.destroy(); // Удаляем предыдущую пагинацию, если она была
			swiper.navigation.init(); // Инициализируем новую пагинацию
			swiper.navigation.update(); // Обновляем пагинацию
		}
	}, [swiper]);

	const swiperBreakpoints = {
		0: {
			slidesPerView: 1.2,
			spaceBetween: 20
		},
		500: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		767: {
			slidesPerView: 2.4,
			spaceBetween: 20
		},
		1024: {
			slidesPerView: 3
		},
		1280: {
			slidesPerView: 3.4
		},
		1440: {
			slidesPerView: 4,
			spaceBetween: 30
		}
	};

	const collectingSwiperInnerClass = clsx(s.collectingSwiperInner, 'container');
	const titleClass = clsx(s.title, s[titleSize]);

	return (
		<div className={s.collectingSwiper}>
			<div className={collectingSwiperInnerClass}>
				<h2 className={titleClass}>{title}</h2>
				<div className={s.collectingSwiperContent}>
					<Swiper
						onSlideChange={swiper => {
							setActiveSlideIndex(swiper.activeIndex + 1);
						}}
						onSwiper={swiper => {
							setSwiper(swiper);
						}}
						breakpoints={swiperBreakpoints}
						slidesPerView={4}
						spaceBetween={30}
						modules={[Navigation]}
						navigation={{
							prevEl: prev.current,
							nextEl: next.current
						}}
					>
						{[...Array(10)].map((_, index) => (
							<SwiperSlide key={index}>
								<CollectingCard
									title='Кошачьему приюту необходимо оборудование которое позволит содержать животных в чистоте и комфорте'
									size='m'
									className={s.collecting}
									imgs={[
										'/images/home/donation/slide.jpg',
										'/images/home/donation/slide.jpg',
										'/images/home/donation/slide.jpg'
									]}
									userImg='/images/home/donation/user.jpg'
									userName='Четыре лапы'
									userDate='00.00.0000'
									sum='0'
									total='100 000'
									badgeColor='gold'
									badge={
										<>
											<img src='/images/icons/clock-gold.svg' alt='' />
											<span>31 день</span>
											<p>до завершения</p>
										</>
									}
									isPopular
									hasLink
									donationInfo={donationInfo}
									openDonationModal={openDonationModal}
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div className={s.navigation}>
						<Button
							//@ts-expect-error исправить
							ref={prev}
							variant='circle'
						>
							<img src='/images/icons/arrow-left.svg' alt='arrow' />
						</Button>
						<div className={s.pagination}>
							<span>{activeSlideIndex}</span> / {swiper?.slides.length}
						</div>
						<Button
							//@ts-expect-error исправить
							ref={next}
							variant='circle'
						>
							<img src='/images/icons/arrow-right.svg' alt='arrow' />
						</Button>
					</div>
				</div>
				{hasLinkBtn ? (
					<Button
						onClick={() => navigate(PATH_PAGE.collections)}
						variant='outline'
						className={s.loadBtn}
						size='m'
					>
						Смотреть все сборы
					</Button>
				) : null}
			</div>
		</div>
	);
};
