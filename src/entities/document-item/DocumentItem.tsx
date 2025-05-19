import { FC } from 'react';

import clsx from 'clsx';

import { useFileUpload } from '@/shared/lib';
import { UploadFile } from '@/shared/ui';

import { FileItem } from '../file-item';

import s from './document-item.module.scss';

interface IDocumentItem {
	title?: string;
	descr?: string;
}

export const DocumentItem: FC<IDocumentItem> = ({ title, descr }) => {
	const { files, handleFileSelect, removeFile } = useFileUpload();

	const handleRemoveFile = (id: string) => {
		removeFile(id);
	};

	const uploadFileWrapperClass = clsx(s.uploadFileWrapper, {
		[s.single]: !title
	});

	return (
		<div className={s.documentItem}>
			<div className={uploadFileWrapperClass}>
				{title ? (
					<div className={s.text}>
						<p className={s.title}>{title}</p>
						{descr && <p className={s.descr}>{descr}</p>}
					</div>
				) : null}
				<UploadFile handleUploadFile={handleFileSelect} />
			</div>
			{files.length ? (
				<div className={s.filesList}>
					{files.map(file => (
						<FileItem
							key={file.id}
							title={file.name}
							date={file.uploadDate}
							handleRemoveFile={() => handleRemoveFile(file.id)}
							className={s.file}
						/>
					))}
				</div>
			) : null}
		</div>
	);
};
