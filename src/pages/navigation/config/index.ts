import { PATH_PAGE } from '@/shared/config';
import { cropLink } from '@/shared/lib';

export const routes = [
	{ title: 'Главная', href: PATH_PAGE.home },
	{ title: 'Сборы', href: PATH_PAGE.collections },
	{ title: 'Сбор', href: cropLink(PATH_PAGE.collection, 10) },
	{ title: 'Фонды', href: PATH_PAGE.fonds },
	{ title: 'Фонд', href: cropLink(PATH_PAGE.fond, 10) },
	{ title: 'Новости фонда', href: cropLink(PATH_PAGE.fondNews, 10) },
	{ title: 'Компания', href: cropLink(PATH_PAGE.company, 10) },
	{ title: 'Услуги', href: PATH_PAGE.services },
	{ title: 'Профиль - Настойки профиля', href: PATH_PAGE.profileSettings },
	{ title: 'Профиль - Уведомления', href: PATH_PAGE.profileNotifications },
	{ title: 'Профиль - Уведомления (пустые)', href: PATH_PAGE.profileNotificationsEmpty },
	{ title: 'Профиль - Новости', href: PATH_PAGE.profileNews },
	{ title: 'Профиль - Новости (пустые)', href: PATH_PAGE.profileNewsEmpty },
	{ title: 'Профиль - Избранное', href: PATH_PAGE.profileFavourites },
	{ title: 'Профиль - Избранное (пустые)', href: PATH_PAGE.profileFavouritesEmpty },
	{ title: 'Профиль - История пожертвований', href: PATH_PAGE.profileHistory },
	{ title: 'Профиль - Подписки', href: PATH_PAGE.profileSubscriptions },
	{ title: 'Профиль - Мои карты', href: PATH_PAGE.profileCards },
	{ title: 'Профиль - Мои заявки', href: PATH_PAGE.profileRequests },
	{ title: 'Профиль - Организации', href: PATH_PAGE.profileOrganization },
	{ title: 'профиль - заявка на сбор', href: PATH_PAGE.requestCollection }
];
