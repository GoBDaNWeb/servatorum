import { FC } from 'react';

import clsx from 'clsx';

import s from './photo.module.scss';

interface IPhoto {
	className?: string;
	size?: 'l' | 'm';
	title?: string;
}

export const Photo: FC<IPhoto> = ({ className, size = 'l', title = 'Изменить фото' }) => {
	const photoClass = clsx(s.photo, className);
	const imageWrapperClass = clsx(s.imageWrapper, s[size]);

	return (
		<label className={photoClass}>
			<div className={imageWrapperClass}>
				<img src='/images/photo.jpg' alt='photo' />
			</div>
			<div className={s.textWrapper}>
				<p className={s.title}>{title}</p>
				<p className={s.descr}>
					Рекомендуемый размер 56х56px <br />
					Формат JPG, PNG, SVG
				</p>
			</div>
			<input type='file' />
		</label>
	);
};
