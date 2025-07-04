import clsx from 'clsx';

import { DonationInfo } from '@/features/donation-info';

import { CollectingCard } from '@/entities/collecting-card';
import { RequestAlertCard } from '@/entities/request-alert-card';

import { Image, useModal } from '@/shared/ui';

import s from './about.module.scss';

export const About = () => {
	const { open } = useModal();

	const handleOpenDonationModal = () => {
		open('donation');
	};

	const aboutClass = clsx(s.about, 'container');

	return (
		<div className={aboutClass} id='about'>
			<h2>О сервисе</h2>
			<div className={s.aboutContent}>
				<div className={s.imageBlock}>
					<Image paddingBottom='65%' src='/images/home/about/bg.jpg' alt='bg' />
					<RequestAlertCard
						order='Заявка №2424255'
						title='Лапы Надежды: Вместе за защиту бездомных котов'
						date='21.07.2023'
						descr='Собакам и кошкам из приюта требуется ваша нежность и поддержка! Подарите им шанс на новую жизнь, наполненную любовью и заботой. Ваше пожертвование поможет обеспечить им достойное питание, медицинскую помощь и уютное пристанище. Вместе мы можем сделать разницу в их будущем. Присоединяйтесь к нашему благотворительному сбору и создайте лучший мир для этих четвероногих друзей!'
						img='/images/home/about/dog.jpg'
						className={s.request}
					/>
					<CollectingCard
						title='Благотворительный фонд "Лапки и Хвостики" объявляет о запуске сбора пожертвований для помощи бездомным кошкам и собакам. Наша цель - обеспечить тепло, заботу и медицинскую помощь этим беспризорникам, а также поиск им новых заботливых хозяев'
						sum='0'
						total='100 000'
						className={s.collecting}
						date='18.11.2023'
						imgs={[
							'/images/home/about/swipe.jpg',
							'/images/home/about/swipe.jpg',
							'/images/home/about/swipe.jpg'
						]}
						badge={
							<>
								<img src='/images/icons/clock.svg' alt='' />
								<span>64 дня</span>
								<p>до завершения</p>
							</>
						}
						donationInfo={<DonationInfo size='sm' />}
						openDonationModal={handleOpenDonationModal}
					/>
					<Image
						paddingBottom='65%'
						src='/images/home/about/phone.png'
						alt='phone'
						className={s.phone}
					/>
				</div>
				<div className={s.textBlock}>
					<p className={s.title}>
						Наша миссия — сделать благотворительность доступней, объединив всех участников в удобном
						сервисе.
					</p>
					<div className={s.text}>
						<p>
							Реализуем миссию через онлайн-платформу, которая собирает всех участников
							благотворительности в одном месте и упрощает коммуникацию.
						</p>
						<ul className='list'>
							<li>Благотворительные фонды</li>
							<li>Компании</li>
							<li>Закрытые сборы</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
