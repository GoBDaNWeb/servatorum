import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Input, Textarea } from '@/shared/ui';

import s from '../fond-data-register.module.scss';

interface ICompanyDataForm {
	control: Control<FieldValues>;
}

export const CompanyDataForm: FC<ICompanyDataForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<p>Данные компании</p>
			<Controller
				control={control}
				name='fondName'
				rules={{ required: true }}
				render={({ field: { onChange } }) => {
					return (
						<Input
							mask={/^[A-Za-zА-Яа-яЁё]*$/}
							placeholder='Введите'
							title='Наименование компании'
							req
							onAccept={(value: string) => onChange(value)}
						/>
					);
				}}
			/>
			<div className={s.textAreaWrapper}>
				<p>Информация о фонде</p>
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
	);
};
