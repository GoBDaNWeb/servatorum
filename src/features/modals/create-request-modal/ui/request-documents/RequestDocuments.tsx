import { FC } from 'react';

import { DocumentItem } from '@/entities/document-item';

import { Button, DocumentIcon } from '@/shared/ui';

import s from './request-documents.module.scss';

interface IRequestDocuments {
	nextStep: () => void;
}

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
