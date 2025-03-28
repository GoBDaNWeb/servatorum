import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { CollectingSwiper } from '@/entities/collecting-swiper';

import { setOpenModal as setOpenDocumentsModal } from '@/features/documents-modal';
import { DonationInfo } from '@/features/donation-info';
import { setOpenModal as setOpenDonationModal } from '@/features/donation-modal';

import { CollectingInfo } from '@/entities/collecting-info';

import { Button, Crumbs, DocumentIcon, NextOutlineArrow } from '@/shared/ui';

import { crumbs } from '../config';

import { CollectionMainInfo } from './collection-main-info';
import s from './collection.module.scss';

export const Collection = () => {
	const dispatch = useDispatch();
	const handleOpenDocumentsModal = () => {
		dispatch(setOpenDocumentsModal(true));
	};
	const handleOpenDonationModal = () => {
		dispatch(setOpenDonationModal(true));
	};

	const collectionMainClass = clsx(s.collectionMain, 'container');

	return (
		<main className={s.collectionPage}>
			<Crumbs links={crumbs} />
			<div className={collectionMainClass}>
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
					</div>
				</div>
			</div>
			<CollectingSwiper
				openDonationModal={handleOpenDonationModal}
				title='Смотрите также'
				donationInfo={<DonationInfo />}
			/>
		</main>
	);
};
