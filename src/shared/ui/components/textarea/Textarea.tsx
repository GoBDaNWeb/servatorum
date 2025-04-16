import { FC } from 'react';

import s from './textarea.module.scss';

interface ITeaxtarea {
	placeholder: string;
	height?: number;
}

export const Teaxtarea: FC<ITeaxtarea> = ({ placeholder, height = 100 }) => {
	return (
		<textarea
			placeholder={placeholder}
			style={{ height: `${height}px` }}
			className={s.textarea}
		></textarea>
	);
};
