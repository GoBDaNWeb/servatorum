import { FC, PropsWithChildren } from 'react';

import clsx from 'clsx';

import { Crumbs, Pagination } from '@/shared/ui';

import s from './profile-wrapper.module.scss';

interface IProfileWrapper {
	crumbs: {
		link?: string;
		title: string;
	}[];
	title: string;
	className?: string;
	paginationCondition?: boolean;
}

export const ProfileWrapper: FC<PropsWithChildren<IProfileWrapper>> = ({
	crumbs,
	title,
	children,
	className,
	paginationCondition = false
}) => {
	const profileContentClass = clsx(className, 'profile-content', !paginationCondition && s.full);
	return (
		<div className={s.profileWrapper}>
			<Crumbs links={crumbs} />

			<div className={profileContentClass}>
				<h1>{title}</h1>
				{children}
			</div>
			<>
				{paginationCondition ? (
					<Pagination currentPage={1} totalPages={34} onPageChange={page => console.log(page)} />
				) : null}
			</>
		</div>
	);
};
