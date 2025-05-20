import { useState } from 'react';

import clsx from 'clsx';

import { Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { SuccessSupport } from './success-support';
import { SupportForm } from './support-form';

export const SupportModal = () => {
	const [step, setStep] = useState(0);

	const { close, isOpen } = useModal();

	const handleChangeStep = () => {
		setStep(prevStep => {
			return prevStep + 1;
		});
	};
	const handleCloseModal = () => {
		close();
	};

	const supportSteps = [
		<SupportForm nextStep={handleChangeStep} />,
		<SuccessSupport handleCloseModal={handleCloseModal} />
	];

	const contentTop = (
		<>
			<Button className={clsx('closeBtn')} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal isOpen={isOpen('support')} close={handleCloseModal} contentTop={contentTop}>
			{supportSteps[step]}
		</Modal>
	);
};
