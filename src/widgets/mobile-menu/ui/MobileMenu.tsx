import { useDispatch } from 'react-redux';

import clsx from 'clsx';

import { setOpenMenu } from '@/entities/mobile-menu';

import { handleScroll, useLockedBody, useTypedSelector } from '@/shared/lib';
import { Button, Logo } from '@/shared/ui';

import s from './mobile-menu.module.scss';

export const MobileMenu = () => {
	const dispatch = useDispatch();

	const { isOpen } = useTypedSelector(store => store.mobileMenu);
	useLockedBody(isOpen);

	const handleCloseMobileMenu = () => {
		dispatch(setOpenMenu(false));
	};

	const handleScrollMobile = (id: string) => {
		handleScroll(id);
		dispatch(setOpenMenu(false));
	};

	const mobileMenuClass = clsx(s.mobileMenu, {
		[s.active]: isOpen
	});

	return (
		<div className={mobileMenuClass} onClick={handleCloseMobileMenu}>
			<Button onClick={handleCloseMobileMenu} className={s.closeBtn} variant='clear'>
				<img src='/images/icons/close.svg' alt='close' />
			</Button>
			<div className={s.mobileMenuContent} onClick={e => e.stopPropagation()}>
				<div className={s.mobileMenuContentTop}>
					<Logo />
				</div>
				<div className={s.mobileMenuContentCenter}>
					<Button onClick={() => handleScrollMobile('#about')}>О сервисе</Button>
					<Button onClick={() => handleScrollMobile('#who')}>Для кого</Button>
					<Button onClick={() => handleScrollMobile('#directions')}>Наши направления</Button>
				</div>
				<div className={s.mobileMenuContentBottom}>
					<Button variant='primary' className={s.authBtn}>
						Войти
					</Button>
				</div>
			</div>
		</div>
	);
};
