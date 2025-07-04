import { FC } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { useAirDatePicker } from '@/shared/lib';
import { Button, Input, Textarea } from '@/shared/ui';

import s from './news-details.module.scss';

interface INewsDetails {
	nextStep: () => void;
}

export const NewsDetails: FC<INewsDetails> = ({ nextStep }) => {
	const { setValue } = useForm<FieldValues>({
		defaultValues: {
			date: ''
		}
	});
	const { datepickerRef } = useAirDatePicker({ setValue, setValueLabel: 'date' });

	return (
		<div className={s.newsDetailsInfo}>
			<div className={s.mainContent}>
				<p className={s.title}>Детали новости</p>
				<div className={s.inputWrapper}>
					<Input placeholder='Введите' title='Заголовок новости' req />
					<p className={s.descr}>
						Текст аннотации с рекомендуемым кол-вом символов или про что-то ещё.
					</p>
				</div>
				<div className={s.inputWrapper}>
					<p className={s.title}>
						Краткое описание <span>*</span>
					</p>
					<Textarea placeholder='Введите' height={108} />
					<p className={s.descr}>
						Текст аннотации с рекомендуемым кол-вом символов или про что-то ещё.
					</p>
				</div>
				<div className={s.inputWrapper}>
					<Input
						className={s.half}
						placeholder='Введите'
						title='Дата публикации'
						mask={Date}
						inputRef={datepickerRef}
						min={new Date(1900, 0, 1)}
						max={new Date(2026, 0, 1)}
						icon={<img src='/images/icons/calendar.svg' alt='' />}
					/>
				</div>
			</div>
			<Button variant='primary' onClick={nextStep}>
				Продолжить
			</Button>
		</div>
	);
};
