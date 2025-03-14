import clsx from 'clsx';

import { badges } from '@/pages/home/config';

import { FondCard } from '@/entities/fond-card';
import { NewsCard } from '@/entities/news-card';

import { Button, Image } from '@/shared/ui';

import s from './hero.module.scss';

const heroClass = clsx(s.hero, 'container');

export const Hero = () => {
	return (
		<div className={heroClass}>
			<div className={s.textBlock}>
				<h2>Servatorum</h2>
				<p>Инновационная платформа для тех, кто:</p>
				<ul className='list'>
					<li>ищет поддержку</li>
					<li>желает помочь</li>
					<li>хочет заявить о себе</li>
				</ul>
				<div className={s.btns}>
					<Button variant='primary' size='m'>
						Начать помогать
					</Button>
					<Button variant='secondary' size='m'>
						Попросить помощь
					</Button>
				</div>
			</div>
			<div className={s.imageBlock}>
				<div className={s.imageBlockContent}>
					<Image paddingBottom='65%' src='/images/home/hero/bg.jpg' alt='bg' />
					<NewsCard
						className={s.news}
						img='/images/home/hero/cat.jpg'
						date='22.07.2023'
						title='Корм для животных в рамках акции “Не все равно”'
						views='999'
						href='#'
					/>
					<FondCard
						title='Свет Будущего'
						statusBadge='Новый'
						badges={badges}
						img='/images/home/hero/fond.jpg'
						className={s.fond}
					/>
					<Image
						paddingBottom='65%'
						src='/images/home/hero/phone.png'
						alt='phone'
						className={s.phone}
					/>
				</div>
				<div className={s.links}>
					<Button variant='secondary' isLink href='#' size='l'>
						<img src='/images/icons/app-store.svg' alt='' />
					</Button>
					<Button variant='secondary' isLink href='#' size='l'>
						<img src='/images/icons/google-store.svg' alt='' />
					</Button>
				</div>
			</div>
		</div>
	);
};
