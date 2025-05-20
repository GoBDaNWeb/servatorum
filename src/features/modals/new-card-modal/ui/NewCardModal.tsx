import { useState } from 'react';

import { Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { CardForm } from './card-form';
import { SuccessAddCard } from './success-add-card';

export const NewCardModal = () => {
	const [step, setStep] = useState(0);

	const { close, isOpen } = useModal();

	const handleCloseModal = () => {
		close();
		setTimeout(() => {
			setStep(0);
		}, 300);
	};

	const handleChangeStep = () => {
		setStep(prevStep => {
			return prevStep + 1;
		});
	};

	const newCardSteps = [
		<CardForm nextStep={handleChangeStep} />,
		<SuccessAddCard handleCloseModal={handleCloseModal} />
	];

	const contentTop = (
		<>
			<Button className={'closeBtn'} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal isOpen={isOpen('new-card')} close={handleCloseModal} contentTop={contentTop}>
			{newCardSteps[step]}
		</Modal>
	);
};
