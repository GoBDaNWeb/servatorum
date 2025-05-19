import { FC } from 'react';

import s from './textarea.module.scss';

interface ITextarea {
	placeholder: string;
	height?: number;
	onChange?: () => void;
}

export const Textarea: FC<ITextarea> = ({ placeholder, height = 100, onChange }) => {
	return (
		<textarea
			placeholder={placeholder}
			style={{ height: `${height}px` }}
			className={s.textarea}
			onChange={onChange}
		></textarea>
	);
};
