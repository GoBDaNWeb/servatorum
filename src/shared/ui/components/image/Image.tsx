import { FC } from 'react';

import clsx from 'clsx';

import s from './image.module.scss';

interface IImage {
	className?: string;
	paddingBottom?: string;
	src: string;
	alt: string;
	fancybox?: string;
	isGradient?: boolean;
}

export const Image: FC<IImage> = ({
	paddingBottom = '0',
	src,
	alt,
	className,
	fancybox,
	isGradient
}) => {
	const imageClass = clsx(
		s.imageWrapper,
		{
			[s.pointer]: fancybox,
			[s.gradient]: isGradient
		},
		className
	);

	return (
		<>
			{isGradient ? (
				<div className={imageClass}>
					<img src={src} alt={alt} data-fancybox={fancybox} />
				</div>
			) : (
				<div className={imageClass} style={{ paddingBottom: paddingBottom }}>
					<img src={src} alt={alt} data-fancybox={fancybox} />
				</div>
			)}
		</>
	);
};
