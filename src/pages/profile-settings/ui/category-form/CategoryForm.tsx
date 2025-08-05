import { useEffect, useState } from 'react';

import { useGetSpheresQuery } from '@/shared/api';
import { useTypedSelector } from '@/shared/lib';
import { Button, CloseIcon } from '@/shared/ui';

import s from '../profile-settings.module.scss';

export const CategoryForm = () => {
	const [selectedAreas, setSelectedAreas] = useState<number[]>([]);
	// const [currentSpheres, setCurrentSpheres] = useState<ISpehe[] | []>([]);

	const { userData } = useTypedSelector(store => store.user);
	const { data } = useGetSpheresQuery();

	const handleSetCurrentSpheres = () => {
		const filteredSpheres = data?.filter(() => {
			// const filteredSpheres = data?.filter(sphere => {
			return '';
			// return userData?.spheres.includes(sphere.id);
		});
		if (filteredSpheres) {
			// setCurrentSpheres(filteredSpheres);
		}
	};

	if (!userData) return null;

	const handleClearCategoryList = () => {
		setSelectedAreas([]);
	};

	useEffect(() => {
		handleSetCurrentSpheres();
	}, []);

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
				{/* {userData.spheres.length > 0 ? (
					<div className={s.chipsList}>
						{currentSpheres.map((chip: ISpehe) => (
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
				) : null} */}

				<Button variant='primary' size='xs'>
					Показать все
				</Button>
			</div>
		</div>
	);
};
