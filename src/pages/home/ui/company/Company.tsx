import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { Button, Fancybox, Image, Swiper } from '@/shared/ui';

import s from './company.module.scss';

export const Company = () => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);

	const prev = useRef<HTMLButtonElement>(null);
	const next = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (swiper && prev.current && next.current) {
			swiper.navigation.destroy(); // Удаляем предыдущую навигацию, если она была
			swiper.navigation.init(); // Инициализируем новую навигацию
			swiper.navigation.update(); // Обновляем навигацию
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

	const companyInnerClass = clsx(s.companyInner, 'container');

	return (
		<div className={s.company}>
			<div className={companyInnerClass}>
				<h2>
					Компании <span>с нами</span>
				</h2>
				<div className={s.companyContent}>
					<Fancybox>
						<Swiper
							breakpoints={swiperBreakpoints}
							onSlideChange={swiper => {
								setActiveSlideIndex(swiper.activeIndex + 1);
							}}
							onSwiper={swiper => {
								setSwiper(swiper);
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
									<Image
										paddingBottom='166%'
										src='/images/home/company/phone.png'
										alt='phone'
										fancybox='company'
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</Fancybox>

					<div className={s.navigation}>
						<Button ref={prev} variant='circle'>
							<img src='/images/icons/arrow-left.svg' alt='arrow' />
						</Button>
						<div className={s.pagination}>
							<span>{activeSlideIndex}</span> / {swiper?.slides.length}
						</div>
						<Button ref={next} variant='circle'>
							<img src='/images/icons/arrow-right.svg' alt='arrow' />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
