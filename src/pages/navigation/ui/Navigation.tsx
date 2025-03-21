import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import { routes } from '../config';

import s from './navigation.module.scss';

export const Navigation = () => {
	const navigationPageClass = clsx(s.navigationPage, 'container');

	return (
		<main className={navigationPageClass}>
			<h1>
				Эта навигационная страница для более удобной навигации по другим страницам во время
				разработки/тестирования
			</h1>
			<div className={s.list}>
				{routes.map(route => (
					<NavLink key={route.title} to={route.href}>
						{route.title}
					</NavLink>
				))}
			</div>
		</main>
	);
};
