import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { cropText } from '@/shared/lib';
import { Badge, Button, Fancybox, Image, LinkIcon, StarIcon, Swiper } from '@/shared/ui';

import s from './collecting-card.module.scss';

interface ICollectingCard {
	className?: string;
	title: string;
	sum?: string | number;
	total?: string | number;
	date?: string;
	imgs: string[];
	badge: ReactElement | string;
	userImg?: string;
	userName?: string;
	userDate?: string;
	size?: string;
	badgeColor?: 'gold' | 'purple';
	isPopular?: boolean;
	hasLink?: boolean;
}

export const CollectingCard: FC<ICollectingCard> = ({
	title,
	sum,
	total,
	className,
	date,
	imgs,
	badge,
	userImg,
	userName,
	userDate,
	size = 's',
	badgeColor = 'purple',
	isPopular = false,
	hasLink = false
}) => {
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
	useEffect(() => {
		alert('popular');
	}, [isPopular]);

	const collectingCardClass = clsx(s.collectingCard, s[size], className);
	const badgeClass = clsx(s.badge, s[badgeColor]);

	return (
		<div className={collectingCardClass}>
			{userImg && userName ? (
				<div className={s.collectingCardTop}>
					<div className={s.user}>
						<img src={userImg} alt='' />
						<div className={s.userInfo}>
							<p>{userName}</p>
							<span>{userDate}</span>
						</div>
					</div>
					<div className={s.features}></div>
					{hasLink ? (
						<Button variant='clear'>
							<LinkIcon />
						</Button>
					) : null}

					<Button variant='clear'>
						<StarIcon />
					</Button>
				</div>
			) : null}

			<div className={s.collectingCardCenter}>
				<div className={s.collectingCardCenterInfo}>
					<Badge className={badgeClass}>{badge}</Badge>
					{isPopular ? (
						<Badge color='green' size='m' className={s.popular}>
							Популярный сбор
						</Badge>
					) : null}

					<span className={s.date}>{date}</span>
				</div>
				<Fancybox>
					<Swiper
						onSwiper={swiper => {
							if (!swiper) {
								setSwiper(swiper);
							}
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
									fancybox='collecting'
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div ref={pagination}></div>
				</Fancybox>
			</div>
			<div className={s.collectingCardBottom}>
				<a href='#' className={s.collectingCardBottomContent}>
					<p className={s.title}>{cropText(title, 52)}</p>
					{total && sum ? (
						<>
							<div className={s.donationLine}>
								<div className={s.line}></div>
							</div>
							<div className={s.donationInfo}>
								<div className={s.sum}>
									<p>{sum} ₽</p>
									<span>Сумма сбора</span>
								</div>
								<div className={s.total}>
									<p>{total} ₽</p>
									<span>Осталось</span>
								</div>
							</div>
						</>
					) : null}
				</a>
				{total && sum ? <Button variant='primary'>Завершить</Button> : null}
			</div>
		</div>
	);
};
