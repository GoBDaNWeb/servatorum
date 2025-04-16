import { ProfileEmpty } from '@/widgets/profile-empty';
import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { NotificationCard } from '@/entities/notification-card';

import { NotificationIcon } from '@/shared/ui';

import { crumbs, notifications } from '../config';

import s from './profile-notifications.module.scss';

export const ProfileNotifications = () => {
	return (
		<ProfileWrapper
			crumbs={crumbs}
			title='Уведомления'
			className={s.profileNotifications}
			paginationCondition={notifications.length > 0}
		>
			{notifications.length ? (
				<div className={s.notificationsList}>
					{notifications.map((notification, index) => (
						<NotificationCard
							key={index}
							title={notification.title}
							descr={notification.descr}
							date={notification.date}
							isRead={notification.isRead}
						/>
					))}
				</div>
			) : (
				<ProfileEmpty
					icon={<NotificationIcon />}
					title='Пока ничего нет'
					descr='Тут буду храниться важные уведомления'
				/>
			)}
		</ProfileWrapper>
	);
};
