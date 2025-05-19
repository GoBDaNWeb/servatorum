import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Input } from '@/shared/ui';

import s from '../profile-settings.module.scss';

interface IFondContactsForm {
	control: Control<FieldValues>;
}

export const FondContactsForm: FC<IFondContactsForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>Контакты фонда</p>
				</div>
			</div>
			<div className={s.inputsBlock}>
				<div className={s.inputWrapper}>
					<p>Телефон</p>
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
				</div>
				<div className={s.inputWrapper}>
					<p>E-mail</p>
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
									placeholder='Укажите адрес электронной почты'
								/>
							);
						}}
					/>
				</div>
				<div className={s.inputWrapper}>
					<p>Сайт</p>
					<Controller
						control={control}
						name='site'
						rules={{ required: true }}
						render={({ field: { value, onChange } }) => {
							return (
								<Input
									mask={/^[^\s]*$/}
									req
									value={value}
									onAccept={(value: string) => onChange(value)}
									placeholder='www.'
								/>
							);
						}}
					/>
				</div>
			</div>
		</div>
	);
};
