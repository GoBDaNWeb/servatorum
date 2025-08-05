import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setTempUser, setUser } from '@/entities/user';

import { useCreateUserMutation, useGetSpheresQuery } from '@/shared/api';
import { convertDate } from '@/shared/lib';
import { IUser } from '@/shared/types';
import { Button, Chip, Skeleton, handleCheckboxChange } from '@/shared/ui';

import s from './area-register.module.scss';

interface IAreaRegister {
	nextStep: () => void;
	closeModal: () => void;
	user: IUser;
}

export const AreaRegister: FC<IAreaRegister> = ({ nextStep, user, closeModal }) => {
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
				dispatch(setTempUser(null));
				closeModal();

				if (userData.access_token) {
					localStorage.setItem('access_token', userData.access_token);
				}
				if (userData.refresh_token) {
					localStorage.setItem('refresh_token', userData.refresh_token);
				}
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
				<div className={s.chipList}>
					{!isLoading && data ? (
						data.map(chip => (
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
					) : (
						<>
							{[...new Array(15)].map((_, index) => {
								const width = Math.floor(Math.random() * 101) + 50; // 50-150
								return <Skeleton key={index} className={s.areaSkeleton} style={{ width }} />;
							})}
						</>
					)}
				</div>
			</div>

			<Button onClick={handleCreateUser} variant='primary' className={s.submitBtn}>
				Продолжить
			</Button>
		</div>
	);
};
