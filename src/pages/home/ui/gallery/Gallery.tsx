import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { Button, Fancybox, Image, Swiper } from '@/shared/ui';

import s from './gallery.module.scss';

const galleryRow1 = [
	'/images/home/gallery/1.jpg',
	'/images/home/gallery/2.jpg',
	'/images/home/gallery/3.jpg'
];
const galleryRow2 = [
	'/images/home/gallery/4.jpg',
	'/images/home/gallery/5.jpg',
	'/images/home/gallery/6.jpg'
];

export const Gallery = () => {
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

	const swiperWrapperClass = clsx(s.swiperWrapper, 'container');

	return (
		<div className={s.gallery}>
			<h2 className='container'>
				<span>SERVATORUM</span>— делаем благотворитель&shy;ность проще
			</h2>
			<Fancybox className={s.galleryContent}>
				<div className={s.galleryRow}>
					{[...galleryRow1, ...galleryRow1].map((galleryItem, index) => (
						<Image
							key={index}
							paddingBottom='17%'
							src={galleryItem}
							alt='gallery'
							fancybox='gallery'
							className={s.image}
						/>
					))}
				</div>
				<div className={s.galleryRow}>
					{[...galleryRow2, ...galleryRow2].map((galleryItem, index) => (
						<Image
							key={index}
							paddingBottom='17%'
							src={galleryItem}
							alt='gallery'
							fancybox='gallery'
							className={s.image}
						/>
					))}
				</div>
			</Fancybox>
			<Fancybox className={swiperWrapperClass}>
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
					{[...galleryRow1, ...galleryRow2].map((galleryItem, index) => (
						<SwiperSlide key={index}>
							<Image
								key={index}
								paddingBottom='75%'
								src={galleryItem}
								alt='gallery'
								fancybox='gallery'
								className={s.image}
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
			</Fancybox>
		</div>
	);
};
