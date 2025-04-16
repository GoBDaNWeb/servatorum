import { FC } from 'react';

import { formatNumber } from '@/shared/lib';
import { Button, Checkbox, Chip, CloseIcon, Image, Input, TypeButton } from '@/shared/ui';

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
	title: string;
	hasAuthor?: boolean;
	hasPolicy?: boolean;
	hasAnonim?: boolean;
	hasCancelBtn?: boolean;
	onClickCancelBtn?: () => void;
}
export const TransferDonation: FC<ITransferDonation> = ({
	openSelectPaymentMethod,
	nextStep,
	paymentMethod,
	price,
	setPriceValue,
	title,
	hasAuthor,
	hasPolicy,
	hasAnonim,
	hasCancelBtn,
	onClickCancelBtn
}) => {
	const handleChangePriceValue = (value: string) => {
		setPriceValue(value);
	};

	return (
		<div className={s.transferDonation}>
			<p className={s.title}>{title}</p>
			{hasAuthor ? (
				<div className={s.user}>
					<Image className={s.image} src='/images/fond.jpg' alt='fond' isGradient />
					<div className={s.userInfo}>
						<p>Радость Жизни</p>
						<span>Москва</span>
					</div>
				</div>
			) : (
				<div className={s.descrWrapper}>
					<span>Осталось собрать 12 000 ₽ </span>
					<p>Вы можете выбрать предложенную сумму или указать свою</p>
				</div>
			)}

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
			{hasPolicy ? (
				<p className={s.policy}>
					Нажимая кнопку “Продолжить” вы соглашаетесь с условиями <a href='#'>Договора оферты</a>
				</p>
			) : null}
			{hasAnonim ? (
				<div className={s.anonim}>
					<div className={s.text}>
						<p>Скрывать мою личность</p>
						<span>Не показывать кому оказана помощь</span>
					</div>
					<Checkbox name='anonim' />
				</div>
			) : null}

			<Button
				variant='primary'
				isDisabled={!price.length}
				className={s.paymentBtn}
				onClick={nextStep}
			>
				Сохранить изменения
			</Button>
			{hasCancelBtn ? (
				<Button variant='text' className={s.cancelBtn} onClick={onClickCancelBtn}>
					<CloseIcon />
					Отменить подписку
				</Button>
			) : null}
		</div>
	);
};
