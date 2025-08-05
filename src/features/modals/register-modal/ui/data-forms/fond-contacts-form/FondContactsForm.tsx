import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { formatPhone } from '@/shared/lib';
import { Input } from '@/shared/ui';

import s from '../data-forms.module.scss';

interface IFondContactsForm {
	control: Control<FieldValues>;
}

export const FondContactsForm: FC<IFondContactsForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<p>Контакты фонда</p>
			<div className={s.inputsCol}>
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
				{/* <Controller
					control={control}
					name='phone_helpdesk'
					rules={{ required: true }}
					render={({ field: { value, onChange } }) => {
						return (
							<Input
								title='Номер телефона поддержки'
								req
								value={value}
								onAccept={(value: string) => onChange(formatPhone(value, false))}
								mask='+{7} (000) 000-00-00'
								placeholder='+7'
							/>
						);
					}}
				/> */}
				{/* <Controller
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
								placeholder='Укажите адрес электронной почты'
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name='site'
					rules={{ required: true }}
					render={({ field: { value, onChange } }) => {
						return (
							<Input
								mask={/^[^\s]*$/}
								title='Сайт'
								req
								value={value}
								onAccept={(value: string) => onChange(value)}
								placeholder='www.'
							/>
						);
					}}
				/> */}
			</div>
		</div>
	);
};
