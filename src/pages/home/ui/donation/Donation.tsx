import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { CollectingCard } from '@/entities/collecting-card';

import { Button, Swiper } from '@/shared/ui';

import s from './donation.module.scss';

export const Donation = () => {
	const [swiper, setSwiper] = useState<SwiperType>();
	// const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);

	const prev = useRef<HTMLDivElement>(null);
	const next = useRef<HTMLDivElement>(null);

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

	const donationInnerClass = clsx(s.donationInner, 'container');

	return (
		<div className={s.donation}>
			<div className={donationInnerClass}>
				<h2>Находи и поддерживай сборы</h2>
				<div className={s.donationContent}>
					<Swiper
						// onSlideChange={swiper => {
						// 	setActiveSlideIndex(swiper.activeIndex + 1);
						// }}
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
											<img src='/images/clock-gold.svg' alt='' />
											<span>31 день</span>
											<p>до завершения</p>
										</>
									}
									isPopular
									hasLink
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
							<img src='/images/arrow-left.svg' alt='arrow' />
						</Button>
						{/* <div className={s.pagination}>
							<span>{activeSlideIndex}</span> / {swiper?.slides.length}
						</div> */}
						<Button
							//@ts-expect-error исправить
							ref={next}
							variant='circle'
						>
							<img src='/images/arrow-right.svg' alt='arrow' />
						</Button>
					</div>
				</div>
				<Button variant='outline' className={s.loadBtn} size='m'>
					Смотреть все сборы
				</Button>
			</div>
		</div>
	);
};
