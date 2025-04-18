import { NavLink, useLocation } from 'react-router-dom';

import clsx from 'clsx';

import { PATH_PAGE } from '@/shared/config';
import {
	Button,
	CardIcon,
	ClockIcon,
	DocumentIcon,
	NewsIcon,
	NotificationIcon,
	OrdersIcon,
	PieIcon,
	PlusIcon,
	RatingIcon,
	SupportIcon,
	UserIcon,
	WalletIcon,
	useModal
} from '@/shared/ui';
import { HandsIcon } from '@/shared/ui/icons/HandsIcon';

import s from './profile-sidebar.module.scss';

const links = [
	{ href: PATH_PAGE.profileSettings, icon: <UserIcon />, title: 'Настройки профиля' },
	{ href: PATH_PAGE.profileNotifications, icon: <NotificationIcon />, title: 'Уведомления' },
	{ href: PATH_PAGE.profileNews, icon: <NewsIcon />, title: 'Новости' },
	{ href: PATH_PAGE.profileSubscriptions, icon: <WalletIcon />, title: 'Подписки', count: '96' },
	{ href: PATH_PAGE.profileFavourites, icon: <RatingIcon />, title: 'Избранное', count: '43' },
	{ href: PATH_PAGE.profileHistory, icon: <PieIcon />, title: 'История пожертвований', count: '5' },
	{ href: PATH_PAGE.home, icon: <ClockIcon />, title: 'История заказов', count: '128' },
	{ href: PATH_PAGE.profileCards, icon: <CardIcon />, title: 'Мои карты', count: '4' },
	{ href: PATH_PAGE.profileRequests, icon: <OrdersIcon />, title: 'Мои заявки', count: '1' },
	{ href: PATH_PAGE.home, icon: <HandsIcon />, title: 'Заявки на сбор' },
	{ href: PATH_PAGE.home, icon: <DocumentIcon />, title: 'Документы' }
];

export const ProfileSidebar = () => {
	const { pathname } = useLocation();
	const { open } = useModal();

	const handleOpenSupportModal = () => {
		open('support');
	};

	return (
		<div className={s.profileSidebarWrapper}>
			<div className='sticky-block'>
				<div className={s.profileSidebar}>
					<div className={s.sidebarInfo}>
						<p className={s.name}>Елизарова Светлана</p>
						<p className={s.id}>ID: 354542</p>
					</div>
					<nav className={s.sidebarNavigation}>
						{links.map(link => (
							<NavLink
								to={link.href}
								key={link.title}
								className={clsx(s.sidebarLink, {
									[s.active]: pathname === link.href
								})}
							>
								<div className={s.icon}>{link.icon}</div>
								<p>
									{link.title} {link.count && <span>({link.count})</span>}
								</p>
							</NavLink>
						))}
					</nav>
					<div className={s.profileSidebarFeatures}>
						<Button variant='clear' className={s.sidebarLink} onClick={handleOpenSupportModal}>
							<div className={s.icon}>
								<SupportIcon />
							</div>
							<p>Поддержка</p>
						</Button>
						<NavLink to={PATH_PAGE.profileOrganization} className={s.sidebarLink}>
							<div className={s.icon}>
								<PlusIcon />
							</div>
							<p>Создать организацию</p>
						</NavLink>
					</div>
					<div className={s.profileSidebarExit}>
						<Button variant='text' className={s.exitBtn}>
							Выйти
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
