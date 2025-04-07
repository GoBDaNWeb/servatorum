import { useState } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

// import { ErrorDonation } from './error-donation';
import { PaymentMethod } from '@/features/payment-method';

import { useTypedSelector } from '@/shared/lib';
import { BackOutlineArrow, Button, CloseIcon, Modal } from '@/shared/ui';

import { clearDonationInfo, setOpenModal, setPaymentMethod } from '../model';

import { CardDonation } from './card-donation';
import s from './donation-modal.module.scss';
import { SuccessDonation } from './success-donation';
import { TransferDonation } from './transfer-donation';

export const DonationModal = () => {
	const [step, setStep] = useState(0);
	const [isSelectPaymentMethod, setSelectPaymentMethod] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'card' | 'sberpay'>('card');

	const { isOpen } = useTypedSelector(store => store.donationModal);
	const dispatch = useDispatch();

	const handleChangePaymentMethod = (method: 'card' | 'sberpay') => {
		dispatch(setPaymentMethod(method));
		setSelectPaymentMethod(false);
		setSelectedPaymentMethod(method);
	};
	const handleCloseModal = () => {
		dispatch(setOpenModal(false));
		dispatch(clearDonationInfo());
		setTimeout(() => {
			setStep(0);
		}, 300);
	};

	// const handleRepeatPayment = () => {
	// 	setStep(0);
	// 	dispatch(clearDonationInfo());
	// };

	const handleChangeStep = (type: 'prev' | 'next') => {
		if (type === 'prev') {
			if (isSelectPaymentMethod) {
				setSelectPaymentMethod(false);
			} else {
				setStep(prevStep => {
					return prevStep - 1;
				});
			}
		}
		if (type === 'next') {
			setStep(prevStep => {
				return prevStep + 1;
			});
		}
	};

	const handleOpenSelectPaymentMethod = () => {
		setSelectPaymentMethod(true);
	};

	const donationSteps = [
		<TransferDonation
			openSelectPaymentMethod={handleOpenSelectPaymentMethod}
			nextStep={() => handleChangeStep('next')}
		/>,
		<CardDonation nextStep={() => handleChangeStep('next')} />,
		<SuccessDonation handleCloseModal={handleCloseModal} />
		// <ErrorDonation handleRepeatPayment={handleRepeatPayment} />
	];
	const contentTop = (
		<>
			{(step !== 0 && step !== donationSteps.length - 1) || isSelectPaymentMethod ? (
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
				donationSteps[step]
			)}
		</Modal>
	);
};
