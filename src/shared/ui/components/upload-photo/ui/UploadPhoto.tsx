import { FC } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

import clsx from 'clsx';

import s from './upload-photo.module.scss';

interface IPhoto {
	className?: string;
	size?: 'l' | 'm';
	title?: string;
	id?: string;
	required?: boolean;
	register?: UseFormRegister<FieldValues>;
	onChange?: any;
	value?: any;
}

export const UploadPhoto: FC<IPhoto> = ({
	className,
	size = 'l',
	title = 'Изменить фото',
	onChange,
	value
}) => {
	const photoClass = clsx(s.uploadPhoto, className);
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
			<input type='file' accept='image/*' onChange={onChange} value={value} />
		</label>
	);
};
