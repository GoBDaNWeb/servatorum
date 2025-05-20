import { FC } from 'react';

import { Button, Textarea } from '@/shared/ui';

import s from './report-form.module.scss';

interface IReportForm {
	nextStep: () => void;
}

export const ReportForm: FC<IReportForm> = ({ nextStep }) => {
	return (
		<div className={s.reportForm}>
			<div className={s.mainContent}>
				<p className={s.title}>Жалоба</p>
				<p className={s.descr}>Ваша жалоба будет анонимной</p>
				<div className={s.reportItem}>
					<div className={s.top}>
						<div className={s.titleWrapper}>
							<img src='/images/fond.jpg' alt='report' />
							<p className={s.title}>Четыре лапы</p>
						</div>
						<p className={s.date}>22.07.2023</p>
					</div>
					<div className={s.bottom}>
						<div className={s.text}>
							<p className={s.title}>Корм для животных в рамках акции “Не все равно”</p>
							<p className={s.descr}>
								Фонд “Верность” продолжает ктивно привлекать жителей Санкт-Петербурга к участию в
								проекте “Не все равно”. В этот раз 30 кг сухого корма для собак Purina One получил
								приют “Пушдомик”.
							</p>
						</div>
						<img src='/images/home/donation/slide.jpg' alt='report' />
					</div>
				</div>
				<div className={s.textareaWrapper}>
					<p>
						На что вы хотите пожаловаться <span>*</span>
					</p>
					<Textarea placeholder='Опишите свою жалобу' height={196} />
				</div>
			</div>
			<Button variant='primary' onClick={nextStep}>
				Отправить
			</Button>
		</div>
	);
};
