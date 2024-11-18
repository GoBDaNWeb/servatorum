import clsx from 'clsx';

import { advantages } from '@/pages/home/config';

import { AlertCard } from '@/entities/alert-card';
import { CollectingCard } from '@/entities/collecting-card';

import { Image } from '@/shared/ui';

import s from './advantages.module.scss';

export const Advantages = () => {
	const advantagesClass = clsx(s.advantages, 'container');

	return (
		<div className={advantagesClass}>
			<h2>Преимущества</h2>
			<div className={s.advantagesContent}>
				<div className={s.textblock}>
					<div className={s.advantageList}>
						{advantages.map(advantage => (
							<div className={s.advantageItem} key={advantage.title}>
								<img src={advantage.img} alt='advantage' />
								<div className={s.advantageItemContent}>
									<p>{advantage.title}</p>
									<ul className='list'>
										{advantage.list.map(item => (
											<li key={item}>{item}</li>
										))}
									</ul>
								</div>
							</div>
						))}
					</div>
				</div>
				<div className={s.imageBlock}>
					<Image paddingBottom='65%' src='/images/home/advantages/bg.jpg' alt='bg' />
					<Image
						paddingBottom='65%'
						src='/images/home/advantages/phone.png'
						alt='phone'
						className={s.phone}
					/>
					<AlertCard
						title='Вы подписаны на новости фонда'
						descr='Теперь сможете следить за актуальными новостями и деятельностью фонда. Управлять подписками на новости можно в вашем профиле'
						className={s.alert}
					/>
					<CollectingCard
						title='Кошачья и Собачья Забота: Дарим Любовь и Дом'
						className={s.collecting}
						imgs={['/images/home/advantages/slide.jpg']}
						badge='Просмотрено'
						userImg='/images/home/advantages/user.jpg'
						userName='Name-user'
						userDate='00.00.0000'
					/>
				</div>
			</div>
		</div>
	);
};
