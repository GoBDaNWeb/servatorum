import { useLocation, useNavigate } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/config';

import s from './logo.module.scss';

export const Logo = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const handlScrollTop = () => {
		if (pathname === '/') {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		} else {
			navigate(PATH_PAGE.home);
		}
	};

	return (
		<div className={s.logoWrapper} onClick={handlScrollTop}>
			<img src='/images/icons/logo.svg' alt='logo' />
			<div className={s.logoText}>
				<p>Servatorum</p>
				<p>Свобода делать больше</p>
			</div>
		</div>
	);
};
