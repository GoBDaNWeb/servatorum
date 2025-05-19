import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Input } from '@/shared/ui';

import s from '../profile-settings.module.scss';

interface IAdminNameForm {
	control: Control<FieldValues>;
}

export const AdminNameForm: FC<IAdminNameForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>ФИО администратора</p>
				</div>
			</div>
			<div className={s.inputsBlock}>
				<div className={s.inputWrapper}>
					<p>Фамилия</p>
					<Controller
						control={control}
						name='lastName'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return (
								<Input
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
						render={({ field: { onChange } }) => {
							return (
								<Input
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
						render={({ field: { onChange } }) => {
							return (
								<Input
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
	);
};
