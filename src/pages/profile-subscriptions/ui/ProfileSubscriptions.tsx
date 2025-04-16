import { useState } from 'react';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { SubscribeCard } from '@/entities/subscribe-card';

import { Tab, TabList, TabPanel, Tabs } from '@/shared/ui';

import { crumbs, subscribeCard1, subscribeCard2 } from '../config';

import s from './profile-subscriptions.module.scss';

export const ProfileSubscriptions = () => {
	const [activeTab, setActiveTab] = useState(0);

	return (
		<ProfileWrapper crumbs={crumbs} title={'Подписки'} className={s.profileSubscriptions}>
			<Tabs className={s.tabsContent} value={activeTab} onChange={setActiveTab}>
				<div className={s.tabWrapper}>
					<TabList className={s.tabList}>
						<Tab className={s.tabBtn}>Активные</Tab>
						<Tab className={s.tabBtn}>Отмененные</Tab>
					</TabList>
				</div>
				<div className={s.tabPannelWrapper}>
					<TabPanel index={0} className={s.tabPanel}>
						<div className={s.list}>
							{subscribeCard1.map((card, index) => (
								<SubscribeCard
									key={index}
									configurable
									isChecked
									date={card.date}
									card={card.card}
									price={card.price}
									className={s.subscribeCard}
								/>
							))}
						</div>
					</TabPanel>
					<TabPanel index={1} className={s.tabPanel}>
						<div className={s.list}>
							{subscribeCard2.map((card, index) => (
								<SubscribeCard
									key={index}
									configurable
									date={card.date}
									card={card.card}
									price={card.price}
									className={s.subscribeCard}
								/>
							))}
						</div>
					</TabPanel>
				</div>
			</Tabs>
		</ProfileWrapper>
	);
};
