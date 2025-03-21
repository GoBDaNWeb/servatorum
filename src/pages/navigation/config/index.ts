import { PATH_PAGE } from '@/shared/config';
import { cropLink } from '@/shared/lib';

export const routes = [
	{ title: 'Главная', href: PATH_PAGE.home },
	{ title: 'Сборы', href: PATH_PAGE.collections },
	{ title: 'Сбор', href: cropLink(PATH_PAGE.collection, 10) },
	{ title: 'Фонды', href: PATH_PAGE.fonds },
	{ title: 'Фонд', href: cropLink(PATH_PAGE.fond, 10) }
];
