import { FC } from 'react';

import { Badge, Button, Image, LinkIcon, StarIcon, useModal } from '@/shared/ui';

import s from './service-card.module.scss';

interface IServiceCard {
	hasAuthor?: boolean;
}

export const ServiceCard: FC<IServiceCard> = ({ hasAuthor }) => {
	const { open } = useModal();

	const handleOpenServiceModal = () => {
		open('service');
	};
	return (
		<div className={s.serviceCard} onClick={handleOpenServiceModal}>
			{hasAuthor ? (
				<div className={s.serviceCardTop}>
					<div className={s.user}>
						<Image className={s.image} src='/images/fond.jpg' alt='fond' isGradient />
						<div className={s.userInfo}>
							<p>Четыре лапы</p>
							<span>00.00.0000</span>
						</div>
					</div>
					<div className={s.features}>
						<Button variant='clear' ariaLabel='Скопировать ссылку'>
							<LinkIcon />
						</Button>

						<Button variant='clear' ariaLabel='Добавить в избранное'>
							<StarIcon />
						</Button>
					</div>
				</div>
			) : null}

			<div className={s.imageWrapper}>
				<Badge size='m' color='green' className={s.badge}>
					Новая
				</Badge>
				<Image
					paddingBottom='62%'
					src='/images/service/img.jpg'
					alt='service'
					className={s.image}
				/>
			</div>
			<div className={s.content}>
				<div className={s.top}>
					<p className={s.price}>10 000 ₽</p>
					<Button variant='clear' className={s.favorBtn} ariaLabel='Добавить в избранное'>
						<StarIcon />
					</Button>
				</div>
				<p className={s.title}>
					Изготовление металлоконструкций металлокаркасов пример длинного заголовка услуги
				</p>
				<div className={s.info}>
					<p className={s.date}>12 августа · 15:42 </p>
					<p className={s.rating}>
						<StarIcon />
						4,5
					</p>
				</div>
			</div>
		</div>
	);
};
