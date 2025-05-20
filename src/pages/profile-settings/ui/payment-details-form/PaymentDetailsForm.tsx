import { BillingButton, Button, useModal } from '@/shared/ui';

import s from '../profile-settings.module.scss';

export const PaymentDetailsForm = () => {
	const { open } = useModal();

	const handleOpenBillingInfoModal = (modal: 'billing-info' | 'add-billing') => {
		open(modal);
	};

	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>Платежные данные</p>
				</div>
			</div>
			<div className={s.inputsBlock}>
				<BillingButton title='Основной счет' descr='По умолчанию' />
				<BillingButton title='Запасной счет' />

				<Button
					variant='primary'
					className={s.addBtn}
					onClick={() => handleOpenBillingInfoModal('add-billing')}
				>
					<img src='/images/icons/plus.svg' alt='plus' />
					Добавить счёт
				</Button>
			</div>
		</div>
	);
};
