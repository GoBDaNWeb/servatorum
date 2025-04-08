import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { EffectFade, Pagination } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { DonationInfo } from '@/features/donation-info';

import { CollectingCard } from '@/entities/collecting-card';
import { SponsorCard } from '@/entities/sponsor-card';

import { Button, CloseIcon, Fancybox, Image, LinkIcon, Modal, Swiper, useModal } from '@/shared/ui';

import s from './news-modal.module.scss';
import './news-modal.scss';

export const NewsModal = () => {
	const { open, close, currentModal } = useModal();

	const [swiper, setSwiper] = useState<SwiperType>();
	const pagination = useRef<HTMLDivElement>(null);

	const handleSetActiveSlide = (index: number) => {
		swiper?.slideTo(index);
	};

	const handleCloseModal = () => {
		close();
	};

	const handleOpenDonationModal = () => {
		handleCloseModal();
		open('donation');
	};

	useEffect(() => {
		if (swiper && pagination.current && swiper.pagination) {
			swiper.pagination.destroy(); // Удаляем предыдущую пагинацию, если она была
			swiper.pagination.init(); // Инициализируем новую пагинацию
			swiper.pagination.render(); // Рендерим пагинацию
			swiper.pagination.update(); // Обновляем пагинацию
		}
	}, [swiper]);

	const contentTop = (
		<>
			<Button className={clsx(s.closeBtn, 'closeBtn')} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal
			isOpen={currentModal === 'news'}
			close={handleCloseModal}
			className={s.newsModal}
			contentTop={contentTop}
			contentWrapperClassName={s.newsModalContentWrapper}
			contentClassName={s.newsModalContent}
		>
			<p className={s.title}>Корм для животных в рамках акции “Не все равно”</p>
			<div className={s.newsModalSwiperWrapper}>
				<Fancybox className={s.swiperWrapper}>
					<Swiper
						onSwiper={swiper => {
							setSwiper(swiper);
						}}
						effect='fade'
						slidesPerView={1}
						modules={[Pagination, EffectFade]}
						pagination={{
							el: pagination.current,
							clickable: true
						}}
						className={'news-modal-swiper'}
					>
						{[
							'/images/home/donation/slide.jpg',
							'/images/home/donation/slide2.jpg',
							'/images/home/donation/slide3.jpg'
						].map((img, index) => (
							<SwiperSlide key={index} className={s.slide}>
								<Image paddingBottom='78%' src={img} alt='slide' className={s.image} />
							</SwiperSlide>
						))}
					</Swiper>
					<div ref={pagination} className={s.pagination}></div>
					<div className={s.hideLines}>
						{[
							'/images/home/donation/slide.jpg',
							'/images/home/donation/slide2.jpg',
							'/images/home/donation/slide3.jpg'
						].map((img, index) => (
							<a
								key={index}
								onMouseEnter={() => handleSetActiveSlide(index)}
								data-fancybox='collecting'
								href={img}
							></a>
						))}
					</div>
				</Fancybox>
				<div className={s.text}>
					<div className={s.top}>
						<p className={s.date}>22.07.2023</p>
						<p className={s.descr}>
							Благотворительный фонд "Лапочка" объявил о запуске амбициозного проекта по
							строительству большого приюта для бездомных животных. Этот новый приют будет
							предоставлять временное жилье и заботу для тысяч животных, оказавшихся на улице.
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
			<div className={s.textWrapper}>
				<p>
					Приют будет располагаться на просторном участке с несколькими строениями, включая
					помещения для животных, ветеринарные кабинеты, пространства для игры и тренировок, а также
					места для волонтеров и персонала. Благодаря современным технологиям и эффективной
					организации пространства, приют сможет принять и ухаживать за большим количеством
					животных, чтобы предоставить им всю необходимую медицинскую помощь, корм и заботу.
				</p>
				<div className={s.alert}>
					Наша миссия - не только предоставить краткосрочное убежище для животных, но и помочь им
					адаптироваться и найти постоянные дома, где их ждут забота и любовь.
				</div>
				<p>
					Этот проект станет не только спасательным пунктом для бездомных животных, но и местом, где
					они будут получать восстановительную помощь и подготовку для последующей успешной адопции
					в заботливые семьи. Приют также будет активно пропагандировать ответственное владение
					животными и проводить программы образования и осведомленности в области животноводства,
					чтобы уменьшить количество бездомных животных в будущем.{' '}
				</p>
				<div className={s.listWrapper}>
					<p className={s.title}>Пример списка</p>
					<ul className='list-dots'>
						<li>
							Мы проводим программы по пристройству, где наши волонтеры работают с потенциальными
							владельцами, чтобы найти оптимальные сочетания между животными и людьми, обеспечивая
							успешную адаптацию и долгосрочную гармонию.
						</li>
						<li>
							Мы работаем с опытными волонтерами и ветеринарами, чтобы обеспечить необходимую
							медицинскую помощь и заботу для наших подопечных.
						</li>
						<li>
							Мы проводим образовательные мероприятия и освещаем проблему бездомных животных, чтобы
							повысить осведомленность общества и побудить к добровольным пожертвованиям и участию.{' '}
						</li>
						<li>
							Мы предоставляем возможности для спонсорства и добровольчества в нашем фонде, чтобы
							каждый мог внести вклад в решение проблемы бездомных кошек и собак.
						</li>
					</ul>
				</div>
				<p>
					С "Помощь животным" вы можете быть уверены, что ваше пожертвование и участие направлены на
					реальную помощь и изменение жизней незащищенных животных. Мы верим в любовь и заботу о
					кошках и собаках и стремимся создать мир, где каждое животное может найти свой дом и быть
					окруженным заботой и счастьем.
				</p>
			</div>
			<SponsorCard
				title='Яндекс'
				img='/images/fond/sponsors/4.jpg'
				subTitle='Поисковая система, принадлежащая российской корпорации «Яндекс», основной продукт компании'
				className={s.sponsor}
			/>
			<CollectingCard
				title='Кошачьему приюту необходимо оборудование которое позволит содержать животных в чистоте и комфорте'
				size='m'
				type='row'
				className={s.collecting}
				imgs={[
					'/images/home/donation/slide.jpg',
					'/images/home/donation/slide2.jpg',
					'/images/home/donation/slide3.jpg'
				]}
				userImg='/images/home/donation/user.jpg'
				userName='Четыре лапы'
				userDate='00.00.0000'
				sum='0'
				total='100 000'
				badgeColor='gold'
				badge={
					<>
						<img src='/images/icons/clock-gold.svg' alt='' />
						<span>31 день</span>
						<p>до завершения</p>
					</>
				}
				isPopular
				hasLink
				donationInfo={<DonationInfo />}
				openDonationModal={handleOpenDonationModal}
			/>
		</Modal>
	);
};
