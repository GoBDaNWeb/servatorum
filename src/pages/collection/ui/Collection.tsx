import { Crumbs } from '@/shared/ui';

import { crumbs } from '../config';

import s from './collection.module.scss';

export const Collection = () => {
	return (
		<main className={s.collection}>
			<Crumbs links={crumbs} />
		</main>
	);
};
