import { useState } from 'react';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { ListFilters } from '@/features/list-filters';

import { Pagination, Tab, TabList, TabPanel, Tabs } from '@/shared/ui';

import { crumbs } from '../config';

import s from './profile-news.module.scss';

export const ProfileNews = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<ProfileWrapper crumbs={crumbs} title={'Новости'} className={s.profileNews}>
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
								<div className={s.list}></div>
								<Pagination
									currentPage={1}
									totalPages={34}
									onPageChange={page => console.log(page)}
								/>
							</div>
						</div>
					</TabPanel>
					<TabPanel index={1} className={s.tabPanel}>
					<div className={s.blockWrapper}>
							<div className={s.block}>
								<p className={s.title}>902 подписки</p>
								<div className={s.list}></div>
								<Pagination
									currentPage={1}
									totalPages={34}
									onPageChange={page => console.log(page)}
								/>
							</div>
						</div>
					</TabPanel>
				</div>
			</Tabs>
		</ProfileWrapper>
	);
};
