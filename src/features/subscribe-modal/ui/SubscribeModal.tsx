import { useState } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { PaymentMethod } from '@/features/payment-method';

import { useTypedSelector } from '@/shared/lib';
import { BackOutlineArrow, Button, CloseIcon, Modal } from '@/shared/ui';

import { setOpenModal } from '../model/subscribe-modal.slice';

import { SubscribeForm } from './subscribe-form';
import s from './subscribe-modal.module.scss';

export const SubscribeModal = () => {
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'card' | 'sberpay'>('card');
	const [isSelectPaymentMethod, setSelectPaymentMethod] = useState(false);

	const { isOpen } = useTypedSelector(store => store.subscribeModal);
	const dispatch = useDispatch();

	const handleChangePaymentMethod = (method: 'card' | 'sberpay') => {
		setSelectPaymentMethod(false);

		setSelectedPaymentMethod(method);
	};

	const handleOpenSelectPaymentMethod = () => {
		setSelectPaymentMethod(true);
	};

	const handleCloseModal = () => {
		dispatch(setOpenModal(false));
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
			isOpen={isOpen}
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
