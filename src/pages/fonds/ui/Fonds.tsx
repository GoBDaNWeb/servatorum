import clsx from 'clsx';

import { ListFilters } from '@/features/list-filters';

import { Crumbs } from '@/shared/ui';

import { crumbs } from '../config';

import { FondsList } from './fonds-list';
import s from './fonds.module.scss';

export const Fonds = () => {
	const fondsContentClass = clsx(s.fondsContent, 'container');

	return (
		<div className={s.fondsPage}>
			<Crumbs links={crumbs} />
			<h1 className='container'>Фонды</h1>
			<div className={fondsContentClass}>
				<ListFilters />
				<FondsList />
			</div>
		</div>
	);
};
