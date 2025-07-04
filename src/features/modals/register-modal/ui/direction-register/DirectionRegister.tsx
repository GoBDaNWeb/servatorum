import { FC } from 'react';

import { UserDirection } from '@/shared/types';
import { TypeButton } from '@/shared/ui';

import s from './direction-register.module.scss';

interface IDirectionRegister {
	nextStep: () => void;
	setUserDirection: (value: UserDirection) => void;
}

export const DirectionRegister: FC<IDirectionRegister> = ({ nextStep, setUserDirection }) => {
	const handleSetUserDirection = (dir: UserDirection) => {
		setUserDirection(dir);
		nextStep();
	};

	return (
		<div className={s.directionRegister}>
			<img src='/images/icons/logo.svg' alt='logo' />
			<p className={s.title}>Что вы хотите?</p>
			<div className={s.userDirectionList}>
				<TypeButton
					title='Помочь'
					img='/images/icons/to-help-icon.svg'
					onClick={() => handleSetUserDirection('helping')}
				/>

				<TypeButton
					title='Попросить помощь'
					img='/images/icons/ask-help-icon.svg'
					onClick={() => handleSetUserDirection('getting help')}
				/>
			</div>
		</div>
	);
};
