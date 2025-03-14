import clsx from 'clsx';

import { ListFilters } from '@/features/list-filters';

import { Crumbs } from '@/shared/ui';

import { crumbs } from '../config';

import { CollectionList } from './collection-list';
import s from './collections.module.scss';

export const Collections = () => {
	const collectionContentClass = clsx(s.collectionContent, 'container');

	return (
		<main className={s.collectionsPage}>
			<Crumbs links={crumbs} />
			<h1 className='container'>Сборы</h1>
			<div className={collectionContentClass}>
				<ListFilters />
				<CollectionList />
			</div>
		</main>
	);
};
