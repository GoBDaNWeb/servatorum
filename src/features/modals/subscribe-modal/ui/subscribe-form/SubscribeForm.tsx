import { FC, useState } from 'react';

import { formatNumber } from '@/shared/lib';
import { Button, Checkbox, Chip, Image, Input, TypeButton } from '@/shared/ui';

import s from './subscribe-form.module.scss';

const chipsList = [
	{
		title: '350 ₽',
		value: '350'
	},
	{
		title: '550 ₽',
		value: '550'
	},
	{
		title: '850 ₽',
		value: '850'
	}
];

interface ISubscribeForm {
	openSelectPaymentMethod: () => void;
	closeModal: () => void;
	paymentMethod: 'card' | 'sberpay';
}
export const SubscribeForm: FC<ISubscribeForm> = ({
	openSelectPaymentMethod,
	closeModal,
	paymentMethod
}) => {
	const [priceValue, setPriceValue] = useState('350');

	const handleChangePriceValue = (value: string) => {
		setPriceValue(value);
	};

	return (
		<div className={s.subscribeForm}>
			<p className={s.title}>Оформить подписку</p>
			<div className={s.descrWrapper}>
				<Image className={s.image} src='/images/subscribe.jpeg' alt='fond' isGradient />
				<div className={s.text}>
					<p>Радость Жизни</p>
					<span>Москва</span>
				</div>
			</div>
			<div className={s.inputs}>
				<Input
					value={formatNumber(priceValue)}
					mask={Number}
					onAccept={(value: string) => handleChangePriceValue(formatNumber(value))}
					thousandsSeparator={' '}
					placeholder='Введите'
				/>
				<div className={s.chips}>
					{chipsList.map(chip => (
						<Chip
							key={chip.title}
							name='price'
							type='radio'
							variant='fill'
							checked={priceValue === chip.value}
							value={chip.value}
							onChange={() => handleChangePriceValue(chip.value)}
						>
							{chip.title}
						</Chip>
					))}
				</div>
			</div>
			<TypeButton
				subTitle='Способ оплаты'
				title={paymentMethod === 'card' ? 'Банковская карта' : 'SberPay'}
				img={
					paymentMethod === 'card'
						? '/images/icons/card-icon.svg'
						: '/images/icons/sberpay-icon.svg'
				}
				onClick={openSelectPaymentMethod}
				className={s.directionBtn}
			/>
			<div className={s.anonim}>
				<div className={s.text}>
					<p>Скрывать мою личность</p>
					<span>Не показывать кому оказана помощь</span>
				</div>
				<Checkbox name='anonim' />
			</div>
			<Button
				variant='primary'
				isDisabled={!priceValue.length}
				className={s.paymentBtn}
				onClick={closeModal}
			>
				{priceValue.length ? `Перевести ${formatNumber(priceValue)} ₽` : 'Введите сумму перевода'}{' '}
			</Button>
		</div>
	);
};
