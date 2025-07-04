import { FC, useEffect, useRef, useState } from 'react';

import { usePhoneAuth } from '@/features/auth';

import { useRequestCodeMutation } from '@/shared/api';
import { formatPhone } from '@/shared/lib';
import { Button, Input } from '@/shared/ui';

import s from './code-register.module.scss';

interface ICodeRegister {
	nextStep: () => void;
	phoneValue: string;
	closeModal: () => void;
}

export const CodeRegister: FC<ICodeRegister> = ({ nextStep, phoneValue, closeModal }) => {
	const [code, setCode] = useState(['', '', '', '']);
	const [timer, setTimer] = useState(0);
	const [isButtonDisabled, setIsButtonDisabled] = useState(false);

	const [requestCode] = useRequestCodeMutation();

	const { verify } = usePhoneAuth(formatPhone(phoneValue), code.join(''), closeModal, nextStep);

	const inputRefs = useRef<(HTMLInputElement | null)[]>(Array(4).fill(null));

	const handleResendCode = () => {
		requestCode({ phone: formatPhone(phoneValue) });
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
			verify();
		}
	}, [code]);

	return (
		<div className={s.codeRegister}>
			<img src='/images/icons/logo.svg' alt='logo' />
			<p className={s.title}>Код отправлен на номер</p>
			<p className={s.phone}>{phoneValue}</p>
			<p className={s.subtitle}>СМС-код</p>

			<div className={s.codeInputs}>
				{[...Array(4)].map((_, index) => (
					<Input
						key={index}
						mask='0'
						placeholder='_'
						onAccept={(value: string) => handleChange(value, index)}
						inputRef={(el: HTMLInputElement | null) => (inputRefs.current[index] = el)}
						onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => handleKeyDown(e, index)}
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
