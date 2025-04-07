import { Outlet } from 'react-router-dom';

import clsx from 'clsx';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { MobileMenu } from '@/widgets/mobile-menu';
import { Modals } from '@/widgets/modals';
import { ProfileSidebar } from '@/widgets/profile-sidebar';

import s from './profile-layout.module.scss';

export const ProfileLayout = () => {
	return (
		<>
			<Header />
			<MobileMenu />
			<main className={s.profilePage}>
				<div className={clsx(s.profile, 'container')}>
					<Outlet />
					<ProfileSidebar />
				</div>
			</main>
			<Footer />
			<Modals />
		</>
	);
};
