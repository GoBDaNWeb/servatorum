import { useEffect } from 'react';
import { useLocation, useRoutes } from 'react-router-dom';

import { MainLayout } from '@/app/layouts';

import { Collection } from '@/pages/collection';
import { Collections } from '@/pages/collections';
import { Home } from '@/pages/home';

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
				}
			]
		}
	]);
};
