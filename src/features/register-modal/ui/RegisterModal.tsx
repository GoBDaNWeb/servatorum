import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { useTypedSelector } from '@/shared/lib';
import { BackOutlineArrow, Button, CloseIcon, Modal } from '@/shared/ui';

import { clearRegisterInfo, setOpenModal, setPhone } from '../model';

import { AreaRegister } from './area-register';
import { CodeRegister } from './code-register';
import { DirectionRegister } from './direction-register';
import { PhoneRegister } from './phone-register';
import s from './register-modal.module.scss';
import { SelectRegister } from './select-register';
import { UserDataRegister } from './user-data-register';
import { UserTypeRegister } from './user-type-regiter';

export const RegisterModal = () => {
	const [step, setStep] = useState(0);
	const { isOpen } = useTypedSelector(store => store.registerModal);
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(setOpenModal(false));
		dispatch(clearRegisterInfo());
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
			dispatch(setPhone(''));
		}
	}, [dispatch, step]);

	const registerSteps = [
		<SelectRegister closeModal={handleCloseModal} nextStep={() => handleChangeStep('next')} />,
		<PhoneRegister nextStep={() => handleChangeStep('next')} />,
		<CodeRegister nextStep={() => handleChangeStep('next')} />,
		<UserTypeRegister nextStep={() => handleChangeStep('next')} />,
		<DirectionRegister nextStep={() => handleChangeStep('next')} />,
		<UserDataRegister nextStep={() => handleChangeStep('next')} />,
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
			isOpen={isOpen}
			className={s.registerModal}
			close={handleCloseModal}
			contentTop={contentTop}
		>
			{registerSteps[step]}
		</Modal>
	);
};
