import { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { Sort } from '@/features/sort';

import { useAirDatePicker } from '@/shared/lib';
import { BillingButton, BillingInfo, Button, Image, Input, useModal } from '@/shared/ui';

import { crumbs, donations, sortList } from '../config';

import s from './profile-wallet.module.scss';

export const ProfileWallet = () => {
	const { open } = useModal();
	const [selectedSort, setSelectedSort] = useState(sortList[0]);
	const { watch, setValue, handleSubmit, control } = useForm<FieldValues>({
		defaultValues: {
			fromDate: '',
			toDate: ''
		}
	});
	const datepickerFromRef = useAirDatePicker({ setValue, setValueLabel: 'fromDate' });
	const datepickerToRef = useAirDatePicker({ setValue, setValueLabel: 'toDate' });

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
			<BillingInfo />
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
				<div className={s.dateWrapper}>
					<p>Период:</p>
					<div className={s.dateList}>
						<Input
							setValue={setValue}
							isDate
							placeholder='Введите'
							inputRef={datepickerFromRef}
							mask={Date}
							min={new Date(1900, 0, 1)}
							max={new Date(2026, 0, 1)}
							icon={<img src='/images/icons/calendar.svg' alt='' />}
							className={s.input}
						/>
						<div className={s.separator}>—</div>
						<Input
							setValue={setValue}
							isDate
							placeholder='Введите'
							inputRef={datepickerToRef}
							mask={Date}
							min={new Date(1900, 0, 1)}
							max={new Date(2026, 0, 1)}
							icon={<img src='/images/icons/calendar.svg' alt='' />}
							className={s.input}
						/>
					</div>
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
