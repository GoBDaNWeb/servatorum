import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProfileEmpty } from '@/widgets/profile-empty';
import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { PATH_PAGE } from '@/shared/config';
import { AlbumIcon, HomeIcon, Tab, TabList, TabPanel, Tabs } from '@/shared/ui';

import { crumbs } from '../config';

import s from './profile-favourites.module.scss';

export const ProfileFavouritesEmpty = () => {
	const [activeTab, setActiveTab] = useState(0);
	const navigate = useNavigate();

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
						<ProfileEmpty
							icon={<AlbumIcon />}
							title='Пока ничего нет'
							descr='У вас нет сборов в избранном'
							btnText='К сборам'
							btnLink={() => navigate(PATH_PAGE.collections)}
						/>
					</TabPanel>
					<TabPanel index={1} className={s.tabPanel}>
						<ProfileEmpty
							icon={<HomeIcon />}
							title='Пока ничего нет'
							descr='У вас нет фондов в избранном'
							btnText='К фондам'
							btnLink={() => navigate(PATH_PAGE.fonds)}
						/>
					</TabPanel>
				</div>
			</Tabs>
		</ProfileWrapper>
	);
};
