import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { MobileMenu } from '@/widgets/mobile-menu';

import { DocumentsModal } from '@/features/documents-modal/ui/DocumentsModal';
import { DonationModal } from '@/features/donation-modal';
import { RegisterModal } from '@/features/register-modal';
import { SupportFondModal } from '@/features/support-fond-modal';

export const MainLayout = () => {
	return (
		<>
			<Header />
			<MobileMenu />
			<Outlet />
			<Footer />
			<RegisterModal />
			<DocumentsModal />
			<DonationModal />
			<SupportFondModal />
		</>
	);
};
