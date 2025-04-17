import { useState } from 'react';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { RequestCard } from '@/entities/request-card';

import { Tab, TabList, TabPanel, Tabs } from '@/shared/ui';

import { crumbs } from '../config';

import s from './profile-requests.module.scss';

export const ProfileRequests = () => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<ProfileWrapper crumbs={crumbs} title={'Мои заявки'} className={s.profileRequests}>
			<Tabs className={s.tabsContent} value={activeTab} onChange={setActiveTab}>
				<div className={s.tabWrapper}>
					<TabList className={s.tabList}>
						<Tab className={s.tabBtn}>Мои заявки</Tab>
						<Tab className={s.tabBtn}>Опубликованные</Tab>
						<Tab className={s.tabBtn}>Завершенные</Tab>
						<Tab className={s.tabBtn}>Отмененные</Tab>
						<Tab className={s.tabBtn}>Черновики</Tab>
					</TabList>
				</div>
				<div className={s.tabPannelWrapper}>
					<TabPanel index={0} className={s.tabPanel}>
						{[...new Array(2)].map((_, index) => (
							// TODO: Заменить key={index} когда будет апи
							<RequestCard
								key={index}
								status='carpet'
								imgs={[
									'/images/home/donation/slide.jpg',
									'/images/home/donation/slide2.jpg',
									'/images/home/donation/slide3.jpg'
								]}
							/>
						))}
					</TabPanel>
					<TabPanel index={1} className={s.tabPanel}>
						{[...new Array(1)].map((_, index) => (
							// TODO: Заменить key={index} когда будет апи
							<RequestCard
								key={index}
								status='publish'
								imgs={[
									'/images/home/donation/slide.jpg',
									'/images/home/donation/slide2.jpg',
									'/images/home/donation/slide3.jpg'
								]}
							/>
						))}
					</TabPanel>
					<TabPanel index={2} className={s.tabPanel}>
						{[...new Array(1)].map((_, index) => (
							// TODO: Заменить key={index} когда будет апи
							<RequestCard
								key={index}
								status='complete'
								imgs={[
									'/images/home/donation/slide.jpg',
									'/images/home/donation/slide2.jpg',
									'/images/home/donation/slide3.jpg'
								]}
							/>
						))}
					</TabPanel>
					<TabPanel index={3} className={s.tabPanel}>
						{[...new Array(1)].map((_, index) => (
							// TODO: Заменить key={index} когда будет апи
							<RequestCard
								key={index}
								status='reject'
								imgs={[
									'/images/home/donation/slide.jpg',
									'/images/home/donation/slide2.jpg',
									'/images/home/donation/slide3.jpg'
								]}
							/>
						))}
					</TabPanel>
					<TabPanel index={4} className={s.tabPanel}>
						{[...new Array(1)].map((_, index) => (
							// TODO: Заменить key={index} когда будет апи
							<RequestCard
								key={index}
								status='draft'
								imgs={[
									'/images/home/donation/slide.jpg',
									'/images/home/donation/slide2.jpg',
									'/images/home/donation/slide3.jpg'
								]}
							/>
						))}
					</TabPanel>
				</div>
			</Tabs>
		</ProfileWrapper>
	);
};
