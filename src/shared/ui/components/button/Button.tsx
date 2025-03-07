import { FC, PropsWithChildren, Ref, forwardRef } from 'react';

import clsx from 'clsx';

import s from './button.module.scss';

interface IButton {
	variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'circle' | 'clear';
	color?: 'transparent' | 'gray';
	size?: 's' | 'sm' | 'm' | 'l';
	isLink?: boolean;
	href?: string;
	className?: string;
	onClick?: () => void;
	isDisabled?: boolean;
	type?: 'button' | 'submit';
}

export const Button: FC<PropsWithChildren<IButton>> = forwardRef(
	(
		{
			children,
			variant = 'default',
			size = 's',
			color = 'transparent',
			isLink,
			href,
			className,
			onClick,
			isDisabled = false,
			type = 'button'
		},
		ref
	) => {
		const buttonClass = clsx(s.button, s[variant], s[size], s[color], className);

		if (isLink) {
			return (
				<a className={buttonClass} href={href} ref={ref as Ref<HTMLAnchorElement>}>
					{children}
				</a>
			);
		}

		return (
			<button
				disabled={isDisabled}
				className={buttonClass}
				ref={ref as Ref<HTMLButtonElement>}
				onClick={onClick}
				type={type}
			>
				{children}
			</button>
		);
	}
);
