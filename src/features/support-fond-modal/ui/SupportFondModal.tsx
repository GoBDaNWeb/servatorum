import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { setOpenModal as setOpenDonationModal } from '@/features/donation-modal';
import { setOpenModal as setOpenSubscribeModal } from '@/features/subscribe-modal';

import { useTypedSelector } from '@/shared/lib';
import { Button, CloseIcon, Modal, TypeButton } from '@/shared/ui';

import { setOpenModal } from '../model';

import s from './support-fond-modal.module.scss';

export const SupportFondModal = () => {
	const { isOpen } = useTypedSelector(store => store.supportFondModal);
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(setOpenModal(false));
	};

	const handleOpenDonationModal = () => {
		dispatch(setOpenDonationModal(true));
		dispatch(setOpenModal(false));
	};
	const handleOpenSubscribeModal = () => {
		dispatch(setOpenSubscribeModal(true));
		dispatch(setOpenModal(false));
	};

	const contentTop = (
		<>
			<Button className={clsx(s.closeBtn, 'closeBtn')} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal
			isOpen={isOpen}
			close={handleCloseModal}
			className={s.supportFondModal}
			contentTop={contentTop}
		>
			<div className={s.modalContent}>
				<p className={s.title}>Поддержать фонд</p>
				<div className={s.paymetMethods}>
					<TypeButton
						title='Оформить подписку'
						subTitle='Способ оплаты'
						img='/images/icons/card-icon.svg'
						onClick={() => handleOpenSubscribeModal()}
						className={s.directionBtn}
					/>
					<TypeButton
						title='Сделать перевод'
						subTitle='Единоразовая помощь'
						img='/images/icons/wallet-icon.svg'
						onClick={() => handleOpenDonationModal()}
						className={s.directionBtn}
					/>
				</div>
			</div>
		</Modal>
	);
};
