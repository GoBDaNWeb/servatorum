import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { MobileMenu } from '@/widgets/mobile-menu';
import { Modals } from '@/widgets/modals';

export const MainLayout = () => {
	return (
		<>
			<Header />
			<MobileMenu />
			<Outlet />
			<Footer />
			<Modals />
		</>
	);
};
