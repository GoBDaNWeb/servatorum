import { FC, useState } from 'react';

import clsx from 'clsx';

import { useGetSpheresQuery } from '@/shared/api';
import { sortChipList } from '@/shared/config';
import {
	Button,
	Chip,
	CloseIcon,
	Input,
	handleCheckboxChange,
	handleSingleCheckboxChange
} from '@/shared/ui';

import { chipsTime } from '../config';

import s from './list-filters.module.scss';

interface IListFilters {
	className?: string;
}

export const ListFilters: FC<IListFilters> = ({ className }) => {
	const [selectedSort, setSelectedSort] = useState<number>(sortChipList[0].id);
	const [selectedTime, setSelectedTime] = useState<number>(chipsTime[0].id);
	const [selectedAreas, setSelectedAreas] = useState<number[]>([]);

	const { data, isLoading } = useGetSpheresQuery();

	const handleClearCategory = () => {
		setSelectedAreas([]);
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
							type='checkbox'
							name='filters'
							key={chip.id}
							value={chip.id}
							checked={selectedSort === chip.id}
							onChange={value => handleSingleCheckboxChange(setSelectedSort, value as number)}
						>
							{chip.name}
						</Chip>
					))}
				</div>
			</div>
			<div className={s.listFiltersItem}>
				<p>Категория</p>
				<div className={s.chipList}>
					{!isLoading && data && (
						<div className={s.chipList}>
							{data.map(chip => (
								<Chip
									type='checkbox'
									name='filters'
									key={chip.id}
									value={chip.id}
									checked={selectedAreas.includes(chip.id)}
									onChange={value => handleCheckboxChange(setSelectedAreas, value as number)}
								>
									{chip.name}
								</Chip>
							))}
						</div>
					)}
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
							type='checkbox'
							name='filters'
							key={chip.id}
							value={chip.id}
							checked={selectedTime === chip.id}
							onChange={value => handleSingleCheckboxChange(setSelectedTime, value as number)}
						>
							{chip.name}
						</Chip>
					))}
				</div>
			</div>
		</div>
	);
};
