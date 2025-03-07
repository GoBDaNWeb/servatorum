import { FC, useEffect, useRef, useState } from 'react';

import { useTypedSelector } from '@/shared/lib';
import { Button, Input } from '@/shared/ui';

import s from './code-register.module.scss';

interface ICodeRegister {
	nextStep: () => void;
}

export const CodeRegister: FC<ICodeRegister> = ({ nextStep }) => {
	const [code, setCode] = useState(['', '', '', '']);
	const [timer, setTimer] = useState(0);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(4).fill(null));
	const {
		registerInfo: { phone }
	} = useTypedSelector(store => store.registerModal);

	const handleResendCode = () => {
		setIsButtonDisabled(true);
		setTimer(59);
	};

	const handleChange = (value: string, index: number) => {
		const newCode = [...code];
		newCode[index] = value;
		setCode(newCode);

		if (value && index < inputRefs.current.length - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
		if (event.key === 'Backspace' && !code[index] && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
	};

	const handleFocus = () => {
		if (code.every(val => val === '')) {
			inputRefs.current[0]?.focus();
		}
	};

	const formattedPhone = `+${phone[0]} (${phone.slice(1, 4)}) ${phone.slice(4, 7)}-${phone.slice(7, 9)}-${phone.slice(9)}`;

	useEffect(() => {
		if (timer > 0) {
			const interval = setInterval(() => {
				setTimer(prev => prev - 1);
			}, 1000);
			return () => clearInterval(interval);
		} else {
			setIsButtonDisabled(false);
		}
	}, [timer]);

	useEffect(() => {
		inputRefs.current[0]?.focus();
	}, []);

	useEffect(() => {
		const filledCode = code.filter(item => {
			return item.length > 0;
		});
		if (filledCode.length === 4) {
			nextStep();
		}
	}, [code, nextStep]);

	return (
		<div className={s.codeRegister}>
			<img src='/images/logo.svg' alt='logo' />
			<p className={s.title}>Код отправлен на номер</p>
			<p className={s.phone}>{formattedPhone}</p>
			<p className={s.subtitle}>СМС-код</p>

			<div className={s.codeInputs}>
				{[...Array(4)].map((_, index) => (
					<Input
						mask='0'
						placeholder='_'
						key={index}
						ref={el => (inputRefs.current[index] = el)}
						value={code[index]}
						onChange={val => handleChange(val, index)}
						onKeyDown={e => handleKeyDown(e, index)}
						onFocus={() => handleFocus()}
						className={s.code}
					/>
				))}
			</div>
			<Button onClick={handleResendCode} variant='primary' isDisabled={isButtonDisabled}>
				{isButtonDisabled
					? `Запросить через 00:${timer < 10 ? `0${timer}` : timer}`
					: 'Запросить повторно'}
			</Button>
		</div>
	);
};
