import { CSSProperties, FC } from 'react';

import clsx from 'clsx';

import s from './skeleton.module.scss';

interface ISkeleton {
	classname: string;
	style?: CSSProperties;
}
export const Skeleton: FC<ISkeleton> = ({ classname, style }) => {
	const skeletonClass = clsx(s.skeleton, classname);

	return <div className={skeletonClass} style={style}></div>;
};
