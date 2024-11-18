import { FC, useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { Fancybox, Image, Swiper } from '@/shared/ui';

import s from './subscribe-card.module.scss';

interface ISubscribeCard {
	imgs: string[];
	logo: string;
	title: string;
	tags: string[];
	descr: string;
}

export const SubscribeCard: FC<ISubscribeCard> = ({ imgs, logo, title, tags, descr }) => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const pagination = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (swiper && pagination.current) {
			swiper.pagination.destroy(); // Удаляем предыдущую пагинацию, если она была
			swiper.pagination.init(); // Инициализируем новую пагинацию
			swiper.pagination.render(); // Рендерим пагинацию
			swiper.pagination.update(); // Обновляем пагинацию
		}
	}, [swiper]);

	const subscribeClass = clsx(s.subscribeCard);

	return (
		<div className={subscribeClass}>
			<div className={s.imageBlock}>
				<div className={s.logo}>
					<img src={logo} alt='logo' />
				</div>
				<Fancybox className={s.swiperWrapper}>
					<Swiper
						onSwiper={swiper => {
							setSwiper(swiper);
						}}
						slidesPerView={1}
						modules={[Pagination]}
						pagination={{
							el: pagination.current,
							clickable: true
						}}
					>
						{imgs.map((img, index) => (
							<SwiperSlide key={index}>
								<Image
									paddingBottom='71%'
									src={img}
									alt='slide'
									className={s.image}
									fancybox='subscribe'
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div ref={pagination}></div>
				</Fancybox>
			</div>
			<div className={s.subscribeContent}>
				<p className={s.title}>{title}</p>
				<div className={s.tags}>
					{tags.map(tag => (
						<p key={tag} className={s.tag}>
							{tag}
						</p>
					))}
				</div>
				<p className={s.descr}>{descr}</p>
			</div>
		</div>
	);
};
