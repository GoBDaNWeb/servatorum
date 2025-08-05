import { FC, useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { formatPhone, useAirDatePicker, useTypedSelector } from '@/shared/lib';
import { type TypeUserSchema, userSchema } from '@/shared/schemas';
import { IUser, UserDirection } from '@/shared/types';
import { Button, Checkbox, FemaleIcon, Input, MaleIcon, useUploadPhoto } from '@/shared/ui';

import s from './user-data-register.module.scss';

import { zodResolver } from '@hookform/resolvers/zod';

interface IUserDataRegister {
	nextStep: () => void;
	phoneValue: string;
	userDirection: UserDirection;
	setUser: (user: IUser) => void;
}

export const UserDataRegister: FC<IUserDataRegister> = ({
	nextStep,
	userDirection,
	phoneValue,
	setUser
}) => {
	const { tempUser } = useTypedSelector(store => store.user);

	const {
		setValue,
		handleSubmit,
		control,
		formState: { isValid }
	} = useForm<TypeUserSchema>({
		resolver: zodResolver(userSchema),
		defaultValues: {
			first_name: tempUser?.first_name ? tempUser.first_name : '',
			surname: '',
			last_name: tempUser?.last_name ? tempUser.last_name : '',
			city: '',
			gender: tempUser?.gender ? tempUser.gender : 'Мужской',
			date_of_birth: '',
			phone: tempUser?.phone ? formatPhone(tempUser.phone, false) : formatPhone(phoneValue, false),
			email: tempUser?.email ? tempUser.email : '',
			role: userDirection,
			profile_picture: ''
		}
	});
	const { imageUrl } = useUploadPhoto();

	useEffect(() => {
		setValue('profile_picture', imageUrl);
	}, [imageUrl]);

	const { datepickerRef, closeDatepicker } = useAirDatePicker({
		setValue,
		setValueLabel: 'date_of_birth'
	});

	const onSubmit: SubmitHandler<TypeUserSchema> = async data => {
		try {
			console.log('data', data);
			setUser({ ...data, spheres: [] });
			nextStep();
		} catch (e) {
			console.error('Ошибка при регистрации:', e);
		}
	};

	const handleClearCity = () => {
		setValue('city', '');
	};

	useEffect(() => {
		const modalWrapper = document.querySelector('.modal-content-wrapper');
		modalWrapper?.addEventListener('scroll', closeDatepicker);
		return () => {
			modalWrapper?.removeEventListener('scroll', closeDatepicker);
		};
	}, []);

	return (
		<div className={s.userDataRegister}>
			<p className={s.title}>Ваши данные</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={s.inputs}>
					<div className={s.inputsCol}>
						<Controller
							control={control}
							name='last_name'
							rules={{ required: true }}
							render={({ field: { onChange, value } }) => {
								return (
									<Input
										mask={/^[A-Za-zА-Яа-яЁё]*$/}
										placeholder='Введите'
										title='Фамилия'
										req
										value={value}
										onAccept={(value: string) => onChange(value)}
									/>
								);
							}}
						/>
						<Controller
							control={control}
							name='first_name'
							rules={{ required: true }}
							render={({ field: { onChange, value } }) => {
								return (
									<Input
										mask={/^[A-Za-zА-Яа-яЁё]*$/}
										placeholder='Введите'
										title='Имя'
										req
										value={value}
										onAccept={(value: string) => onChange(value)}
									/>
								);
							}}
						/>
						<Controller
							control={control}
							name='surname'
							rules={{ required: true }}
							render={({ field: { onChange } }) => {
								return (
									<Input
										mask={/^[A-Za-zА-Яа-яЁё]*$/}
										placeholder='Введите'
										title='Отчество'
										req
										onAccept={(value: string) => onChange(value)}
									/>
								);
							}}
						/>
					</div>
					<div className={s.inputsRow}>
						<Controller
							control={control}
							name='date_of_birth'
							rules={{ required: true }}
							render={({ field: { onChange, value } }) => {
								return (
									<Input
										placeholder='Введите'
										title='Дата рождения'
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
						<Controller
							control={control}
							name='gender'
							rules={{ required: true }}
							render={({ field: { onChange } }) => {
								return (
									<Checkbox
										name='gender'
										title='Пол'
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
					<Controller
						control={control}
						name='city'
						rules={{ required: true }}
						render={({ field: { value, onChange } }) => {
							return (
								<Input
									mask={/^.*$/}
									placeholder='Введите'
									title='Адрес регистрации'
									req
									value={value}
									onAccept={(value: string) => onChange(value)}
									clear={handleClearCity}
								/>
							);
						}}
					/>
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
												title='Номер телефона'
												req
												value={value}
												onAccept={(value: string) => onChange(formatPhone(value, false))}
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
						{/* <Checkbox name='phoneCheck'>
							Можно использовать для связи администрации со мной
						</Checkbox> */}
					</div>
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
												title='Электронная почта'
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

						{/* <Checkbox name='phoneCheck'>
							Можно использовать для связи администрации со мной
						</Checkbox> */}
					</div>
				</div>
				{/* <UploadPhoto className={s.photoSelect} onChange={handleUploadImage} /> */}
				{/* <Checkbox name='phoneCheck'>
					Я соглашаюсь на обработку
					<a href='#' target='_blank'>
						Персональных данных
					</a>
				</Checkbox> */}
				<Button type='submit' variant='primary' className={s.submitBtn} isDisabled={!isValid}>
					Продолжить
				</Button>
			</form>
		</div>
	);
};
