import { useRoutes } from 'react-router-dom';

import { MainLayout } from '@/app/layouts';

import { Home } from '@/pages/home';

import { PATH_PAGE } from '@/shared/config';

export const Router = () => {
	return useRoutes([
		{
			element: <MainLayout />,
			children: [
				{
					path: PATH_PAGE.home,
					element: <Home />
				}
			]
		}
	]);
};
