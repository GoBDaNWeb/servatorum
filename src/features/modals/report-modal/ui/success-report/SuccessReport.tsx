import { FC } from 'react';

import { Button } from '@/shared/ui';

import s from './success-report.module.scss';

interface ISuccessReport {
	handleCloseModal: () => void;
}

export const SuccessReport: FC<ISuccessReport> = ({ handleCloseModal }) => {
	return (
		<div className={s.successReport}>
			<div className={s.mainContent}>
				<img src='/images/check.svg' alt='check' />
				<p className={s.title}>Ваша жалоба получена</p>
				<p className={s.descr}>
					Модераторы рассмотрят ее и примут меры, <br />
					если найдут нарушение правил.
				</p>
			</div>

			<div className={s.btns}>
				<Button variant='primary' onClick={handleCloseModal}>
					Готово
				</Button>
				<Button variant='text' color='purple'>
					К моим обращениям
				</Button>
			</div>
		</div>
	);
};
