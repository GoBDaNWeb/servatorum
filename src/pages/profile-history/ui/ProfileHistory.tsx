import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { DateIntervalInputs } from '@/features/date-interval-inputs';
import { Sort } from '@/features/sort';

import { BillingInfo, Image, PieIcon, WalletIcon } from '@/shared/ui';

import { crumbs, donations, sortList, sortListFonds, sortListPayments } from '../config';

import s from './profile-history.module.scss';

export const ProfileHistory = () => {
	const { search } = useLocation();

	const [selectedSort, setSelectedSort] = useState(search ? sortListFonds[0].id : sortList[0].id);
	const [selectedSortSecond, setSelectedSortSecond] = useState(sortListPayments[0].id);

	const { watch, setValue } = useForm<FieldValues>({
		defaultValues: {
			fromDate: '',
			toDate: ''
		}
	});

	useEffect(() => {
		const { unsubscribe } = watch(value => {
			console.log(value);
		});
		return () => unsubscribe();
	}, [watch]);

	return (
		<ProfileWrapper
			crumbs={crumbs}
			title='История пожертвований'
			className={s.profileHistory}
			paginationCondition={search.length > 0 && donations.length > 0}
		>
			<div className={s.sortWrapper}>
				<Sort
					sortList={search ? sortListFonds : sortList}
					selectedSort={selectedSort}
					setSelectedSort={setSelectedSort}
					className={s.sort}
				/>
				{search.length ? (
					<Sort
						sortList={sortListPayments}
						selectedSort={selectedSortSecond}
						setSelectedSort={setSelectedSortSecond}
						className={s.sort}
					/>
				) : null}
			</div>
			<DateIntervalInputs setValue={setValue} />

			<BillingInfo
				icon={search ? <PieIcon /> : <WalletIcon />}
				title={search ? 'Поступления:' : 'Мои расходы:'}
				sum={search ? '11 044 161 ₽' : '4 161 ₽'}
			/>
			{/* <div className={s.expensesWrapper}>
				<div className={s.icon}>
					<WalletIcon />
				</div>
				<p className={s.title}>
					Мои расходы: <span>4 161 ₽</span>
				</p>
			</div> */}
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
