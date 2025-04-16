import { useEffect, useState } from 'react';

import { Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { ReviewForm } from './review-form';
import { SuccessLeaveReview } from './succes-leave-review';

export const LeaveReviewModal = () => {
	const [step, setStep] = useState(0);

	const { isOpen, close, currentModal } = useModal();

	const handleChangeStep = () => {
		setStep(prevStep => {
			return prevStep + 1;
		});
	};

	useEffect(() => {
		setTimeout(() => {
			setStep(0);
		}, 300);
	}, [currentModal]);

	const leaveReviewSteps = [
		<ReviewForm nextStep={handleChangeStep} />,
		<SuccessLeaveReview handleCloseModal={close} />
	];

	const contentTop = (
		<>
			<Button className={'closeBtn'} onClick={close}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal close={close} isOpen={isOpen('leave-modal')} contentTop={contentTop}>
			{leaveReviewSteps[step]}
		</Modal>
	);
};
