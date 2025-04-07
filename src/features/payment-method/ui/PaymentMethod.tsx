import { FC } from 'react';

import { TypeButton } from '@/shared/ui';

import s from './payment-method.module.scss';

interface IPaymentMethod {
	changePaymentMethod: (method: 'card' | 'sberpay') => void;
	paymentMethod: 'card' | 'sberpay';
}

export const PaymentMethod: FC<IPaymentMethod> = ({ changePaymentMethod, paymentMethod }) => {
	return (
		<div className={s.paymentMethod}>
			<p className={s.title}>Способ оплаты</p>
			<div className={s.methodList}>
				<TypeButton
					title='Банковская карта'
					img='/images/icons/card-icon.svg'
					onClick={() => changePaymentMethod('card')}
					className={s.directionBtn}
					isSelect={paymentMethod === 'card'}
					isSelected
				/>
				<TypeButton
					title='SberPay'
					img='/images/icons/sberpay-icon.svg'
					onClick={() => changePaymentMethod('sberpay')}
					className={s.directionBtn}
					isSelect={paymentMethod === 'sberpay'}
					isSelected
				/>
			</div>
			<div className={s.qrWrapper}>
				<p>Оплатить по QR-коду</p>
				<div className={s.image}>
					<img src='/images/qr.png' alt='qr' />
				</div>
			</div>
		</div>
	);
};
