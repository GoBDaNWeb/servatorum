import { FC } from 'react';

import clsx from 'clsx';

import { Badge, Button, Image, LinkIcon } from '@/shared/ui';

import s from './news-card.module.scss';

interface INewsCard {
	img: string;
	isOwn?: boolean;
	isDraft?: boolean;
}

export const NewsCard: FC<INewsCard> = ({ img, isOwn, isDraft }) => {
	const newsCardClass = clsx(s.newsCard, {
		[s.own]: isOwn
	});

	return (
		<div className={newsCardClass}>
			{!isOwn && (
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
			)}

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
						{!isDraft ? (
							<Button variant='clear' className={s.linkBtn}>
								<LinkIcon />
							</Button>
						) : (
							<Button variant='default' color='purple' size='s' className={s.editBtn}>
								Редактировать
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
