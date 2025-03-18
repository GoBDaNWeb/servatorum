import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { formatNumber, useTypedSelector } from '@/shared/lib';
import { Button, Chip, Input, TypeButton } from '@/shared/ui';

import { setPrice } from '../../model';

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
}
export const TransferDonation: FC<ITransferDonation> = ({ openSelectPaymentMethod, nextStep }) => {
	const dispatch = useDispatch();
	const {
		donationInfo: { paymentMethod, price }
	} = useTypedSelector(store => store.donationModal);
	const [priceValue, setPriceValue] = useState(price);

	const handleChangePriceValue = (value: string) => {
		setPriceValue(value);
		dispatch(setPrice(value));
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
			<p className={s.policy}>
				Нажимая кнопку “Продолжить” вы соглашаетесь с условиями <a href='#'>Договора оферты</a>
			</p>
			<Button
				variant='primary'
				isDisabled={!priceValue.length}
				className={s.paymentBtn}
				onClick={nextStep}
			>
				{priceValue.length ? `Перевести ${formatNumber(priceValue)} ₽` : 'Введите сумму перевода'}{' '}
			</Button>
		</div>
	);
};
