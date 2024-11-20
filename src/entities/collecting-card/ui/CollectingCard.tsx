import { FC, ReactElement, useEffect, useRef } from 'react';

import clsx from 'clsx';

import { cropText } from '@/shared/lib';
import { Badge, Button, Fancybox, Image, LinkIcon, StarIcon } from '@/shared/ui';

import s from './collecting-card.module.scss';

import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';

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
	const glideRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (glideRef.current) {
			new Glide(glideRef.current, {
				type: 'carousel',
				perView: 1,
				gap: 10,
				dragThreshold: 10,
				swipeThreshold: 80,
				touchRatio: 0.5,
				touchAngle: 45,
				animationDuration: 400,
				rewind: true,
				rewindDuration: 800,
				hoverpause: true,
				keyboard: true,
				bound: false,
				focusAt: 'center',
				startAt: 0
			}).mount();
		}
	}, []);

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
					<div ref={glideRef} className='glide'>
						<div className='glide__track' data-glide-el='track'>
							<ul className='glide__slides'>
								{imgs.map((img, index) => (
									<li className='glide__slide' key={index}>
										<Image
											paddingBottom='71%'
											src={img}
											alt='slide'
											className={s.image}
											fancybox='collecting'
										/>
									</li>
								))}
							</ul>
						</div>
						<div className='glide__bullets' data-glide-el='controls[nav]'>
							{imgs.map((_, index) => (
								<button key={index} className='glide__bullet' data-glide-dir={`=${index}`}></button>
							))}
						</div>
					</div>
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
