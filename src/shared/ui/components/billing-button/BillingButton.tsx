import { FC } from 'react';

import { Button } from '../button';
import { useModal } from '../modal';

import s from './billing-button.module.scss';

interface IBillingButton {
	title: string;
	descr?: string;
}

export const BillingButton: FC<IBillingButton> = ({ title, descr }) => {
	const { open } = useModal();

	const handleOpenBillingInfoModal = (modal: 'billing-info' | 'add-billing') => {
		open(modal);
	};
	return (
		<Button className={s.billingBtn} onClick={() => handleOpenBillingInfoModal('billing-info')}>
			<div className={s.textWrapper}>
				<div className={s.icon}>
					<img src='/images/icons/rub.svg' alt='rub' />
				</div>
				<div className={s.text}>
					{descr && <p className={s.type}>По умолчанию</p>}
					<p className={s.title}>{title}</p>
				</div>
			</div>
			<img src='/images/icons/arrow-right-outline.svg' alt='arrow' />
		</Button>
	);
};
