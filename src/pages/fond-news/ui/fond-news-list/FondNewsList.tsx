import { NewsCardAlert } from '@/entities/news-card-alert';

import { Pagination } from '@/shared/ui';

import s from './fond-news-list.module.scss';

export const FondsNewsList = () => {
	return (
		<div className={s.fondsNewsListWrapper}>
			<div className={s.fondsNewsList}>
				{[...new Array(12)].map((_, index) => (
					<NewsCardAlert
						className={s.news}
						img='/images/home/hero/cat.jpg'
						date='22.07.2023'
						title='Корм для животных в рамках акции “Не все равно”'
						views='999'
						key={index}
					/>
				))}
			</div>
			<Pagination currentPage={1} totalPages={34} onPageChange={page => console.log(page)} />
		</div>
	);
};
