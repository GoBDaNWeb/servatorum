import { FC, useRef } from 'react';

import { Button, Input } from '@/shared/ui';

import s from './phone-register.module.scss';

interface IPhoneRegister {
	nextStep: () => void;
	setPhoneValue: (value: string) => void;
	phoneValue: string;
}
export const PhoneRegister: FC<IPhoneRegister> = ({ nextStep, phoneValue, setPhoneValue }) => {
	const inputRef = useRef(null);
	const handlePhoneValue = (value: string) => {
		setPhoneValue(value);
	};

	const handleNextStep = () => {
		nextStep();
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
					mask='+{7} (000) 000-00-00'
					placeholder='+7'
					onAccept={(value: string) => handlePhoneValue(value)}
					clear={() => handlePhoneValue('')}
				/>

				<Button onClick={handleNextStep} isDisabled={phoneValue.length < 18} variant='primary'>
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
