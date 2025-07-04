import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { IUser, UserDirection } from '@/shared/types';
import { BackOutlineArrow, Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import { AreaRegister } from './area-register';
import { CodeRegister } from './code-register';
import { DirectionRegister } from './direction-register';
// import { FondDataRegister } from './fond-data-register';
import { PhoneRegister } from './phone-register';
import s from './register-modal.module.scss';
import { SelectRegister } from './select-register';
import { SuccessRegister } from './success-register';
import { UserDataRegister } from './user-data-register';
import { UserTypeRegister } from './user-type-regiter';

export const RegisterModal = () => {
	const [phoneValue, setPhoneValue] = useState('');
	const [userType, setUserType] = useState<'user' | 'fond' | 'company' | ''>('');
	const [user, setUser] = useState<IUser | null>(null);
	const [userDirection, setUserDirection] = useState<UserDirection>('');

	const [step, setStep] = useState(0);

	const { close, currentModal } = useModal();

	const dispatch = useDispatch();

	const handleCloseModal = () => {
		close();
		setPhoneValue('');
		setUserType('');
		setUserDirection('');
		setTimeout(() => {
			setStep(0);
		}, 300);
	};

	const handleChangeStep = (type: 'prev' | 'next', skip: boolean = false) => {
		if (type === 'prev') {
			if (skip) {
				setStep(prevStep => {
					return prevStep - 2;
				});
			} else {
				setStep(prevStep => {
					return prevStep - 1;
				});
			}
		}
		if (type === 'next') {
			if (skip) {
				setStep(prevStep => {
					return prevStep + 2;
				});
			} else {
				setStep(prevStep => {
					return prevStep + 1;
				});
			}
		}
	};

	useEffect(() => {
		if (step <= 1) {
			setPhoneValue('');
		}
	}, [dispatch, step]);

	const userTypeRegister = [
		{
			type: 'user',
			component: (
				<UserDataRegister
					nextStep={() => handleChangeStep('next')}
					userDirection={userDirection}
					phoneValue={phoneValue}
					setUser={setUser}
				/>
			)
		}
		// {
		// 	type: 'fond',
		// 	component: (
		// 		<FondDataRegister nextStep={() => handleChangeStep('next', true)} phoneValue={phoneValue} />
		// 	)
		// }
	];

	const registerSteps = [
		<SelectRegister closeModal={handleCloseModal} nextStep={() => handleChangeStep('next')} />,
		<PhoneRegister
			nextStep={() => handleChangeStep('next')}
			phoneValue={phoneValue}
			setPhoneValue={setPhoneValue}
		/>,
		<CodeRegister
			nextStep={() => handleChangeStep('next')}
			closeModal={handleCloseModal}
			phoneValue={phoneValue}
		/>,

		<UserTypeRegister nextStep={() => handleChangeStep('next')} setUserType={setUserType} />,

		<DirectionRegister
			nextStep={() => handleChangeStep('next')}
			setUserDirection={setUserDirection}
		/>,
		userTypeRegister.find(item => item.type === userType)?.component,
		<AreaRegister nextStep={() => handleChangeStep('next')} user={user as IUser} />,
		<SuccessRegister closeModal={handleCloseModal} />
	];

	const contentTop = (
		<>
			{step !== 0 && step !== registerSteps.length - 1 ? (
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
