import { useState } from 'react';

import { ProfileEmpty } from '@/widgets/profile-empty/ui/ProfileEmpty';
import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { NewsIcon, Tab, TabList, TabPanel, Tabs } from '@/shared/ui';

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
					<TabPanel index={0} className={s.tabPanel}>
						<ProfileEmpty
							icon={<NewsIcon />}
							title='Пока ничего нет'
							descr='У вас нет подписок на новости'
							btnText='Подписаться'
						/>
					</TabPanel>
					<TabPanel index={1} className={s.tabPanel}>
						<ProfileEmpty
							icon={<NewsIcon />}
							title='Пока ничего нет'
							descr='У вас нет подписок на новости'
							btnText='Подписаться'
						/>
					</TabPanel>
				</div>
			</Tabs>
		</ProfileWrapper>
	);
};
