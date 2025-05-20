import { FC } from 'react';

import { Button, Checkbox } from '@/shared/ui';

import s from './request-survey.module.scss';

interface IRequestSurvey {
	nextStep: () => void;
}

export const RequestSurvey: FC<IRequestSurvey> = ({ nextStep }) => {
	return (
		<div className={s.requestSurvey}>
			<div className={s.mainContent}>
				<p className={s.title}>Опрос</p>
				<div className={s.questionWrapper}>
					<p className={s.title}>Является ли нуждающийся пенсионером?</p>
					<div className={s.radioRow}>
						<Checkbox name='retired' isRadio isChecked>
							Да
						</Checkbox>
						<Checkbox name='retired' isRadio>
							Нет
						</Checkbox>
					</div>
				</div>
				<div className={s.questionWrapper}>
					<p className={s.title}>Имеется ли у нуждающегося инвалидность ?</p>
					<div className={s.radioRow}>
						<Checkbox name='disability' isRadio isChecked>
							Да
						</Checkbox>
						<Checkbox name='disability' isRadio>
							Нет
						</Checkbox>
					</div>
				</div>
				<div className={s.questionWrapper}>
					<p className={s.title}>Являетесь ли нуждающийся участником боевых действий ?</p>
					<div className={s.radioRow}>
						<Checkbox name='combat' isRadio isChecked>
							Да
						</Checkbox>
						<Checkbox name='combat' isRadio>
							Нет
						</Checkbox>
					</div>
				</div>
			</div>

			<Button variant='primary' onClick={nextStep}>
				Продолжить
			</Button>
		</div>
	);
};
