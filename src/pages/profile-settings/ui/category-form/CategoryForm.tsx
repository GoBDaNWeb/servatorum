import { useState } from 'react';

import { Button, Chip, CloseIcon } from '@/shared/ui';

import { chips } from '../../config';
import s from '../profile-settings.module.scss';

export const CategoryForm = () => {
	const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

	const handleCategoryChange = (value: string) => {
		setSelectedCategory(prev =>
			prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
		);
	};

	const handleClearCategoryList = () => {
		setSelectedCategory([]);
	};

	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>Сферы помощи</p>
					{selectedCategory.length > 0 ? (
						<Button variant='clear' className={s.resetBtn} onClick={handleClearCategoryList}>
							<CloseIcon />
							Сбросить все
						</Button>
					) : null}
				</div>
			</div>
			<div className={s.chipsBlock}>
				<div className={s.chipsList}>
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
				</div>
				<Button variant='primary' size='xs'>
					Показать все
				</Button>
			</div>
		</div>
	);
};
