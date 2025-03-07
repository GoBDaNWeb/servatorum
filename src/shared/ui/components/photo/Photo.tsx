import { FC } from 'react';

import clsx from 'clsx';

import s from './photo.module.scss';

interface IPhoto {
	className?: string;
}

export const Photo: FC<IPhoto> = ({ className }) => {
	const photoClass = clsx(s.photo, className);

	return (
		<label className={photoClass}>
			<div className={s.imageWrapper}>
				<img src='/images/photo.jpg' alt='photo' />
			</div>
			<p>Изменить фото</p>
			<input type='file' />
		</label>
	);
};
