import { useEffect } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';

import { MainLayout, ProfileLayout } from '@/app/layouts';

import { Collection } from '@/pages/collection';
import { Collections } from '@/pages/collections';
import { Company } from '@/pages/company';
import { FondNews } from '@/pages/fond-news';
import { Fond } from '@/pages/fond/ui/Fond';
import { Fonds } from '@/pages/fonds';
import { Home } from '@/pages/home';
import { Navigation } from '@/pages/navigation';
import { ProfileCards } from '@/pages/profile-cards';
import { ProfileFavourites } from '@/pages/profile-favourites';
import { ProfileFavouritesEmpty } from '@/pages/profile-favourites-empty';
import { ProfileHistory } from '@/pages/profile-history';
import { ProfileNews } from '@/pages/profile-news';
import { ProfileNewsEmpty } from '@/pages/profile-news-empty';
import { ProfileNotifications } from '@/pages/profile-notifications';
import { ProfileNotificationsEmpty } from '@/pages/profile-notifications-empty';
import { ProfileOrganization } from '@/pages/profile-organization';
import { ProfileRequests } from '@/pages/profile-requests';
import { ProfileSettings } from '@/pages/profile-settings';
import { ProfileSubscriptions } from '@/pages/profile-subscriptions';
import { ProfileWallet } from '@/pages/profile-wallet';
import { RequestCollection } from '@/pages/request-collection';
import { Services } from '@/pages/services';

import { PATH_PAGE } from '@/shared/config';
import { useTypedSelector } from '@/shared/lib';

export const Router = () => {
	const location = useLocation();
	const { userData } = useTypedSelector(store => store.user);
	const { fondData } = useTypedSelector(store => store.fond);

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
				},
				{
					path: PATH_PAGE.services,
					element: <Services />
				},
				{
					path: PATH_PAGE.requestCollection,
					element: <RequestCollection />
				}
			]
		},
		{
			element: userData || fondData ? <ProfileLayout /> : <Navigate to={PATH_PAGE.home} replace />,
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
				},
				{
					path: PATH_PAGE.profileFavourites,
					element: <ProfileFavourites />
				},
				{
					path: PATH_PAGE.profileFavouritesEmpty,
					element: <ProfileFavouritesEmpty />
				},
				{
					path: PATH_PAGE.profileHistory,
					element: <ProfileHistory />
				},
				{
					path: PATH_PAGE.profileCards,
					element: <ProfileCards />
				},
				{
					path: PATH_PAGE.profileRequests,
					element: <ProfileRequests />
				},
				{
					path: PATH_PAGE.profileOrganization,
					element: <ProfileOrganization />
				},
				{
					path: PATH_PAGE.profileWallet,
					element: <ProfileWallet />
				}
			]
		}
	]);
};
