import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { DocumentsDownloadCard } from '@/entities/document-download-card';

import { useTypedSelector } from '@/shared/lib';
import { Button, CloseIcon, Modal } from '@/shared/ui';

import { setOpenModal } from '../model';

import s from './documents-modal.module.scss';

export const DocumentsModal = () => {
	const { isOpen } = useTypedSelector(store => store.documentsModal);
	const dispatch = useDispatch();

	const handleCloseModal = () => {
		dispatch(setOpenModal(false));
	};

	const modalContentClass = clsx(s.modalContentWrapper, 'modal-content');

	return (
		<Modal isOpen={isOpen} className={s.documentsModal} close={handleCloseModal}>
			<div className={modalContentClass} onClick={e => e.stopPropagation()}>
				<div className={s.modalContentTop}>
					<Button className={s.closeBtn} onClick={handleCloseModal}>
						<CloseIcon />
					</Button>
				</div>
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
			</div>
		</Modal>
	);
};
