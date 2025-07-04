import { useState } from 'react';

import clsx from 'clsx';

import { BackOutlineArrow, Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import s from './create-news-modal.module.scss';
import { NewsDetails } from './news-details';
import { NewsText } from './news-text';

export const CreateNewsModal = () => {
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

	const newsSteps = [
		<NewsDetails nextStep={() => handleChangeStep('next')} />,
		<NewsText nextStep={() => handleChangeStep('next')} />
	];

	const lineWidth = `${((step + 1) / newsSteps.length) * 100}%`;

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
		<Modal isOpen={isOpen('create-news')} close={handleCloseModal} contentTop={contentTop}>
			{newsSteps[step]}
		</Modal>
	);
};
