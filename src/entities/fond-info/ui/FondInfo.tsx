import { FC } from 'react';

import { Button, LinkIcon, StarIcon } from '@/shared/ui';

import s from './fond-info.module.scss';

interface IFondInfo {
	openSupportFondModal?: () => void;
}

export const FondInfo: FC<IFondInfo> = ({ openSupportFondModal }) => {
	return (
		<div className={s.fondInfo}>
			<div className={s.fondInfoTop}>
				<p>ID 24124</p>
				<div className={s.features}>
					<Button variant='clear'>
						<LinkIcon />
					</Button>
					<Button variant='clear'>
						<StarIcon />
					</Button>
				</div>
			</div>
			<div className={s.fondInfoCenter}>
				<a href='tel:+7 (999) 999-99-99'>
					<img src='/images/icons/phone-icon.svg' alt='phone' />
					<p>+7 (999) 999-99-99</p>
				</a>
				<p>
					<img src='/images/icons/pin-icon.svg' alt='phone' />
					Московская область, г. Селичи, ул. Дворовая, 18 стр.2
				</p>
			</div>
			{openSupportFondModal ? (
				<div className={s.fondInfoBottom}>
					<span>Пожертвований в фонд</span>
					<p className={s.sum}>99 000 000 ₽</p>
					<p className={s.descr}>
						Вы можете помочь фонду оформив подписку или сделать единоразовый перевод
					</p>
					<Button variant='primary' className={s.supportBtn} onClick={openSupportFondModal}>
						Поддержать фонд
					</Button>
				</div>
			) : null}
		</div>
	);
};
