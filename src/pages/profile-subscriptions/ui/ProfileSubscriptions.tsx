import { useState } from 'react';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { Tab, TabList, Tabs } from '@/shared/ui';

import { crumbs } from '../config';

import s from './profile-subscriptions.module.scss';

export const ProfileSubscriptions = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<ProfileWrapper crumbs={crumbs} title={'Подписки'} className={s.profileNews}>
			<Tabs className={s.tabsContent} value={activeTab} onChange={setActiveTab}>
				<div className={s.tabWrapper}>
					<TabList className={s.tabList}>
						<Tab className={s.tabBtn}>Активные</Tab>
						<Tab className={s.tabBtn}>Отмененные</Tab>
					</TabList>
				</div>
			</Tabs>
		</ProfileWrapper>
	);
};
