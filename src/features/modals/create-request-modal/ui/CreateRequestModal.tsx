import { useState } from 'react';

import clsx from 'clsx';

import { BackOutlineArrow, Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import s from './create-request-modal.module.scss';
import { RequestCategory } from './request-category';
import { RequestDocuments } from './request-documents';
import { RequestInfo } from './request-info';
import { RequestPhoto } from './request-photo';
import { RequestSteps } from './request-steps';
import { RequestSubcategory } from './request-subcategory';
import { RequestSuccess } from './request-success';
import { RequestSurvey } from './request-survey';

export const CreateRequestModal = () => {
	const [step, setStep] = useState(0);

	const { close, isOpen } = useModal();

	const handleChangeStep = (type: 'prev' | 'next') => {
		if (type === 'prev') {
			setStep(prevStep => {
				return prevStep - 1;
			});
		}
		if (type === 'next') {
			setStep(prevStep => {
				return prevStep + 1;
			});
		}
	};

	const handleCloseModal = () => {
		close();
		setTimeout(() => {
			setStep(0);
		}, 300);
	};

	const requestSteps = [
		<RequestSteps nextStep={() => handleChangeStep('next')} />,
		<RequestInfo nextStep={() => handleChangeStep('next')} />,
		<RequestCategory nextStep={() => handleChangeStep('next')} />,
		<RequestSubcategory nextStep={() => handleChangeStep('next')} />,
		<RequestSurvey nextStep={() => handleChangeStep('next')} />,
		<RequestPhoto nextStep={() => handleChangeStep('next')} />,
		<RequestDocuments nextStep={() => handleChangeStep('next')} />,
		<RequestSteps isSuccess nextStep={() => handleChangeStep('next')} />,
		<RequestSuccess handleCloseModal={handleCloseModal} />
	];

	const lineWidth = `${((step + 1) / requestSteps.length) * 100}%`;

	const contentTop = (
		<div className={s.contentTopWrapper}>
			{step !== 0 ? (
				<Button className={clsx(s.backBtn, 'backBtn')} onClick={() => handleChangeStep('prev')}>
					<BackOutlineArrow />
				</Button>
			) : null}
			<div className={s.progressLine}>
				<div className={s.line} style={{ width: lineWidth }}></div>
			</div>
			<Button className={clsx('closeBtn')} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</div>
	);

	return (
		<Modal isOpen={isOpen('create-request')} close={handleCloseModal} contentTop={contentTop}>
			{requestSteps[step]}
		</Modal>
	);
};
