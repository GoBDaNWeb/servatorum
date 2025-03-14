import { FC, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Button, Input } from '@/shared/ui';

import { setPhone } from '../../model';

import s from './phone-register.module.scss';

interface IPhoneRegister {
	nextStep: () => void;
}
export const PhoneRegister: FC<IPhoneRegister> = ({ nextStep }) => {
	const [phoneValue, setPhoneValue] = useState('');
	const inputRef = useRef(null);
	const dispatch = useDispatch();

	const handlePhoneValue = (value: string) => {
		setPhoneValue(value);
	};

	const handleNextStep = () => {
		nextStep();
		dispatch(setPhone(phoneValue));
	};

	return (
		<div className={s.phoneRegister}>
			<img src='/images/icons/logo.svg' alt='logo' />
			<p className={s.title}>Введите номер телефона</p>
			<p className={s.descr}>Чтобы войти или зарегистрироваться</p>
			<div className={s.inputs}>
				<Input
					ref={inputRef}
					value={phoneValue}
					//@ts-ignore
					onChange={handlePhoneValue}
					mask='+{7} (000) 000-00-00'
					placeholder='+7'
					isСleaned
				/>
				<Button onClick={handleNextStep} isDisabled={phoneValue.length < 11} variant='primary'>
					Получить код
				</Button>
			</div>
			<div className={s.phoneRegisterBottom}>
				<p className={s.separator}>или</p>
				<p className={s.descr}>
					Войти или зарегистрироваться <br />
					через социальные сети
				</p>
				<div className={s.socials}>
					<Button>
						<img src='/images/icons/vk.svg' alt='vk' />
					</Button>
					<Button>
						<img src='/images/icons/yandex.svg' alt='yandex' />
					</Button>
				</div>
			</div>
		</div>
	);
};
