import { Ref, forwardRef } from 'react';

import clsx from 'clsx';

import s from './button.module.scss';

type Variant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'outline'
	| 'circle'
	| 'square'
	| 'clear'
	| 'text'
	| 'alert';

type Color = 'transparent' | 'gray' | 'purple';
type Size = 'xs' | 's' | 'sm' | 'm' | 'l';

// Пропсы для ссылки
type AnchorButtonProps = IButton & {
	isLink: true;
	href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Пропсы для кнопки
type RegularButtonProps = IButton & {
	isLink?: false;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

interface IButton {
	variant?: Variant;
	color?: Color;
	size?: Size;
	isLink?: boolean;
	href?: string;
	className?: string;
	onClick?: () => void;
	onMouseEnter?: () => void;
	isDisabled?: boolean;
	type?: 'button' | 'submit';
}

type ButtonProps = AnchorButtonProps | RegularButtonProps;

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
	(
		{
			children,
			variant = 'default',
			size = 's',
			color = 'transparent',
			href,
			className,
			onClick,
			onMouseEnter,
			isDisabled = false,
			type = 'button'
		},
		ref
	) => {
		const buttonClass = clsx(s.button, s[variant], s[size], s[color], className);

		const isLink = !!href;

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
				onMouseEnter={onMouseEnter}
				type={type}
			>
				{children}
			</button>
		);
	}
);
