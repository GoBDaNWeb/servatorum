import { FC, useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { Badge, Button, Fancybox, Image, Swiper, useModal } from '@/shared/ui';

import s from './request-card.module.scss';
import './request-card.scss';

interface IRequestCard {
	imgs: string[];
	status: 'carpet' | 'publish' | 'complete' | 'reject' | 'draft';
}

export const RequestCard: FC<IRequestCard> = ({ imgs, status }) => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const pagination = useRef<HTMLDivElement>(null);

	const { open } = useModal();

	const handleOpenDetailsModal = () => {
		open('details');
	};

	const statusConfig = {
		carpet: {
			title: 'На рассмотрении',
			color: 'purple' as 'purple',
			icon: '/images/icons/clock.svg'
		},
		publish: { title: 'Опубликован', color: 'green' as 'green', icon: '/images/icons/success.svg' },
		complete: {
			title: 'Сбор завершен',
			color: 'green' as 'green',
			icon: '/images/icons/success.svg'
		},
		reject: { title: 'Отказано', color: 'red' as 'red', icon: '/images/icons/reject.svg' },
		draft: { title: 'Черновик', color: 'gray' as 'gray', icon: '/images/icons/dot.svg' }
	};

	useEffect(() => {
		if (swiper && pagination.current) {
			swiper.pagination.destroy();
			swiper.pagination.init();
			swiper.pagination.render();
			swiper.pagination.update();
		}
	}, [swiper]);

	return (
		<div className={clsx(s.requestCard, 'request-card')}>
			<Fancybox className={s.swiperWrapper} onMouseLeave={() => swiper?.slideTo(0)}>
				<Swiper
					onSwiper={setSwiper}
					effect='fade'
					slidesPerView={1}
					modules={[Pagination, EffectFade]}
					pagination={{
						el: pagination.current,
						clickable: true
					}}
					className={clsx(s.requestSwiper, 'request-swiper')}
				>
					{imgs.map((img, index) => (
						<SwiperSlide key={index} className={s.slide}>
							<Image paddingBottom='71%' src={img} alt='slide' className={s.image} />
						</SwiperSlide>
					))}
				</Swiper>
				<div ref={pagination} className={s.pagination} />
				<div className={s.hideLines}>
					{imgs.map((img, index) => (
						<a
							key={index}
							onMouseEnter={() => swiper?.slideTo(index)}
							data-fancybox='collecting'
							href={img}
						/>
					))}
				</div>
			</Fancybox>
			<div className={s.content}>
				<div className={s.mainInfo}>
					<div className={s.top}>
						<div className={s.titleWrapper}>
							<p className={s.orderId}>Заявка №2345325</p>
							<p className={s.date}>22.07.2023</p>
						</div>
						<div className={s.status}>
							<Badge
								variant='clear'
								color={statusConfig[status].color}
								size='m'
								className={s.badge}
							>
								<img src={statusConfig[status].icon} alt='status' />
								{statusConfig[status].title}
							</Badge>
						</div>
					</div>
					<div className={s.bottom}>
						<p className={s.title}>Лапы Надежды: Вместе за защиту бездомных котов</p>
						<p className={s.descr}>
							Собакам и кошкам из приюта требуется ваша нежность и поддержка! Подарите им шанс на
							новую жизнь, наполненную любовью и заботой. Ваше пожертвование поможет обеспечить им
							достойное питание, медицинскую помощь и уютное пристанище. Вместе мы можем сделать
							разницу в их будущем. Присоединяйтесь к нашему благотворительному сбору и создайте
							лучший мир для этих четвероногих друзей!
						</p>
					</div>
				</div>
				<div className={s.subInfo}>
					{status === 'carpet' && (
						<Button variant='default' color='purple'>
							Подробнее
						</Button>
					)}
					{status === 'reject' && (
						<div className={s.btns}>
							<Button
								variant='text'
								color='purple'
								className={s.details}
								onClick={handleOpenDetailsModal}
							>
								<img src='/images/icons/alert.svg' alt='alert' />
								Детали отказа
							</Button>
							<Button variant='default' color='purple'>
								Редактировать
							</Button>
						</div>
					)}
					{status === 'draft' && (
						<div className={s.draftInfoWrapper}>
							<div className={s.draftInfo}>
								<div className={s.draftInfoItem}>Укажите категорию сбора</div>
								<div className={s.draftInfoItem}>Добавьте фото</div>
								<div className={s.draftInfoItem}>Добавьте документы</div>
							</div>
							<div className={s.draftBtns}>
								<Button variant='default' color='purple'>
									Удалить
								</Button>
								<Button variant='primary' color='purple'>
									Изменить
								</Button>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
