import { useState } from 'react';

import clsx from 'clsx';

import { NewsCard } from '@/entities/news-card';

import { Button, ClockIcon, Tab, TabList, TabPanel, Tabs, useModal } from '@/shared/ui';

import s from '../profile-news.module.scss';

export const FondNews = () => {
	const [activeTab, setActiveTab] = useState(0);
	const { open } = useModal();

	const handleOpenCreateNewsModal = () => {
		open('create-news');
	};

	const tabPannelWrapperClass = clsx(s.tabPannelWrapper, s.row);

	return (
		<Tabs className={s.tabsContent} value={activeTab} onChange={setActiveTab}>
			<div className={s.tabWrapper}>
				<TabList className={s.tabList}>
					<Tab className={s.tabBtn}>
						Опубликованные <span>130</span>
					</Tab>
					<Tab className={s.tabBtn}>Отложенные</Tab>
					<Tab className={s.tabBtn}>Черновики</Tab>
				</TabList>
				<Button variant='primary' className={s.addNewsBtn} onClick={handleOpenCreateNewsModal}>
					<img src='/images/icons/plus.svg' alt='plus' />
					Добавить новость
				</Button>
			</div>
			<div className={tabPannelWrapperClass}>
				<TabPanel index={0} className={s.tabPanel}>
					<div className={s.list}>
						{[...new Array(5)].map((_, index) => (
							<NewsCard img='/images/fond.jpg' key={index} isOwn />
						))}
					</div>
				</TabPanel>
				<TabPanel index={1} className={s.tabPanel}>
					<div className={s.blockWrapper}>
						<div className={s.block}>
							<p className={s.title}>
								<ClockIcon />
								02 апреля 2025
							</p>
							<div className={s.list}>
								{[...new Array(3)].map((_, index) => (
									<NewsCard img='/images/fond.jpg' key={index} isOwn />
								))}
							</div>
						</div>
						<div className={s.block}>
							<p className={s.title}>
								<ClockIcon />
								02 апреля 2025
							</p>
							<div className={s.list}>
								{[...new Array(1)].map((_, index) => (
									<NewsCard img='/images/fond.jpg' key={index} isOwn />
								))}
							</div>
						</div>
						<div className={s.block}>
							<p className={s.title}>
								<ClockIcon />
								02 апреля 2025
							</p>
							<div className={s.list}>
								{[...new Array(1)].map((_, index) => (
									<NewsCard img='/images/fond.jpg' key={index} isOwn />
								))}
							</div>
						</div>
					</div>
				</TabPanel>
				<TabPanel index={2} className={s.tabPanel}>
					<div className={s.list}>
						{[...new Array(5)].map((_, index) => (
							<NewsCard img='/images/fond.jpg' key={index} isOwn isDraft />
						))}
					</div>
				</TabPanel>
			</div>
		</Tabs>
	);
};
