import { FC, PropsWithChildren } from 'react';
import { Swiper as Carousel } from 'swiper/react';

import {
	NavigationOptions,
	PaginationOptions,
	SwiperModule,
	SwiperOptions,
	Swiper as SwiperType,
	VirtualOptions
} from 'swiper/types';

interface ISwiper {
	slidesPerView: number | 'auto' | undefined;
	modules?: SwiperModule[] | undefined;
	pagination?: boolean | PaginationOptions | undefined;
	spaceBetween?: string | number | undefined;
	onSwiper?: ((swiper: SwiperType) => void) | undefined;
	navigation?: boolean | NavigationOptions | undefined;
	breakpoints?:
		| {
				[width: number]: SwiperOptions;
				[ratio: string]: SwiperOptions;
		  }
		| undefined;
	onSlideChange?: ((swiper: SwiperType) => void) | undefined;
	virtual?: boolean | VirtualOptions<unknown> | undefined;
	effect?: 'fade';
	loop?: boolean;
	className?: string;
}

export const Swiper: FC<PropsWithChildren<ISwiper>> = ({
	children,
	slidesPerView,
	modules,
	pagination,
	spaceBetween = 0,
	onSwiper,
	navigation,
	breakpoints,
	onSlideChange,
	virtual,
	effect,
	loop,
	className
}) => {
	return (
		<Carousel
			onSlideChange={onSlideChange}
			breakpoints={breakpoints}
			onSwiper={onSwiper}
			slidesPerView={slidesPerView}
			modules={modules}
			pagination={pagination}
			navigation={navigation}
			spaceBetween={spaceBetween}
			virtual={virtual}
			effect={effect}
			loop={loop}
			className={className}
			// allowTouchMove={false}
		>
			{children}
		</Carousel>
	);
};
