import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
				<ToastContainer />
			</BrowserRouter>
		</StoreProvider>
	);
};
