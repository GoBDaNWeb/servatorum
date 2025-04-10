import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { MainLayout, ProfileLayout } from '@/app/layouts';

import { Collection } from '@/pages/collection';
import { Collections } from '@/pages/collections';
import { Company } from '@/pages/company';
import { FondNews } from '@/pages/fond-news';
import { Fond } from '@/pages/fond/ui/Fond';
import { Fonds } from '@/pages/fonds';
import { Home } from '@/pages/home';
import { Navigation } from '@/pages/navigation';
import { ProfileNews } from '@/pages/profile-news';
import { ProfileNewsEmpty } from '@/pages/profile-news-empty';
import { ProfileNotifications } from '@/pages/profile-notifications';
import { ProfileNotificationsEmpty } from '@/pages/profile-notifications-empty';
import { ProfileSettings } from '@/pages/profile-settings';
import { ProfileSubscriptions } from '@/pages/profile-subscriptions';

import { PATH_PAGE } from '@/shared/config';

export const Router = () => {
	const location = useLocation();

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'instant'
			});
		}, 0);
	}, [location]);
	return useRoutes([
		{
			element: <MainLayout />,
			children: [
				{
					path: PATH_PAGE.home,
					element: <Home />
				},
				{
					path: PATH_PAGE.collections,
					element: <Collections />
				},
				{
					path: PATH_PAGE.collection,
					element: <Collection />
				},
				{
					path: PATH_PAGE.fonds,
					element: <Fonds />
				},
				{
					path: PATH_PAGE.fond,
					element: <Fond />
				},
				{
					path: PATH_PAGE.fondNews,
					element: <FondNews />
				},
				{
					path: PATH_PAGE.company,
					element: <Company />
				},
				{
					path: PATH_PAGE.navigation,
					element: <Navigation />
				}
			]
		},
		{
			element: <ProfileLayout />,
			children: [
				{
					path: PATH_PAGE.profileSettings,
					element: <ProfileSettings />
				},
				{
					path: PATH_PAGE.profileNotifications,
					element: <ProfileNotifications />
				},
				{
					path: PATH_PAGE.profileNotificationsEmpty,
					element: <ProfileNotificationsEmpty />
				},
				{
					path: PATH_PAGE.profileNews,
					element: <ProfileNews />
				},
				{
					path: PATH_PAGE.profileNewsEmpty,
					element: <ProfileNewsEmpty />
				},
				{
					path: PATH_PAGE.profileSubscriptions,
					element: <ProfileSubscriptions />
				}
			]
		}
	]);
};
