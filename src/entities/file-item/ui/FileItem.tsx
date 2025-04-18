import { FC } from 'react';

import clsx from 'clsx';

import { Button, CloseIcon, DocumentIcon } from '@/shared/ui';

import s from './file-item.module.scss';

interface IFileItem {
	className?: string;
	title: string;
	date: string;
	handleRemoveFile: () => void;
}

export const FileItem: FC<IFileItem> = ({ className, title, date, handleRemoveFile }) => {
	const fileItemClass = clsx(s.fileItem, className);

	return (
		<div className={fileItemClass}>
			<div className={s.content}>
				<div className={s.icon}>
					<DocumentIcon />
				</div>
				<div className={s.text}>
					<p className={s.title}>{title}</p>
					<p className={s.date}>{date}</p>
				</div>
			</div>
			<Button variant='clear' className={s.removeFile} onClick={handleRemoveFile}>
				<CloseIcon />
			</Button>
		</div>
	);
};
