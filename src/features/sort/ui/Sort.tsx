import { Dispatch, FC } from 'react';

import clsx from 'clsx';

import { ISpehe } from '@/shared/types';
import { Chip, handleSingleCheckboxChange } from '@/shared/ui';

import s from './sort.module.scss';

interface ISort {
	sortList: ISpehe[];
	selectedSort: number;
	setSelectedSort: Dispatch<React.SetStateAction<number>>;
	className?: string;
}

export const Sort: FC<ISort> = ({ sortList, selectedSort, setSelectedSort, className }) => {
	const sortClass = clsx(s.sortWrapper, className);

	return (
		<div className={sortClass}>
			<p>Сортировать:</p>
			<div className={s.sortList}>
				{sortList.map(chip => (
					<Chip
						type='radio'
						name='sort'
						value={chip.id}
						checked={+selectedSort === chip.id}
						onChange={value => handleSingleCheckboxChange(setSelectedSort, value as number)}
						size='s'
					>
						{chip.name}
					</Chip>
				))}
			</div>
		</div>
	);
};
