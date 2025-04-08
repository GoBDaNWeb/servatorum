import { useNavigate } from 'react-router-dom';

import { Button, Crumbs } from '@/shared/ui';
import { PrevOutlineArrow } from '@/shared/ui/icons/PrevOutlineArrow';

import { crumbs } from '../config';

import { FondsNewsList } from './fond-news-list';
import s from './fond-news.module.scss';

export const FondNews = () => {
	const navigate = useNavigate();

	return (
		<main className={s.fondsNewsPage}>
			<div className='container'>
				<Crumbs links={crumbs} />
				<div className={s.top}>
					<h1>Новости фонда</h1>
					<Button variant='outline' className={s.backBtn} onClick={() => navigate(-1)}>
						<PrevOutlineArrow />
						Назад на страницу фонда
					</Button>
				</div>
				<FondsNewsList />
			</div>
		</main>
	);
};
