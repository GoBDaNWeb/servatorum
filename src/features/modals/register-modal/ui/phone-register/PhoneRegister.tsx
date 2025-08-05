import { FC, useRef, useState } from 'react';

import { ProviderAuthButton } from '@/features/auth';

import { useRequestCodeMutation } from '@/shared/api';
import { formatPhone } from '@/shared/lib';
import { notify } from '@/shared/lib';
import { Button, Input } from '@/shared/ui';

import s from './phone-register.module.scss';

interface IPhoneRegister {
	nextStep: () => void;
	setPhoneValue: (value: string) => void;
	phoneValue: string;
}

export const PhoneRegister: FC<IPhoneRegister> = ({ nextStep, phoneValue, setPhoneValue }) => {
	const [isLoading, setIsLoading] = useState(false);

	const [requestCode] = useRequestCodeMutation();

	const inputRef = useRef(null);

	const handlePhoneValue = (value: string) => {
		setPhoneValue(value);
	};

	const handleNextStep = async () => {
		setIsLoading(true);
		try {
			const data = await requestCode({ phone: formatPhone(phoneValue, false) });
			if (data.error) {
				notify('Произошла ошибка', 'error');
			} else {
				nextStep();
			}
		} catch (e) {
			notify('Ошибка сети', 'error');
			console.error('error', e);
		} finally {
			setIsLoading(false);
		}
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

				<Button
					onClick={handleNextStep}
					isDisabled={phoneValue.length < 18 || isLoading}
					variant='primary'
				>
					{isLoading ? 'Загрузка' : 'Получить код'}
				</Button>
			</div>
			<div className={s.phoneRegisterBottom}>
				<p className={s.separator}>или</p>
				<p className={s.descr}>
					Войти или зарегистрироваться <br />
					через социальные сети
				</p>
				<div className={s.socials}>
					<ProviderAuthButton provider='vk'>
						<img src='/images/icons/vk.svg' alt='vk' />
					</ProviderAuthButton>
					<ProviderAuthButton provider='ya'>
						<img src='/images/icons/yandex.svg' alt='yandex' />
					</ProviderAuthButton>
				</div>
			</div>
		</div>
	);
};
