import { useNavigate } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/config';
import { cropLink } from '@/shared/lib';
import { Button, Image, StarIcon } from '@/shared/ui';

import s from './request-collection-info.module.scss';

export const RequestCollectionInfo = () => {
	const navigate = useNavigate();

	return (
		<div className={s.requestCollectionInfo}>
			<div className={s.requestCollectionInfoTop}>
				<p>Заявка №2345325</p>
				<div className={s.features}>
					<Button variant='clear'>
						<StarIcon />
					</Button>
				</div>
			</div>
			<div className={s.user}>
				<Image src='/images/fond.jpg' alt='photo' isGradient className={s.image} />
				<div className={s.text}>
					<p className={s.name}>Александра Константинпольская</p>
					<p className={s.date}>00.00.0000</p>
				</div>
			</div>
			<div className={s.requestCollectionInfoCenter}>
				<a href='tel:+7 (999) 999-99-99'>
					<img src='/images/icons/phone-icon.svg' alt='phone' />
					<p>+7 (999) 999-99-99</p>
				</a>
				<p>
					<img src='/images/icons/pin-icon.svg' alt='phone' />
					Московская область, г. Селичи, ул. Дворовая, 18 стр.2
				</p>
			</div>
			<div className={s.requestCollectionInfoBottom}>
				<Button variant='primary' onClick={() => navigate(cropLink(PATH_PAGE.collection, 10))}>
					На страницу сбора
				</Button>
			</div>
		</div>
	);
};
