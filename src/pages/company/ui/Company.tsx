import { SwiperSlide } from 'swiper/react';

import { InfinitySwiper } from '@/widgets/infinity-swiper';

import { FondInfo } from '@/entities/fond-info';
import { NewsCardAlert } from '@/entities/news-card-alert';
import { ServiceCard } from '@/entities/service-card';

import { PATH_PAGE } from '@/shared/config';
import { cropLink } from '@/shared/lib';
import { Crumbs } from '@/shared/ui';

import { crumbs } from '../config';

import { CompanyMainInfo } from './company-main-info';
import s from './company.module.scss';

export const Company = () => {
	return (
		<div className={s.companyPage}>
			<div className='container'>
				<Crumbs links={crumbs} />
				<div className={s.companyMain}>
					<CompanyMainInfo />
					<div className={s.fondInfoWrapper}>
						<div className='sticky-block'>
							<FondInfo />
						</div>
					</div>
				</div>
			</div>
			<InfinitySwiper title='Услуги' topLink href={cropLink(PATH_PAGE.fondNews, 10)}>
				{[...Array(10)].map((_, index) => (
					<SwiperSlide key={index}>
						<ServiceCard />
					</SwiperSlide>
				))}
			</InfinitySwiper>
			<InfinitySwiper title='Новости компании' topLink href={cropLink(PATH_PAGE.fondNews, 10)}>
				{[...Array(10)].map((_, index) => (
					<SwiperSlide key={index}>
						<NewsCardAlert
							className={s.news}
							img='/images/home/hero/cat.jpg'
							date='22.07.2023'
							title='Корм для животных в рамках акции “Не все равно”'
							views='999'
						/>
					</SwiperSlide>
				))}
			</InfinitySwiper>
		</div>
	);
};
