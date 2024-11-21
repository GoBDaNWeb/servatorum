import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { mainStore } from '../stores';

import { Router } from './RouterProvider';

export const Provider = () => {
	return (
		<StoreProvider store={mainStore}>
			<BrowserRouter
				future={{
					v7_startTransition: true
				}}
			>
				<Router />
			</BrowserRouter>
		</StoreProvider>
	);
};
