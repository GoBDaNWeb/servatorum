import { Checkbox } from '@/shared/ui';

import s from '../profile-settings.module.scss';

export const NotificationsForm = () => {
	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>Получать уведомления</p>
				</div>
			</div>
			<div className={s.checkboxesBlock}>
				<p>Выберите удобный для вас способ</p>
				<div className={s.checkboxesWrapper}>
					<label>
						<Checkbox name='push' />
						<p>Push-уведомления</p>
					</label>
					<label>
						<Checkbox name='email' />
						<p>Email</p>
					</label>
					<label>
						<Checkbox name='sms' />
						<p>SMS</p>
					</label>
				</div>
			</div>
		</div>
	);
};
