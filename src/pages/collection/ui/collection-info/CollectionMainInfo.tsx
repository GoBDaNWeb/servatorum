import { useEffect, useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import clsx from 'clsx';

import { Pagination, Virtual } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';

import { Badge, Fancybox, Image, Swiper } from '@/shared/ui';

import s from './collection-main-info.module.scss';
import './collection-main-info.scss';

export const CollectionMainInfo = () => {
	const [swiper, setSwiper] = useState<SwiperType>();
	const pagination = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (swiper && pagination.current) {
			swiper.pagination.destroy(); // Удаляем предыдущую пагинацию, если она была
			swiper.pagination.init(); // Инициализируем новую пагинацию
			swiper.pagination.render(); // Рендерим пагинацию
			swiper.pagination.update(); // Обновляем пагинацию
		}
	}, [swiper]);

	const collectionMainInfoClass = clsx(s.collectionMainInfo, 'collection-main-info');

	return (
		<div className={collectionMainInfoClass}>
			<div className={s.collectionTop}>
				<Fancybox className={s.swiperWrapper}>
					<Swiper
						onSwiper={swiper => {
							setSwiper(swiper);
						}}
						slidesPerView={1}
						modules={[Pagination, Virtual]}
						pagination={{
							el: pagination.current,
							clickable: true
						}}
						virtual
					>
						{[...Array(3)].map((_, index) => (
							<SwiperSlide key={index}>
								<Image
									paddingBottom='75%'
									src='/images/home/donation/slide.jpg'
									alt='slide'
									className={s.image}
									fancybox='collecting'
								/>
							</SwiperSlide>
						))}
					</Swiper>
					<div ref={pagination}></div>
				</Fancybox>
				<div className={s.collectionTopInfo}>
					<Badge color='green' size='m' className={s.popular}>
						Популярный сбор
					</Badge>
					<p className={s.title}>
						Кошачьему приюту необходимо оборудование которое позволит содержать животных в чистоте и
						комфорте
					</p>
				</div>
			</div>
			<div className={s.collectionContent}>
				<div className={s.textWrapper}>
					<p className={s.title}>О фонде</p>
					<p className={s.descr}>
						Наш благотворительный фонд "Помощь животным" посвящен заботе и поддержке кошек и собак.
						Мы стремимся создать лучшую жизнь для бездомных животных и помочь им найти любящие и
						заботливые дома. В "Помощь животным" мы предлагаем широкий спектр услуг и программ,
						включая пристройство, медицинскую помощь, реабилитацию и социализацию бездомных кошек и
						собак.
					</p>
				</div>
				<div className={s.textWrapper}>
					<div className={s.alert}>
						Наша миссия - не только предоставить краткосрочное убежище для животных, но и помочь им
						адаптироваться и найти постоянные дома, где их ждут забота и любовь.{' '}
					</div>
				</div>
				<div className={s.textWrapper}>
					<p className={s.titleSm}>Наша деятельность</p>
					<ul className='list-dots'>
						<li>
							Мы проводим программы по пристройству, где наши волонтеры работают с потенциальными
							владельцами, чтобы найти оптимальные сочетания между животными и людьми, обеспечивая
							успешную адаптацию и долгосрочную гармонию.
						</li>
						<li>
							Мы работаем с опытными волонтерами и ветеринарами, чтобы обеспечить необходимую
							медицинскую помощь и заботу для наших подопечных.
						</li>
						<li>
							Мы проводим образовательные мероприятия и освещаем проблему бездомных животных, чтобы
							повысить осведомленность общества и побудить к добровольным пожертвованиям и участию.{' '}
						</li>
						<li>
							Мы предоставляем возможности для спонсорства и добровольчества в нашем фонде, чтобы
							каждый мог внести вклад в решение проблемы бездомных кошек и собак.
						</li>
					</ul>
				</div>
				<div className={s.textWrapper}>
					<p className={s.descr}>
						С "Помощь животным" вы можете быть уверены, что ваше пожертвование и участие направлены
						на реальную помощь и изменение жизней незащищенных животных. Мы верим в любовь и заботу
						о кошках и собаках и стремимся создать мир, где каждое животное может найти свой дом и
						быть окруженным заботой и счастьем.
					</p>
				</div>
			</div>
		</div>
	);
};
