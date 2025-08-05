import clsx from 'clsx';

import { Logo, Skeleton } from '@/shared/ui';

import s from './header-skeleton.module.scss';

export const HeaderSkeleton = () => {
	const headerInnerClass = clsx(s.headerInner, 'container');
	return (
		<header className={s.header}>
			<div className={headerInnerClass}>
				<Logo />
				<div className={s.headerFeature}>
					<Skeleton className={s.search} />
					<nav className={s.navigation}>
						<Skeleton className={s.navBtn} />
						<Skeleton className={s.navBtn} />
						<Skeleton className={s.navBtn} />
					</nav>
					<Skeleton className={s.featureBtn} />
					<Skeleton className={s.featureUserBtn} />
				</div>
			</div>
		</header>
	);
};
