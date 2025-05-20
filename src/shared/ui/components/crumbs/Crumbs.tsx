import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import { PATH_PAGE } from '@/shared/config';

import { LogoGray } from '../../icons';

import s from './crumbs.module.scss';
import './crumbs.scss';

interface ICumbs {
	links: {
		link?: string;
		title: string;
	}[];
}

export const Crumbs: FC<ICumbs> = ({ links }) => {
	const crumbsClass = clsx(s.crumbs, 'crumbs');

	return (
		<div className={crumbsClass}>
			<div className={s.crumbItem}>
				<NavLink to={PATH_PAGE.home}>
					<LogoGray />
				</NavLink>
				<img src='/images/icons/crumb-arrow.svg' alt='crumb-arrow' />
			</div>
			{links.map((link, index) => (
				<div className={s.crumbItem} key={link.title}>
					{index !== links.length - 1 && link.link ? (
						<NavLink to={link.link}>
							<p>{link.title}</p>
						</NavLink>
					) : (
						<p>{link.title}</p>
					)}
					{index === links.length - 1 ? null : (
						<img src='/images/icons/crumb-arrow.svg' alt='crumb-arrow' />
					)}
				</div>
			))}
		</div>
	);
};
