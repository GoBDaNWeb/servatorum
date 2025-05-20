import clsx from 'clsx';

import { Button, CloseIcon, Modal, TypeButton, useModal } from '@/shared/ui';

import s from './support-fond-modal.module.scss';

export const SupportFondModal = () => {
	const { open, close, currentModal } = useModal();

	const handleCloseModal = () => {
		close();
	};

	const handleOpenDonationModal = () => {
		handleCloseModal();
		open('donation');
	};
	const handleOpenSubscribeModal = () => {
		handleCloseModal();
		open('subscribe');
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
			isOpen={currentModal === 'support-fond'}
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
