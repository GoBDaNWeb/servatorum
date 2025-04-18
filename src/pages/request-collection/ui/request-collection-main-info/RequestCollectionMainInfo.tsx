import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { Badge, Fancybox, Image, Swiper } from '@/shared/ui';

import s from './request-collection-main-info.module.scss';
import './request-collection-main-info.scss';

export const RequestCollectionMainInfo = () => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const pagination = useRef<HTMLDivElement>(null);
	const handleSetActiveSlide = (index: number) => {
		swiper?.slideTo(index);
	};
	useEffect(() => {
		if (swiper && pagination.current) {
			swiper.pagination.destroy(); // Удаляем предыдущую пагинацию, если она была
			swiper.pagination.init(); // Инициализируем новую пагинацию
			swiper.pagination.render(); // Рендерим пагинацию
			swiper.pagination.update(); // Обновляем пагинацию
		}
	}, [swiper]);

	const collectionMainInfoClass = clsx(s.requestCollectionMainInfo, 'request-collection-main-info');

	return (
		<div className={collectionMainInfoClass}>
			<div className={s.collectionTop}>
				<Fancybox className={s.swiperWrapper}>
					<Swiper
						onSwiper={swiper => {
							setSwiper(swiper);
						}}
						slidesPerView={1}
						modules={[Pagination, EffectFade]}
						effect='fade'
						pagination={{
							el: pagination.current,
							clickable: true
						}}
					>
						{[
							'/images/home/donation/slide.jpg',
							'/images/home/donation/slide2.jpg',
							'/images/home/donation/slide3.jpg'
						].map((img, index) => (
							<SwiperSlide key={index} className={s.slide}>
								<Image paddingBottom='75%' src={img} alt='slide' className={s.image} />
							</SwiperSlide>
						))}
					</Swiper>
					<div ref={pagination}></div>
					<div className={s.hideLines}>
						{[...Array(3)].map((_, index) => (
							<a
								key={index}
								onMouseEnter={() => handleSetActiveSlide(index)}
								data-fancybox='collecting'
								href='/images/home/donation/slide.jpg'
							></a>
						))}
					</div>
				</Fancybox>
				<div className={s.collectionTopInfo}>
					<Badge color='green' variant='secondary' size='m' className={s.popular}>
						<img src='/images/icons/success.svg' alt='success' />
						Опубликован
					</Badge>
					<p className={s.title}>
						Кошачьему приюту необходимо оборудование которое позволит содержать животных в чистоте и
						комфорте
					</p>
				</div>
			</div>
			<div className={s.collectionContent}>
				<div className={s.textWrapper}>
					<p className={s.descr}>
						Наш благотворительный фонд "Помощь животным" посвящен заботе и поддержке кошек и собак.
						Мы стремимся создать лучшую жизнь для бездомных животных и помочь им найти любящие и
						заботливые дома. В "Помощь животным" мы предлагаем широкий спектр услуг и программ,
						включая пристройство, медицинскую помощь, реабилитацию и социализацию бездомных кошек и
						собак.
					</p>
					<p className={s.descr}>
						С "Помощь животным" вы можете быть уверены, что ваше пожертвование и участие направлены
						на реальную помощь и изменение жизней незащищенных животных. Мы верим в любовь и заботу
						о кошках и собаках и стремимся создать мир, где каждое животное может найти свой дом и
						быть окруженным заботой и счастьем.
					</p>
				</div>
			</div>
		</div>
	);
};
