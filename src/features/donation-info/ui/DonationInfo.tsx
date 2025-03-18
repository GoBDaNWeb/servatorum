import { FC } from 'react';

import clsx from 'clsx';

import s from './donation-info.module.scss';

interface IDonationInfo {
	size?: 'default' | 'sm';
}

export const DonationInfo: FC<IDonationInfo> = ({ size = 'default' }) => {
	const donationInfoWrapperClass = clsx(s.donationInfoWrapper, size ? s[size] : '');

	return (
		<div className={donationInfoWrapperClass}>
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
