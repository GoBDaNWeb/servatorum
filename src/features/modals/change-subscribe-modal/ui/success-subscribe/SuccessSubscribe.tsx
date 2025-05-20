import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/config';
import { Button, useModal } from '@/shared/ui';

import s from './success-subscribe.module.scss';

interface ISuccessSubscribe {
	priceValue: string;
}

export const SuccessSubscribe: FC<ISuccessSubscribe> = ({ priceValue }) => {
	const { close } = useModal();

	return (
		<div className={s.successSubscribe}>
			<img src='/images/check.svg' alt='check' />
			<p className={s.title}>Подписка успешно оформлена</p>
			<p className={s.descr}>
				Мы ценим вашу поддержку. <br />
				Управлять подпиской на фонд можно <br />
				<NavLink to={PATH_PAGE.profileSubscriptions}>в личном кабинете</NavLink>
			</p>
			<div className={s.fond}>
				<div className={s.user}>
					<img src='/images/fond.jpg' alt='fond' />
					<div className={s.userInfo}>
						<p className={s.name}>Добрые Намерения</p>
						<p className={s.descr}>Москва</p>
					</div>
				</div>
				<div className={s.info}>
					<p className={s.price}>{priceValue} ₽/мес</p>
					<p className={s.date}>6 декабря</p>
				</div>
			</div>
			<Button variant='primary' onClick={close} className={s.closeBtn}>
				Продолжить
			</Button>
			<Button variant='text' color='purple'>
				Подписаться на новости фонда
			</Button>
		</div>
	);
};
