import { useEffect, useRef } from 'react';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

import AirDatepicker from 'air-datepicker';

import 'air-datepicker/air-datepicker.css';

interface IAirDatePicker {
	setValue: UseFormSetValue<FieldValues>;
}

export const useAirDatePicker = ({ setValue }: IAirDatePicker) => {
	const datepickerRef = useRef(null);

	useEffect(() => {
		if (datepickerRef?.current) {
			const datepicker = new AirDatepicker(datepickerRef.current, {
				dateFormat: 'dd.MM.yyyy',
				autoClose: true,
				onSelect: data => {
					setValue('date', data.formattedDate);
				}
			});
			return () => {
				datepicker.destroy();
			};
		}
	}, []);

	return datepickerRef;
};
