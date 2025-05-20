import { FC } from 'react';

import { Button, Input, Textarea } from '@/shared/ui';

import s from './request-info.module.scss';

interface IRequestInfo {
	nextStep: () => void;
}

export const RequestInfo: FC<IRequestInfo> = ({ nextStep }) => {
	return (
		<div className={s.requestInfo}>
			<div className={s.mainContent}>
				<p className={s.title}>Информация о сборе</p>
				<p className={s.subTitle}>Расскажите о проблеме</p>
				<div className={s.inputWrapper}>
					<p className={s.title}>
						Название <span>*</span>
					</p>
					<Input placeholder='Введите' />
					<p className={s.descr}>Краткое описание того каким должно быть название сбора</p>
				</div>
				<div className={s.inputWrapper}>
					<p className={s.title}>
						Описание <span>*</span>
					</p>
					<Textarea placeholder='Введите' height={108} />
					<p className={s.descr}>
						Краткое описание того каким должно быть описание сбора и какую нужно предоставить
						информацию
					</p>
				</div>
			</div>
			<Button variant='primary' onClick={nextStep}>
				Продолжить
			</Button>
		</div>
	);
};
