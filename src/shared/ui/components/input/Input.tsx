import { ReactElement, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';

import clsx from 'clsx';

import { ClearIcon } from '../../icons';
import { Button } from '../button';

import s from './input.module.scss';

import 'air-datepicker/air-datepicker.css';

interface IInput {
	value?: string;
	onChange?: (value: string) => void;
	mask?: string;
	isCalendar?: boolean;
	placeholder: string;
	onFocus?: () => void;
	onBlur?: () => void;
	onKeyDown?: (e: any) => void;
	isActive?: boolean;
	title?: string;
	className?: string;
	req?: boolean;
	maskOptions?: object;
	icon?: ReactElement;
	isСleaned?: boolean;
	clear?: () => void;
}

export const Input = forwardRef<HTMLInputElement, IInput>(
	(
		{
			value,
			onChange,
			placeholder,
			mask,
			maskOptions,
			isCalendar,
			onFocus,
			onBlur,
			onKeyDown,
			isActive,
			title,
			className,
			req,
			icon,
			isСleaned,
			clear
		},
		ref
	) => {
		const datepickerRef = useRef(null);
		const inputRef = useRef<HTMLInputElement | null>(null);
		const [internalValue, setInternalValue] = useState(value || '');

		//@ts-ignore
		useImperativeHandle(ref, () => (inputRef.current ? inputRef.current : null), []);

		const inputWrapperClass = clsx(s.inputWrapper, className, {
			[s.active]: isActive
		});

		const handleCrearValue = () => {
			setInternalValue('');
		};

		return (
			<div className={inputWrapperClass}>
				{title ? (
					<p className={s.title}>
						{title} {req ? <span>*</span> : null}
					</p>
				) : null}

				<label className={s.input}>
					{mask && !isCalendar ? (
						<IMaskInput
							mask={mask}
							{...maskOptions}
							radix='.'
							value={internalValue}
							unmask={true}
							ref={ref}
							inputRef={inputRef}
							onAccept={val => {
								setInternalValue(val);
								onChange?.(val);
							}}
							onFocus={onFocus}
							onBlur={onBlur}
							onKeyDown={onKeyDown}
							placeholder={placeholder}
						/>
					) : isCalendar ? (
						<input
							id='calendar'
							type='text'
							ref={datepickerRef}
							value={value}
							//@ts-ignore
							onChange={onChange}
							placeholder={placeholder}
						/>
					) : (
						//@ts-ignore
						<input type='text' value={value} onChange={onChange} placeholder={placeholder} />
					)}
					{icon ? icon : null}
					{isСleaned && !clear ? (
						<Button onClick={handleCrearValue} className={s.clearBtn} variant='clear'>
							<ClearIcon />
						</Button>
					) : isСleaned && clear ? (
						<Button onClick={clear} className={s.clearBtn} variant='clear'>
							<ClearIcon />
						</Button>
					) : null}
				</label>
			</div>
		);
	}
);
