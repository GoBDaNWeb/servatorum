import { useState } from 'react';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { Sort } from '@/features/sort';

import { Image, WalletIcon } from '@/shared/ui';

import { crumbs, donations, sortList } from '../config';

import s from './profile-history.module.scss';

export const ProfileHistory = () => {
	const [selectedSort, setSelectedSort] = useState(sortList[0]);
	return (
		<ProfileWrapper crumbs={crumbs} title='История пожертвований' className={s.profileHistory}>
			<Sort
				sortList={sortList}
				selectedSort={selectedSort}
				setSelectedSort={setSelectedSort}
				className={s.sort}
			/>
			<div className={s.expensesWrapper}>
				<div className={s.icon}>
					<WalletIcon />
				</div>
				<p className={s.title}>
					Мои расходы: <span>4 161 ₽</span>
				</p>
			</div>
			<div className={s.list}>
				{donations.map((donation, index) => (
					//TODO: убрать key={index} когда будет апи
					<div className={s.row} key={index}>
						<div className={s.dateBlock}>
							<div className='sticky-block'>
								<p>{donation.date}</p>
							</div>
						</div>
						<div className={s.fondsList}>
							{donation.fonds.map((fond, index) => (
								//TODO: убрать key={index} когда будет апи
								<div className={s.historyCard} key={index}>
									<div className={s.author}>
										<Image src={fond.img} alt='photo' className={s.image} />
										<p className={s.title}>{fond.title}</p>
									</div>
									<p className={s.descr}>{fond.descr}</p>
									<p className={s.card}>{fond.card}</p>
									<p className={s.sum}>{fond.sum}</p>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</ProfileWrapper>
	);
};
