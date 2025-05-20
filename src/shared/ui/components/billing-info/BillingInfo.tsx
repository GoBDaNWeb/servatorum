import { WalletIcon } from '../../icons';
import { Button } from '../button';

import s from './billing-info.module.scss';

export const BillingInfo = () => {
	return (
		<div className={s.billingInfo}>
			<div className={s.textWrapper}>
				<div className={s.icon}>
					<WalletIcon />
				</div>
				<p className={s.title}>
					Счёт фонда: <span>11 044 161 ₽</span>
				</p>
			</div>
			<div className={s.btns}>
				<Button variant='primary'>
					<img src='/images/icons/plus.svg' alt='plus' />
					Пополнить
				</Button>
				<Button variant='primary'>
					<img src='/images/icons/arrow-circle.svg' alt='arrow' />
					Вывести
				</Button>
			</div>
		</div>
	);
};
