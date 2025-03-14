import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { Navigation } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { directions, helpList } from '@/pages/home/config';

import { HelpCard } from '@/entities/help-card';

import { Button, Swiper } from '@/shared/ui';
import { Badge, Image } from '@/shared/ui';

import s from './info.module.scss';

export const Info = () => {
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

	const helperSwiperBreakpoints = {
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

	const infoInnerClass = clsx(s.infoInner, 'container');
	const helpListClass = clsx(s.helpList, 'helpListSwiperWrapper');

	return (
		<div className={s.info} id='directions'>
			<div className={infoInnerClass}>
				<div className={s.directions}>
					<h2>Наши направления</h2>
					<div className={s.directionsList}>
						{directions.map(direction => (
							<Badge key={direction.title} size='xl' color='white' className={s.direction}>
								<img src={direction.img} alt='direction' />
								<p>{direction.title}</p>
							</Badge>
						))}
					</div>
				</div>
				<div className={s.help}>
					<h2>Как можно помочь</h2>
					<div className={helpListClass}>
						<Swiper
							onSwiper={swiper => {
								setSwiper(swiper);
							}}
							onSlideChange={swiper => {
								setActiveSlideIndex(swiper.activeIndex + 1);
							}}
							slidesPerView={4}
							spaceBetween={30}
							breakpoints={helperSwiperBreakpoints}
							modules={[Navigation]}
							navigation={{
								prevEl: prev.current,
								nextEl: next.current
							}}
						>
							{helpList.map(help => (
								<SwiperSlide key={help.title}>
									<HelpCard img={help.img} title={help.title} isDisabled={help.disabled} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className={s.naviagtion}>
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
				<Image paddingBottom='37%' src='/images/home/info/bg.jpg' alt='bg' className={s.bgImage} />
			</div>
		</div>
	);
};
