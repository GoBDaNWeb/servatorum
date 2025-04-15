import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { BackOutlineArrow, Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { AreaRegister } from './area-register';
import { CodeRegister } from './code-register';
import { DirectionRegister } from './direction-register';
import { PhoneRegister } from './phone-register';
import s from './register-modal.module.scss';
import { SelectRegister } from './select-register';
import { UserDataRegister } from './user-data-register';
import { UserTypeRegister } from './user-type-regiter';

export const RegisterModal = () => {
	const [phoneValue, setPhoneValue] = useState('');
	const [userType, setUserType] = useState('');
	const [userDirection, setUserDirection] = useState('');

	const [step, setStep] = useState(0);

	const { close, currentModal } = useModal();

	const dispatch = useDispatch();

	const handleCloseModal = () => {
		close();
		setPhoneValue('');
		setUserType('');
		setUserDirection('');
		console.log(userType);
		console.log(userDirection);
		setTimeout(() => {
			setStep(0);
		}, 300);
	};

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

	useEffect(() => {
		if (step <= 1) {
			setPhoneValue('');
		}
	}, [dispatch, step]);

	const registerSteps = [
		<SelectRegister closeModal={handleCloseModal} nextStep={() => handleChangeStep('next')} />,
		<PhoneRegister
			nextStep={() => handleChangeStep('next')}
			phoneValue={phoneValue}
			setPhoneValue={setPhoneValue}
		/>,
		<CodeRegister nextStep={() => handleChangeStep('next')} phoneValue={phoneValue} />,
		<UserTypeRegister nextStep={() => handleChangeStep('next')} setUserType={setUserType} />,
		<DirectionRegister
			nextStep={() => handleChangeStep('next')}
			setUserDirection={setUserDirection}
		/>,
		<UserDataRegister nextStep={() => handleChangeStep('next')} phoneValue={phoneValue} />,
		<AreaRegister closeModal={handleCloseModal} />
	];

	const contentTop = (
		<>
			{step !== 0 ? (
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
			isOpen={currentModal === 'register'}
			className={s.registerModal}
			close={handleCloseModal}
			contentTop={contentTop}
		>
			{registerSteps[step]}
		</Modal>
	);
};
