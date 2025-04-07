import { useDispatch } from 'react-redux';

import { CollectingSwiper } from '@/entities/collecting-swiper';

import { setOpenModal as setOpenDocumentsModal } from '@/features/documents-modal';
import { DonationInfo } from '@/features/donation-info';
import { setOpenModal as setOpenDonationModal } from '@/features/donation-modal';
import { setOpenModal as setOpenSupportFondModal } from '@/features/support-fond-modal';

import { FondInfo } from '@/entities/fond-info';

import { Button, Crumbs, DocumentIcon, NextOutlineArrow } from '@/shared/ui';

import { crumbs } from '../config';

import { FondMainInfo } from './fond-main-info';
import s from './fond.module.scss';

export const Fond = () => {
	const dispatch = useDispatch();
	const handleOpenDocumentsModal = () => {
		dispatch(setOpenDocumentsModal(true));
	};
	const handleOpenDonationModal = () => {
		dispatch(setOpenDonationModal(true));
	};
	const handleOpenSupportFondModal = () => {
		dispatch(setOpenSupportFondModal(true));
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
						</div>
					</div>
				</div>
			</div>
			<CollectingSwiper
				openDonationModal={handleOpenDonationModal}
				title='Текущие сборы'
				donationInfo={<DonationInfo />}
			/>
		</main>
	);
};
