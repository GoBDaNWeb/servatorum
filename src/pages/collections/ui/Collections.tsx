import { ListFilters } from '@/features/list-filters';

import { Crumbs } from '@/shared/ui';

import { crumbs } from '../config';

import { CollectionList } from './collection-list';
import s from './collections.module.scss';

export const Collections = () => {
	return (
		<main className={s.collectionsPage}>
			<div className='container'>
				<Crumbs links={crumbs} />
				<h1>Сборы</h1>
				<div className={s.collectionContent}>
					<ListFilters />
					<CollectionList />
				</div>
			</div>
		</main>
	);
};
