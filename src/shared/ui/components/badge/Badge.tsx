import { FC, PropsWithChildren } from 'react';

import clsx from 'clsx';

import s from './badge.module.scss';

interface IBadge {
	className?: string;
	size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
	color?: 'gray' | 'white' | 'purple' | 'alert' | 'green';
	variant?: 'default' | 'alert' | 'outline';
}

export const Badge: FC<PropsWithChildren<IBadge>> = ({
	children,
	size = 's',
	className,
	color = 'gray',
	variant = 'default'
}) => {
	const badgeClass = clsx(s.badge, s[size], s[color], s[variant], className);

	return <div className={badgeClass}>{children}</div>;
};
