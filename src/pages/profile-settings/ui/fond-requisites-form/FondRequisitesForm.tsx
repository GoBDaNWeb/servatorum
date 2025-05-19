import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Input } from '@/shared/ui';

import s from '../profile-settings.module.scss';

interface IFondRequisitesForm {
	control: Control<FieldValues>;
}

export const FondRequisitesForm: FC<IFondRequisitesForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>Реквизиты фонда</p>
				</div>
			</div>
			<div className={s.inputsBlock}>
				<div className={s.inputWrapper}>
					<p>ИНН</p>
					<Controller
						control={control}
						name='inn'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return (
								<Input
									mask='0000000000'
									placeholder='Введите'
									req
									onAccept={(value: string) => onChange(value)}
								/>
							);
						}}
					/>
				</div>
				<div className={s.inputWrapper}>
					<p>КПП</p>
					<Controller
						control={control}
						name='kpp'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return (
								<Input
									mask='0000000000'
									placeholder='Введите'
									req
									onAccept={(value: string) => onChange(value)}
								/>
							);
						}}
					/>
				</div>
				<div className={s.inputWrapper}>
					<p>Счет №</p>
					<Controller
						control={control}
						name='accountNumber'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return (
								<Input
									mask='00000000000000000000'
									placeholder='Введите'
									req
									onAccept={(value: string) => onChange(value)}
								/>
							);
						}}
					/>
				</div>
				<div className={s.inputWrapper}>
					<p>К/с №</p>
					<Controller
						control={control}
						name='ks'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return (
								<Input
									mask='00000000000000000000'
									placeholder='Введите'
									req
									onAccept={(value: string) => onChange(value)}
								/>
							);
						}}
					/>
				</div>
				<div className={s.inputWrapper}>
					<p>БИК</p>
					<Controller
						control={control}
						name='bik'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return (
								<Input
									mask='000000000'
									placeholder='Введите'
									req
									onAccept={(value: string) => onChange(value)}
								/>
							);
						}}
					/>
				</div>
				<div className={s.inputWrapper}>
					<p>Юридический адрес</p>
					<Controller
						control={control}
						name='legalAddress'
						rules={{ required: true }}
						render={({ field: { onChange } }) => {
							return (
								<Input
									mask={/^.*$/}
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
