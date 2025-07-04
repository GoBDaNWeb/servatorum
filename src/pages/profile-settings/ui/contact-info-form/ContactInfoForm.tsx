import { FC } from 'react';
import { Control, Controller, FieldValues } from 'react-hook-form';

import { Checkbox, Input } from '@/shared/ui';

import s from '../profile-settings.module.scss';

interface IContactInfoForm {
	control: Control<FieldValues>;
}

export const ContactInfoForm: FC<IContactInfoForm> = ({ control }) => {
	return (
		<div className={s.dataBlock}>
			<div className={s.titleBlock}>
				<div className='sticky-block'>
					<p className={s.title}>Контактные данные</p>
				</div>
			</div>
			<div className={s.inputsBlock}>
				<div className={s.inputWrapper}>
					<p>Адрес регистрации</p>
					<Controller
						control={control}
						name='city'
						rules={{ required: true }}
						render={({ field: { value, onChange } }) => {
							return (
								<Input
									mask={/^.*$/}
									placeholder='Введите'
									req
									value={value}
									onAccept={(value: string) => onChange(value)}
								/>
							);
						}}
					/>
				</div>
				<div className={s.inputWrapper}>
					<p>Телефон</p>
					<div className={s.inputHintWrapper}>
						<div className={s.inputHint}>
							<div className={s.inputContentWrapper}>
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
								<p className={s.success}>Подтвержден</p>
							</div>

							<p className={s.hint}>
								При изменении на новый номер будет отправлен код подтверждения
							</p>
						</div>
						<Checkbox name='phoneCheck'>
							Можно использовать для связи администрации со мной
						</Checkbox>
					</div>
				</div>
				<div className={s.inputWrapper}>
					<p>Электронная почта</p>
					<div className={s.inputHintWrapper}>
						<div className={s.inputHint}>
							<div className={s.inputContentWrapper}>
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
												placeholder='Введите'
											/>
										);
									}}
								/>
							</div>

							<p className={s.hint}>
								При изменении на новый номер будет отправлен код подтверждения
							</p>
						</div>
						<Checkbox name='phoneCheck'>
							Можно использовать для связи администрации со мной
						</Checkbox>
					</div>
				</div>
			</div>
		</div>
	);
};
