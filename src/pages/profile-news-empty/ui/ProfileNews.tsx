import { useState } from 'react';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { Button, NewsIcon, Tab, TabList, TabPanel, Tabs } from '@/shared/ui';

import { crumbs } from '../config';

import s from './profile-news.module.scss';

export const ProfileNewsEmpty = () => {
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
					{/* <ListFilters className={s.profileFilters} /> */}
					<TabPanel index={0} className={s.tabPanel}>
						<div className={s.blockWrapperAlert}>
							<div className={s.icon}>
								<NewsIcon />
							</div>
							<p className={s.title}>Пока ничего нет</p>
							<p className={s.descr}>У вас нет подписок на новости</p>
							<Button variant='primary' size='s'>
								Подписаться
							</Button>
						</div>
					</TabPanel>
					<TabPanel index={1} className={s.tabPanel}>
						<div className={s.blockWrapperAlert}>
							<div className={s.icon}>
								<NewsIcon />
							</div>
							<p className={s.title}>Пока ничего нет</p>
							<p className={s.descr}>У вас нет подписок на новости</p>
							<Button variant='primary' size='s'>
								Подписаться
							</Button>
						</div>
					</TabPanel>
				</div>
			</Tabs>
		</ProfileWrapper>
	);
};
