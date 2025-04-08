import { FC } from 'react';

import { TypeButton } from '@/shared/ui';

import s from './direction-register.module.scss';

interface IDirectionRegister {
	nextStep: () => void;
	setUserDirection: (value: string) => void;
}

export const DirectionRegister: FC<IDirectionRegister> = ({ nextStep, setUserDirection }) => {
	const handleSetUserDirection = (dir: 'to-help' | 'ask-help') => {
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
					onClick={() => handleSetUserDirection('to-help')}
				/>

				<TypeButton
					title='Попросить помощь'
					img='/images/icons/ask-help-icon.svg'
					onClick={() => handleSetUserDirection('ask-help')}
				/>
			</div>
		</div>
	);
};
