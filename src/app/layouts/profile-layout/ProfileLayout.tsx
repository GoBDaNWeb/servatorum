import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { MobileMenu } from '@/widgets/mobile-menu';
import { Modals } from '@/widgets/modals';
import { ProfileSidebar } from '@/widgets/profile-sidebar';

import { PATH_PAGE } from '@/shared/config';
import { BackOutlineArrow, Button } from '@/shared/ui';

import s from './profile-layout.module.scss';

export const ProfileLayout = () => {
	// TODO: временная кнопка удалить потом
	const [hidden, setHidden] = useState(false);
	const navigate = useNavigate();

	const handleHiddenBtn = () => {
		setHidden(prev => !prev);
	};

	const hiddenBtnClass = clsx(s.navLink, {
		[s.hidden]: hidden
	});

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
			<div className={hiddenBtnClass}>
				<Button variant='clear' onClick={handleHiddenBtn} className={s.openBtn}>
					<BackOutlineArrow />
				</Button>
				<p>Временная кнопка для более удобного перехода на страницу навигации</p>
				<div className={s.btns}>
					<Button variant='primary' onClick={handleHiddenBtn}>
						Скрыть кнопку
					</Button>
					<Button variant='primary' onClick={() => navigate(PATH_PAGE.navigation)}>
						Перейти на страницу навигации
					</Button>
				</div>
			</div>

			<Footer />
			<Modals />
		</>
	);
};
