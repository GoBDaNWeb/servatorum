import { useState } from 'react';

import { ListFilters } from '@/features/list-filters';

import { NewsCard } from '@/entities/news-card';
import { SubscribeCard } from '@/entities/subscribe-card';

import { Button, NextOutlineArrow, Pagination, Tab, TabList, TabPanel, Tabs } from '@/shared/ui';

import s from '../profile-news.module.scss';

export const UserNews = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<Tabs className={s.tabsContent} value={activeTab} onChange={setActiveTab}>
			<div className={s.tabWrapper}>
				<TabList className={s.tabList}>
					<Tab className={s.tabBtn}>Новости</Tab>
					<Tab className={s.tabBtn}>Подписки</Tab>
				</TabList>
			</div>
			<div className={s.tabPannelWrapper}>
				<ListFilters className={s.profileFilters} />
				<TabPanel index={0} className={s.tabPanel}>
					<div className={s.blockWrapper}>
						<div className={s.block}>
							<p className={s.title}>По подписке</p>
							<div className={s.list}>
								{[...new Array(5)].map((_, index) => (
									<NewsCard img='/images/fond.jpg' key={index} />
								))}
							</div>
							<Pagination
								currentPage={1}
								totalPages={34}
								onPageChange={page => console.log(page)}
								variant='inner'
							/>
						</div>
						<div className={s.block}>
							<p className={s.title}>Рекомендации</p>
							<div className={s.list}>
								{[...new Array(5)].map((_, index) => (
									<NewsCard img='/images/fond.jpg' key={index} />
								))}
							</div>
							<Pagination
								currentPage={1}
								totalPages={34}
								onPageChange={page => console.log(page)}
								variant='inner'
							/>
						</div>
					</div>
				</TabPanel>
				<TabPanel index={1} className={s.tabPanel}>
					<div className={s.blockWrapper}>
						<div className={s.block}>
							<p className={s.title}>902 подписки</p>
							<div className={s.list}>
								{[...new Array(5)].map((_, index) => (
									<SubscribeCard isSubscribed key={index} />
								))}
							</div>
							<Button variant='text' color='purple' className={s.moreBtn}>
								Открыть все 897
								<NextOutlineArrow />
							</Button>
						</div>
						<div className={s.block}>
							<p className={s.title}>Рекомендуем</p>
							<div className={s.list}>
								{[...new Array(5)].map((_, index) => (
									<SubscribeCard key={index} />
								))}
							</div>
							<Button variant='text' color='purple' className={s.moreBtn}>
								Открыть все 897
								<NextOutlineArrow />
							</Button>
						</div>
					</div>
				</TabPanel>
			</div>
		</Tabs>
	);
};
