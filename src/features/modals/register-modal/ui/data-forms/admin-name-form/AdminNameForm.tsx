import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Input } from '@/shared/ui';

import s from '../data-forms.module.scss';

interface IAdminNameForm {
	control: Control<FieldValues>;
}

export const AdminNameForm: FC<IAdminNameForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<p>ФИО администратора компании</p>
			<div className={s.inputsCol}>
				<Controller
					control={control}
					name='administrator_surname'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask={/^[A-Za-zА-Яа-яЁё]*$/}
								placeholder='Введите'
								title='Фамилия'
								req
								onAccept={(value: string) => onChange(value)}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name='administrator_name'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask={/^[A-Za-zА-Яа-яЁё]*$/}
								placeholder='Введите'
								title='Имя'
								req
								onAccept={(value: string) => onChange(value)}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name='administrator_lastname'
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
		</div>
	);
};
