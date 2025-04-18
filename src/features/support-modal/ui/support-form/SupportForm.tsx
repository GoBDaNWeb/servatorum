import { FC } from 'react';

import { FileItem } from '@/entities/file-item';

import { useFileUpload } from '@/shared/lib';
import { Button, Selector, Textarea, UploadFile } from '@/shared/ui';

import { supportTheme } from '../../config';

import s from './support-form.module.scss';

interface ISupportForm {
	nextStep: () => void;
}

export const SupportForm: FC<ISupportForm> = ({ nextStep }) => {
	const { files, handleFileSelect, removeFile } = useFileUpload();
	const handleRemoveFile = (id: string) => {
		removeFile(id);
	};

	return (
		<div className={s.supportForm}>
			<div className={s.mainContent}>
				<p className={s.title}>Обращение в поддержку</p>
				<div className={s.selectorWrapper}>
					<p className={s.wrapperTitle}>
						Тема<span>*</span>
					</p>
					<Selector name='support-theme' options={supportTheme} placeholder='Выберите тему' />
				</div>
				<div className={s.textareaWrapper}>
					<p className={s.wrapperTitle}>
						Сообщение<span>*</span>
					</p>
					<Textarea placeholder='Введите текст' height={196} />
				</div>
				<div className={s.uploadWrapper}>
					<p className={s.wrapperTitle}>Прикрепить файл</p>
					<UploadFile handleUploadFile={handleFileSelect} />
				</div>
				<div className={s.filesList}>
					{files.length
						? files.map(file => (
								<FileItem
									key={file.id}
									title={file.name}
									date={file.uploadDate}
									handleRemoveFile={() => handleRemoveFile(file.id)}
								/>
							))
						: null}
				</div>
			</div>
			<Button variant='primary' className={s.sendBtn} onClick={nextStep}>
				Отправить
			</Button>
		</div>
	);
};
