import { FC } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/shared/ui';

import { setUserDirection } from '../../model';

import s from './direction-register.module.scss';

interface IDirectionRegister {
	nextStep: () => void;
}

export const DirectionRegister: FC<IDirectionRegister> = ({ nextStep }) => {
	const dispatch = useDispatch();

	const handleSetUserDirection = (dir: 'to-help' | 'ask-help') => {
		dispatch(setUserDirection(dir));
		nextStep();
	};

	return (
		<div className={s.directionRegister}>
			<img src='/images/icons/logo.svg' alt='logo' />
			<p className={s.title}>Что вы хотите?</p>
			<div className={s.userDirectionList}>
				<Button
					className={s.userTypeBtn}
					variant='clear'
					onClick={() => handleSetUserDirection('to-help')}
				>
					<div className={s.typeBtnLeft}>
						<img src='/images/icons/to-help-icon.svg' alt='to-help' />
						<p>Помочь</p>
					</div>
					<img src='/images/icons/next-arrow.svg' alt='arrow' />
				</Button>
				<Button
					className={s.userTypeBtn}
					variant='clear'
					onClick={() => handleSetUserDirection('ask-help')}
				>
					<div className={s.typeBtnLeft}>
						<img src='/images/icons/ask-help-icon.svg' alt='ask-help' />
						<p>Попросить помощь</p>
					</div>
					<img src='/images/icons/next-arrow.svg' alt='arrow' />
				</Button>
			</div>
		</div>
	);
};
