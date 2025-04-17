import { SwiperSlide } from 'swiper/react';

import { InfinitySwiper } from '@/widgets/infinity-swiper';

import { DonationInfo } from '@/features/donation-info';

import { CollectingCard } from '@/entities/collecting-card';
import { CollectingInfo } from '@/entities/collecting-info';

import { Button, Crumbs, DocumentIcon, NextOutlineArrow, useModal } from '@/shared/ui';

import { crumbs } from '../config';

import { CollectionMainInfo } from './collection-main-info';
import s from './collection.module.scss';

export const Collection = () => {
	const { open } = useModal();

	const handleOpenDocumentsModal = () => {
		open('documents');
	};
	const handleOpenDonationModal = () => {
		open('donation');
	};
	const handleOpenReportModal = () => {
		open('report');
	};

	return (
		<main className={s.collectionPage}>
			<div className='container'>
				<Crumbs links={crumbs} />
				<div className={s.collectionMain}>
					<CollectionMainInfo />
					<div className={s.collectionInfoWrapper}>
						<div className='sticky-block'>
							<CollectingInfo
								donationInfo={<DonationInfo />}
								openDonationModal={handleOpenDonationModal}
							/>
							<Button variant='clear' className={s.documentsBtn} onClick={handleOpenDocumentsModal}>
								<div className={s.icon}>
									<DocumentIcon />
								</div>
								Смотреть документы
								<NextOutlineArrow />
							</Button>
							<Button className={s.reportBtn} variant='text' onClick={handleOpenReportModal}>
								Пожаловаться на сбор
							</Button>
						</div>
					</div>
				</div>
			</div>
			<InfinitySwiper title='Текущие сборы'>
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
		</main>
	);
};
