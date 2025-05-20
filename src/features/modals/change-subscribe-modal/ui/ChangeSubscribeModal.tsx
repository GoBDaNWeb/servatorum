import { useEffect, useState } from 'react';

import clsx from 'clsx';

// import { ErrorDonation } from './error-donation';
import { PaymentMethod } from '@/features/payment-method';
import { TransferDonation } from '@/features/transfer-donation';

import { BackOutlineArrow, Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { CancelSubscribe } from './cancel-subscribe';
// import { CardDonation } from './card-donation';
import s from './change-subscribe-modal.module.scss';
import { SuccessSubscribe } from './success-subscribe';

// import { SuccessDonation } from './success-donation';
// import { TransferDonation } from './transfer-donation';

export const ChangeSubscribeModal = () => {
	const [step, setStep] = useState(0);
	const [isSelectPaymentMethod, setSelectPaymentMethod] = useState(false);
	const [isCancelSubscribe, setCancelSubscribe] = useState(false);
	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'card' | 'sberpay'>('card');
	const [priceValue, setPriceValue] = useState('350');

	const { close, currentModal, isOpen } = useModal();

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
			if (isSelectPaymentMethod || isCancelSubscribe) {
				setSelectPaymentMethod(false);
				setCancelSubscribe(false);
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

	const handleOpenCancelSubscribe = () => {
		setCancelSubscribe(true);
	};

	useEffect(() => {
		setTimeout(() => {
			setStep(0);
			setPriceValue('350');
			setSelectPaymentMethod(false);
			setCancelSubscribe(false);
		}, 300);
	}, [currentModal]);

	const donationSteps = [
		<TransferDonation
			openSelectPaymentMethod={handleOpenSelectPaymentMethod}
			nextStep={() => handleChangeStep('next')}
			paymentMethod={selectedPaymentMethod}
			price={priceValue}
			setPriceValue={setPriceValue}
			title='Изменить подписку'
			hasAuthor
			hasAnonim
			hasCancelBtn
			onClickCancelBtn={handleOpenCancelSubscribe}
		/>,
		<SuccessSubscribe priceValue={priceValue} />
		// <CardDonation nextStep={() => handleChangeStep('next')} price={priceValue} />,
		// <SuccessDonation handleCloseModal={handleCloseModal} />
		// <ErrorDonation handleRepeatPayment={handleRepeatPayment} />
	];

	const contentTopCondition =
		(step !== 0 && step !== donationSteps.length - 1) || isSelectPaymentMethod || isCancelSubscribe;

	const contentTop = (
		<>
			{contentTopCondition ? (
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
			isOpen={isOpen('change-subscribe')}
			close={handleCloseModal}
			className={s.donationModal}
			contentTop={contentTop}
		>
			{isCancelSubscribe ? (
				<CancelSubscribe />
			) : isSelectPaymentMethod ? (
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
