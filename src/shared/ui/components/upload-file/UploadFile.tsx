import { ChangeEvent, FC } from 'react';

import { Button } from '../button';

import s from './upload-file.module.scss';

interface IUploadFile {
	handleUploadFile: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const UploadFile: FC<IUploadFile> = ({ handleUploadFile }) => {
	return (
		<div className={s.uploadFile}>
			<Button variant='clear' className={s.uploadBtn}>
				<img src='/images/icons/upload-file.svg' alt='upload-file' />
				Выбрать файл
				<input type='file' onChange={handleUploadFile} />
			</Button>
		</div>
	);
};
