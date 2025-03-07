import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { MobileMenu } from '@/widgets/mobile-menu';

import { RegisterModal } from '@/features/register-modal';

export const MainLayout = () => {
	return (
		<>
			<Header />
			<MobileMenu />
			<Outlet />
			<Footer />
			<RegisterModal />
		</>
	);
};
