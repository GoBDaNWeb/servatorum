import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink, useLocation } from 'react-router-dom';

import clsx from 'clsx';

import { setUser } from '@/entities/user';

import { PATH_PAGE } from '@/shared/config';
import { useTypedSelector } from '@/shared/lib';
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
	Skeleton,
	SupportIcon,
	UserIcon,
	WalletIcon,
	useModal
} from '@/shared/ui';
import { HandsIcon } from '@/shared/ui/icons/HandsIcon';

import s from './user-menu.module.scss';

const profileLinks = [
	{ href: PATH_PAGE.profileSettings, icon: <UserIcon />, title: 'Настройки профиля' },
	{ href: PATH_PAGE.profileNotifications, icon: <NotificationIcon />, title: 'Уведомления' },
	{ href: PATH_PAGE.profileNews, icon: <NewsIcon />, title: 'Новости' },
	{ href: PATH_PAGE.profileSubscriptions, icon: <WalletIcon />, title: 'Подписки', count: '96' },
	{ href: PATH_PAGE.profileFavourites, icon: <RatingIcon />, title: 'Избранное', count: '43' },
	{ href: PATH_PAGE.profileHistory, icon: <PieIcon />, title: 'История пожертвований', count: '5' },
	{ href: PATH_PAGE.temporary, icon: <ClockIcon />, title: 'История заказов', count: '128' },
	{ href: PATH_PAGE.profileCards, icon: <CardIcon />, title: 'Мои карты', count: '4' },
	{ href: PATH_PAGE.profileRequests, icon: <OrdersIcon />, title: 'Мои заявки', count: '1' },
	{ href: PATH_PAGE.temporary, icon: <HandsIcon />, title: 'Заявки на сбор' },
	{ href: PATH_PAGE.temporary, icon: <DocumentIcon />, title: 'Документы' }
];
const fondLinks = [
	{ href: `${PATH_PAGE.profileSettings}?=fond`, icon: <UserIcon />, title: 'Настройки профиля' },
	{ href: `${PATH_PAGE.profileWallet}?=fond`, icon: <WalletIcon />, title: 'Кошелек' },
	{ href: `${PATH_PAGE.profileHistory}?=fond`, icon: <PieIcon />, title: 'История поступлений' },
	{ href: `${PATH_PAGE.profileNews}?=fond`, icon: <NewsIcon />, title: 'Новости' },
	{ href: PATH_PAGE.temporary, icon: <ClockIcon />, title: 'История заказов', count: '128' },
	{ href: PATH_PAGE.profileNotifications, icon: <CollectionsIcon />, title: 'Сборы' },
	{ href: PATH_PAGE.profileCards, icon: <PromotionIcon />, title: 'Продвижение' },
	{ href: PATH_PAGE.profileRequests, icon: <ReportsIcons />, title: 'Отчёты' },
	{ href: PATH_PAGE.temporary, icon: <RepresentativesIcon />, title: 'Представители' },
	{ href: PATH_PAGE.profileFavourites, icon: <RatingIcon />, title: 'Избранное', count: '3' }
];

interface IUserMenu {
	className?: string;
}

export const UserMenu: FC<IUserMenu> = ({ className }) => {
	// TODO: Убрать в дальнейшем отовсюду search для отображния логики для фондов !!!
	const { pathname, search } = useLocation();
	const { open } = useModal();
	const navigate = useNavigate();
	const dispath = useDispatch();

	const { userData } = useTypedSelector(store => store.user);
	// const { fondData } = useTypedSelector(store => store.fond);

	const handleOpenSupportModal = () => {
		open('support');
	};

	const handleUserExit = () => {
		navigate(PATH_PAGE.home);
		localStorage.removeItem('access_token');
		dispath(setUser(null));
	};

	const userMenuWrapperClass = clsx(s.userMenuWrapper, className);

	return (
		<div className={userMenuWrapperClass}>
			<div className='sticky-block'>
				<div className={s.userMenu}>
					<div className={s.userInfo}>
						<p className={s.name}>
							{search.length ? (
								'Благотворительный фонд защиты животных «Гав»'
							) : (
								<>
									{userData ? userData.last_name : <Skeleton className={s.nameSkeleton} />}{' '}
									{userData ? userData.first_name : <Skeleton className={s.nameSkeleton} />}
								</>
							)}
						</p>
						<p className={s.id}>
							{/* ID: <Skeleton className={s.idSkeleton} /> */}
							ID: {userData ? userData.id : <Skeleton className={s.idSkeleton} />}
						</p>
					</div>
					<nav className={s.userNavigation}>
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
										className={clsx(s.userLink, {
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
					<div className={s.userMenuFeatures}>
						<Button variant='clear' className={s.userLink} onClick={handleOpenSupportModal}>
							<div className={s.icon}>
								<SupportIcon />
							</div>
							<p>Поддержка</p>
						</Button>
						<NavLink to={PATH_PAGE.profileOrganization} className={s.userLink}>
							<div className={s.icon}>
								<PlusIcon />
							</div>
							<p>Создать организацию</p>
						</NavLink>
					</div>
					<div className={s.userMenuExit} onClick={handleUserExit}>
						<Button variant='text' className={s.exitBtn}>
							Выйти
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
