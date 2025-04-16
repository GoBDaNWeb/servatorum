import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { Footer } from '@/widgets/footer';
import { Header } from '@/widgets/header';
import { MobileMenu } from '@/widgets/mobile-menu';
import { Modals } from '@/widgets/modals';

import { PATH_PAGE } from '@/shared/config';
import { BackOutlineArrow, Button } from '@/shared/ui';

import s from './main-layout.module.scss';

export const MainLayout = () => {
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
			<Outlet />
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
