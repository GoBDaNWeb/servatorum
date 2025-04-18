import { FC } from 'react';
import { FieldErrors } from 'react-hook-form';
import Select from 'react-select';

import clsx from 'clsx';

import './selector.scss';

type Option = {
	label: string;
	value: string;
};

interface ISelectProps {
	options: Option[];
	placeholder: string;
	className?: string;
	name: string;
	defaultValue?: Option;
	value?: any;
	onChange?: any;
	errors?: FieldErrors;
	onInputChange?: (e: any) => void;
}

export const Selector: FC<ISelectProps> = ({
	options,
	placeholder,
	className,
	name,
	defaultValue,
	value,
	onChange,
	errors,
	onInputChange
}) => {
	const selectClass = clsx('select', className, {
		error: errors?.[name]
	});

	return (
		<Select
			onInputChange={onInputChange}
			isClearable={false}
			onChange={onChange}
			placeholder={placeholder}
			name={name}
			defaultValue={defaultValue}
			options={options}
			className={selectClass}
			classNamePrefix='select'
			value={value}
			// menuIsOpen
		/>
	);
};
