import { FC } from 'react';

import { formatNumber } from '@/shared/lib';
import { Button, Chip, Input, TypeButton } from '@/shared/ui';

import s from './transfer-donation.module.scss';

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

interface ITransferDonation {
	openSelectPaymentMethod: () => void;
	nextStep: () => void;
	setPriceValue: (value: string) => void;
	paymentMethod: 'card' | 'sberpay';
	price: string;
}
export const TransferDonation: FC<ITransferDonation> = ({
	openSelectPaymentMethod,
	nextStep,
	paymentMethod,
	price,
	setPriceValue
}) => {
	const handleChangePriceValue = (value: string) => {
		setPriceValue(value);
	};

	return (
		<div className={s.transferDonation}>
			<p className={s.title}>Разовый перевод</p>
			<div className={s.descrWrapper}>
				<span>Осталось собрать 12 000 ₽ </span>
				<p>Вы можете выбрать предложенную сумму или указать свою</p>
			</div>
			<div className={s.inputs}>
				<Input
					value={formatNumber(price)}
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
							checked={price === chip.value}
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
			<p className={s.policy}>
				Нажимая кнопку “Продолжить” вы соглашаетесь с условиями <a href='#'>Договора оферты</a>
			</p>
			<Button
				variant='primary'
				isDisabled={!price.length}
				className={s.paymentBtn}
				onClick={nextStep}
			>
				{price.length ? `Перевести ${formatNumber(price)} ₽` : 'Введите сумму перевода'}
			</Button>
		</div>
	);
};
