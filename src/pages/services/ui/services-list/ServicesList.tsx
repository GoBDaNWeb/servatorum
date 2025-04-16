import { ServiceCard } from '@/entities/service-card';

import { Pagination } from '@/shared/ui';

import s from './services-list.module.scss';

export const ServicesList = () => {
	return (
		<div className={s.servicesListWrapper}>
			<p className={s.total}>1896 услуг</p>
			<div className={s.servicesList}>
				{[...Array(12)].map((_, index) => (
					<ServiceCard key={index} hasAuthor />
				))}
			</div>
			<Pagination currentPage={1} totalPages={34} onPageChange={page => console.log(page)} />
		</div>
	);
};
