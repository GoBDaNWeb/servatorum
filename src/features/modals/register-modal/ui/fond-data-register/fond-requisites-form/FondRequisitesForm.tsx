import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Input } from '@/shared/ui';

import s from '../fond-data-register.module.scss';

interface IFondRequisitesForm {
	control: Control<FieldValues>;
}

export const FondRequisitesForm: FC<IFondRequisitesForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<p>Реквизиты фонда</p>
			<div className={s.inputsCol}>
				{/* <Controller
					control={control}
					name='accountName'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask={/^[A-Za-zА-Яа-яЁё]*$/}
								placeholder='Введите'
								title='Название счета'
								onAccept={(value: string) => onChange(value)}
							/>
						);
					}}
				/> */}
				<Controller
					control={control}
					name='inn'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask='0000000000'
								placeholder='Введите'
								title='ИНН'
								req
								onAccept={(value: string) => onChange(value)}
							/>
						);
					}}
				/>
				{/* <Controller
					control={control}
					name='kpp'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask='0000000000'
								placeholder='Введите'
								title='КПП'
								req
								onAccept={(value: string) => onChange(value)}
							/>
						);
					}}
				/> */}
				<Controller
					control={control}
					name='cor_account'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask='00000000000000000000'
								placeholder='Введите'
								title='Счет №'
								req
								onAccept={(value: string) => onChange(value)}
							/>
						);
					}}
				/>
				{/* <Controller
					control={control}
					name='ks'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask='00000000000000000000'
								placeholder='Введите'
								title='К/с'
								req
								onAccept={(value: string) => onChange(value)}
							/>
						);
					}}
				/> */}
				<Controller
					control={control}
					name='bik'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask='000000000'
								placeholder='Введите'
								title='БИК'
								req
								onAccept={(value: string) => onChange(value)}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name='address'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask={/^.*$/}
								placeholder='Введите'
								title='Адрес'
								req
								onAccept={(value: string) => onChange(value)}
							/>
						);
					}}
				/>
				<Controller
					control={control}
					name='address_reg'
					rules={{ required: true }}
					render={({ field: { onChange } }) => {
						return (
							<Input
								mask={/^.*$/}
								placeholder='Введите'
								title='Юридический адрес'
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
