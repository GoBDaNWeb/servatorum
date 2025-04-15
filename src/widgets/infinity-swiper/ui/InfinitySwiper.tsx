import { FC, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import s from './infinity-swiper.module.scss';
import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { PATH_PAGE } from '@/shared/config';
import { Button, NextOutlineArrow, Swiper } from '@/shared/ui';

interface IInfinitySwiper {
	title: string;
	titleSize?: 'm' | 'l';
	hasLinkBtn?: boolean;
	topLink?: boolean;
	href?: string;
}

export const InfinitySwiper: FC<PropsWithChildren<IInfinitySwiper>> = ({
	title,
	titleSize = 'm',
	hasLinkBtn,
	children,
	topLink,
	href
}) => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const [activeSlideIndex, setActiveSlideIndex] = useState<number>(1);

	const prev = useRef<HTMLButtonElement>(null);
	const next = useRef<HTMLButtonElement>(null);

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

	const infinitySwiperInnerClass = clsx(s.infinitySwiperInner, 'container');
	const titleClass = clsx(s.title, s[titleSize]);

	return (
		<div className={s.infinitySwiper}>
			<div className={infinitySwiperInnerClass}>
				<div className={s.top}>
					<h2 className={titleClass}>{title}</h2>
					{topLink ? (
						<Button
							variant='text'
							color='purple'
							className={s.linkBtn}
							onClick={() => href && navigate(href)}
						>
							Смотреть все
							<NextOutlineArrow />
						</Button>
					) : null}
				</div>
				<div className={s.infinitySwiperContent}>
					<Swiper
						onSlideChange={swiper => {
							setActiveSlideIndex(swiper.activeIndex + 1);
						}}
						onSwiper={swiper => {
							setSwiper(swiper);
							swiper.slideTo(4);
						}}
						breakpoints={swiperBreakpoints}
						slidesPerView={4}
						spaceBetween={30}
						modules={[Navigation]}
						navigation={{
							prevEl: prev.current,
							nextEl: next.current
						}}
						loop
					>
						{children}
					</Swiper>
					<div className={s.navigation}>
						<Button ref={prev} variant='square' size='s' color='purple'>
							<img src='/images/icons/arrow-left.svg' alt='arrow' />
						</Button>
						<div className={s.pagination}>
							<span>{activeSlideIndex}</span> / {swiper?.slides.length}
						</div>
						<Button ref={next} variant='square' size='s' color='purple'>
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
