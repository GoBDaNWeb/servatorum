import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setUser } from '@/entities/user';

import { useCreateUserMutation, useGetSpheresQuery } from '@/shared/api';
import { convertDate } from '@/shared/lib';
import { IUser } from '@/shared/types';
import { Button, Chip, handleCheckboxChange } from '@/shared/ui';

import s from './area-register.module.scss';

interface IAreaRegister {
	nextStep: () => void;
	user: IUser;
}

export const AreaRegister: FC<IAreaRegister> = ({ nextStep, user }) => {
	const [selectedAreas, setSelectedAreas] = useState<number[]>([]);

	const [createUser] = useCreateUserMutation();
	const { data, isLoading } = useGetSpheresQuery();
	const dispatch = useDispatch();

	const handleSetUser = (user: IUser) => {
		dispatch(setUser(user));
	};

	const handleCreateUser = async () => {
		try {
			const converderDate = convertDate(user.date_of_birth);
			const { data: userData } = await createUser({
				...user,
				spheres: selectedAreas,
				date_of_birth: converderDate,
				password: 'test_temporary_password'
			});
			if (userData && userData.user) {
				nextStep();
				handleSetUser(userData.user);
			} else {
			}
		} catch (e) {
			console.error('Ошибка при регистрации', e);
		}
	};

	return (
		<div className={s.areaRegister}>
			<p className={s.title}>Выберите сферу</p>
			<p className={s.descr}>
				Фонды и сборы с выбранными категориями будут отображаться в ленте в первую очередь
			</p>

			<div className={s.chipListWrapper}>
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
			</div>

			<Button onClick={handleCreateUser} variant='primary' className={s.submitBtn}>
				Продолжить
			</Button>
		</div>
	);
};
