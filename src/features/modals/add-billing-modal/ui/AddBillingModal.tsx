import { useState } from 'react';

import clsx from 'clsx';

import { Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { AddBillingModalContent } from './add-billing-modal-content';
import s from './add-billing-modal.module.scss';
import { SuccessAddBilling } from './success-add-billing';

export const AddBillingModal = () => {
	const [step, setStep] = useState<number>(0);

	const { close, isOpen } = useModal();

	const handleChangeStep = () => {
		setStep(prev => prev + 1);
	};

	const handleCloseModal = () => {
		close();
		setTimeout(() => {
			setStep(0);
		}, 300);
	};

	const modalContent = [
		<AddBillingModalContent nextStep={handleChangeStep} />,
		<SuccessAddBilling />
	];

	const contentTop = (
		<>
			<Button className={clsx(s.closeBtn, 'closeBtn')} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal
			isOpen={isOpen('add-billing')}
			close={handleCloseModal}
			className={s.AddBillingModal}
			contentTop={contentTop}
		>
			{modalContent[step]}
		</Modal>
	);
};
