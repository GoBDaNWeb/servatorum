import { useState } from 'react';

import clsx from 'clsx';

import { Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { ReportForm } from './report-form';
import { SuccessReport } from './success-report';

export const ReportModal = () => {
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

	const contentTop = (
		<>
			<Button className={clsx('closeBtn')} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</>
	);

	const reportSteps = [
		<ReportForm nextStep={handleChangeStep} />,
		<SuccessReport handleCloseModal={handleCloseModal} />
	];

	return (
		<Modal isOpen={isOpen('report')} close={handleCloseModal} contentTop={contentTop}>
			{reportSteps[step]}
		</Modal>
	);
};
