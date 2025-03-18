import { FC } from 'react';

import { DocumentIcon } from '@/shared/ui';

import s from './document-download-card.module.scss';

interface IDocumentsDownloadCard {
	title: string;
	type: string;
	date: string;
	size: string;
}

export const DocumentsDownloadCard: FC<IDocumentsDownloadCard> = ({ title, type, date, size }) => {
	return (
		<a href='#' download className={s.documentDownloadCard}>
			<DocumentIcon />
			<div className={s.documentDownloadCardContent}>
				<p className={s.title}>{title}</p>
				<div className={s.documentInfo}>
					<p>{type}</p>
					<p>{date}</p>
					<p>{size}</p>
				</div>
			</div>
		</a>
	);
};
