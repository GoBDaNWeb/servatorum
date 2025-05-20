import { useEffect, useRef } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

import AirDatepicker from 'air-datepicker';

import 'air-datepicker/air-datepicker.css';

interface IAirDatePicker {
	setValue: UseFormSetValue<FieldValues>;
	setValueLabel: string;
}

export const useAirDatePicker = ({ setValue, setValueLabel }: IAirDatePicker) => {
	const datepickerRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (!datepickerRef.current || !setValue) return;

		const datepicker = new AirDatepicker(datepickerRef.current, {
			dateFormat: 'dd.MM.yyyy',
			autoClose: true,
			// inline: true,
			onSelect: data => {
				setValue(setValueLabel, data.formattedDate);
			}
		});

		return () => {
			datepicker.destroy();
		};
	}, [setValue, setValueLabel]);

	return datepickerRef;
};
