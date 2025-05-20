import { FC } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

import { useAirDatePicker } from '@/shared/lib';
import { Input } from '@/shared/ui';

import s from './date-interval-inputs.module.scss';

interface IDateIntervalInputs {
	setValue: UseFormSetValue<FieldValues>;
}
export const DateIntervalInputs: FC<IDateIntervalInputs> = ({ setValue }) => {
	const datepickerFromRef = useAirDatePicker({ setValue, setValueLabel: 'fromDate' });
	const datepickerToRef = useAirDatePicker({ setValue, setValueLabel: 'toDate' });

	return (
		<div className={s.dateWrapper}>
			<p>Период:</p>
			<div className={s.dateList}>
				<Input
					setValue={setValue}
					isDate
					placeholder='Введите'
					inputRef={datepickerFromRef}
					mask={Date}
					min={new Date(1900, 0, 1)}
					max={new Date(2026, 0, 1)}
					icon={<img src='/images/icons/calendar.svg' alt='' />}
					className={s.input}
				/>
				<div className={s.separator}>—</div>
				<Input
					setValue={setValue}
					isDate
					placeholder='Введите'
					inputRef={datepickerToRef}
					mask={Date}
					min={new Date(1900, 0, 1)}
					max={new Date(2026, 0, 1)}
					icon={<img src='/images/icons/calendar.svg' alt='' />}
					className={s.input}
				/>
			</div>
		</div>
	);
};
