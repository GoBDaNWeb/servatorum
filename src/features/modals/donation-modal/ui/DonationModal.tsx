import { useState } from 'react';

import clsx from 'clsx';

// import { ErrorDonation } from './error-donation';
import { PaymentMethod } from '@/features/payment-method';
import { TransferDonation } from '@/features/transfer-donation';

import { BackOutlineArrow, Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { CardDonation } from './card-donation';
import s from './donation-modal.module.scss';
import { SuccessDonation } from './success-donation';

export const DonationModal = () => {
	const [step, setStep] = useState(0);
	const [isSelectPaymentMethod, setSelectPaymentMethod] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'card' | 'sberpay'>('card');
	const [priceValue, setPriceValue] = useState('350');
	const { close, currentModal } = useModal();

	const handleChangePaymentMethod = (method: 'card' | 'sberpay') => {
		setSelectPaymentMethod(false);
		setSelectedPaymentMethod(method);
	};
	const handleCloseModal = () => {
		close();
		setPriceValue('350');
		setSelectedPaymentMethod('card');
		setSelectPaymentMethod(false);
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
			title='Разовый перевод'
			paymentMethod={selectedPaymentMethod}
			price={priceValue}
			setPriceValue={setPriceValue}
			hasPolicy
		/>,
		<CardDonation nextStep={() => handleChangeStep('next')} price={priceValue} />,
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
			isOpen={currentModal === 'donation'}
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
