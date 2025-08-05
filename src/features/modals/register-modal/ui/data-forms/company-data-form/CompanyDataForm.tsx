import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Input, Textarea } from '@/shared/ui';

import s from '../data-forms.module.scss';

interface ICompanyDataForm {
	control: Control<FieldValues>;
}

export const CompanyDataForm: FC<ICompanyDataForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<p>Данные компании</p>
			<Controller
				control={control}
				name='name'
				rules={{ required: true }}
				render={({ field: { onChange } }) => {
					return (
						<Input
							mask={/^.*$/}
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
					name='description'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return <Textarea placeholder='Введите' onChange={onChange} />;
					}}
				/>
			</div>
		</div>
	);
};
