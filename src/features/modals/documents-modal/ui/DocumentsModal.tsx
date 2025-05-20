import clsx from 'clsx';

import { DocumentsDownloadCard } from '@/entities/document-download-card';

import { Button, CloseIcon, Modal, useModal } from '@/shared/ui';

import s from './documents-modal.module.scss';

export const DocumentsModal = () => {
	const { close, currentModal } = useModal();

	const handleCloseModal = () => {
		close();
	};

	const contentTop = (
		<>
			<Button className={clsx(s.closeBtn, 'closeBtn')} onClick={handleCloseModal}>
				<CloseIcon />
			</Button>
		</>
	);

	return (
		<Modal
			isOpen={currentModal === 'documents'}
			className={s.documentsModal}
			close={handleCloseModal}
			contentTop={contentTop}
		>
			<div className={s.modalContent}>
				<p className={s.title}>Документы</p>
				<div className={s.documentsListWrapper}>
					<p className={s.subTitle}>Паспорт автора сбора</p>
					<div className={s.documentsList}>
						{[...Array(4)].map((_, index) => (
							<DocumentsDownloadCard
								key={index}
								title='Паспорт_Константинопольская_с 1'
								type='PNG'
								date='2 нояб'
								size='945кб'
							/>
						))}
					</div>
				</div>
				<div className={s.documentsListWrapper}>
					<p className={s.subTitle}>Свидетельство</p>
					<div className={s.documentsList}>
						{[...Array(2)].map((_, index) => (
							<DocumentsDownloadCard
								key={index}
								title='Свидетельство'
								type='PNG'
								date='2 нояб'
								size='945кб'
							/>
						))}
					</div>
				</div>
				<div className={s.documentsListWrapper}>
					<p className={s.subTitle}>Другие документы</p>
					<div className={s.documentsList}>
						{[...Array(1)].map((_, index) => (
							<DocumentsDownloadCard
								key={index}
								title='Заголовок другого документа'
								type='PNG'
								date='2 нояб'
								size='945кб'
							/>
						))}
					</div>
				</div>
			</div>
		</Modal>
	);
};
