import { FC } from 'react';

import { Badge, Button, Image, LinkIcon } from '@/shared/ui';

import s from './news-card.module.scss';

interface INewsCard {
	img: string;
}

export const NewsCard: FC<INewsCard> = ({ img }) => {
	return (
		<div className={s.newsCard}>
			<div className={s.top}>
				<div className={s.newsInfo}>
					<img src={img} alt='news' />
					<div className={s.text}>
						<p className={s.title}>Помощь животным</p>
						<p className={s.date}>19.06.2023</p>
					</div>
				</div>
				<Badge color='green' size='m'>
					Популярная новость
				</Badge>
			</div>
			<div className={s.contentWrapper}>
				<Image paddingBottom='56%' src='/images/profile/img.jpeg' alt='news' className={s.image} />
				<div className={s.content}>
					<div className={s.text}>
						<p className={s.date}>22.07.2023</p>
						<p className={s.title}>
							Кошачьему приюту необходимо оборудование которое позволит содержать животных в чистоте
							и комфорте.
						</p>
					</div>

					<div className={s.features}>
						<div className={s.views}>
							<img src='/images/icons/eye.svg' alt='eye' />
							<span>999</span>
						</div>
						<Button variant='clear' className={s.linkBtn}>
							<LinkIcon />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
