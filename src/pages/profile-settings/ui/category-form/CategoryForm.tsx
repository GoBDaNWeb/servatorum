import { useState } from 'react';

import { useTypedSelector } from '@/shared/lib';
import { ISpehe } from '@/shared/types';
import { Button, Chip, CloseIcon, handleCheckboxChange } from '@/shared/ui';

import s from '../profile-settings.module.scss';

export const CategoryForm = () => {
	const [selectedAreas, setSelectedAreas] = useState<number[]>([]);

	const { userData } = useTypedSelector(store => store.user);

	if (!userData) return null;

	const handleClearCategoryList = () => {
		setSelectedAreas([]);
	};

	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>Сферы помощи</p>
					{selectedAreas.length > 0 ? (
						<Button variant='clear' className={s.resetBtn} onClick={handleClearCategoryList}>
							<CloseIcon />
							Сбросить все
						</Button>
					) : null}
				</div>
			</div>
			<div className={s.chipsBlock}>
				{userData.spheres.length > 0 ? (
					<div className={s.chipsList}>
						{
							// @ts-ignore
							userData.spheres.map((chip: ISpehe) => (
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
							))
						}
					</div>
				) : null}

				<Button variant='primary' size='xs'>
					Показать все
				</Button>
			</div>
		</div>
	);
};
