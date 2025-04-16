import { useState } from 'react';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { DonationInfo } from '@/features/donation-info';
import { Sort } from '@/features/sort';

import { CollectingCard } from '@/entities/collecting-card';
import { FondCard } from '@/entities/fond-card';

import { PATH_PAGE } from '@/shared/config';
import { cropLink } from '@/shared/lib';
import { Tab, TabList, TabPanel, Tabs, useModal } from '@/shared/ui';

import { badges, crumbs, sortList } from '../config';

import s from './profile-favourites.module.scss';

export const ProfileFavourites = () => {
	const [activeTab, setActiveTab] = useState(0);
	const [selectedSort, setSelectedSort] = useState(sortList[0]);

	const { open } = useModal();

	const handleOpenDonationModal = () => {
		open('donation');
	};

	return (
		<ProfileWrapper crumbs={crumbs} title={'Избранное'} className={s.profileFavourites}>
			<Tabs className={s.tabsContent} value={activeTab} onChange={setActiveTab}>
				<div className={s.tabWrapper}>
					<TabList className={s.tabList}>
						<Tab className={s.tabBtn}>Сборы</Tab>
						<Tab className={s.tabBtn}>Фонды</Tab>
					</TabList>
				</div>
				<div className={s.tabPannelWrapper}>
					<TabPanel index={0} className={s.tabPanel}>
						<Sort
							sortList={sortList}
							selectedSort={selectedSort}
							setSelectedSort={setSelectedSort}
						/>
						<div className={s.list}>
							{[...new Array(3)].map((_, index) => (
								//TODO: убрать key={index} когда будет апи
								<CollectingCard
									key={index}
									title='Кошачьему приюту необходимо оборудование которое позволит содержать животных в чистоте и комфорте'
									size='m'
									type='row'
									className={s.collecting}
									imgs={[
										'/images/home/donation/slide.jpg',
										'/images/home/donation/slide2.jpg',
										'/images/home/donation/slide3.jpg'
									]}
									userImg='/images/home/donation/user.jpg'
									userName='Четыре лапы'
									userDate='00.00.0000'
									sum='0'
									total='100 000'
									badgeColor='gold'
									badge={
										<>
											<img src='/images/icons/clock-gold.svg' alt='' />
											<span>31 день</span>
											<p>до завершения</p>
										</>
									}
									isPopular
									hasLink
									donationInfo={<DonationInfo />}
									openDonationModal={handleOpenDonationModal}
									isFavourites
								/>
							))}
						</div>
					</TabPanel>
					<TabPanel index={1} className={s.tabPanel}>
						<div className={s.list}>
							{[...Array(12)].map((_, index) => (
								<FondCard
									key={index}
									title='Четыре лапы'
									statusBadge='Новый'
									badges={badges}
									img='/images/fond.jpg'
									className={s.fond}
									href={cropLink(PATH_PAGE.fond, 10)}
									isFavourites
								/>
							))}
						</div>
					</TabPanel>
				</div>
			</Tabs>
		</ProfileWrapper>
	);
};
