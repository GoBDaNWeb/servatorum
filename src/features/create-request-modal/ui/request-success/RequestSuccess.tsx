import { FC } from 'react';

import { Button } from '@/shared/ui';

import s from './request-success.module.scss';

interface IRequestSuccess {
	handleCloseModal: () => void;
}

export const RequestSuccess: FC<IRequestSuccess> = ({ handleCloseModal }) => {
	return (
		<div className={s.requestSuccess}>
			<div className={s.mainContent}>
				<p className={s.title}>Заявка создана</p>
				<img src='/images/check.svg' alt='check' />
				<p className={s.subtitle}>
					Заявка создана, какой-то текст, что ожидайте откликов от фондов.
				</p>
				<p className={s.descr}>Вы можете отслеживать свои заявки в разделе “Заявки на сборы”</p>
			</div>

			<div className={s.btns}>
				<Button variant='primary' onClick={handleCloseModal}>
					Готово
				</Button>
				<Button variant='text' color='purple'>
					К заявкам на сборы
				</Button>
			</div>
		</div>
	);
};
