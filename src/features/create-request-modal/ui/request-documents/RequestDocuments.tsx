import { FC } from 'react';

import { FileItem } from '@/entities/file-item';

import { useFileUpload } from '@/shared/lib';
import { Button, DocumentIcon, UploadFile } from '@/shared/ui';

import s from './request-documents.module.scss';

interface IRequestDocuments {
	nextStep: () => void;
}
interface DocumentItem {
	title: string;
	descr?: string;
}

const DocumentItem: FC<DocumentItem> = ({ title, descr }) => {
	const { files, handleFileSelect, removeFile } = useFileUpload();

	const handleRemoveFile = (id: string) => {
		removeFile(id);
	};
	return (
		<div className={s.documentItem}>
			<div className={s.uploadFileWrapper}>
				<div className={s.text}>
					<p className={s.title}>{title}</p>
					{descr && <p className={s.descr}>{descr}</p>}
				</div>
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

export const RequestDocuments: FC<IRequestDocuments> = ({ nextStep }) => {
	return (
		<div className={s.requestDocuments}>
			<div className={s.mainContent}>
				<p className={s.title}>Документы</p>
				<div className={s.documentsWrapper}>
					<div className={s.title}>
						<div className={s.icon}>
							<DocumentIcon />
						</div>
						Обязательные
					</div>
					<div className={s.documents}>
						<DocumentItem
							title='Паспорт благополучателя'
							descr='Все заполненные страницы паспорта создателя сбора'
						/>
						<DocumentItem title='Свидетельство о рождении ребенка' />
					</div>
				</div>
				<div className={s.documentsWrapper}>
					<div className={s.title}>
						<div className={s.icon}>
							<DocumentIcon />
						</div>
						Другие документы
					</div>
					<div className={s.documents}>
						<DocumentItem title='Свидетельство о рождении ребенка' />
					</div>
				</div>
			</div>
			<Button variant='primary' onClick={nextStep}>
				Продолжить
			</Button>
		</div>
	);
};
