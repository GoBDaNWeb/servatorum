import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { MainLayout, ProfileLayout } from '@/app/layouts';

import { Collection } from '@/pages/collection';
import { Collections } from '@/pages/collections';
import { Fond } from '@/pages/fond/ui/Fond';
import { Fonds } from '@/pages/fonds';
import { Home } from '@/pages/home';
import { Navigation } from '@/pages/navigation';
import { ProfileNews } from '@/pages/profile-news';
import { ProfileNotifications } from '@/pages/profile-notifications';
import { ProfileNotificationsEmpty } from '@/pages/profile-notifications-empty';
import { ProfileSettings } from '@/pages/profile-settings';

import { PATH_PAGE } from '@/shared/config';

export const Router = () => {
	const location = useLocation();

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
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
				}
			]
		}
	]);
};
