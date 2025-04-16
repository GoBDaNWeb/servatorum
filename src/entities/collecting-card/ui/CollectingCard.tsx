import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { PATH_PAGE } from '@/shared/config';
import { cropLink, cropText } from '@/shared/lib';
import { Badge, Button, Fancybox, Image, LinkIcon, StarIcon, Swiper } from '@/shared/ui';

import s from './collecting-card.module.scss';
import './collecting-card.scss';

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
	buttonText?: string;
	donationInfo?: ReactElement;
	openDonationModal?: () => void;
	type?: 'row' | 'default';
	isFavourites?: boolean;
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
	hasLink = false,
	buttonText = 'Помочь',
	donationInfo,
	openDonationModal,
	type = 'default',
	isFavourites
}) => {
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

	const classes = {
		collectingCardClass: clsx(
			s.collectingCard,
			'collection-card',
			type,
			s[size],
			s[type],
			className
		),
		badgeClass: clsx(s.badge, s[badgeColor]),
		swiperClass: clsx(s.collectingSwiper, 'collection-swiper'),
		favorButtonClass: clsx(s.favorButton, {
			[s.favor]: isFavourites
		})
	};

	return (
		<div className={classes.collectingCardClass} onMouseLeave={() => handleSetActiveSlide(0)}>
			{userImg && userName ? (
				<div className={s.collectingCardTop}>
					<div className={s.user}>
						<img src={userImg} alt='' />
						<div className={s.userInfo}>
							<p>{userName}</p>
							<span>{userDate}</span>
						</div>
					</div>
					<div className={s.features}>
						{hasLink ? (
							<Button variant='clear'>
								<LinkIcon />
							</Button>
						) : null}

						<Button variant='clear' className={classes.favorButtonClass}>
							<StarIcon />
						</Button>
					</div>
				</div>
			) : null}

			<div className={s.collectingCardCenter}>
				<div className={s.collectingCardCenterInfo}>
					<Badge className={classes.badgeClass}>{badge}</Badge>
					{isPopular ? (
						<Badge color='green' size='m' className={s.popular}>
							Популярный сбор
						</Badge>
					) : null}

					<span className={s.date}>{date}</span>
				</div>
				<Fancybox className={s.swiperWrapper}>
					<Swiper
						onSwiper={swiper => {
							setSwiper(swiper);
						}}
						effect='fade'
						slidesPerView={1}
						modules={[Pagination, EffectFade]}
						pagination={{
							el: pagination.current,
							clickable: true
						}}
						className={classes.swiperClass}
					>
						{imgs.map((img, index) => (
							<SwiperSlide key={index} className={s.slide}>
								<Image paddingBottom='71%' src={img} alt='slide' className={s.image} />
							</SwiperSlide>
						))}
					</Swiper>
					<div ref={pagination} className={s.pagination}></div>
					<div className={s.hideLines}>
						{imgs.map((img, index) => (
							<a
								key={index}
								onMouseEnter={() => handleSetActiveSlide(index)}
								data-fancybox='collecting'
								href={img}
							></a>
						))}
					</div>
				</Fancybox>
			</div>
			<div className={s.collectingCardBottom}>
				<NavLink to={cropLink(PATH_PAGE.collection, 10)}>
					<p className={s.title}>{cropText(title, 52)}</p>
				</NavLink>
				<div className={s.bottomContent}>
					<NavLink to={cropLink(PATH_PAGE.collection, 10)}>
						{total && sum ? <>{donationInfo}</> : null}
					</NavLink>

					{total && sum ? (
						<Button variant='primary' onClick={openDonationModal}>
							{buttonText}
						</Button>
					) : null}
				</div>
			</div>
		</div>
	);
};
