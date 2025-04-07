import { FC } from 'react';

import clsx from 'clsx';

import s from './photo.module.scss';

interface IPhoto {
	className?: string;
	size?: 'l' | 'm';
}

export const Photo: FC<IPhoto> = ({ className, size = 'l' }) => {
	const photoClass = clsx(s.photo, className);
	const imageWrapperClass = clsx(s.imageWrapper, s[size]);

	return (
		<label className={photoClass}>
			<div className={imageWrapperClass}>
				<img src='/images/photo.jpg' alt='photo' />
			</div>
			<p>Изменить фото</p>
			<input type='file' />
		</label>
	);
};
