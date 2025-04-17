import { SwiperSlide } from 'swiper/react';

import { InfinitySwiper } from '@/widgets/infinity-swiper';

import { DonationInfo } from '@/features/donation-info';

import { CollectingCard } from '@/entities/collecting-card';
import { FondInfo } from '@/entities/fond-info';
import { NewsCardAlert } from '@/entities/news-card-alert';

import { PATH_PAGE } from '@/shared/config';
import { cropLink } from '@/shared/lib';
import { Button, Crumbs, DocumentIcon, NextOutlineArrow, useModal } from '@/shared/ui';

import { crumbs } from '../config';

import { FondMainInfo } from './fond-main-info';
import s from './fond.module.scss';

export const Fond = () => {
	const { open } = useModal();

	const handleOpenDocumentsModal = () => {
		open('documents');
	};
	const handleOpenDonationModal = () => {
		open('donation');
	};
	const handleOpenSupportFondModal = () => {
		open('support-fond');
	};
	const handleOpenReportModal = () => {
		open('report');
	};

	return (
		<main className={s.fondPage}>
			<div className='container'>
				<Crumbs links={crumbs} />
				<div className={s.fondMain}>
					<FondMainInfo />
					<div className={s.fondInfoWrapper}>
						<div className='sticky-block'>
							<FondInfo openSupportFondModal={handleOpenSupportFondModal} />
							<Button variant='clear' className={s.documentsBtn} onClick={handleOpenDocumentsModal}>
								<div className={s.icon}>
									<DocumentIcon />
								</div>
								Отчётность
								<NextOutlineArrow />
							</Button>
							<Button className={s.reportBtn} variant='text' onClick={handleOpenReportModal}>
								Пожаловаться на фонд
							</Button>
						</div>
					</div>
				</div>
			</div>
			<InfinitySwiper title='Текущие сборы' topLink href={PATH_PAGE.collections}>
				{[...Array(10)].map((_, index) => (
					<SwiperSlide key={index}>
						<CollectingCard
							title='Кошачьему приюту необходимо оборудование которое позволит содержать животных в чистоте и комфорте'
							size='m'
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
					</SwiperSlide>
				))}
			</InfinitySwiper>
			<InfinitySwiper title='Новости фонда' topLink href={cropLink(PATH_PAGE.fondNews, 10)}>
				{[...Array(10)].map((_, index) => (
					<SwiperSlide key={index}>
						<NewsCardAlert
							className={s.news}
							img='/images/home/hero/cat.jpg'
							date='22.07.2023'
							title='Корм для животных в рамках акции “Не все равно”'
							views='999'
						/>
					</SwiperSlide>
				))}
			</InfinitySwiper>
		</main>
	);
};
