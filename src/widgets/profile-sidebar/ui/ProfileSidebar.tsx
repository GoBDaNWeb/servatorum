import { NavLink, useLocation } from 'react-router-dom';

import clsx from 'clsx';

import { PATH_PAGE } from '@/shared/config';
import {
	Button,
	CardIcon,
	ClockIcon,
	CollectionsIcon,
	DocumentIcon,
	NewsIcon,
	NotificationIcon,
	OrdersIcon,
	PieIcon,
	PlusIcon,
	PromotionIcon,
	RatingIcon,
	ReportsIcons,
	RepresentativesIcon,
	SupportIcon,
	UserIcon,
	WalletIcon,
	useModal
} from '@/shared/ui';
import { HandsIcon } from '@/shared/ui/icons/HandsIcon';

import s from './profile-sidebar.module.scss';

const profileLinks = [
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
const fondLinks = [
	{ href: `${PATH_PAGE.profileSettings}?=fond`, icon: <UserIcon />, title: 'Настройки профиля' },
	{ href: `${PATH_PAGE.profileWallet}?=fond`, icon: <WalletIcon />, title: 'Кошелек' },
	{ href: `${PATH_PAGE.profileHistory}?=fond`, icon: <PieIcon />, title: 'История поступлений' },
	{ href: PATH_PAGE.profileNews, icon: <NewsIcon />, title: 'Новости' },
	{ href: PATH_PAGE.home, icon: <ClockIcon />, title: 'История заказов', count: '128' },
	{ href: PATH_PAGE.profileNotifications, icon: <CollectionsIcon />, title: 'Сборы' },
	{ href: PATH_PAGE.profileCards, icon: <PromotionIcon />, title: 'Продвижение' },
	{ href: PATH_PAGE.profileRequests, icon: <ReportsIcons />, title: 'Отчёты' },
	{ href: PATH_PAGE.home, icon: <RepresentativesIcon />, title: 'Представители' },
	{ href: PATH_PAGE.profileFavourites, icon: <RatingIcon />, title: 'Избранное', count: '3' }
];

export const ProfileSidebar = () => {
	// TODO: Убрать в дальнейшем отовсюду search для отображния логики для фондов !!!
	const { pathname, search } = useLocation();
	const { open } = useModal();

	const handleOpenSupportModal = () => {
		open('support');
	};

	return (
		<div className={s.profileSidebarWrapper}>
			<div className='sticky-block'>
				<div className={s.profileSidebar}>
					<div className={s.sidebarInfo}>
						<p className={s.name}>
							{search.length
								? 'Благотворительный фонд защиты животных «Гав»'
								: 'Елизарова Светлана'}
						</p>
						<p className={s.id}>ID: 354542</p>
					</div>
					<nav className={s.sidebarNavigation}>
						{search.length
							? fondLinks.map(link => (
									<NavLink
										to={link.href}
										key={link.title}
										className={clsx(s.sidebarLink, {
											// TODO: Убрать в дальнейшем отовсюду search
											[s.active]: pathname + search === link.href
										})}
									>
										<div className={s.icon}>{link.icon}</div>
										<p>
											{link.title} {link.count && <span>({link.count})</span>}
										</p>
									</NavLink>
								))
							: profileLinks.map(link => (
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
