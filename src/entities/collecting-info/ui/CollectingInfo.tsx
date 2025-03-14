import { Button, LinkIcon, StarIcon } from '@/shared/ui';

import s from './collecting-info.module.scss';

export const CollectingInfo = () => {
	return (
		<div className={s.collectingInfo}>
			<div className={s.collectingInfoTop}>
				<p>ID 24124</p>
				<div className={s.features}>
					<Button variant='clear'>
						<LinkIcon />
					</Button>
					<Button variant='clear'>
						<StarIcon />
					</Button>
				</div>
			</div>
			<div className={s.collectingInfoCenter}>
				<div className={s.fond}>
					<div className={s.imageWrapper}>
						<img src='/images/fond.jpg' alt='photo' />
					</div>
					<div className={s.fondInfo}>
						<span>Фонд</span>
						<p>Четыре лапы</p>
					</div>
				</div>
				<div className={s.donationLine}>
					<div className={s.line}></div>
				</div>
				<div className={s.donationInfo}>
					<div className={s.sum}>
						<p>300 000 ₽</p>
						<span>Сумма сбора</span>
					</div>
					<div className={s.total}>
						<p>12 000 ₽</p>
						<span>Осталось</span>
					</div>
				</div>
				<Button variant='primary'>Помочь</Button>
				<div className={s.time}>
					<img src='/images/icons/clock-gold.svg' alt='' />
					<span>31 день</span>
					<p>до завершения</p>
				</div>
			</div>
		</div>
	);
};
