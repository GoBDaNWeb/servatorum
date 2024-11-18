import { FC, PropsWithChildren, Ref, forwardRef } from 'react';

import clsx from 'clsx';

import s from './button.module.scss';

interface IButton {
	variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'circle' | 'clear';
	size?: 's' | 'sm' | 'm' | 'l';
	isLink?: boolean;
	href?: string;
	className?: string;
	onClick?: () => void;
}

export const Button: FC<PropsWithChildren<IButton>> = forwardRef(
	({ children, variant = 'default', size = 's', isLink, href, className, onClick }, ref) => {
		const buttonClass = clsx(s.button, s[variant], s[size], className);

		if (isLink) {
			return (
				<a className={buttonClass} href={href} ref={ref as Ref<HTMLAnchorElement>}>
					{children}
				</a>
			);
		}

		return (
			<button className={buttonClass} ref={ref as Ref<HTMLButtonElement>} onClick={onClick}>
				{children}
			</button>
		);
	}
);
