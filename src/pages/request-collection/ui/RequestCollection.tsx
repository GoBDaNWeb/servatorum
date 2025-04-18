import { RequestCollectionInfo } from '@/entities/request-collection-info';

import { Button, Crumbs, DocumentIcon, NextOutlineArrow, useModal } from '@/shared/ui';

import { crumbs } from '../config';

import { RequestCollectionMainInfo } from './request-collection-main-info';
import s from './request-collection.module.scss';

export const RequestCollection = () => {
	const { open } = useModal();

	const handleOpenDocumentsModal = () => {
		open('documents');
	};

	return (
		<main className={s.requestCollectionPage}>
			<div className='container'>
				<Crumbs links={crumbs} />
				<div className={s.collectionMain}>
					<RequestCollectionMainInfo />
					<div className={s.collectionInfoWrapper}>
						<div className='sticky-block'>
							<RequestCollectionInfo />
							<Button variant='clear' className={s.documentsBtn} onClick={handleOpenDocumentsModal}>
								<div className={s.icon}>
									<DocumentIcon />
								</div>
								Смотреть документы
								<NextOutlineArrow />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};
