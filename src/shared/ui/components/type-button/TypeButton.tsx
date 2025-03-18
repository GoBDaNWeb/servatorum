import { FC } from 'react';

import clsx from 'clsx';

import { Button } from '../button';

import s from './type-button.module.scss';

interface ITypeButton {
	img: string;
	title: string;
	subTitle?: string;
	onClick: () => void;
	className?: string;
	isSelect?: boolean;
	isSelected?: boolean;
}
export const TypeButton: FC<ITypeButton> = ({
	img,
	onClick,
	title,
	subTitle,
	className,
	isSelect,
	isSelected
}) => {
	const typeBtnClass = clsx(s.typeBtn, className);

	return (
		<Button className={typeBtnClass} variant='clear' onClick={onClick}>
			<div className={s.typeBtnLeft}>
				<img src={img} alt='fond' />
				<div className={s.titleWrapper}>
					{subTitle ? <span>{subTitle}</span> : null}
					<p>{title}</p>
				</div>
			</div>
			{!isSelected ? <img src='/images/icons/next-arrow.svg' alt='arrow' /> : null}

			{isSelect ? <img src='/images/icons/check-outline.svg' alt='check' /> : null}
		</Button>
	);
};
