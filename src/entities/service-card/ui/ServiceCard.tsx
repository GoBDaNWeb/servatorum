import { Badge, Button, Image, StarIcon, useModal } from '@/shared/ui';

import s from './service-card.module.scss';

export const ServiceCard = () => {
	const { open } = useModal();

	const handleOpenServiceModal = () => {
		open('service');
	};
	return (
		<div className={s.serviceCard} onClick={handleOpenServiceModal}>
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
					<Button variant='clear' className={s.favorBtn}>
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
