import { FC } from 'react';

import { Button, Input } from '@/shared/ui';

import s from './news-text.module.scss';

interface INewsText {
	nextStep: () => void;
}

export const NewsText: FC<INewsText> = ({ nextStep }) => {
	return (
		<div className={s.newsDetailsInfo}>
			<div className={s.mainContent}>
				<p className={s.title}>Текст новости</p>
				<div className={s.inputWrapper}>
					<Input placeholder='Введите' title='Заголовок новости' req />
					<p className={s.descr}>
						Текст аннотации с рекомендуемым кол-вом символов или про что-то ещё.
					</p>
				</div>
			</div>
			<Button variant='primary' onClick={nextStep}>
				Продолжить
			</Button>
		</div>
	);
};
