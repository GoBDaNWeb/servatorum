import { FC } from 'react';

import clsx from 'clsx';

import { Button, Image, LinkIcon, useModal } from '@/shared/ui';

import s from './news-card-alert.module.scss';

interface INewsCard {
	className?: string;
	img: string;
	date: string;
	title: string;
	views: string;
	size?: 'default' | 'small';
}

export const NewsCardAlert: FC<INewsCard> = ({
	className,
	img,
	date,
	title,
	views,
	size = 'default'
}) => {
	const { open } = useModal();

	const hadleOpenNewsModal = () => {
		open('news');
	};

	const newsCardClass = clsx(s.newsCardAlert, className, s[size]);

	return (
		<div onClick={hadleOpenNewsModal} className={newsCardClass}>
			<Image paddingBottom='51%' src={img} alt='news' className={s.image} />
			<div className={s.newsCardContent}>
				<span>{date}</span>
				<p>{title}</p>
				<div className={s.newsCardContentInfo}>
					<div className={s.views}>
						<img src='/images/icons/eye.svg' alt='eye' />
						<span>{views}</span>
					</div>
					<Button variant='clear' className={s.linkBtn} ariaLabel='Скопировать ссылку'>
						<LinkIcon />
					</Button>
				</div>
			</div>
		</div>
	);
};
