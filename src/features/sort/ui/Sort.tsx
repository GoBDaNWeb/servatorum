import { FC } from 'react';

import clsx from 'clsx';

import { Chip } from '@/shared/ui';

import s from './sort.module.scss';

interface ISort {
	sortList: string[];
	selectedSort: string;
	setSelectedSort: (value: string) => void;
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
						value={chip}
						checked={selectedSort === chip}
						onChange={setSelectedSort}
						size='s'
					>
						{chip}
					</Chip>
				))}
			</div>
		</div>
	);
};
