import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { PATH_PAGE } from '@/shared/config';
import { Tab, TabList, Tabs } from '@/shared/ui';

import { crumbs } from '../config';

import s from './profile-subscriptions.module.scss';

export const ProfileSubscriptions = () => {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<ProfileWrapper crumbs={crumbs} title={'Подписки'} className={s.profileNews}>
			<Tabs className={s.tabsContent} value={activeTab} onChange={setActiveTab}>
				<div className={s.tabWrapper}>
					<TabList className={s.tabList}>
						<Tab className={s.tabBtn}>
							<NavLink to={PATH_PAGE.profileNews}>Новости</NavLink>
						</Tab>
						<Tab className={s.tabBtn}>
							<NavLink to={PATH_PAGE.profileSubscriptions}>Подписки</NavLink>
						</Tab>
					</TabList>
				</div>
			</Tabs>
		</ProfileWrapper>
	);
};
