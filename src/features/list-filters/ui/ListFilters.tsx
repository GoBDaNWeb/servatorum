import { FC, useState } from 'react';

import clsx from 'clsx';

import { sortChipList } from '@/shared/config';
import { Button, Chip, CloseIcon, Input } from '@/shared/ui';

import { chips, chipsTime } from '../config';

import s from './list-filters.module.scss';

interface IListFilters {
	className?: string;
}

export const ListFilters: FC<IListFilters> = ({ className }) => {
	const [selectedSort, setSelectedSort] = useState(sortChipList[0]);
	const [selectedTime, setSelectedTime] = useState(chipsTime[0]);
	const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

	const handleCategoryChange = (value: string) => {
		setSelectedCategory(prev =>
			prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
		);
	};

	const handleClearCategory = () => {
		setSelectedCategory([]);
	};

	const listFiltersClass = clsx(s.listFilters, className);

	return (
		<div className={listFiltersClass}>
			<div className={s.listFiltersItem}>
				<p>Регион</p>
				<Input placeholder='Введите' prefIcon='/images/icons/search.svg' />
			</div>
			<div className={s.listFiltersItem}>
				<p>Сортировать</p>
				<div className={s.chipList}>
					{sortChipList.map(chip => (
						<Chip
							type='radio'
							name='sort'
							key={chip}
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
			<div className={s.listFiltersItem}>
				<p>Категория</p>
				<div className={s.chipList}>
					{chips.map(chip => (
						<Chip
							type='checkbox'
							name='filters'
							key={chip}
							value={chip}
							checked={selectedCategory.includes(chip)}
							onChange={handleCategoryChange}
							size='s'
						>
							{chip}
						</Chip>
					))}
					<Button size='xs' variant='primary'>
						Ещё 96
					</Button>
				</div>
				<Button variant='text' className={s.clearBtn} onClick={handleClearCategory}>
					<CloseIcon />
					Сбросить все
				</Button>
			</div>
			<div className={s.listFiltersItem}>
				<p>Время публикации</p>
				<div className={s.chipList}>
					{chipsTime.map(chip => (
						<Chip
							type='radio'
							name='sort'
							key={chip}
							value={chip}
							checked={selectedTime === chip}
							onChange={setSelectedTime}
							size='s'
						>
							{chip}
						</Chip>
					))}
				</div>
			</div>
		</div>
	);
};
