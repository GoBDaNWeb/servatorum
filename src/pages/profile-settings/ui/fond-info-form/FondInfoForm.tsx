import { FC } from 'react';
import { Control, Controller, FieldValues, UseFormSetValue } from 'react-hook-form';

import { Input, Photo, Textarea } from '@/shared/ui';

import s from '../profile-settings.module.scss';

interface IFondInfoForm {
	control: Control<FieldValues>;
	setValue: UseFormSetValue<FieldValues>;
}

export const FondInfoForm: FC<IFondInfoForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>Данные фонда</p>
					<Photo className={s.photoSelect} size='m' />
				</div>
			</div>
			<div className={s.inputsBlock}>
				<div className={s.inputWrapper}>
					<p>Наименование</p>
					<Controller
						control={control}
						name='fondName'
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
					<p>Информация</p>
					<Controller
						control={control}
						name='fondInfo'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return <Textarea placeholder='Введите' onChange={onChange} />;
						}}
					/>
				</div>
			</div>
		</div>
	);
};
