import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { mainStore } from '../stores';

import { AuthProvider } from './AuthProvider';
import { Router } from './RouterProvider';

export const Provider = () => {
	return (
		<StoreProvider store={mainStore}>
			<BrowserRouter
				future={{
					v7_startTransition: true
				}}
			>
				<AuthProvider>
					<Router />
					<ToastContainer />
				</AuthProvider>
			</BrowserRouter>
		</StoreProvider>
	);
};
