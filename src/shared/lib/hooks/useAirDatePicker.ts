import { useCallback, useEffect, useRef } from 'react';
import { UseFormSetValue } from 'react-hook-form';

import AirDatepicker from 'air-datepicker';

import 'air-datepicker/air-datepicker.css';

interface IAirDatePicker {
	setValue: UseFormSetValue<any>;
	setValueLabel: string;
}

export const useAirDatePicker = ({ setValue, setValueLabel }: IAirDatePicker) => {
	const datepickerRef = useRef<HTMLInputElement>(null);
	const datepickerInstance = useRef<AirDatepicker | null>(null);

	const closeDatepicker = useCallback(() => {
		if (datepickerInstance.current) {
			datepickerInstance.current.hide();
		}
	}, []);

	useEffect(() => {
		if (!datepickerRef.current || !setValue) return;

		datepickerInstance.current = new AirDatepicker(datepickerRef.current, {
			dateFormat: 'dd.MM.yyyy',
			autoClose: true,
			onSelect: data => {
				setValue(setValueLabel, data.formattedDate);
			}
		});

		return () => {
			if (datepickerInstance.current) {
				datepickerInstance.current.destroy();
				datepickerInstance.current = null;
			}
		};
	}, [setValue, setValueLabel]);

	return {
		datepickerRef,
		closeDatepicker
	};
};
