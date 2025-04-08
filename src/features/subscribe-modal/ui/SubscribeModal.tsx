import { useState } from 'react';

import clsx from 'clsx';

import { PaymentMethod } from '@/features/payment-method';

import { BackOutlineArrow, Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { SubscribeForm } from './subscribe-form';
import s from './subscribe-modal.module.scss';

export const SubscribeModal = () => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'card' | 'sberpay'>('card');
	const [isSelectPaymentMethod, setSelectPaymentMethod] = useState(false);
	const { open, close, currentModal } = useModal();

	const handleChangePaymentMethod = (method: 'card' | 'sberpay') => {
		setSelectPaymentMethod(false);

		setSelectedPaymentMethod(method);
	};

	const handleOpenSelectPaymentMethod = () => {
		open('subscribe');
		setSelectPaymentMethod(true);
	};

	const handleCloseModal = () => {
		close();
	};

	const handleChangeStep = (type: 'prev' | 'next') => {
		if (type === 'prev') {
			if (isSelectPaymentMethod) {
				setSelectPaymentMethod(false);
			}
		}
	};

	const contentTop = (
		<>
			{isSelectPaymentMethod ? (
				<Button className={clsx(s.backBtn, 'backBtn')} onClick={() => handleChangeStep('prev')}>
					<BackOutlineArrow />
				</Button>
			) : null}

			<Button className={clsx(s.closeBtn, 'closeBtn')} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal
			isOpen={currentModal === 'subscribe'}
			close={handleCloseModal}
			className={s.donationModal}
			contentTop={contentTop}
		>
			{isSelectPaymentMethod ? (
				<PaymentMethod
					changePaymentMethod={handleChangePaymentMethod}
					paymentMethod={selectedPaymentMethod}
				/>
			) : (
				<SubscribeForm
					openSelectPaymentMethod={handleOpenSelectPaymentMethod}
					closeModal={handleCloseModal}
					paymentMethod={selectedPaymentMethod}
				/>
			)}
		</Modal>
	);
};
