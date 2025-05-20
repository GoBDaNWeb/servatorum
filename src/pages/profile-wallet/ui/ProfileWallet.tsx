import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { DateIntervalInputs } from '@/features/date-interval-inputs';
import { Sort } from '@/features/sort';

import { BillingButton, BillingInfo, Button, WalletIcon, useModal } from '@/shared/ui';

import { crumbs, donations, sortList } from '../config';

import s from './profile-wallet.module.scss';

export const ProfileWallet = () => {
	const { open } = useModal();
	const [selectedSort, setSelectedSort] = useState(sortList[0]);
	const { watch, setValue } = useForm<FieldValues>({
		defaultValues: {
			fromDate: '',
			toDate: ''
		}
	});

	const handleOpenBillingInfoModal = () => {
		open('add-billing');
	};

	useEffect(() => {
		const { unsubscribe } = watch(value => {
			console.log(value);
		});
		return () => unsubscribe();
	}, [watch]);

	return (
		<ProfileWrapper
			crumbs={crumbs}
			title='Кошелёк'
			className={s.profileWallet}
			paginationCondition={donations.length > 0}
		>
			<BillingInfo icon={<WalletIcon />} haveBtns title='Счёт фонда:' sum='11 044 161 ₽' />
			<div className={s.billingCardsWrapper}>
				<p className={s.title}>Счета и карты</p>
				<div className={s.billingCardsList}>
					<BillingButton title='Основной счет' descr='По умолчанию' />
					<BillingButton title='Запасной счет' />
					<BillingButton title='Название счета' />
				</div>
				<Button variant='outline' className={s.addBillingBtn} onClick={handleOpenBillingInfoModal}>
					<img src='/images/icons/plus-violet.svg' alt='plus' />
					Добавить счёт
				</Button>
			</div>
			<div className={s.historyWrapper}>
				<p className={s.title}>История операций</p>
				<Sort
					sortList={sortList}
					selectedSort={selectedSort}
					setSelectedSort={setSelectedSort}
					className={s.sort}
				/>
				<DateIntervalInputs setValue={setValue} />
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
											<div className={s.icon}>
												<img src={fond.img} alt='' />
											</div>
											<p className={s.title}>{fond.title}</p>
										</div>
										<p className={s.descr}>{fond.descr}</p>
										<p className={s.card}>{fond.card}</p>
										<p className={`${s.sum} ${fond.sum.includes('-') ? s.red : s.green}`}>
											{fond.sum}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</ProfileWrapper>
	);
};
