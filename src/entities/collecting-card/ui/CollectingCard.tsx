import { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { Pagination, Virtual } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { PATH_PAGE } from '@/shared/config';
import { cropLink, cropText } from '@/shared/lib';
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
	buttonText?: string;
	donationInfo?: ReactElement;
	openDonationModal?: () => void;
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
	openDonationModal
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

	const collectingCardClass = clsx(s.collectingCard, 'collection-card', s[size], className);
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
					<div className={s.features}>
						{hasLink ? (
							<Button variant='clear'>
								<LinkIcon />
							</Button>
						) : null}

						<Button variant='clear'>
							<StarIcon />
						</Button>
					</div>
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
				<Fancybox className={s.swiperWrapper}>
					<Swiper
						onSwiper={swiper => {
							setSwiper(swiper);
						}}
						slidesPerView={1}
						modules={[Pagination, Virtual]}
						pagination={{
							el: pagination.current,
							clickable: true
						}}
						virtual
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
				<NavLink to={cropLink(PATH_PAGE.collection, 10)} className={s.collectingCardBottomContent}>
					<p className={s.title}>{cropText(title, 52)}</p>
					{total && sum ? <>{donationInfo}</> : null}
				</NavLink>
				{total && sum ? (
					<Button variant='primary' onClick={openDonationModal}>
						{buttonText}
					</Button>
				) : null}
			</div>
		</div>
	);
};
