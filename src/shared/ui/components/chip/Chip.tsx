import { FC, ReactNode, useState } from 'react';

import clsx from 'clsx';

import { CheckIcon } from '../../icons';

import s from './chip.module.scss';

interface IChip {
	children: ReactNode;
	name: string;
}

export const Chip: FC<IChip> = ({ name, children }) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = () => {
		setIsChecked(!isChecked);
	};

	const chipClass = clsx(s.chip, { [s.active]: isChecked });

	return (
		<label className={chipClass}>
			<input type='checkbox' name={name} onChange={handleChange} checked={isChecked} />
			<p>{children}</p>
			<div className={s.iconWrapper}>
				<CheckIcon />
			</div>
		</label>
	);
};
