import clsx from 'clsx';

import { CollectingSwiper } from '@/entities/collecting-swiper';

import { CollectingInfo } from '@/entities/collecting-info';

import { Button, Crumbs, DocumentIcon, NextOutlineArrow } from '@/shared/ui';

import { crumbs } from '../config';

import { CollectionMainInfo } from './collection-info';
import s from './collection.module.scss';

export const Collection = () => {
	const collectionMainClass = clsx(s.collectionMain, 'container');

	return (
		<main className={s.collectionPage}>
			<Crumbs links={crumbs} />
			<div className={collectionMainClass}>
				<CollectionMainInfo />
				<div className={s.collectionInfoWrapper}>
					<div className='sticky-block'>
						<CollectingInfo />
						<Button variant='clear' className={s.documentsBtn}>
							<div className={s.icon}>
								<DocumentIcon />
							</div>
							Смотреть документы
							<NextOutlineArrow />
						</Button>
					</div>
				</div>
			</div>
			<CollectingSwiper title='Смотрите также' />
		</main>
	);
};
