import { FC } from 'react';

import clsx from 'clsx';

import s from './image.module.scss';

interface IImage {
	className?: string;
	paddingBottom: string;
	src: string;
	alt: string;
	fancybox?: string;
}

export const Image: FC<IImage> = ({ paddingBottom = '100%', src, alt, className, fancybox }) => {
	const imageClass = clsx(
		s.imageWrapper,
		{
			[s.pointer]: fancybox
		},
		className
	);

	return (
		<div className={imageClass} style={{ paddingBottom: paddingBottom }}>
			<img src={src} alt={alt} data-fancybox={fancybox} />
		</div>
	);
};
