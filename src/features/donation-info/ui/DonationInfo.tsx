import s from './donation-info.module.scss';

export const DonationInfo = () => {
	return (
		<div className={s.donationInfoWrapper}>
			<div className={s.donationLine}>
				<div className={s.line}></div>
			</div>
			<div className={s.donationInfo}>
				<div className={s.sum}>
					<p>300 000 ₽</p>
					<span>Сумма сбора</span>
				</div>
				<div className={s.total}>
					<p>12 000 ₽</p>
					<span>Осталось</span>
				</div>
			</div>
		</div>
	);
};
