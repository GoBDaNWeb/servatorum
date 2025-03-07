import { ReactElement, forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { IMaskInput } from 'react-imask';

import clsx from 'clsx';

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
			icon
		},
		ref
	) => {
		const datepickerRef = useRef(null);
		const inputRef = useRef<HTMLInputElement | null>(null);
		const [internalValue, setInternalValue] = useState(value || '');

		//@ts-ignore
		useImperativeHandle(ref, () => (inputRef.current ? inputRef.current : null), []);

		// useEffect(() => {
		// 	if (isCalendar) {
		// 		console.log(datepickerRef.current);
		// 		const datepicker = new AirDatepicker(datepickerRef.current, {
		// 			// Опции datepicker
		// 			dateFormat: 'yyyy-MM-dd',
		// 			onSelect: ({ date }) => {
		// 				console.log('Selected date:', date);
		// 			}
		// 		});

		// 		// Очистка при размонтировании компонента
		// 		return () => {
		// 			datepicker.destroy();
		// 		};
		// 	}
		// }, [isCalendar]);

		const inputWrapperClass = clsx(s.inputWrapper, className, {
			[s.active]: isActive
		});

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
				</label>
			</div>
		);
	}
);
