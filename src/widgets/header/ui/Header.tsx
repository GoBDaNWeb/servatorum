import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { setOpenMenu } from '@/entities/mobile-menu';

import { handleScroll } from '@/shared/lib';
import { Button, Logo } from '@/shared/ui';

import s from './header.module.scss';

export const Header = () => {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > 0) {
				setActive(true);
			} else {
				setActive(false);
			}
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);
			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
	}, []);

	const handleOpenMobileMenu = () => {
		dispatch(setOpenMenu(true));
	};

	const headerClass = clsx(s.header, {
		[s.active]: active
	});
	const headerInnerClass = clsx(s.headerInner, 'container');

	return (
		<header className={headerClass}>
			<div className={headerInnerClass}>
				<Logo />
				<nav className={s.navigation}>
					<Button onClick={() => handleScroll('#about')}>О сервисе</Button>
					<Button onClick={() => handleScroll('#who')}>Для кого</Button>
					<Button onClick={() => handleScroll('#directions')}>Наши направления</Button>
				</nav>
				<Button variant='primary' className={s.authBtn}>
					Войти
				</Button>
				<div className={s.mobileBtns}>
					<Button onClick={handleOpenMobileMenu} variant='secondary' className={s.burger}>
						<img src='/images/burger.svg' alt='burger' />
					</Button>
					<Button variant='primary' className={s.authBtn}>
						<img src='/images/user.svg' alt='user' />
					</Button>
				</div>
			</div>
		</header>
	);
};
