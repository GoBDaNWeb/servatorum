import { FC } from 'react';

import { Badge, Button } from '@/shared/ui';

import { requestSteps, requestSuccessSteps } from '../../config';

import s from './request-steps.module.scss';

interface IRequestSteps {
	nextStep: () => void;
	isSuccess?: boolean;
}

export const RequestSteps: FC<IRequestSteps> = ({ nextStep, isSuccess }) => {
	const stepsArr = isSuccess ? requestSuccessSteps : requestSteps;

	return (
		<div className={s.requestSteps}>
			<div className={s.mainContent}>
				<p className={s.title}>Создать заявку на сбор</p>
				<div className={s.stepsList}>
					{stepsArr.map(step => (
						<div className={s.stepItem}>
							<p>{step.title}</p>
							<Badge variant='clear' color={step.color} size='m' className={s.badge}>
								<img src={step.icon} alt='status' />
								{step.status}
							</Badge>
						</div>
					))}
				</div>
			</div>
			<div className={s.btns}>
				<Button variant='primary' onClick={nextStep}>
					{isSuccess ? 'Опубликовать' : 'Продолжить'}
				</Button>
				{!isSuccess && (
					<Button variant='default' color='purple'>
						Сохранить черновик
					</Button>
				)}
			</div>
		</div>
	);
};
