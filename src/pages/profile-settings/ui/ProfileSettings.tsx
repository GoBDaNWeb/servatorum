import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { crumbs } from '../config';

import s from './profile-settings.module.scss';
import { SettingsForm } from './settings-form';

export const ProfileSettings = () => {
	return (
		<ProfileWrapper crumbs={crumbs} title='Настройки профиля' className={s.profileSettings}>
			<SettingsForm />
		</ProfileWrapper>
	);
};
