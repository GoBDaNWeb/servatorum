import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Input } from '@/shared/ui';

import s from '../profile-settings.module.scss';

interface IPasswordForm {
	control: Control<FieldValues>;
}
export const PasswordForm: FC<IPasswordForm> = ({ control }) => {
	return (
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
	);
};
