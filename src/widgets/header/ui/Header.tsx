import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import clsx from 'clsx';

import { setOpenModal } from '@/features/register-modal';

import { setOpenMenu } from '@/entities/mobile-menu';

import { PATH_PAGE } from '@/shared/config';
import { handleScroll } from '@/shared/lib';
import { Button, Input, Logo } from '@/shared/ui';

import s from './header.module.scss';

export const Header = () => {
	const [active, setActive] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
					<Input placeholder='Поиск' prefIcon='/images/icons/search.svg' />
					<nav className={s.navigation}>
						<Button onClick={() => navigate(PATH_PAGE.collections)} variant='outline' color='gray'>
							Сборы
						</Button>
						<Button onClick={() => navigate(PATH_PAGE.fonds)} variant='outline' color='gray'>
							Фонды
						</Button>
						<Button onClick={() => handleScroll('#directions')} variant='outline' color='gray'>
							Партнёры
						</Button>
					</nav>
					<Button variant='outline'>Попросить помощь</Button>

					<Button variant='primary' className={s.authBtn} onClick={handleOpernRegisterModal}>
						Войти
					</Button>
				</div>

				<div className={s.mobileBtns}>
					<Button onClick={handleOpenMobileMenu} variant='secondary' className={s.burger}>
						<img src='/images/icons/burger.svg' alt='burger' />
					</Button>
					<Button variant='primary' className={s.authBtn}>
						<img src='/images/icons/user.svg' alt='user' />
					</Button>
				</div>
			</div>
		</header>
	);
};
