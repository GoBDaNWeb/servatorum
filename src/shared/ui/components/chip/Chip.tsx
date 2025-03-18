import { FC, ReactNode } from 'react';

import clsx from 'clsx';

import { CheckIcon } from '../../icons';

import s from './chip.module.scss';

interface IChip {
	children: ReactNode;
	name: string;
	type?: 'checkbox' | 'radio';
	checked?: boolean;
	onChange: (value: string) => void;
	value: string;
	size?: 'm' | 's';
	variant?: 'outline' | 'fill';
}

export const Chip: FC<IChip> = ({
	name,
	type = 'checkbox',
	children,
	checked,
	onChange,
	value,
	size = 'm',
	variant = 'outline'
}) => {
	const chipClass = clsx(s.chip, s[size], s[variant], { [s.active]: checked });

	return (
		<label className={chipClass}>
			<input
				type={type}
				name={name}
				value={value}
				checked={checked}
				onChange={() => onChange(value)}
			/>
			<p>{children}</p>
			{variant === 'outline' ? (
				<div className={s.iconWrapper}>
					<CheckIcon />
				</div>
			) : null}
		</label>
	);
};
