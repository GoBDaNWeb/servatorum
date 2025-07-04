import { useLocation } from 'react-router-dom';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { crumbs } from '../config';

import { FondNews } from './fond-news';
import s from './profile-news.module.scss';
import { UserNews } from './user-news';

export const ProfileNews = () => {
	const { search } = useLocation();

	return (
		<ProfileWrapper
			crumbs={crumbs}
			title={'Новости'}
			className={s.profileNews}
			paginationCondition={search.length > 0}
		>
			{search ? <FondNews /> : <UserNews />}
		</ProfileWrapper>
	);
};
