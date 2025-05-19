import { FC, useState } from 'react';

import { chips } from '@/shared/config';
import { Button, Chip } from '@/shared/ui';

import s from './area-register.module.scss';

interface IAreaRegister {
	nextStep: () => void;
}

export const AreaRegister: FC<IAreaRegister> = ({ nextStep }) => {
	const [selectedAreas, setSelectedAreas] = useState<string[]>([]); // Для checkbox

	const handleCheckboxChange = (value: string) => {
		setSelectedAreas(prev =>
			prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
		);
	};
	return (
		<div className={s.areaRegister}>
			<p className={s.title}>Выберите сферу</p>
			<p className={s.descr}>
				Фонды и сборы с выбранными категориями будут отображаться в ленте в первую очередь
			</p>
			<div className={s.chipListWrapper}>
				<div className={s.chipList}>
					{chips.map(chip => (
						<Chip
							type='checkbox'
							name='filters'
							key={chip}
							value={chip}
							checked={selectedAreas.includes(chip)}
							onChange={handleCheckboxChange}
						>
							{chip}
						</Chip>
					))}
				</div>
			</div>

			<Button onClick={nextStep} variant='primary' className={s.submitBtn}>
				Продолжить
			</Button>
		</div>
	);
};
