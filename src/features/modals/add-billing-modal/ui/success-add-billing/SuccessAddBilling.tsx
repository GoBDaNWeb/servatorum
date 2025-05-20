import s from './success-add-billing.module.scss';

export const SuccessAddBilling = () => {
	return (
		<div className={s.successAddBilling}>
			<img src='/images/check.svg' alt='check' />
			<p className={s.title}>Новый счёт добавлен</p>
			<p className={s.descr}>
				Какой-то текст пояснения, что новый счёт появился в списке ваших счетов.
			</p>
		</div>
	);
};
