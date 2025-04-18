import { FC } from 'react';

import { CloseIcon } from '../../icons';
import { Button } from '../button';

import s from './uploaded-photo.module.scss';

interface IUploadedPhoto {
	handleRemoveFile: () => void;
}

export const UploadedPhoto: FC<IUploadedPhoto> = ({ handleRemoveFile }) => {
	return (
		<div className={s.uploadedPhoto}>
			<img src='/images/dog.jpg' alt='photo' />
			<Button variant='clear' className={s.removeFile} onClick={handleRemoveFile}>
				<CloseIcon />
			</Button>
		</div>
	);
};
