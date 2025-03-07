import { FC } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useTypedSelector } from '@/shared/lib';
import { Button, Checkbox, FemaleIcon, Input, MaleIcon } from '@/shared/ui';

import s from './user-data-register.module.scss';

import 'air-datepicker/air-datepicker.css';

interface IUserDataRegister {
	nextStep: () => void;
}

export const UserDataRegister: FC<IUserDataRegister> = () => {
	const {
		registerInfo: { phone }
	} = useTypedSelector(store => store.registerModal);

	const { handleSubmit, control } = useForm<FieldValues>({
		defaultValues: {
			firstName: '',
			middleName: '',
			lastName: '',
			address: '',
			gender: '',
			date: '',
			phone,
			email: ''
		}
	});
	const onSubmit: SubmitHandler<FieldValues> = data => {
		// nextStep();
		console.log(data);
	};

	return (
		<div className={s.userDataRegister}>
			<p className={s.title}>Ваши данные</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className={s.inputs}>
					<div className={s.inputsCol}>
						<Controller
							control={control}
							name='lastName'
							rules={{ required: true }}
							render={({ field: { onChange } }) => {
								return (
									<Input
										mask='******************************'
										placeholder='Введите'
										title='Фамилия'
										req
										onChange={onChange}
										maskOptions={{
											definitions: {
												'*': /[A-Za-zА-Яа-яЁё]/ // Разрешаем только буквы
											}
										}}
									/>
								);
							}}
						/>
						<Controller
							control={control}
							name='firstName'
							rules={{ required: true }}
							render={({ field: { onChange } }) => {
								return (
									<Input
										mask='******************************'
										placeholder='Введите'
										title='Имя'
										req
										onChange={onChange}
										maskOptions={{
											definitions: {
												'*': /[A-Za-zА-Яа-яЁё]/ // Разрешаем только буквы
											}
										}}
									/>
								);
							}}
						/>
						<Controller
							control={control}
							name='middleName'
							rules={{ required: true }}
							render={({ field: { onChange } }) => {
								return (
									<Input
										mask='******************************'
										placeholder='Введите'
										title='Отчество'
										req
										onChange={onChange}
										maskOptions={{
											definitions: {
												'*': /[A-Za-zА-Яа-яЁё]/ // Разрешаем только буквы
											}
										}}
									/>
								);
							}}
						/>
					</div>
					<div className={s.inputsRow}>
						<Controller
							control={control}
							name='date'
							rules={{ required: true }}
							render={({ field: { onChange } }) => {
								return (
									<Input
										placeholder='Введите'
										title='Дата рождения'
										req
										onChange={onChange}
										icon={<img src='/images/calendar.svg' alt='' />}
										isCalendar
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
				</div>
				<Button type='submit' variant='primary'>
					Продолжить
				</Button>
			</form>
		</div>
	);
};
