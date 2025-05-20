import { FC, ReactElement } from 'react';

import { Button } from '../button';

import s from './billing-info.module.scss';

interface IBillingInfo {
	haveBtns?: boolean;
	title: string;
	sum: string;
	icon: ReactElement;
}

export const BillingInfo: FC<IBillingInfo> = ({ haveBtns = false, title, sum, icon }) => {
	return (
		<div className={s.billingInfo}>
			<div className={s.textWrapper}>
				<div className={s.icon}>{icon}</div>
				<p className={s.title}>
					{title}
					<span>{sum}</span>
				</p>
			</div>
			{haveBtns && (
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
			)}
		</div>
	);
};
