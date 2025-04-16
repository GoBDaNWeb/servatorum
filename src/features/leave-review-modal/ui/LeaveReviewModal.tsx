import { useEffect, useState } from 'react';

import clsx from 'clsx';

import { Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import s from './leave-review-modal.module.scss';
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
		setStep(0);
	}, [currentModal]);

	const leaveReviewSteps = [
		<ReviewForm nextStep={handleChangeStep} />,
		<SuccessLeaveReview handleCloseModal={close} />
	];

	const contentTop = (
		<>
			<Button className={clsx(s.closeBtn, 'closeBtn')} onClick={close}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal
			close={close}
			isOpen={isOpen('leave-modal')}
			contentTop={contentTop}
			className={s.leaveReviewModal}
		>
			{leaveReviewSteps[step]}
		</Modal>
	);
};
