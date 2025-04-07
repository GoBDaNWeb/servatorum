import { ListFilters } from '@/features/list-filters';

import { Crumbs } from '@/shared/ui';

import { crumbs } from '../config';

import { FondsList } from './fonds-list';
import s from './fonds.module.scss';

export const Fonds = () => {
	return (
		<main className={s.fondsPage}>
			<div className='container'>
				<Crumbs links={crumbs} />
				<h1>Фонды</h1>
				<div className={s.fondsContent}>
					<ListFilters />
					<FondsList />
				</div>
			</div>
		</main>
	);
};
