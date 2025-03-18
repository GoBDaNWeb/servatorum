import { FondCard } from '@/entities/fond-card';

import { Pagination } from '@/shared/ui';

import { badges } from '../../config';

import s from './fonds-list.module.scss';

export const FondsList = () => {
	return (
		<div className={s.fondsListWrapper}>
			<p className={s.total}>1896 фондов</p>
			<div className={s.fondsList}>
				{[...Array(12)].map((_, index) => (
					<FondCard
						key={index}
						title='Четыре лапы'
						statusBadge='Новый'
						badges={badges}
						img='/images/fond.jpg'
						className={s.fond}
					/>
				))}
			</div>
			<Pagination currentPage={1} totalPages={34} onPageChange={page => console.log(page)} />
		</div>
	);
};
