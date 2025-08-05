import { CSSProperties, FC } from 'react';

import clsx from 'clsx';

import s from './skeleton.module.scss';

interface ISkeleton {
	className: string;
	style?: CSSProperties;
}
export const Skeleton: FC<ISkeleton> = ({ className, style }) => {
	const skeletonClass = clsx(s.skeleton, className);

	return <span className={skeletonClass} style={style}></span>;
};
