import clsx from 'clsx';

import { ProfileEmpty } from '@/widgets/profile-empty';

import { NotificationCard } from '@/entities/notification-card';

import { Crumbs, NotificationIcon, Pagination } from '@/shared/ui';

import { crumbs, notifications } from '../config';

import s from './profile-notifications.module.scss';

export const ProfileNotificationsEmpty = () => {
	const profileNotificationsClass = clsx(s.profileNotifications, 'profile-content', {
		[s.full]: !notifications.length
	});

	return (
		<div className={s.profileNotificationsWrapper}>
			<Crumbs links={crumbs} />
			<div className={profileNotificationsClass}>
				<h1>Уведомления</h1>
				{notifications.length ? (
					<div className={s.notificationsList}>
						{notifications.map((notification: any, index) => (
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
			</div>
			{notifications.length ? (
				<Pagination currentPage={1} totalPages={34} onPageChange={page => console.log(page)} />
			) : null}
		</div>
	);
};
