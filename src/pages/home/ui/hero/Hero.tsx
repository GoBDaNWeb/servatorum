import clsx from 'clsx';

import { badges } from '@/pages/home/config';

import { FondCardAlert } from '@/entities/fond-card-alert';
import { NewsCardAlert } from '@/entities/news-card-alert';

import { useTypedSelector } from '@/shared/lib';
import { Button, Image, useModal } from '@/shared/ui';

import s from './hero.module.scss';

const heroClass = clsx(s.hero, 'container');

export const Hero = () => {
	const { open } = useModal();

	const { userData } = useTypedSelector(store => store.user);

	const handleOpenRegisterModal = () => {
		open('register');
	};

	const handleOpenCreateRequestModal = () => {
		if (userData) {
			open('create-request');
		} else {
			open('register');
		}
	};

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
					<Button variant='primary' size='m' onClick={handleOpenRegisterModal}>
						Начать помогать
					</Button>
					<Button variant='secondary' size='m' onClick={handleOpenCreateRequestModal}>
						Попросить помощь
					</Button>
				</div>
			</div>
			<div className={s.imageBlock}>
				<div className={s.imageBlockContent}>
					<Image paddingBottom='65%' src='/images/home/hero/bg.jpg' alt='bg' />
					<NewsCardAlert
						className={s.news}
						img='/images/home/hero/cat.jpg'
						date='22.07.2023'
						title='Корм для животных в рамках акции “Не все равно”'
						views='999'
					/>
					<FondCardAlert
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
					<Button variant='secondary' isLink href='#' size='l' ariaLabel='Скачать с AppStore'>
						<img src='/images/icons/app-store.svg' alt='' />
					</Button>
					<Button variant='secondary' isLink href='#' size='l' ariaLabel='Скачать с GooglePlay'>
						<img src='/images/icons/google-store.svg' alt='' />
					</Button>
				</div>
			</div>
		</div>
	);
};
