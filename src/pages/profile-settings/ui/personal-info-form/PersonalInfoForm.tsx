import { FC } from 'react';
import { Control, Controller, FieldValues, UseFormSetValue } from 'react-hook-form';

import { useAirDatePicker } from '@/shared/lib';
import { Checkbox, FemaleIcon, Input, MaleIcon, Photo } from '@/shared/ui';

import s from '../profile-settings.module.scss';

interface IPersonalInfoForm {
	control: Control<FieldValues>;
	setValue: UseFormSetValue<FieldValues>;
}

export const PersonalInfoForm: FC<IPersonalInfoForm> = ({ control, setValue }) => {
	const { datepickerRef } = useAirDatePicker({ setValue, setValueLabel: 'date' });

	return (
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
						name='last_name'
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
						name='first_name'
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
						name='surname'
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
							render={({ field: { value, onChange } }) => {
								return (
									<Checkbox
										name='gender'
										value1='Мужской'
										value2='Женский'
										value={value}
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
							name='date_of_birth'
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
	);
};
