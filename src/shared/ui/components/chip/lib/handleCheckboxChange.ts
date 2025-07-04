import { SetStateAction } from 'react';

export const handleCheckboxChange = (
	setSelectedChip: (value: SetStateAction<number[]>) => void,
	value: number
) => {
	setSelectedChip((prev: number[]) => {
		if (typeof value !== 'number') return prev;
		return prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value];
	});
};

export const handleSingleCheckboxChange = (
	setSelectedChip: (value: number) => void,
	value: number
) => {
	setSelectedChip(value);
};
