import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { crumbs } from '../config';

import s from './profile-news.module.scss';

export const ProfileNews = () => {
	return (
		<ProfileWrapper crumbs={crumbs} title='Новости' className={s.profileNews}></ProfileWrapper>
	);
};
