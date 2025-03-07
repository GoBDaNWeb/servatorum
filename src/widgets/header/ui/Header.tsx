import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { setOpenModal } from '@/features/register-modal';

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

	const handleOpenMobileMenu = () => {
		dispatch(setOpenMenu(true));
	};

	const handleOpernRegisterModal = () => {
		dispatch(setOpenModal(true));
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);
			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
	}, []);

	const headerClass = clsx(s.header, {
		[s.active]: active
	});
	const headerInnerClass = clsx(s.headerInner, 'container');

	return (
		<header className={headerClass} id='header'>
			<div className={headerInnerClass}>
				<Logo />
				<div className={s.headerFeature}>
					<nav className={s.navigation}>
						<Button onClick={() => handleScroll('#about')} variant='outline' color='gray'>
							О сервисе
						</Button>
						<Button onClick={() => handleScroll('#who')} variant='outline' color='gray'>
							Для кого
						</Button>
						<Button onClick={() => handleScroll('#directions')} variant='outline' color='gray'>
							Наши направления
						</Button>
						<Button variant='outline'>Попросить помощь</Button>
					</nav>
					<Button variant='primary' className={s.authBtn} onClick={handleOpernRegisterModal}>
						Войти
					</Button>
				</div>

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
