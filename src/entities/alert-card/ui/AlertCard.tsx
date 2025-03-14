import { FC } from 'react';

import clsx from 'clsx';

import { Button } from '@/shared/ui';

import s from './alert-card.module.scss';

interface IAlertCard {
	className?: string;
	size?: string;
	title: string;
	descr: string;
}

export const AlertCard: FC<IAlertCard> = ({ className, size = 's', title, descr }) => {
	const alerCardClass = clsx(s.alertCard, s[size], className);

	return (
		<div className={alerCardClass}>
			<div className={s.alertCardTop}>
				<img src='/images/icons/check.svg' alt='check' />
			</div>
			<div className={s.alertCardCenter}>
				<p>{title}</p>
				<p>{descr}</p>
			</div>
			<div className={s.alertCardBottom}>
				<Button>К новостям</Button>
				<Button variant='primary'>Отлично</Button>
			</div>
		</div>
	);
};
