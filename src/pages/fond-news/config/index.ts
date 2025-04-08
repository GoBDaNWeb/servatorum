import { PATH_PAGE } from '@/shared/config';
import { cropLink } from '@/shared/lib';

export const crumbs = [
	{ title: 'фонды', link: PATH_PAGE.fonds },
	{ title: '4 лапы', link: cropLink(PATH_PAGE.fond, 10) },
	{ title: 'Новости фонда' }
];
