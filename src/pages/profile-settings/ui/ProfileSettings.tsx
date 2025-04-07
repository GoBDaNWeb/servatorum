import { useEffect, useRef, useState } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import AirDatepicker from 'air-datepicker';
import clsx from 'clsx';

import { ProfileWrapper } from '@/widgets/profile-wrapper';

import { setOpenModal } from '@/features/delete-account-modal';

import { Button, Checkbox, Chip, CloseIcon, FemaleIcon, Input, MaleIcon, Photo } from '@/shared/ui';

import { chips, crumbs } from '../config';

import s from './profile-settings.module.scss';

import 'air-datepicker/air-datepicker.css';

export const ProfileSettings = () => {
	const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

	const dispatch = useDispatch();

	const handleCategoryChange = (value: string) => {
		setSelectedCategory(prev =>
			prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
		);
	};

	const datepickerRef = useRef(null);

	const { handleSubmit, control, setValue } = useForm<FieldValues>({
		defaultValues: {
			lastName: 'Елизарова',
			firstName: 'Светлана',
			middleName: 'Сергеевна',
			date: '13.07.1993'
		}
	});
	const onSubmit: SubmitHandler<FieldValues> = data => {
		console.log(data);
	};
	const handleOpenDeleteAccountModal = () => {
		dispatch(setOpenModal(true));
	};
	useEffect(() => {
		if (datepickerRef?.current) {
			const datepicker = new AirDatepicker(datepickerRef.current, {
				dateFormat: 'dd.MM.yyyy',
				autoClose: true,
				onSelect: data => {
					setValue('date', data.formattedDate);
				}
			});
			return () => {
				datepicker.destroy();
			};
		}
	}, []);

	return (
		<ProfileWrapper crumbs={crumbs} title='Настройки профиля' className={s.profileSettings}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={s.dataBlock}>
					<div className={s.titleBlock}>
						<div className='sticky-block'>
							<p className={s.title}>Личные данные</p>
							<Photo className={s.photoSelect} size='m' />
						</div>
					</div>
					<div className={s.inputsBlock}>
						<div className={s.inputWrapper}>
							<p>Фамилия</p>
							<Controller
								control={control}
								name='lastName'
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => {
									return (
										<Input
											value={value}
											mask={/^[A-Za-zА-Яа-яЁё]*$/}
											placeholder='Введите'
											req
											onAccept={(value: string) => onChange(value)}
										/>
									);
								}}
							/>
						</div>
						<div className={s.inputWrapper}>
							<p>Имя</p>
							<Controller
								control={control}
								name='firstName'
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => {
									return (
										<Input
											value={value}
											mask={/^[A-Za-zА-Яа-яЁё]*$/}
											placeholder='Введите'
											req
											onAccept={(value: string) => onChange(value)}
										/>
									);
								}}
							/>
						</div>
						<div className={s.inputWrapper}>
							<p>Отчество</p>
							<Controller
								control={control}
								name='middleName'
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => {
									return (
										<Input
											value={value}
											mask={/^[A-Za-zА-Яа-яЁё]*$/}
											placeholder='Введите'
											req
											onAccept={(value: string) => onChange(value)}
										/>
									);
								}}
							/>
						</div>
						<div className={s.inputWrapper}>
							<p>Пол</p>
							<div className={s.genderInput}>
								<Controller
									control={control}
									name='gender'
									rules={{ required: true }}
									render={({ field: { onChange } }) => {
										return (
											<Checkbox
												name='gender'
												value1='Мужской'
												value2='Женский'
												icon1={<MaleIcon />}
												icon2={<FemaleIcon />}
												isToggler
												onChange={onChange}
											/>
										);
									}}
								/>
							</div>
						</div>
						<div className={s.inputWrapper}>
							<p>Дата рождения</p>
							<div className={s.dateInput}>
								<Controller
									control={control}
									name='date'
									rules={{ required: true }}
									render={({ field: { onChange, value } }) => {
										return (
											<Input
												placeholder='Введите'
												req
												value={value}
												onAccept={(value: string) => onChange(value)}
												mask={Date}
												inputRef={datepickerRef}
												min={new Date(1900, 0, 1)}
												max={new Date(2026, 0, 1)}
												icon={<img src='/images/icons/calendar.svg' alt='' />}
											/>
										);
									}}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={s.dataBlock}>
					<div className={s.titleBlock}>
						<div className='sticky-block'>
							<p className={s.title}>Контактные данные</p>
						</div>
					</div>
					<div className={s.inputsBlock}>
						<div className={s.inputWrapper}>
							<p>Адрес регистрации</p>
							<Controller
								control={control}
								name='address'
								rules={{ required: true }}
								render={({ field: { value, onChange } }) => {
									return (
										<Input
											mask={/^[A-Za-zА-Яа-яЁё]*$/}
											placeholder='Введите'
											req
											value={value}
											onAccept={(value: string) => onChange(value)}
										/>
									);
								}}
							/>
						</div>
						<div className={s.inputWrapper}>
							<p>Телефон</p>
							<div className={s.inputHintWrapper}>
								<div className={s.inputHint}>
									<div className={s.inputContentWrapper}>
										<Controller
											control={control}
											name='phone'
											rules={{ required: true }}
											render={({ field: { value, onChange } }) => {
												return (
													<Input
														req
														value={value}
														onAccept={(value: string) => onChange(value)}
														mask='+{7} (000) 000-00-00'
														placeholder='+7'
													/>
												);
											}}
										/>
										<p className={s.success}>Подтвержден</p>
									</div>

									<p className={s.hint}>
										При изменении на новый номер будет отправлен код подтверждения
									</p>
								</div>
								<Checkbox name='phoneCheck'>
									Можно использовать для связи администрации со мной
								</Checkbox>
							</div>
						</div>
						<div className={s.inputWrapper}>
							<p>Электронная почта</p>
							<div className={s.inputHintWrapper}>
								<div className={s.inputHint}>
									<div className={s.inputContentWrapper}>
										<Controller
											control={control}
											name='email'
											rules={{ required: true }}
											render={({ field: { value, onChange } }) => {
												return (
													<Input
														mask={/^\S*@?\S*$/}
														req
														value={value}
														onAccept={(value: string) => onChange(value)}
														placeholder='Введите'
													/>
												);
											}}
										/>
									</div>

									<p className={s.hint}>
										При изменении на новый номер будет отправлен код подтверждения
									</p>
								</div>
								<Checkbox name='phoneCheck'>
									Можно использовать для связи администрации со мной
								</Checkbox>
							</div>
						</div>
					</div>
				</div>
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
				<div className={s.dataBlock}>
					<div className={s.titleBlock}>
						<div className='sticky-block'>
							<p className={s.title}>Изменить пароль</p>
						</div>
					</div>
					<div className={s.inputsBlock}>
						<div className={s.inputWrapper}>
							<p>Старый пароль</p>
							<Controller
								control={control}
								name='old-password'
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => {
									return (
										<Input
											value={value}
											mask={/^[A-Za-zА-Яа-яЁё]*$/}
											placeholder='Введите'
											req
											onAccept={(value: string) => onChange(value)}
										/>
									);
								}}
							/>
						</div>
						<div className={s.inputWrapper}>
							<p>Новый пароль</p>
							<Controller
								control={control}
								name='new-password'
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => {
									return (
										<Input
											value={value}
											mask={/^[A-Za-zА-Яа-яЁё]*$/}
											placeholder='Введите'
											req
											onAccept={(value: string) => onChange(value)}
										/>
									);
								}}
							/>
						</div>
						<div className={s.inputWrapper}>
							<p>Повторите новый пароль</p>
							<Controller
								control={control}
								name='repeat-new-passord'
								rules={{ required: true }}
								render={({ field: { onChange, value } }) => {
									return (
										<Input
											value={value}
											mask={/^[A-Za-zА-Яа-яЁё]*$/}
											placeholder='Введите'
											req
											onAccept={(value: string) => onChange(value)}
										/>
									);
								}}
							/>
						</div>
					</div>
				</div>
				<div className={s.dataBlock}>
					<div className={s.titleBlock}>
						<div className='sticky-block'>
							<p className={s.title}>Сферы помощи</p>
							<Button variant='clear' className={s.resetBtn}>
								<CloseIcon />
								Сбросить все
							</Button>
						</div>
					</div>
					<div className={s.chipsBlock}>
						<div className={s.chipsList}>
							{chips.map(chip => (
								<Chip
									type='checkbox'
									name='filters'
									key={chip}
									value={chip}
									checked={selectedCategory.includes(chip)}
									onChange={handleCategoryChange}
									size='s'
								>
									{chip}
								</Chip>
							))}
						</div>
						<Button variant='primary' size='xs'>
							Показать все
						</Button>
					</div>
				</div>
				<div className={clsx(s.dataBlock, s.dataBlockBottom)}>
					<Button variant='primary' size='s' isDisabled>
						Сохранить изменения
					</Button>
					<Button variant='text' className={s.deleteBtn} onClick={handleOpenDeleteAccountModal}>
						<CloseIcon />
						Удалить аккаунт
					</Button>
				</div>
			</form>
		</ProfileWrapper>
	);
};
