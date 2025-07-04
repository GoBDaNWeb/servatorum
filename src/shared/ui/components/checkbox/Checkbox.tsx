import { FC, ReactElement, ReactNode, useState } from 'react';

import clsx from 'clsx';

import s from './checkbox.module.scss';

interface ICheckbox {
	isToggler?: boolean;
	name: string;
	className?: string;
	value1?: string;
	value2?: string;
	icon1?: ReactElement;
	icon2?: ReactElement;
	title?: string;
	onChange?: () => void;
	children?: ReactNode;
	isChecked?: boolean;
	isRadio?: boolean;
	value?: 'Мужской' | 'Женский';
}

export const Checkbox: FC<ICheckbox> = ({
	isToggler,
	onChange,
	name,
	value1,
	value2,
	icon1,
	icon2,
	title,
	children,
	isChecked,
	className,
	isRadio,
	value = 'Мужской'
}) => {
	const [currentSelectCheckbox, setCurrentSelectChecbox] = useState(value === 'Мужской' ? 0 : 1);

	const handleChangeCurrentSelectCheckbox = (index: number) => {
		setCurrentSelectChecbox(() => {
			return index;
		});
	};

	const classes = {
		togglerClass: clsx(s.toggler, { [s.rtl]: currentSelectCheckbox === 1 }),
		checkboxClass: clsx(s.checkboxLabel, className),
		radioClass: clsx(s.radioWrapper, className)
	};

	return (
		<>
			{isToggler ? (
				<div className={s.toggler}>
					{title ? <p className={s.title}>{title}</p> : null}
					<div className={s.checkboxToggler}>
						<label onClick={() => handleChangeCurrentSelectCheckbox(0)}>
							<input
								type='radio'
								name={name}
								value={value1}
								defaultChecked={value === 'Мужской'}
								onChange={onChange}
							/>
							<p>
								{icon1} {value1}
							</p>
						</label>
						<div className={classes.togglerClass}></div>
						<label onClick={() => handleChangeCurrentSelectCheckbox(1)}>
							<input
								type='radio'
								name={name}
								value={value2}
								defaultChecked={value === 'Женский'}
								onChange={onChange}
							/>
							<p>
								{icon2}
								{value2}
							</p>
						</label>
					</div>
				</div>
			) : isRadio ? (
				<label className={classes.radioClass}>
					<input type='radio' name={name} defaultChecked={isChecked} />
					<p>{children}</p>
					<div className={s.icon}>
						<img src='/images/icons/check-outline.svg' alt='check' />
					</div>
				</label>
			) : children ? (
				<label className={classes.checkboxClass}>
					<input type='checkbox' name={name} />
					<p>{children}</p>
				</label>
			) : (
				<input
					className={s.defaultCheckbox}
					checked={isChecked}
					type='checkbox'
					name={name}
					aria-label='Переключатель'
				/>
			)}
		</>
	);
};
