import { Button, useModal } from '@/shared/ui';

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
				<Button
					variant='clear'
					className={s.paymentBtn}
					onClick={() => handleOpenBillingInfoModal('billing-info')}
				>
					<div className={s.textWrapper}>
						<div className={s.icon}>
							<img src='/images/icons/rub.svg' alt='rub' />
						</div>
						<div className={s.text}>
							<p className={s.type}>По умолчанию</p>
							<p className={s.title}>Основной счет</p>
						</div>
					</div>
					<img src='/images/icons/arrow-right-outline.svg' alt='arrow' />
				</Button>
				<Button
					variant='clear'
					className={s.paymentBtn}
					onClick={() => handleOpenBillingInfoModal('billing-info')}
				>
					<div className={s.textWrapper}>
						<div className={s.icon}>
							<img src='/images/icons/rub.svg' alt='rub' />
						</div>
						<div className={s.text}>
							<p className={s.title}>Запасной счет</p>
						</div>
					</div>
					<img src='/images/icons/arrow-right-outline.svg' alt='arrow' />
				</Button>
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
