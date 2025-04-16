import { ListFilters } from '@/features/list-filters';

import { Crumbs } from '@/shared/ui';

import { crumbs } from '../config';

import { ServicesList } from './services-list';
import s from './services.module.scss';

export const Services = () => {
	return (
		<main className={s.servicesPage}>
			<div className='container'>
				<Crumbs links={crumbs} />
				<h1>Услуги</h1>
				<div className={s.servicesContent}>
					<ListFilters />
					<ServicesList />
				</div>
			</div>
		</main>
	);
};
