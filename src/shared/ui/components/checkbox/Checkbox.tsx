import { FC, ReactElement, ReactNode, useState } from 'react';

import clsx from 'clsx';

import s from './checkbox.module.scss';

interface ICheckbox {
	isToggler?: boolean;
	name: string;
	value1?: string;
	value2?: string;
	icon1?: ReactElement;
	icon2?: ReactElement;
	title?: string;
	onChange?: () => void;
	children?: ReactNode;
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
	children
}) => {
	const [currentSelectCheckbox, setCurrentSelectChecbox] = useState(0);

	const handleChangeCurrentSelectCheckbox = (index: number) => {
		setCurrentSelectChecbox(() => {
			return index;
		});
	};

	const togglerClass = clsx(s.toggler, { [s.rtl]: currentSelectCheckbox === 1 });
	const checkboxWrapperClass = clsx(s.checkboxWrapper, { [s.isToggler]: isToggler });

	return (
		<div className={checkboxWrapperClass}>
			{isToggler ? (
				<div className={s.checkbox}>
					{title ? <p className={s.title}>{title}</p> : null}
					<div className={s.checkboxToggler}>
						<label onClick={() => handleChangeCurrentSelectCheckbox(0)}>
							<input type='radio' name={name} value={0} defaultChecked onChange={onChange} />
							<p>
								{icon1} {value1}
							</p>
						</label>
						<div className={togglerClass}></div>
						<label onClick={() => handleChangeCurrentSelectCheckbox(1)}>
							<input type='radio' name={name} value={1} onChange={onChange} />
							<p>
								{icon2}
								{value2}
							</p>
						</label>
					</div>
				</div>
			) : children ? (
				<label className={s.checkboxLabel}>
					<input type='checkbox' name={name} />
					<p>{children}</p>
				</label>
			) : (
				<input type='checkbox' name={name} />
			)}
		</div>
	);
};
