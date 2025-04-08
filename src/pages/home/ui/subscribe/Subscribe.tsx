import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { SubscribeAlertCard } from '@/entities/subscribe-alert-card';

import { Button, Swiper } from '@/shared/ui';

import s from './subscribe.module.scss';

export const Subscribe = () => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);

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

	const subscribeInnerClass = clsx(s.subscribeInner, 'container');

	return (
		<div className={s.subscribe}>
			<div className={subscribeInnerClass}>
				<h2>Подписывайся на фонды</h2>
				<div className={s.subscribeContent}>
					<Swiper
						breakpoints={swiperBreakpoints}
						onSwiper={swiper => {
							setSwiper(swiper);
						}}
						onSlideChange={swiper => {
							setActiveSlideIndex(swiper.activeIndex + 1);
						}}
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
								<SubscribeAlertCard
									imgs={[
										'/images/home/donation/slide.jpg',
										'/images/home/donation/slide.jpg',
										'/images/home/donation/slide.jpg'
									]}
									logo='/images/home/subscribe/logo.png'
									title='Живая планета'
									tags={['Помощь детям', 'Помощь взрослым']}
									descr='Текст описания, не более двух строк. Возможно какой-то текст описания или перечисление.'
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div className={s.navigation}>
						<Button
							// @ts-ignore
							ref={prev}
							variant='circle'
						>
							<img src='/images/icons/arrow-left.svg' alt='arrow' />
						</Button>
						<div className={s.pagination}>
							<span>{activeSlideIndex}</span> / {swiper?.slides.length}
						</div>
						<Button
							// @ts-ignore
							ref={next}
							variant='circle'
						>
							<img src='/images/icons/arrow-right.svg' alt='arrow' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
