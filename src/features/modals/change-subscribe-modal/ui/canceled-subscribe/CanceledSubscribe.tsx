import s from './canceled-subscribe.module.scss';

export const CanceledSubscribe = () => {
	return (
		<div className={s.cancelSubscribe}>
			<img src='/images/error.svg' alt='error' />
			<p className={s.title}>
				Подписка на фонд <br />
				отменена
			</p>
			<p className={s.descr}>Вы больше не будете помогать фонду!</p>
		</div>
	);
};
