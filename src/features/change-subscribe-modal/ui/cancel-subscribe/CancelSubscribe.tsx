import { useState } from 'react';

import { Button, Checkbox } from '@/shared/ui';

import { CanceledSubscribe } from '../canceled-subscribe';

import s from './cancel-subscribe.module.scss';

export const CancelSubscribe = () => {
	const [step, setStep] = useState(0);

	const cancelSteps = [
		<div className={s.cancelSubscribe}>
			<div className={s.top}>
				<img src='/images/icons/logo.svg' alt='logo' />
				<p className={s.title}>Вы решили отменить подписку?</p>
				<p className={s.descr}>Отключив подписку вы больше не будете помогать фонду.</p>
			</div>
			<div className={s.bottom}>
				<div className={s.disable}>
					<p>Вы можете просто отключить подписку</p>
					<Checkbox name='anonim' />
				</div>
				<Button variant='primary' onClick={() => setStep(1)}>
					Отменить подписку
				</Button>
			</div>
		</div>,
		<CanceledSubscribe />
	];

	return <>{cancelSteps[step]}</>;
};
