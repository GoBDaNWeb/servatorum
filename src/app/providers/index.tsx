import { BrowserRouter } from 'react-router-dom';

import { Router } from './RouterProvider';

export const Provider = () => {
	return (
		<BrowserRouter
			future={{
				v7_startTransition: true
			}}
		>
			<Router />
		</BrowserRouter>
	);
};
