import { FC, useEffect, useState } from 'react';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import { useTypedSelector } from '@/shared/lib';
import { Button, Checkbox, FemaleIcon, Input, MaleIcon, Photo } from '@/shared/ui';

import s from './user-data-register.module.scss';

import 'air-datepicker/air-datepicker.css';

interface IUserDataRegister {
	nextStep: () => void;
}

export const UserDataRegister: FC<IUserDataRegister> = ({ nextStep }) => {
	const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

	const {
		registerInfo: { phone }
	} = useTypedSelector(store => store.registerModal);

	const { watch, setValue, handleSubmit, control } = useForm<FieldValues>({
		defaultValues: {
			firstName: '',
			middleName: '',
			lastName: '',
			address: '',
			gender: '0',
			date: '',
			phone,
			email: ''
		}
	});
	const onSubmit: SubmitHandler<FieldValues> = data => {
		nextStep();
		console.log(data);
	};

	const handleClearAddress = () => {
		setValue('address', '');
	};

	useEffect(() => {
		const { unsubscribe } = watch(value => {
			const emptyValues = Object.values(value).filter(val => {
				return val.length === 0;
			});
			if (emptyValues) {
				if (!emptyValues.length) {
					setButtonIsDisabled(false);
				} else {
					setButtonIsDisabled(true);
				}
			}
		});
		return () => unsubscribe();
	}, [watch]);

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
										mask='00.00.0000'
										placeholder='Введите'
										title='Дата рождения'
										req
										onChange={onChange}
										icon={<img src='/images/calendar.svg' alt='' />}
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
						name='address'
						rules={{ required: true }}
						render={({ field: { value, onChange } }) => {
							return (
								<Input
									placeholder='Введите'
									title='Адрес регистрации'
									isСleaned
									req
									onChange={onChange}
									value={value}
									clear={handleClearAddress}
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
												onChange={onChange}
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
												mask='******************************'
												title='Электронная почта'
												req
												value={value}
												onChange={onChange}
												placeholder='Введите'
												maskOptions={{
													definitions: {
														'*': /^\S*@?\S*$/ // Разрешаем только буквы
													}
												}}
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
				<Photo className={s.photoSelect} />
				<Checkbox name='phoneCheck'>
					Я соглашаюсь на обработку{' '}
					<a href='#' target='_blank'>
						Персональных данных
					</a>
				</Checkbox>
				<Button
					type='submit'
					variant='primary'
					className={s.submitBtn}
					isDisabled={buttonIsDisabled}
				>
					Продолжить
				</Button>
			</form>
		</div>
	);
};
